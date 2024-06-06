import { useState } from "react";
import amrutam from "../../../../../assets/logoSmall.png";
import { RxCross2 } from "react-icons/rx";
import ProgressBar from "./ProgressBar";
import { IoArrowBackOutline } from "react-icons/io5";
const SelfAssessmentQuestions = () => {
  const [progress, setProgress] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    "What best describes your physical structure?",
    "How would you describe your diet?",
    "How do you usually sleep?",
    "How do you usually sleep?",
  ];

  const options = [
    "Slender, Light build, Active",
    "Medium build, Average activity",
    "Stocky build, Less active",
    "Stocky build, Less active",
  ];

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setProgress(((currentQuestionIndex + 1) / questions.length) * 100);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between py-10">
        <div>
          <img src={amrutam} alt="" />
        </div>
        <div className="font-semibold text-gray-400">
          <h1>Question 4/11</h1>
        </div>
        <div className="font-semibold text-gray-400">
          <h1 className="flex items-center gap-1">
            Finish Later
            <RxCross2 className="text-xl" />
          </h1>
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-xl tracking-wider">
          Mental Health Quiz
        </h1>
      </div>
      <div className="py-10">
        <ProgressBar progress={progress} />
        <p className="text-center mt-4">{progress}%</p>
      </div>

      <p className="flex items-center gap-2 text-lg font-semibold">
        <IoArrowBackOutline />
        Go Back
      </p>

      <p className="text-lg font-semibold text-gray-700">
        {questions[currentQuestionIndex]}
      </p>

      <div className="mt-4 space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            className="w-full py-2 border border-gray-300 rounded-lg text-center hover:bg-gray-100 transition">
            {option}
          </button>
        ))}
      </div>
      <button
        onClick={nextQuestion}
        className="mt-6 w-full bg-gray-300 text-gray-600 font-semibold py-2 px-4 rounded-lg transition"
        disabled={currentQuestionIndex >= questions.length}>
        Next Question
      </button>
    </div>
  );
};

export default SelfAssessmentQuestions;
