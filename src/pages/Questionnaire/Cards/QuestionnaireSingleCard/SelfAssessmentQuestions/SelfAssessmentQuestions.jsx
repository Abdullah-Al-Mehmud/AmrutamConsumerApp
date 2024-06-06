import { useState, useEffect } from "react";
import amrutam from "../../../../../assets/logoSmall.png";
import { RxCross2 } from "react-icons/rx";
import ProgressBar from "./ProgressBar";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SelfAssessmentQuestions = () => {
  const [progress, setProgress] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const questions = [
    {
      question: "What best describes your physical structure?",
      options: [
        "Slender, Light build, Active",
        "Medium build, Average activity",
        "Stocky build, Less active",
      ],
    },
    {
      question: "How would you describe your diet?",
      options: [
        "Balanced with fruits and vegetables",
        "High protein and low carb",
        "Mostly fast food and snacks",
      ],
    },
    {
      question: "How do you usually sleep?",
      options: [
        "Deep and restful",
        "Interrupted and light",
        "Short and insufficient",
      ],
    },
    {
      question: "What is your usual energy level throughout the day?",
      options: [
        "High and consistent",
        "Fluctuates with energy drops",
        "Low and tired often",
      ],
    },
  ];

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setProgress(((currentQuestionIndex + 1) / questions.length) * 100);
      setSelectedOption(null); // Clear the selected option for the next question
    } else {
      setProgress(100); // Set progress to 100% on the last question
    }
  };

  useEffect(() => {
    if (progress === 100) {
      navigate("/selfAssessmentResult");
    }
  }, [progress, navigate]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between py-10">
        <div>
          <img src={amrutam} alt="Logo" />
        </div>
        <div className="font-semibold text-gray-400">
          <h1>{`Question ${currentQuestionIndex + 1}/${questions.length}`}</h1>
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
        <p className="text-center mt-4">{Math.round(progress)}%</p>
      </div>

      <p className="flex items-center gap-2 text-lg font-semibold">
        <IoArrowBackOutline />
        Go Back
      </p>

      <p className="text-lg font-semibold text-gray-700">
        {questions[currentQuestionIndex]?.question}
      </p>

      <div className="mt-4 space-y-2">
        {questions[currentQuestionIndex]?.options?.map((option, index) => (
          <button
            key={index}
            className={`w-full py-2 border border-gray-300 rounded-lg text-center hover:bg-gray-100 transition ${selectedOption === option ? "bg-gray-200" : ""}`}
            onClick={() => setSelectedOption(option)}>
            {option}
          </button>
        ))}
      </div>
      <button
        onClick={nextQuestion}
        className={`mt-6 w-full font-semibold py-2 px-4 rounded-lg transition ${!selectedOption ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-green-500 text-white"}`}
        disabled={!selectedOption}>
        {currentQuestionIndex >= questions.length
          ? "Complete Quiz"
          : "Next Question"}
      </button>
    </div>
  );
};

export default SelfAssessmentQuestions;
