import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Forum from "./pages/Forum";
import FindDoctors from "./pages/FindDoctors";
import About from "./pages/About";
import Questionnaire from "./pages/Questionnaire/Questionnaire";
import QuestionnaireSingleCard from "./pages/Questionnaire/Cards/QuestionnaireSingleCard/QuestionnaireSingleCard";
import SelfAssessmentQuestions from "./pages/Questionnaire/Cards/QuestionnaireSingleCard/SelfAssessmentQuestions/SelfAssessmentQuestions";
import SelfAssessmentResult from "./pages/Questionnaire/Cards/QuestionnaireSingleCard/SelfAssessmentQuestions/SelfAssessmentResult/SelfAssessmentResult";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/commune",
        element: <Forum />,
      },
      {
        path: "/questionnaire",
        element: <Questionnaire />,
      },
      {
        path: "/find-doctors",
        element: <FindDoctors />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/questionnaireSingleCard/:id",
        element: <QuestionnaireSingleCard />,
        loader: () => fetch("/QuestionnaireCards.json"),
      },
    ],
  },
  {
    path: "/selfAssessmentQuestions",
    element: <SelfAssessmentQuestions />,
  },
  {
    path: "/selfAssessmentResult",
    element: <SelfAssessmentResult />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
