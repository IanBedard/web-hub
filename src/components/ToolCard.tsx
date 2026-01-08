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
          ? 'border-2 border-dashed border-base-300 bg-base-100' 
          : 'bg-base-200'
        } 
        rounded-lg p-6 flex flex-col items-center justify-center 
        cursor-pointer hover:opacity-80 transition-opacity
        ${className}
      `}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          onClick();
        }
      }}
    >
      {icon && (
        <div className="text-3xl mb-2 text-base-content">
          {icon}
        </div>
      )}
      <span className="text-sm font-medium text-base-content">
        {title}
      </span>
    </div>
  );
}