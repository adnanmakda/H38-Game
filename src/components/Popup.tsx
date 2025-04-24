import React from 'react';
import { PlatformData } from '../types';

interface PopupProps {
  project: PlatformData;
  onClose: () => void;
  onLearnMore: (link: string) => void;
}

const Popup: React.FC<PopupProps> = ({ project, onClose, onLearnMore }) => {
  return (
    <div className="popup">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-700">{project.description}</p>
      </div>
      
      <div className="flex justify-between mt-6">
        <button 
          className="btn btn-primary"
          onClick={() => onLearnMore(project.link)}
        >
          Step Inside
        </button>
        <button 
          className="btn btn-secondary"
          onClick={onClose}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default Popup;