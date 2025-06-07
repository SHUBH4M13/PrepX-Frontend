import React from "react";

export default function ExamCard(props) {
  return (
    <div className=" cursor-pointer w-[250px] md:w-[300px] lg:w-[350px] rounded-lg overflow-hidden relative group animate-fadeInUp">
      <div className="absolute inset-0 bg-gradient-to-b from-[#D4A017]/20 to-[#4D5D53]/70 opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>

      <div className="border-2 border-neutral-800 group-hover:border-[#D4A017] transition-colors duration-300 h-full">
        <div className="relative p-6 h-full flex flex-col bg-neutral-800/50 group-hover:bg-neutral-800/80 transition-all duration-300">
          
          <div className="bg-neutral-900/50 group-hover:bg-[#4D5D53]/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 transition-all duration-300 transform group-hover:scale-110">
            <span className="text-lg font-bold text-[#D4A017]">{props.title}</span>
          </div>

          <h3 className="text-xl font-bold mb-2 text-white">{props.subtitle}</h3>

          <p className="text-gray-300 mb-4 flex-grow">{props.description}</p>

          <div className="flex justify-between items-center">
            <span className="text-sm text-[#D4A017]">{props.mockTests} Mock Tests</span>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#D4A017]/20 text-[#D4A017] group-hover:bg-[#D4A017] group-hover:text-neutral-900 transition-colors duration-300">
              ➜
            </button>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-1 bg-neutral-700">
            <div className="h-full bg-[#D4A017] w-0 group-hover:w-full transition-all duration-700"></div>
          </div>

        </div>
      </div>
    </div>
  );
}
