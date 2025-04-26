import React from 'react';

interface ScrollingTextProps {
  width: number;
  top: number;
}

const ScrollingText: React.FC<ScrollingTextProps> = ({ width, top }) => {
  const text = "Product Design - Prototyping & 3D Modeling - 3D Printing & Fabrication - AI Agent Development - Web Crawlers & Scrapers - Automation Pipelines - Custom AI Chatbots - Data-Driven Insights - Market & Competitor Analysis - Behavioral Analytics - Research & Strategy Consulting - Web Development - Custom Dashboards & Internal Tools - MVP/Startup Platform Building - E-Commerce or Learning Portals - CRM & Zoho/Notion/Airtable Pipelines - Workflow Automation - Team Ops & Internal Systems Design - Brand Strategy & Positioning - Brand Systems & Asset Libraries - Social Media Strategy - Content Systems - Campaign Funnels - 3D Design - Website Building - CRM & Pipeline Design - Data-Driven Decision Making - Marketing Strategy - Social Media Execution";
  
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