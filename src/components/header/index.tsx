import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";

interface IpropsDynamicHeader {
  text: string;
  headerClass?: string;
  containerClass?: string;
}

export default function DynamicHeader({
  text,
  headerClass,
  containerClass,
}: IpropsDynamicHeader) {
  return (
    <Row>
      <Col>
        <div className={containerClass}>
          <h1 className={headerClass}>{text}</h1>
        </div>
      </Col>
    </Row>
  );
}
