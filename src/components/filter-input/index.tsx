import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface IPropsFilterInput {
  componentFunction: Function;
}

export default function FilterInput(props: IPropsFilterInput) {
  const [currentInputValue, setValue] = useState("");
  return (
    <Row>
      <Col>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Search-Bar</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Search"
            aria-label="Search"
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
            Search
          </Button>
        </InputGroup>
      </Col>
    </Row>
  );
}
