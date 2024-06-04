// import bg from '../../assets/QuestionnaireBg.png'
const QuestionnaireHero = () => {
  return (
    <div>
      <div className="h-52  bg-[url('./assets/QuestionnaireBg.png')] bg-cover bg-center bg-no-repeat">
        <div className="flex justify-center items-center text-center h-full gap-2">
          <div className="">
            <h1 className="text-center font-medium md:text-2xl">
              Search Topics
            </h1>
            <input
              type="text"
              placeholder="Search eg. Dosha Quiz, Mental Health etc"
              className="md:mt-4 mt-2 lg:w-[350px]  px-5 py-[8px] rounded-lg text-sm"
            />
          </div>
          <div>
            <h1 className="text-center font-medium md:text-2xl">Select Type</h1>
            <input
              type="text"
              placeholder="Select Questionnaire Type"
              className="md:mt-4 mt-2 px-5 lg:w-[250px] py-[8px] text-sm rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireHero;
