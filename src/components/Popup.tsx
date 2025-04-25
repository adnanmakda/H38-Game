import React from 'react';
import { PlatformData } from '../types';

interface PopupProps {
  project: PlatformData;
  onClose: () => void;
  onLearnMore: (link: string) => void;
}

const Popup: React.FC<PopupProps> = ({ project, onClose, onLearnMore }) => {
  const isMobile = window.innerWidth <= 768;
  const description = isMobile ? project.mobileDescription : project.description;

  return (
    <div className="popup">
      <div className="flex flex-col h-full">
        <div className="flex-grow">
          <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
          <p className="text-2xl text-gray-700">{description}</p>
        </div>
        
        <div className="flex justify-between items-center mt-8 pt-4 pb-6 border-t border-gray-200">
          <span 
            className="text-2xl text-[#ff7733] hover:text-[#ff6611] cursor-pointer"
            onClick={() => onLearnMore(project.link)}
          >
            Step Inside
          </span>
          <span 
            className="text-2xl text-gray-600 hover:text-gray-800 cursor-pointer"
            onClick={onClose}
          >
            Restart
          </span>
        </div>
      </div>
    </div>
  );
};

export default Popup;