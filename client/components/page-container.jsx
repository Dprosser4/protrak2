import React from 'react';
import { Container, Row } from 'react-bootstrap';

export default function PageContainer({ children }) {
  return (
    <Container fluid>
      <Row className="row justify-content-center mt-3">
        {children}
      </Row>
    </Container>
  );
}
