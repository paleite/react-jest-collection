import { useState } from "react";

const INITIAL_VALUE = "";

const InputField: React.FunctionComponent = () => {
  const [inputValue, setInputValue] = useState(INITIAL_VALUE);

  return (
    <input
      placeholder="First Name"
      type="text"
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
    />
  );
};

export { InputField };
