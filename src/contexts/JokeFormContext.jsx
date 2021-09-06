import { createContext, useState } from "react";

export const JokeFormContext = createContext();

const JokeFormProvider = (props) => {
  const [example, setExample] = useState("example");

  return (
    <JokeFormContext.Provider value={{ example }}>
      {props.children}
    </JokeFormContext.Provider>
  );
};

export default JokeFormProvider;
