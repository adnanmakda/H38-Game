import React from 'react';
import { PlatformData } from '../types';

interface PopupProps {
  project: PlatformData;
  onClose: () => void;
  onLearnMore: (link: string) => void;
}

const Popup: React.FC<PopupProps> = ({ project, onClose, onLearnMore }) => {
  return (
    <div className="popup bg-white p-6 rounded-md shadow-none font-nunito text-[26px]">
      <div className="mb-4">
        <h2 className="text-[26px] font-bold text-gray-800 mb-2">
          {project.title}
        </h2>
        <p className="text-[26px] text-gray-700">{project.description}</p>
      </div>

      <div className="flex justify-between mt-6">
        <button 
          className="px-6 py-2 bg-[#FF7E3D] text-white font-nunito text-[26px] rounded-md"
          onClick={() => onLearnMore(project.link)}
        >
          Step Inside
        </button>
        <button 
          className="text-[#333] underline font-nunito text-[26px]"
          onClick={onClose}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default Popup;
