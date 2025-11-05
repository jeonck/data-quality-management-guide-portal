import { useState } from 'react';

interface ExpandableCardProps {
  title: string;
  summary: string;
  children: React.ReactNode;
}

const ExpandableCard = ({ title, summary, children }: ExpandableCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">
        {summary}
      </p>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-500 hover:text-blue-700 mt-4"
      >
        {isExpanded ? '접기' : '더보기'}
      </button>
      {isExpanded && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default ExpandableCard;
