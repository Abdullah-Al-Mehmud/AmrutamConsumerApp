import { useLoaderData, useParams } from "react-router-dom";
import WhyQuestionnaire from "../../WhyQuestionnaire";
import QuestionnaireHero from "../../QuestionnaireHero";
import AyurvedaCards from "./AyurvedaCards";

const QuestionnaireSingleCard = () => {
  const cards = useLoaderData();

  const { id } = useParams();
  const idInt = parseInt(id);
  const cardDetails = cards.find((card) => card?.id === idInt);

  return (
    <div>
      <QuestionnaireHero />
      <WhyQuestionnaire />
      <AyurvedaCards cardDetails={cardDetails} />
    </div>
  );
};

export default QuestionnaireSingleCard;
