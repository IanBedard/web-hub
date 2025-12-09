import React from 'react';
interface ToolCardProps {
  title: string;
  icon?: React.ReactNode;
  outline?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function ToolCard({ 
  title, 
  icon, 
  outline = false, 
  onClick,
  className = ''
}: ToolCardProps) {
  return (
    <div 
      className={`
        ${outline 
          ? 'border-2 border-dashed border-gray-300 bg-white' 
          : 'bg-pspc-navy'
        } 
        rounded-lg p-6 flex flex-col items-center justify-center 
        cursor-pointer hover:opacity-80 transition-opacity
        ${className}
      `}
      onClick={onClick}
    >
      {icon && (
        <div className={`text-3xl mb-2 ${outline ? 'text-gray-400' : 'text-white'}`}>
          {icon}
        </div>
      )}
      <span className={`text-sm font-medium ${outline ? 'text-gray-500' : 'text-white'}`}>
        {title}
      </span>
    </div>
  );
}