import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  connections: Node[];
}

interface NetworkBackgroundProps {
  className?: string;
}

const NetworkBackground: React.FC<NetworkBackgroundProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const lastConnectionChangeRef = useRef<number>(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Initialize nodes
    const createNodes = () => {
      const nodeCount = Math.min(Math.max(window.innerWidth, window.innerHeight) / 10, 100);
      const nodes: Node[] = [];
      
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: 2,
          connections: []
        });
      }
      
      return nodes;
    };
    
    nodesRef.current = createNodes();
    updateConnections();
    
    // Update node connections
    function updateConnections() {
      const connectionDistance = 150;
      const maxConnections = 5;
      const nodes = nodesRef.current;
      
      // Clear all connections
      nodes.forEach(node => {
        node.connections = [];
      });
      
      // Create new connections based on proximity
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        
        // Sort other nodes by distance
        const others = nodes
          .filter(n => n !== nodeA)
          .map(nodeB => {
            const distance = Math.sqrt(
              Math.pow(nodeA.x - nodeB.x, 2) + 
              Math.pow(nodeA.y - nodeB.y, 2)
            );
            return { node: nodeB, distance };
          })
          .filter(item => item.distance < connectionDistance)
          .sort((a, b) => a.distance - b.distance);
        
        // Connect to closest nodes (up to max connections)
        const connectCount = Math.min(
          Math.floor(Math.random() * maxConnections) + 1, 
          others.length
        );
        
        for (let j = 0; j < connectCount; j++) {
          nodeA.connections.push(others[j].node);
        }
      }
    }
    
    // Update node positions
    function updateNodes() {
      const nodes = nodesRef.current;
      
      nodes.forEach(node => {
        // Update position with velocity
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x <= 0 || node.x >= window.innerWidth) {
          node.vx *= -1;
        }
        if (node.y <= 0 || node.y >= window.innerHeight) {
          node.vy *= -1;
        }
        
        // Small random movement
        node.vx += (Math.random() - 0.5) * 0.05;
        node.vy += (Math.random() - 0.5) * 0.05;
        
        // Limit velocity
        const maxSpeed = 0.1;
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
        if (speed > maxSpeed) {
          node.vx = (node.vx / speed) * maxSpeed;
          node.vy = (node.vy / speed) * maxSpeed;
        }
      });
    }
    
    // Draw functions
    function drawNode(node: Node) {
      if (!ctx) return;
      
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'black';
      ctx.fill();
    }
    
    function drawConnections(node: Node) {
      if (!ctx) return;
      
      node.connections.forEach(connectedNode => {
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(connectedNode.x, connectedNode.y);
        
        // Calculate distance for opacity
        const distance = Math.sqrt(
          Math.pow(node.x - connectedNode.x, 2) + 
          Math.pow(node.y - connectedNode.y, 2)
        );
        
        const maxDistance = 150;
        let opacity = 1 - (distance / maxDistance);
        opacity = opacity < 0 ? 0 : opacity;
        
        ctx.strokeStyle = `rgba(150, 150, 150, ${opacity * 0.5})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });
    }
    
    // Animation loop
    function animate(timestamp: number) {
      if (!ctx) return;
      
      // Update nodes
      updateNodes();
      
      // Periodically change connections
      if (timestamp - lastConnectionChangeRef.current > 500) {
        updateConnections();
        lastConnectionChangeRef.current = timestamp;
      }
      
      // Clear canvas
      if (canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      // Draw connections first (behind nodes)
      nodesRef.current.forEach(node => {
        drawConnections(node);
      });
      
      // Draw nodes
      nodesRef.current.forEach(node => {
        drawNode(node);
      });
      
      // Request next frame
      animationRef.current = requestAnimationFrame(animate);
    }
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={className}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'white'
      }}
    />
  );
};

export default NetworkBackground;