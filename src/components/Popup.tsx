import React from 'react';
import { PlatformData } from '../types';

interface PopupProps {
  project: PlatformData;
  onClose: () => void;
  onLearnMore: (link: string) => void;
}

const Popup: React.FC<PopupProps> = ({ project, onClose, onLearnMore }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 p-4">
      <div className="bg-white rounded-md font-nunito text-[26px] shadow-none w-full max-w-[90vw] max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Project Title */}
          <h2 className="text-[26px] font-bold text-gray-800 mb-4">
            {project.title}
          </h2>

          {/* Project Description */}
          <p className="text-[26px] text-gray-700 whitespace-pre-line">
            {project.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
            <button
              className="w-full sm:w-auto px-6 py-3 bg-[#FF7E3D] text-white rounded-md text-[26px]"
              onClick={() => onLearnMore(project.link)}
            >
              Step Inside
            </button>
            <button
              className="w-full sm:w-auto text-[#333] underline text-[26px]"
              onClick={onClose}
            >
              Restart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
