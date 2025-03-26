import React, { useState, useEffect, useRef } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  radius: number;
  layer: number;
  activation: number; // 0 to 1 value representing neuron activation
  lastActivated: number; // Timestamp when last activated by mouse
  isHovered: boolean; // Track hover state
  pulsePhase: number; // For independent pulsing animation
}

interface Link {
  source: number;
  target: number;
  visible: boolean;
  weight: number; // Simulated weight of connection
  fadeOutStart: number; // Timestamp when link started to fade out
}

const GraphBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [nodes, setNodes] = useState<Node[]>([]);
  const [links, setLinks] = useState<Link[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePresent = useRef<boolean>(false);
  const lastFrameTime = useRef<number>(Date.now());

  // Generate neural network structure
  useEffect(() => {
    const generateNeuralNetwork = () => {
      const width = containerRef.current?.clientWidth || window.innerWidth;
      const height = containerRef.current?.clientHeight || 500;
      
      // Create layers (input, hidden layers, output)
      const layerCount = 4;
      const nodesPerLayer = [5, 15, 15, 5]; // Keep the original node distribution
      const generatedNodes: Node[] = [];
      const generatedLinks: Link[] = [];
      
      let nodeId = 0;
      
      // Generate nodes for each layer
      for (let layer = 0; layer < layerCount; layer++) {
        const layerWidth = width * 1; // Use 80% of width for better spread
        const layerStartX = width * 0.01; // 10% margin on each side
        const layerY = height * 0.15 + (height * 0.7 * layer / (layerCount - 1));
        
        // Generate nodes for this layer
        for (let i = 0; i < nodesPerLayer[layer]; i++) {
          // Position nodes evenly across layer
          const nodeSpacing = layerWidth / (nodesPerLayer[layer] + 1);
          const x = layerStartX + nodeSpacing * (i + 1);
          
          // Add some randomness to y position for more organic feel
          const yVariation = height * 0.05;
          const y = layerY + (Math.random() * yVariation * 2 - yVariation);
          
          generatedNodes.push({
            id: nodeId,
            x,
            y,
            radius: Math.random() * 4 + 3, // Random radius between 3 and 7
            layer,
            activation: 0.05, // Start with minimal activation
            lastActivated: 0,
            isHovered: false,
            pulsePhase: Math.random() * Math.PI * 2, // Random starting phase for pulse
          });
          
          nodeId++;
        }
      }
      
      // Create connections between layers
      for (let layer = 0; layer < layerCount - 1; layer++) {
        const currentLayerNodes = generatedNodes.filter(node => node.layer === layer);
        const nextLayerNodes = generatedNodes.filter(node => node.layer === layer + 1);
        
        // Connect each node in current layer to some nodes in next layer
        currentLayerNodes.forEach(sourceNode => {
          // Connect to about 50-80% of nodes in next layer for more connections
          const connectionCount = Math.floor(Math.random() * 0.3 * nextLayerNodes.length + 0.5 * nextLayerNodes.length);
          
          // Randomly choose target nodes
          const targetIndices = new Set<number>();
          while (targetIndices.size < connectionCount) {
            targetIndices.add(Math.floor(Math.random() * nextLayerNodes.length));
          }
          
          // Create links to selected target nodes
          targetIndices.forEach(targetIndex => {
            generatedLinks.push({
              source: sourceNode.id,
              target: nextLayerNodes[targetIndex].id,
              visible: false, // All links hidden by default until mouse moves near
              weight: Math.random() * 2 - 1, // Random weight between -1 and 1
              fadeOutStart: 0, // No fade out initially
            });
          });
        });
      }
      
      // Add some cross-layer connections for more responsiveness
      const skipConnectionCount = Math.floor(generatedNodes.length * 0.1); // 10% of total nodes
      for (let i = 0; i < skipConnectionCount; i++) {
        const sourceLayer = Math.floor(Math.random() * (layerCount - 2));
        const targetLayer = sourceLayer + 2 + Math.floor(Math.random() * (layerCount - sourceLayer - 2));
        
        if (targetLayer >= layerCount) continue;
        
        const sourceNodes = generatedNodes.filter(node => node.layer === sourceLayer);
        const targetNodes = generatedNodes.filter(node => node.layer === targetLayer);
        
        if (sourceNodes.length === 0 || targetNodes.length === 0) continue;
        
        const sourceNode = sourceNodes[Math.floor(Math.random() * sourceNodes.length)];
        const targetNode = targetNodes[Math.floor(Math.random() * targetNodes.length)];
        
        generatedLinks.push({
          source: sourceNode.id,
          target: targetNode.id,
          visible: false,
          weight: Math.random() * 2 - 1,
          fadeOutStart: 0,
        });
      }

      setNodes(generatedNodes);
      setLinks(generatedLinks);
    };

    if (containerRef.current) {
      generateNeuralNetwork();
    } else {
      // If the ref isn't available yet, wait for next tick
      const timer = setTimeout(generateNeuralNetwork, 0);
      return () => clearTimeout(timer);
    }
  }, []);

  // Animate network using requestAnimationFrame for smoother transitions
  useEffect(() => {
    let animationFrameId: number;
    
    const animate = () => {
      const now = Date.now();
      const deltaTime = now - lastFrameTime.current;
      lastFrameTime.current = now;
      
      // Apply network activation based on current mouse position
      if (mousePresent.current && deltaTime < 1000) { // Skip if over 1 second has passed (tab was inactive)
        const mouseX = mousePosition.x;
        const mouseY = mousePosition.y;
        const mouseActivationRadius = 250; // Very large radius of mouse influence
        const hoverRadius = 20; // Radius for hover detection
        
        setNodes(prevNodes => {
          return prevNodes.map(node => {
            // Calculate distance from mouse to node
            const distToMouse = Math.sqrt(
              Math.pow(mouseX - node.x, 2) + 
              Math.pow(mouseY - node.y, 2)
            );
            
            // Update hover state based on mouse proximity
            const isHovered = distToMouse < hoverRadius;
            
            // Update pulse phase for animation
            const pulseSpeed = 0.008; // Faster pulse when hovered
            const newPhase = (node.pulsePhase + pulseSpeed) % (Math.PI * 2);
            
            // Mouse is not present, slow decay but maintain subtle pulsing
            if (!mousePresent.current) {
              return {
                ...node,
                activation: Math.max(0.05, node.activation * 0.98), // Slower decay when mouse is gone
                pulsePhase: newPhase,
                isHovered: false
              };
            }
            
            // Mouse proximity increases activation with smoother falloff
            if (distToMouse < mouseActivationRadius) {
              // Smoother falloff curve for more gradual transition
              const activationStrength = Math.pow(1 - distToMouse / mouseActivationRadius, 1.2);
              const newActivation = Math.min(1, node.activation + activationStrength * 0.15);
              
              return {
                ...node,
                activation: newActivation,
                lastActivated: now,
                pulsePhase: newPhase,
                isHovered
              };
            }
            
            // For nodes outside the radius, get activation from connected activated nodes
            const incomingLinks = links.filter(link => {
              const targetId = typeof link.target === 'object' ? (link.target as any).id : link.target;
              return targetId === node.id;
            });
            
            const sourceNodes = prevNodes.filter(n => {
              return incomingLinks.some(link => {
                const sourceId = typeof link.source === 'object' ? (link.source as any).id : link.source;
                return n.id === sourceId && n.activation > 0.2; // Only propagate from significantly activated nodes
              });
            });
            
            if (sourceNodes.length > 0) {
              // Calculate activation from connected activated nodes
              let newActivation = sourceNodes.reduce((sum, sourceNode) => {
                const link = incomingLinks.find(l => {
                  const sourceId = typeof l.source === 'object' ? (l.source as any).id : l.source;
                  return sourceId === sourceNode.id;
                });
                if (!link) return sum;
                const weight = Math.abs(link.weight); // Use absolute weight for activation propagation
                return sum + sourceNode.activation * weight * 0.5; // Reduce propagation strength
              }, 0) / sourceNodes.length;
              
              // Limit propagated activation
              newActivation = Math.min(0.7, newActivation);
              
              return {
                ...node,
                activation: Math.max(node.activation * 0.95, newActivation)
              };
            }
            
            // Default decay for nodes outside mouse radius with no activated inputs
            return {
              ...node,
              activation: Math.max(0.05, node.activation * 0.9),
              pulsePhase: newPhase,
              isHovered
            };
          });
        });
        
        // Update link visibility based on mouse position
        setLinks(prevLinks => {
          return prevLinks.map(link => {
            const sourceId = typeof link.source === 'object' ? (link.source as any).id : link.source;
            const targetId = typeof link.target === 'object' ? (link.target as any).id : link.target;
            
            const sourceNode = nodes.find(n => n.id === sourceId);
            const targetNode = nodes.find(n => n.id === targetId);
            
            if (!sourceNode || !targetNode) return link;
            
            // Calculate distance from mouse to both endpoints of the link
            const distToSource = Math.sqrt(
              Math.pow(mouseX - sourceNode.x, 2) + 
              Math.pow(mouseY - sourceNode.y, 2)
            );
            
            const distToTarget = Math.sqrt(
              Math.pow(mouseX - targetNode.x, 2) + 
              Math.pow(mouseY - targetNode.y, 2)
            );
            
            // Show links within the large mouse radius
            const linkVisibilityRadius = 230; // Slightly smaller than node activation radius
            
            const isClose = distToSource < linkVisibilityRadius || distToTarget < linkVisibilityRadius;
            
            // Also show links between significantly activated nodes
            const isActivated = sourceNode.activation > 0.3 && targetNode.activation > 0.15;
            
            if (isClose || isActivated) {
              // Mouse is close or nodes are activated, make link visible and reset fade out
              return {
                ...link,
                visible: true,
                fadeOutStart: 0,
              };
            } else if (link.visible) {
              // Link was visible but mouse is now far, start fade out
              return {
                ...link,
                visible: false,
                fadeOutStart: now,
              };
            }
            
            return link;
          });
        });
      }
      
      // Process fade-out for links
      if (deltaTime < 1000) {
        const now = Date.now();
        setLinks(prevLinks => {
          return prevLinks.map(link => {
            // If link is marked visible, keep it
            if (link.visible) {
              return link;
            }
            
            // If link is not visible but was recently visible, apply fade out effect
            if (link.fadeOutStart > 0) {
              const fadeOutTime = now - link.fadeOutStart;
              const fadeOutDuration = 3000; // 3 second fade-out duration (longer)
              
              // If fade-out time hasn't elapsed, keep link in fading state
              if (fadeOutTime < fadeOutDuration) {
                return link;
              }
              
              // Fade-out time elapsed, reset fade state
              return {
                ...link,
                fadeOutStart: 0,
              };
            }
            
            return link;
          });
        });
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition, links, nodes]);

  // Handle mouse movement over the SVG - just track position
  const handleMouseMove = (event: React.MouseEvent) => {
    if (!svgRef.current) return;
    
    // Get mouse position relative to SVG
    const svgRect = svgRef.current.getBoundingClientRect();
    const mouseX = event.clientX - svgRect.left;
    const mouseY = event.clientY - svgRect.top;
    
    // Only update if position changed significantly
    if (Math.abs(mouseX - mousePosition.x) > 5 || Math.abs(mouseY - mousePosition.y) > 5) {
      setMousePosition({ x: mouseX, y: mouseY });
    }
  };

  const handleMouseLeave = () => {
    mousePresent.current = false;
    const now = Date.now();
    
    // Start fade-out for all visible links
    setLinks(prevLinks => prevLinks.map(link => ({
      ...link,
      visible: false,
      fadeOutStart: link.visible ? now : link.fadeOutStart,
    })));
    
    // Gradually decrease activation when mouse leaves
    setNodes(prevNodes => prevNodes.map(node => ({
      ...node,
      activation: Math.max(0.05, node.activation * 0.5),
    })));
  };

  return (
    <div 
      ref={containerRef} 
      className="w-full h-screen absolute top-10 left-0"
      style={{ minHeight: '500px' }}
    >
      <svg 
        ref={svgRef} 
        className="w-full h-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => { mousePresent.current = true; }}
      >
        {/* Draw the links */}
        {links.map((link, i) => {
          const sourceId = typeof link.source === 'object' ? (link.source as any).id : link.source;
          const targetId = typeof link.target === 'object' ? (link.target as any).id : link.target;
          
          const sourceNode = nodes.find(n => n.id === sourceId);
          const targetNode = nodes.find(n => n.id === targetId);
          
          if (!sourceNode || !targetNode) return null;
          
          // Determine link opacity based on connection weight and node activations
          const signalStrength = Math.min(sourceNode.activation, targetNode.activation);
          
          // Calculate opacity based on visibility and fade-out state
          let linkOpacity = 0;
          if (link.visible) {
            linkOpacity = Math.max(0.05, signalStrength * 0.9);
          } else if (link.fadeOutStart > 0) {
            // Calculate fade-out progress
            const fadeOutTime = Date.now() - link.fadeOutStart;
            const fadeOutDuration = 3000; // 3 second fade-out (longer)
            const fadeOutProgress = Math.max(0, 1 - fadeOutTime / fadeOutDuration);
            linkOpacity = Math.max(0.02, signalStrength * 0.9 * fadeOutProgress);
          } else {
            // Default faded state - always show with minimum opacity
            linkOpacity = 0.08; // Increased from 0.03 for better visibility
          }
          
          // Determine link color based on weight (blue for positive, red for negative)
          const linkColor = link.weight >= 0 ? `rgba(52, 152, 219, ${linkOpacity})` : `rgba(231, 76, 60, ${linkOpacity})`;
          
          // Make default edges slightly thinner but still visible
          const linkWidth = link.visible ? (Math.abs(link.weight) * 2 + 0.5) : Math.max(0.5, Math.abs(link.weight) * 1.2);
          
          return (
            <line
              key={`line-${i}`}
              x1={sourceNode.x}
              y1={sourceNode.y}
              x2={targetNode.x}
              y2={targetNode.y}
              stroke={linkColor}
              strokeWidth={linkWidth}
              style={{ transition: 'stroke 0.1s ease' }}
            />
          );
        })}
        
        {/* Draw the nodes */}
        {nodes.map((node) => {
          // Calculate color based on activation - more vibrant colors for activated neurons
          const blue = Math.min(255, Math.round(node.activation * 200) + 55);
          const green = Math.min(200, Math.round(node.activation * 100));
          
          // Apply pulse effect
          const pulseIntensity = node.isHovered ? 0.5 : 0.25; // More intense pulse when hovered
          const pulseFactor = 1 + pulseIntensity * Math.sin(node.pulsePhase);
          
          // Enhanced color for hovered nodes
          const nodeColor = node.isHovered
            ? `rgb(${Math.round(60 + node.activation * 80)}, ${Math.min(255, green + 50)}, ${Math.min(255, blue + 20)})`
            : `rgb(${Math.round(node.activation * 60)}, ${green}, ${blue})`;
          
          // Size affected by activation and pulse
          const nodeSize = node.radius * (1 + node.activation * 0.8) * pulseFactor;
          
          // Base opacity on activation with minimum value
          const nodeOpacity = 0.15 + node.activation * 0.85;
          
          // Enhance stroke for hovered nodes
          const strokeWidth = node.isHovered ? 1.5 + node.activation : 0.5 + node.activation;
          const strokeColor = node.isHovered ? "#ffffff" : "#fff";
          
          return (
            <circle
              key={`node-${node.id}`}
              cx={node.x}
              cy={node.y}
              r={nodeSize}
              fill={nodeColor}
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              opacity={nodeOpacity}
              style={{ transition: 'fill 0.1s ease' }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default GraphBackground;