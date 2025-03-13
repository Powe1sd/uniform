import React from 'react';
    import { Container, Row, Col, Card } from 'react-bootstrap';

    function Features() {
      return (
        <section className="features" style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '80px 0' }}>
          <Container>
            <h2 className="text-center mb-5" style={{ color: '#00ffff' }}>Características Futuristas</h2>
            <Row>
              <Col md={4} className="mb-4">
                <Card style={{ backgroundColor: '#222', border: '1px solid #333' }}>
                  <Card.Body>
                    <Card.Title style={{ color: '#00ffff' }}>Inteligencia Artificial Avanzada</Card.Title>
                    <Card.Text>
                      Algoritmos de aprendizaje profundo para soluciones innovadoras.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card style={{ backgroundColor: '#222', border: '1px solid #333' }}>
                  <Card.Body>
                    <Card.Title style={{ color: '#00ffff' }}>Realidad Aumentada Inmersiva</Card.Title>
                    <Card.Text>
                      Experiencias interactivas que fusionan el mundo real y virtual.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card style={{ backgroundColor: '#222', border: '1px solid #333' }}>
                  <Card.Body>
                    <Card.Title style={{ color: '#00ffff' }}>Conectividad Hiperveloz</Card.Title>
                    <Card.Text>
                      Redes neuronales cuánticas para transferencia de datos instantánea.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      );
    }

    export default Features;