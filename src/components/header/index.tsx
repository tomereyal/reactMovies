import React from "react";
import Row from "react-bootstrap/Row";

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
      <div className={containerClass}>
        <h1 className={headerClass}>{text}</h1>
      </div>
    </Row>
  );
}
