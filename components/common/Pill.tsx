import React from 'react';

interface PillProps {
  label: string;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, onClick }) => {
  return (
    <button
      className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-200 transition"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Pill;
