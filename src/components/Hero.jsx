import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundColor: "#111", color: "#fff", padding: "100px 0" }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4" style={{ color: "#00ffff" }}>
              Bienvenido al Futuro
            </h1>
            <p className="lead">
              Explora las innovaciones que transformarán el mañana.
            </p>
            <Button variant="outline-info" size="lg">
              Descubre Más
            </Button>
          </Col>
          <Col md={6}>
            {/* Puedes agregar una imagen o video aquí */}
            <div
              style={{
                height: "300px",
                backgroundColor: "#222",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ color: "#fff" }}>Imagen/Video Futurista</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
