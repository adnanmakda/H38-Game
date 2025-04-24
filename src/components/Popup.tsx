import React from 'react';
import { PlatformData } from '../types';

interface PopupProps {
  project: PlatformData;
  onClose: () => void;
  onLearnMore: (link: string) => void;
}

const Popup: React.FC<PopupProps> = ({ project, onClose, onLearnMore }) => {
  return (
<<<<<<< HEAD
    <div
      className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-labelledby="popup-title"
      aria-describedby="popup-description"
    >
=======
<<<<<<< HEAD
    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center p-4">
>>>>>>> parent of bd7e740 (hh)
      <div className="bg-white rounded-md p-6 font-nunito text-[26px] shadow-none max-h-[90vh] w-full max-w-[600px] overflow-y-auto">
        <div className="mb-6">
          <h2
            id="popup-title"
            className="text-[26px] font-bold text-gray-800 mb-4"
          >
            {project.title}
          </h2>
          <p
            id="popup-description"
            className="text-[26px] text-gray-700 whitespace-pre-line"
          >
            {project.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
          <button
            className="w-full sm:w-auto px-6 py-3 bg-[#FF7E3D] text-white rounded-md text-[26px]"
            onClick={() => onLearnMore(project.link)}
            aria-label="Learn more about the project"
          >
            Step Inside
          </button>
          <button
            className="w-full sm:w-auto text-[#333] underline text-[26px]"
            onClick={onClose}
            aria-label="Close the popup and restart"
          >
            Restart
          </button>
        </div>
<<<<<<< HEAD
=======
=======
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
>>>>>>> parent of 285968d (big popup)
>>>>>>> parent of bd7e740 (hh)
      </div>
    </div>
  );
};

export default Popup;
