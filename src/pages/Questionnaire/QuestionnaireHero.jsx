import { IoArrowForwardSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useContext } from "react";
import { QuestionnaireContext } from "../../Context/QuestionnaireContext/QuestionnaireProvider";
const QuestionnaireHero = () => {
  const { setSelectedType } = useContext(QuestionnaireContext);
  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };
  return (
    <div>
      <div className="h-52  bg-[url('./assets/QuestionnaireBg.png')] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col md:flex-row justify-center items-center text-center h-full">
          <div className=" pt-6">
            <h1 className="text-center font-medium md:text-2xl">
              Search Topics
            </h1>
            <div className="relative px-4  ">
              <IoArrowForwardSharp className="absolute right-7 md:top-2/3 top-6 text-lg transform -translate-y-1/2 bg-white w-5" />
              <input
                type="text"
                placeholder="Search eg. Dosha Quiz, Mental Health etc"
                className="md:mt-4 mt-2 lg:w-96 w-72 px-5 py-[8px] rounded-lg md:text-sm text-xs outline-none border-[1.5px] border-[#cdcdcd]"
              />
            </div>
          </div>
          <div className=" pt-1">
            <h1 className="text-center font-medium md:text-2xl mt-5">
              Select Type
            </h1>
            <div className="relative px-4">
              <IoIosArrowDown className="absolute right-5 md:top-2/3 top-6 text-lg transform -translate-y-1/2 bg-white w-5" />
              <select
                onChange={handleTypeChange}
                type="text"
                placeholder="Select Questionnaire Type"
                className="md:mt-4 mt-2 px-5 lg:w-60 w-72 text-gray-400 py-[8px] md:text-sm text-xs rounded-lg outline-none border-[1.5px] border-[#cdcdcd]">
                <option disabled defaultValue>
                  Select Questionnaire Type
                </option>
                <option value="All">All</option>
                <option value="Self Assessment">Self Assessment</option>
                <option value="Trivia">Trivia</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireHero;
