import React from "react";

export default function TestInstructions({ onStart }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 py-6">
      <div className="bg-Secondarybg w-full max-w-2xl rounded-xl shadow-lg flex flex-col animate-fadeIn">
        {/* Header */}
        <div className="w-full h-16 border-b border-dullwhite/55 flex items-center px-6">
          <h2 className="text-PrimaryGold text-xl md:text-2xl font-Helvetica font-bold">
            Test Instructions
          </h2>
        </div>

        {/* Instructions content */}
        <div className="px-6 py-6 overflow-y-auto max-h-[60vh]">
          <div className="space-y-4">
            <div className="bg-darkbg/40 p-4 rounded-lg">
              <h3 className="text-white text-lg font-Helvetica font-medium mb-2">
                Test Duration
              </h3>
              <p className="text-white/90 font-Helvetica">
                You have 60 minutes to complete this test. The timer will start once you click the "Start Test" button.
              </p>
            </div>

            <div className="bg-darkbg/40 p-4 rounded-lg">
              <h3 className="text-white text-lg font-Helvetica font-medium mb-2">
                Question Navigation
              </h3>
              <ul className="text-white/90 font-Helvetica space-y-2">
                <li>• Use the Next and Previous buttons to navigate between questions</li>
                <li>• You can mark questions for review and return to them later</li>
              </ul>
            </div>

            <div className="bg-darkbg/40 p-4 rounded-lg">
              <h3 className="text-white text-lg font-Helvetica font-medium mb-2">
                Answering Questions
              </h3>
              <ul className="text-white/90 font-Helvetica space-y-2">
                <li>• Select one option for each question by clicking on it</li>
                <li>• You can change your answer at any time before submitting</li>
                <li>• All questions carry equal marks</li>
              </ul>
            </div>

            <div className="bg-darkbg/40 p-4 rounded-lg">
              <h3 className="text-white text-lg font-Helvetica font-medium mb-2">
                Submission
              </h3>
              <ul className="text-white/90 font-Helvetica space-y-2">
                <li>• Click the Submit button when you're ready to end the test</li>
                <li>• Unanswered questions will be marked as incorrect</li>
                <li>• Your results will be displayed immediately after submission</li>
              </ul>
            </div>
          </div>
        </div>


        <div className="px-6 py-4 border-t border-dullwhite/55 flex justify-end">
          <button
            onClick={onStart}
            className="w-32 rounded-xl h-12 cursor-pointer text-white font-Helvetica bg-PrimaryGold hover:bg-yellow-600 transition-colors"
          >
            Start Test
          </button>
        </div>
      </div>
    </div>
  );
}