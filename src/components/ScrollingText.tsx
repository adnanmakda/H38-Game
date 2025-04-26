import React from 'react';

interface ScrollingTextProps {
  width: number;
  top: number;
}

const ScrollingText: React.FC<ScrollingTextProps> = ({ width, top }) => {
  const text = "Innovative Web Solutions • Custom Software Development • Mobile App Development • Cloud Architecture • AI Integration • Blockchain Solutions • IoT Applications • Enterprise Software • DevOps Services • Cybersecurity • Data Analytics • UI/UX Design • Quality Assurance • Agile Consulting • 24/7 Support";
  
  return (
    <div 
      className="absolute whitespace-nowrap overflow-hidden"
      style={{
        width: `${width}px`,
        top: `${top}px`,
        height: '40px',
        background: 'linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.1) 90%, transparent)',
        borderTop: '2px solid rgba(0, 0, 0, 0.8)',
        borderBottom: '2px solid rgba(0, 0, 0, 0.8)'
      }}
    >
      <div className="animate-scroll inline-block pt-0.5">
        {text} • {text}
      </div>
    </div>
  );
};

export default ScrollingText;