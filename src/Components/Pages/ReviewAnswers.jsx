import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import useTestStore from "../Store/useTestStore";
import useResultStore from "../Store/useResultStore";

export default function ReviewAnswers() {
  const navigate = useNavigate();

  const {
    questions,
    questionStatuses
  } = useTestStore();

  const {
    correct_ans,
    wrong_ans,
    score,
  } = useResultStore();

  // Redirect if no questions
  useEffect(() => {
    if (questions.length === 0) {
      navigate("/");
    }
  }, [questions, navigate]);

  // Debug to check what's in the state
  console.log("Questions:", questions);
  console.log("Question Statuses:", questionStatuses);

  const backToResults = () => {
    navigate("/result");
  };

  const handleRetry = () => {
    navigate("/NDA");
    useTestStore.getState().resetTest();
    useResultStore.getState().resetScore();
  };

  return (
    <div className="bg-darkbg min-h-screen flex flex-col p-4 md:p-8">
      {/* Header section */}
      <div className="w-full mb-6">
        <div className="bg-Secondarybg rounded-xl p-4 md:p-6 shadow-lg">
          <h1 className="text-xl md:text-2xl font-bold text-PrimaryGold text-center mb-4 font-Helvetica">
            Review Answers
          </h1>

          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            <div className="bg-Secondarybg rounded-lg border border-dullwhite/30 p-3 flex-1 min-w-[120px] max-w-[180px]">
              <p className="text-sm text-gray-300 mb-1 font-Helvetica">Score</p>
              <p className="text-lg font-medium text-PrimaryGold font-Helvetica">{score}/{questions.length * 4}</p>
            </div>
            <div className="bg-green-900/30 rounded-lg border border-green-800 p-3 flex-1 min-w-[120px] max-w-[180px]">
              <p className="text-sm text-gray-300 mb-1 font-Helvetica">Correct</p>
              <p className="text-lg font-medium text-green-400 font-Helvetica">{correct_ans}</p>
            </div>
            <div className="bg-red-900/30 rounded-lg border border-red-800 p-3 flex-1 min-w-[120px] max-w-[180px]">
              <p className="text-sm text-gray-300 mb-1 font-Helvetica">Wrong</p>
              <p className="text-lg font-medium text-red-400 font-Helvetica">{wrong_ans}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Questions list */}
      <div className="w-full">
        {questions.map((question, index) => {
          // Make sure we safely access properties with fallbacks
          const userStatus = questionStatuses[index] || {};
          // Get the selectedOption from questionStatuses
          const userSelectedOption = userStatus.selectedOption;
          const isAnswered = userStatus.answered === true;
          const isCorrect = userSelectedOption === question.correctAns;

          return (
            <div
              key={index}
              className="bg-Secondarybg rounded-xl mb-6 overflow-hidden shadow-lg"
            >
              <div className={`w-full py-3 px-4 flex justify-between items-center border-b border-dullwhite/20 ${
                isAnswered
                  ? (isCorrect ? "bg-green-900/30" : "bg-red-900/30")
                  : "bg-yellow-900/30"
              }`}>
                <h3 className="text-white font-medium font-Helvetica text-lg">
                  Question {index + 1}
                </h3>
         f       
              </div>

              <div className="px-4 md:px-6 py-4">
                <p className="text-white text-base md:text-lg font-Helvetica mb-4">
                  {question.question}
                </p>

                <div className="flex flex-col gap-3 mt-4">
                  {['optionA', 'optionB', 'optionC', 'optionD'].map((option) => {
                    const capitalizedOption = option.charAt(0).toUpperCase() + option.slice(1);
                    const isUserSelected = userSelectedOption === capitalizedOption;
                    const isCorrectOption = question.correctAns === capitalizedOption;

                    let optionStyle = "border-dullwhite/30";
                    if (isUserSelected && isCorrectOption) {
                      optionStyle = "bg-green-600/30 border-green-400";
                    } else if (isUserSelected && !isCorrectOption) {
                      optionStyle = "bg-red-600/30 border-red-400";
                    } else if (isCorrectOption) {
                      optionStyle = "bg-green-600/20 border-green-400/70";
                    }

                    return (
                      <div
                        key={option}
                        className={`w-full min-h-12 rounded-lg border ${optionStyle} transition-all duration-150 flex`}
                      >
                        <div className="font-Helvetica font-medium text-white py-3 px-4 md:px-6 w-full text-left flex items-center">
                          <span className={`inline-block w-5 h-5 mr-3 rounded-full border flex-shrink-0 ${
                            isUserSelected
                              ? (isCorrectOption ? "bg-green-400 border-white" : "bg-red-400 border-white")
                              : (isCorrectOption ? "bg-green-400/50 border-green-200" : "border-white")
                          }`}></span>
                          <span>{question[option]}</span>

                          {isUserSelected && (
                            <span className="ml-auto pl-2">
                              {isCorrectOption ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                              )}
                            </span>
                          )}

                          {!isUserSelected && isCorrectOption && (
                            <span className="ml-auto pl-2 text-green-400 text-sm font-medium">
                              Correct Answer
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {question.explanation && (
                <div className="px-4 md:px-6 py-3 bg-neutral-800/50 border-t border-dullwhite/20">
                  <p className="text-sm font-medium text-PrimaryGold mb-1 font-Helvetica">Explanation:</p>
                  <p className="text-white text-sm font-Helvetica">{question.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="w-full max-w-xl mx-auto flex flex-col sm:flex-row justify-between gap-4 px-4 mb-8">
        <button
          onClick={backToResults}
          className="h-[40px] sm:flex-1 bg-indigo-600 rounded-lg font-Helvetica text-white hover:bg-indigo-700 transition-colors"
        >
          Back to Results
        </button>
        <button
          onClick={handleRetry}
          className="h-[40px] sm:flex-1 bg-PrimaryGold rounded-lg font-Helvetica text-white hover:bg-hovergold transition-colors"
        >
          Take Quiz Again
        </button>
      </div>
    </div>
  );
}