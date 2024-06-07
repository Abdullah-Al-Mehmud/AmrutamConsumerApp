import { createContext, useState } from "react";

export const QuestionnaireContext = createContext();

export const QuestionnaireProvider = ({ children }) => {
  const [selectedType, setSelectedType] = useState("All");

  return (
    <QuestionnaireContext.Provider value={{ selectedType, setSelectedType }}>
      {children}
    </QuestionnaireContext.Provider>
  );
};
