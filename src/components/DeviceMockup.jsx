import React from 'react';

const DeviceMockup = ({ type, children, className = "" }) => {
    if (type === 'laptop') {
        return (
            <div className={`relative mx-auto ${className}`} style={{ maxWidth: '800px' }}>
                {/* Laptop Screen Frame */}
                <div className="relative rounded-t-2xl border-x-[8px] border-t-[8px] border-neutral-800 bg-neutral-800 shadow-2xl overflow-hidden aspect-[16/10]">
                    {/* Inner Screen Surface */}
                    <div className="absolute inset-0 bg-neutral-900 flex items-start justify-center overflow-hidden">
                        {/* Scaled Content to hide original PNG edges */}
                        <div className="w-[102%] h-[102%] -m-[1%]">
                            {children}
                        </div>
                    </div>
                </div>
                {/* Laptop Base */}
                <div className="relative h-[12px] md:h-[18px] bg-neutral-700 rounded-b-xl border-t border-neutral-600 shadow-lg">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[15%] h-[4px] bg-neutral-800/50 rounded-b-full"></div>
                </div>
            </div>
        );
    }

    if (type === 'iphone') {
        return (
            <div className={`relative mx-auto ${className}`} style={{ width: 'min(100%, 300px)' }}>
                {/* iPhone Frame */}
                <div className="relative rounded-[2.5rem] border-[8px] border-neutral-800 bg-neutral-800 shadow-2xl overflow-hidden aspect-[9/19.5]">
                    {/* Notch/Dynamic Island Area */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[35%] h-[20px] bg-neutral-900 z-20 rounded-b-xl flex items-center justify-center pt-1">
                        <div className="w-1.5 h-1.5 bg-indigo-500/30 rounded-full mr-1"></div>
                        <div className="w-8 h-1.5 bg-neutral-700 rounded-full"></div>
                    </div>

                    {/* Inner Screen Surface */}
                    <div className="absolute inset-0 bg-neutral-900 flex items-start justify-center overflow-hidden">
                        {/* Scaled Content to hide original PNG edges */}
                        <div className="w-[110%] h-[104%] -m-[2%]">
                            {children}
                        </div>
                    </div>
                </div>
                {/* Side Buttons (Visual Only) */}
                <div className="absolute -left-[10px] top-[15%] w-[3px] h-[30px] bg-neutral-700 rounded-r-sm"></div>
                <div className="absolute -left-[10px] top-[25%] w-[3px] h-[45px] bg-neutral-700 rounded-r-sm"></div>
                <div className="absolute -right-[10px] top-[22%] w-[3px] h-[60px] bg-neutral-700 rounded-l-sm"></div>
            </div>
        );
    }

    return <div className={className}>{children}</div>;
};

export default DeviceMockup;
