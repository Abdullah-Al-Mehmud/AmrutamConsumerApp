import ListOfCards from "./Cards/ListOfCards";
import QuestionnaireHero from "./QuestionnaireHero";
import WhyQuestionnaire from "./WhyQuestionnaire";

const Questionnaire = () => {
  return (
    <div>
      <QuestionnaireHero />
      <WhyQuestionnaire />
      <ListOfCards />
    </div>
  );
};

export default Questionnaire;
