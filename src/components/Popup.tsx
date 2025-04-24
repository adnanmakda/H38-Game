import React from 'react';
import { PlatformData } from '../types';

interface PopupProps {
  project: PlatformData;
  onClose: () => void;
  onLearnMore: (link: string) => void;
}

const Popup: React.FC<PopupProps> = ({ project, onClose, onLearnMore }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50 px-4">
      <div className="w-full max-w-[80vw] max-h-[80vh] bg-white rounded-md p-6 overflow-y-auto font-nunito text-[26px] shadow-none">
        <div className="mb-6">
          <h2 className="text-[26px] font-bold text-gray-800 mb-4">{project.title}</h2>
          <p className="text-[26px] text-gray-700 whitespace-pre-line">
            {project.description}
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 mt-8">
          <button 
            className="px-6 py-3 bg-[#FF7E3D] text-white font-nunito text-[26px] rounded-md w-full md:w-auto"
            onClick={() => onLearnMore(project.link)}
          >
            Step Inside
          </button>
          <button 
            className="text-[#333] underline font-nunito text-[26px] w-full md:w-auto"
            onClick={onClose}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
