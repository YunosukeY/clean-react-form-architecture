import React from "react";
import TextField from "./form-libraries/react-hook-form/TextField";
import Form from "./form-libraries/react-hook-form/Form";
import { TextFieldContext } from "./form-ui/TextFieldContext";

function App() {
  return (
    <TextFieldContext.Provider value={TextField}>
      <Form />
    </TextFieldContext.Provider>
  );
}

export default App;
