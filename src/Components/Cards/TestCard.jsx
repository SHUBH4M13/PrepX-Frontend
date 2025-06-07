import React from "react";
import { useNavigate } from "react-router";
import { ClockIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

export default function TestCard(props) {
  const Navigate = useNavigate();

  function GoToTestMCQ() {
    Navigate(`/${props.examCode}`);
  }

  return (
    <div className="p-4 w-[370px] h-[330px]  duration-300 flex flex-col items-center rounded-xl bg-Secondarybg border-Secondarybg/55 hover:scale-105 hover:border-hovergold border-[2px] ">
      <div className="py-3 px-4 flex justify-between items-center w-full">
        <h3 className="hidden">{props.ExamCode}</h3>
        <h3 className="text-white font-medium text-lg">{props.ExamName}</h3>
        <div className="rounded-2xl bg-PrimaryGold text-white px-3 py-1">
          <p className="text-sm">{props.tag}</p>
        </div>
      </div>

      <div className="px-4 py-3">
        <p className="text-dullwhite">{props.desc}</p>
      </div>

      <div className="flex flex-col gap-3 w-full px-4">
        <div className="flex items-center gap-3">
          <QuestionMarkCircleIcon className="size-6 text-PrimaryGold" />
          <p className="text-dullwhite">{props.Questions} Questions</p>
        </div>
        <div className="flex items-center gap-3">
          <ClockIcon className="size-6 text-PrimaryGold" />
          <p className="text-dullwhite">{props.Duration}</p>
        </div>
      </div>


      <div className="mt-6 w-full flex justify-center px-4">
        <button
          type="button"
          onClick={GoToTestMCQ}
          className="bg-PrimaryGold text-black font-semibold py-2 px-6 rounded-lg 
            hover:bg-yellow-500 transition-all duration-300 w-full md:w-auto cursor-pointer"
        >
          Start Test
        </button>
      </div>
    </div>
  );
}
