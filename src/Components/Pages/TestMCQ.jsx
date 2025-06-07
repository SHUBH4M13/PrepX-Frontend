import React, { useEffect, useState } from "react";
import Timer from "../Sections/MCQ-Compoenents/Timer";
import { useParams } from "react-router";
import useTestStore from "../Store/useTestStore";
import useResultStore from "../Store/useResultStore";
import PaginationQuestion from "../Sections/MCQ-Compoenents/PaginationQuestion";
import { useNavigate } from "react-router";
import TestInstructions from "./TestInstructions";

export default function TestMCQ() {
  const navigate = useNavigate();
  
  const [showInstructions, setShowInstructions] = useState(true);
  
  
  const [selectedOptions, setSelectedOptions] = useState({});
  

  const {
    questions,
    currentQuestionIndex,
    questionStatuses,
    fetchQuestions,
    toggleMarkForReview,
    navigateQuestion,
    setSelectedOptions: storeSelectedOptions
  } = useTestStore();

  const {
    correct_ans,
    wrong_ans,
    setTotalQuestions,
    calculateScore,
    resetScore
  } = useResultStore();

  const { examCode } = useParams();
  const token = localStorage.getItem("token");

  // Fetch questions when the component mounts
  useEffect(() => {
    fetchQuestions(examCode, token);
  }, [examCode, token, fetchQuestions]);

  // Set total questions count when questions are loaded
  useEffect(() => {
    if (questions.length > 0) {
      setTotalQuestions(questions.length);
    }
  }, [questions, setTotalQuestions]);


  const handleStartTest = () => {
    setShowInstructions(false);
  };

  const currentQuestion = questions[currentQuestionIndex];

  function handleOptionSelect(selectedOptionKey) {
    const updatedOptions = {
      ...selectedOptions,
      [currentQuestionIndex]: selectedOptionKey
    };
    
    setSelectedOptions(updatedOptions);
    storeSelectedOptions(updatedOptions);
  }

  const GoToResult = () => {
    resetScore();
    questions.forEach((question, index) => {
      const selectedOption = selectedOptions[index];
      if (selectedOption === question.correctAns) {
        useResultStore.getState().updateCorrectAns(1);
      } else if (selectedOption) {
        useResultStore.getState().updateCorrectAns(0);
      }
    });
    
    calculateScore();
    navigate("/result");
  };

  if (!questions.length || !currentQuestion) {
    return (
      <div className="bg-darkbg min-h-screen flex flex-col justify-center items-center">
        <p className="text-white text-lg font-Helvetica">Loading questions...</p>
      </div>
    );
  }

  return (
    <div className="bg-darkbg min-h-screen flex flex-col items-center px-4 py-8 md:px-6 lg:px-8">
      
      {showInstructions && (
        <TestInstructions onStart={handleStartTest} />
      )}

      <div className="w-full flex justify-end mb-4">
        <button
          onClick={GoToResult}
          className="w-24 md:w-32 rounded-xl h-10 md:h-12 cursor-pointer text-white font-Helvetica bg-red-600 hover:bg-red-700 transition-colors"
        >
          Submit
        </button>
      </div>

   
      <div className="bg-Secondarybg w-full max-w-5xl rounded-xl flex flex-col shadow-lg">

        <div className="w-full h-16 border-b border-dullwhite/55 flex justify-between md:justify-end md:gap-10 items-center px-4 md:px-10">
          <Timer duration={3610} />
          <p className="text-white text-sm md:text-lg font-Helvetica">
            Questions: {currentQuestionIndex + 1}/{questions.length}
          </p>
        </div>


        <div className="px-4 md:px-9 py-3 md:py-5">
          <p className="text-white text-base md:text-lg font-Helvetica">
            {currentQuestion.instructions}
          </p>
        </div>


        <div className="px-4 md:px-9 py-3 md:py-5">
          <p className="text-white text-base md:text-lg font-Helvetica">
            Question {currentQuestionIndex + 1}:
          </p>
          <p className="text-white text-base md:text-lg font-Helvetica mt-2">
            {currentQuestion.question}
          </p>
        </div>

        {/* Options section */}
        <div className="px-4 md:px-8 flex flex-col gap-3 md:gap-5 mt-2">
          <div className="flex flex-col gap-3 md:gap-6">
            {['optionA', 'optionB', 'optionC', 'optionD'].map((option) => {
              // Need to capitalize the option key to match with correct answer format
              const capitalizedOption = option.charAt(0).toUpperCase() + option.slice(1);
              // Check if this capitalized option key is currently selected for this question
              const isSelected = selectedOptions[currentQuestionIndex] === capitalizedOption;
              
              return (
                <div
                  key={option}
                  className={`w-full h-auto min-h-12 rounded-lg border transition-all duration-150 flex cursor-pointer ${
                    isSelected 
                      ? 'bg-PrimaryGold/20 border-PrimaryGold '
                      : 'border-PrimaryGold hover:bg-PrimaryGold/20'
                  }`}
                  onClick={() => {
                    // Handle selection with proper capitalization
                    const capitalizedOption = option.charAt(0).toUpperCase() + option.slice(1);
                    handleOptionSelect(capitalizedOption);
                  }}
                >
                  <div
                    className="font-Helvetica font-medium text-white py-3 px-4 md:px-6 w-full text-left flex items-center"
                  >
                    <span className={`inline-block w-5 h-5 mr-3 rounded-full border ${
                      isSelected ? 'bg-PrimaryGold border-white' : 'border-white'
                    }`}></span>
                    {currentQuestion[option]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="px-4 md:px-9 py-6 md:py-10 flex justify-between">
          <button
            onClick={() => navigateQuestion('prev')}
            disabled={currentQuestionIndex === 0}
            className="text-white bg-neutral-700 w-20 h-10 rounded-md hover:bg-neutral-600 transition-colors disabled:opacity-50"
          >
            Prev
          </button>

          <button
            onClick={toggleMarkForReview}
            className="px-3 md:px-4 py-2 text-white bg-yellow-600 rounded-md hover:bg-yellow-700 transition-colors text-sm md:text-base"
          >
            {questionStatuses[currentQuestionIndex]?.markedForReview
              ? 'Unmark Review'
              : 'Mark For Review'}
          </button>
          
          <button
            onClick={() => navigateQuestion('next')}
            disabled={currentQuestionIndex === questions.length - 1}
            className="px-3 md:px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 text-sm md:text-base"
          >
            Next
          </button>
        </div>

        {/* Pagination */}
        <div className="w-full overflow-x-auto">
          <PaginationQuestion />
        </div>
      </div>
    </div>
  );
}