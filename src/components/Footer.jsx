import React from 'react';
    import { Container, Row, Col } from 'react-bootstrap';

    function Footer() {
      return (
        <footer style={{ backgroundColor: '#111', color: '#fff', padding: '50px 0', textAlign: 'center' }}>
          <Container>
            <Row>
              <Col md={12}>
                <p>&copy; {new Date().getFullYear()} FuturoTech. Todos los derechos reservados.</p>
                <div style={{ marginTop: '20px' }}>
                  <a href="/politica-privacidad" style={{ color: '#00ffff', margin: '0 15px', textDecoration: 'none' }}>Política de Privacidad</a>
                  <a href="/terminos-condiciones" style={{ color: '#00ffff', margin: '0 15px', textDecoration: 'none' }}>Términos y Condiciones</a>
                </div>
                <div style={{ marginTop: '20px' }}>
                  <a href="https://www.facebook.com/" style={{ color: '#00ffff', margin: '0 15px', textDecoration: 'none' }}>Facebook</a>
                  <a href="https://www.twitter.com/" style={{ color: '#00ffff', margin: '0 15px', textDecoration: 'none' }}>Twitter</a>
                  <a href="https://www.instagram.com/" style={{ color: '#00ffff', margin: '0 15px', textDecoration: 'none' }}>Instagram</a>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      );
    }

    export default Footer;