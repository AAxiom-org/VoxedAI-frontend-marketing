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
            <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent text-center">
                    Request a Demo
                </h2>
                <p className="color-secondary mx-auto mb-10 leading-relaxed text-center text-lg max-w-3xl">
                    Interested in seeing Voxed in action? Fill out the form below and our team will 
                    reach out to schedule a personalized demo tailored to your needs.
                </p>
                <div className="w-full max-w-2xl">
                    <div className="relative rounded-xl border border-adaptive bg-secondary backdrop-blur-sm shadow-adaptive w-full overflow-hidden">
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
                            scrolling="no"
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