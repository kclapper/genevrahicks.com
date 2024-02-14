import { StrictMode, useState, useCallback } from "react";
import { createRoot } from 'react-dom/client';

import { Container, Row, Col } from "react-bootstrap";

import { Boggle } from 'koggle';

import PageContent from '../components/PageContent';
import { defaultSettings, Settings } from '../components/Settings';

export function Home() {
  const [variant, setVariant] = useState(defaultSettings.variant);

  const handleChange = useCallback((newSettings) => {
    setVariant(newSettings.variant);
  }, [setVariant]);

  return <StrictMode>
            <Container>
              <Row>
              <Col className="text-center text-danger display-1 align-middle d-flex align-items-center justify-content-center">
                ♥
              </Col>
              <Col>
                <Settings onChange={handleChange} />

                <h1 className="display-1 text-center mb-2 text-primary">
                  Boggle
                </h1>

                <Boggle variant={ variant } />

                <div className="text-end mt-4 mb-4 fst-italic fs-6 w-75">
                  - Happy Valentines Day baby, I love you
                </div>
              </Col>
              <Col className="text-center text-danger display-1 align-middle d-flex align-items-center justify-content-center">
                ♥
              </Col>
              </Row>
            </Container>
         </StrictMode>
}

createRoot(document.getElementById('app')).render(<Home />);
