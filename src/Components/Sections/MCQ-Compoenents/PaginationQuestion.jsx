import React from 'react';
import useTestStore from "../../Store/useTestStore"

export default function PaginationQuestion() {
  const {
    questions,
    currentQuestionIndex,
    questionStatuses,
    setCurrentQuestionIndex
  } = useTestStore();

  return (
    <div className="flex flex-wrap gap-3 p-5 justify-center bg-Secondarybg">
      {questions.map((_, index) => {
        const status = questionStatuses[index];
        let bgColor = 'bg-neutral-700'; // Default color (matches neutral-700 from "Prev" button)
        let hoverColor = 'hover:bg-neutral-600'; // Hover state
        
        // Status styling
        if (status.answered) {
          bgColor = 'bg-indigo-600'; // Answered (matches the Next button color)
          hoverColor = 'hover:bg-indigo-700';
        }
        if (status.markedForReview) {
          bgColor = 'bg-yellow-600'; // Marked for review (matches the Mark for Review button)
          hoverColor = 'hover:bg-yellow-700';
        }
        
        // Current question styling - using border rather than ring for consistency
        const borderStyle = index === currentQuestionIndex 
          ? 'border-2 border-white' 
          : 'border border-dullwhite/55';
        
        return (
          <button
            key={index}
            onClick={() => setCurrentQuestionIndex(index)}
            className={`w-11 h-11 flex items-center justify-center ${bgColor} ${borderStyle} ${hoverColor} text-white font-Helvetica transition-colors`}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}