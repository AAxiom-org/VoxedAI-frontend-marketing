import { useEffect, useRef, useState } from 'react';

export default function DemoPage() {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const [iframeHeight, setIframeHeight] = useState('800px');
    
    useEffect(() => {
        // Add message listener for height updates from Tally
        const handleMessage = (e: MessageEvent) => {
            try {
                if (e.data && typeof e.data === 'object' && e.data.type === 'tally.resize') {
                    if (e.data.height) {
                        // Add extra padding to ensure no scrollbar appears
                        const newHeight = `${parseInt(e.data.height) + 100}px`;
                        setIframeHeight(newHeight);
                    }
                }
            } catch (error) {
                console.error("Error handling iframe message:", error);
            }
        };
        
        window.addEventListener('message', handleMessage);
        
        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);
    
    return (
        <section id="demo" className="py-24">
            <div className="max-w-7xl mx-auto px-8 flex flex-col items-center">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-medium text-gray-900 mb-4">
                        Request a Demo
                    </h2>
                    <div className="w-16 h-0.5 bg-gray-200 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Interested in seeing Voxed in action? Fill out the form below and our team will 
                        reach out to schedule a personalized demo tailored to your research needs.
                    </p>
                </div>
                <div className="w-full max-w-2xl">
                    <div className="relative rounded-sm border border-gray-100 bg-white shadow-sm w-full overflow-hidden">
                        <iframe
                            ref={iframeRef}
                            src="https://tally.so/embed/meo9VQ?hideTitle=1"
                            style={{
                                width: '100%',
                                height: iframeHeight,
                                border: 'none',
                                display: 'block',
                            }}
                            title="Request a Demo"
                            frameBorder="0"
                            allowTransparency={true}
                            onLoad={() => {
                                // Send a message to the iframe to request its height
                                iframeRef.current?.contentWindow?.postMessage('getHeight', '*');
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}