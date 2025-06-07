import React, { useEffect } from 'react';
import { useNavigate } from "react-router";
import useResultStore from "../Store/useResultStore";
import useTestStore from "../Store/useTestStore";
import { ArrowPathIcon, DocumentTextIcon, TrophyIcon, CheckCircleIcon, XCircleIcon, AcademicCapIcon } from '@heroicons/react/24/solid';

function Result() {
  const navigate = useNavigate();

  const {
    resetTest,
    questions,
    selectedOptions,
  } = useTestStore();

  const {
    resetScore,
    correct_ans,
    wrong_ans,
    score,
  } = useResultStore();

  // Calculate percentage
  const percentage = questions.length > 0 ? Math.round((correct_ans / questions.length) * 100) : 0;

  const reviewAnswers = () => {
    navigate("/review");
  };

  const handleRetry = () => {
    navigate("/");
    resetTest();
    resetScore();
  };

  const getResultMessage = () => {
    if (percentage >= 90) return "Excellent!";
    if (percentage >= 70) return "Great job!";
    if (percentage >= 50) return "Good effort!";
    return "Keep practicing!";
  };

  // Determine color based on performance
  const getScoreColor = () => {
    if (percentage >= 80) return "text-green-500";
    if (percentage >= 60) return "text-PrimaryGold";
    return "text-red-500";
  };

  // Generate performance description
  const getPerformanceDescription = () => {
    if (percentage >= 90) return "Outstanding performance! You've mastered this material.";
    if (percentage >= 70) return "Strong performance! You have a good grasp of the concepts.";
    if (percentage >= 50) return "Solid effort. Continue practicing to improve your score.";
    return "You're still building your knowledge. Keep practicing and you'll improve!";
  };

  // Calculate skipped questions
  const skipped = questions.length - (correct_ans + wrong_ans);

  // Animation class based on score
  const scoreAnimationClass = percentage >= 70 ? "animate-pulse" : "";

  return (
    <div className="bg-darkbg min-h-screen flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-3xl bg-Secondarybg rounded-xl shadow-lg p-6 sm:p-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-Helvetica font-bold text-PrimaryGold mb-2">Results</h1>
          <p className="text-dullwhite font-Helvetica text-lg">Your exam performance analysis</p>
        </div>

        {/* Score Display */}
        <div className="bg-darkbg rounded-xl p-6 mb-8 text-center">
          <div className="inline-block relative">
            <div className={`text-5xl sm:text-7xl font-Helvetica font-bold ${getScoreColor()} mb-2 ${scoreAnimationClass}`}>
              {score}
              <span className="text-dullwhite text-2xl sm:text-3xl">/{questions.length * 4}</span>
            </div>
            <TrophyIcon className="absolute -top-4 -right-8 text-PrimaryGold h-10 w-10" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-Helvetica font-bold text-white">{getResultMessage()}</h2>
          <p className="text-dullwhite mt-2 px-4">{getPerformanceDescription()}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-darkbg rounded-lg p-4 flex flex-col items-center hover:border hover:border-PrimaryGold transition-all duration-300">
            <div className="bg-PrimaryGold/20 p-3 rounded-full mb-2">
              <AcademicCapIcon className="h-6 w-6 text-PrimaryGold" />
            </div>
            <h3 className="text-dullwhite text-lg font-Helvetica">Score Percentage</h3>
            <p className={`text-2xl font-bold ${getScoreColor()}`}>{percentage}%</p>
          </div>

          <div className="bg-darkbg rounded-lg p-4 flex flex-col items-center hover:border hover:border-PrimaryGold transition-all duration-300">
            <div className="bg-PrimaryGold/20 p-3 rounded-full mb-2">
              <DocumentTextIcon className="h-6 w-6 text-PrimaryGold" />
            </div>
            <h3 className="text-dullwhite text-lg font-Helvetica">Questions</h3>
            <p className="text-2xl font-bold text-white">{questions.length}</p>
          </div>

          <div className="bg-darkbg rounded-lg p-4 flex flex-col items-center hover:border hover:border-PrimaryGold transition-all duration-300">
            <div className="bg-green-500/20 p-3 rounded-full mb-2">
              <CheckCircleIcon className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-dullwhite text-lg font-Helvetica">Correct</h3>
            <p className="text-2xl font-bold text-green-500">{correct_ans}</p>
          </div>

          <div className="bg-darkbg rounded-lg p-4 flex flex-col items-center hover:border hover:border-PrimaryGold transition-all duration-300">
            <div className="bg-red-500/20 p-3 rounded-full mb-2">
              <XCircleIcon className="h-6 w-6 text-red-500" />
            </div>
            <h3 className="text-dullwhite text-lg font-Helvetica">Wrong</h3>
            <p className="text-2xl font-bold text-red-500">{wrong_ans}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-dullwhite">Performance</span>
            <span className="text-PrimaryGold">{percentage}%</span>
          </div>
          <div className="w-full bg-darkbg rounded-full h-4">
            <div 
              className="bg-PrimaryGold h-4 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={reviewAnswers}
            className="flex items-center justify-center gap-2 border-2 border-PrimaryGold text-PrimaryGold hover:bg-PrimaryGold hover:text-white font-Helvetica py-3 px-6 rounded-lg transition-colors duration-300"
          >
            <DocumentTextIcon className="h-5 w-5" />
            Review Answers
          </button>
          
          <button 
            onClick={handleRetry}
            className="flex items-center justify-center gap-2 bg-PrimaryGold hover:bg-hovergold text-white font-Helvetica py-3 px-6 rounded-lg transition-colors duration-300"
          >
            <ArrowPathIcon className="h-5 w-5" />
            Retry Quiz
          </button>
        </div>
      </div>

      {/* Performance tips */}
      {percentage < 70 && (
        <div className="w-full max-w-3xl mt-6 bg-Secondarybg rounded-xl p-6 text-dullwhite">
          <h3 className="text-PrimaryGold font-bold text-xl mb-3">Tips to Improve</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Review the questions you got wrong and understand why.</li>
            <li>Focus on topics where you scored lowest.</li>
            <li>Practice with more mock tests to build confidence.</li>
            <li>Consider revisiting study materials for challenging concepts.</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Result;