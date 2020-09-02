import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
// import { Form, FormGroup, Label, Input, FormText } from 'react-bootstrap';

export interface IPropsColorChanger {
  componentFunction: Function;
}

export default function ColorChanger(props: IPropsColorChanger) {
  const [currentInputValue, setValue] = useState("");
  return (





    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Star Color</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Which color?"
        aria-label="Which color?"
        aria-describedby="basic-addon1"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={currentInputValue}
      />
      <Button
        onClick={() => {
          props.componentFunction(currentInputValue);
        }}
      >
        Change
      </Button>
    </InputGroup>
  );
}
