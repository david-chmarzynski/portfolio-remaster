import React from 'react';

// IMPORT STYLED COMPONENTS
import { Container, Tracer, Fundamentals, Line, Advanced, Data, Ecosystem } from './Roadmap.styled';

// IMPORT GSAP & ANIMATIONS
import { gsap } from 'gsap';
import {  } from './Roadmap.animation';

// IMPORT DATAS
import { basics, advanced, ecosys } from './Roadmap.data';

const Roadmap = () => {
  return (
    <Container>
      <p>Roadmap</p>
      <Line />
      <Tracer />
      <Fundamentals>
        <span>Fondamentaux</span>
      </Fundamentals>
      <Advanced>
        <span>Avancés</span>
      </Advanced>
      <Ecosystem>
        <span>Ecosystèmes</span>
      </Ecosystem>
      {basics.map(basic => (
        <Data status={basic.status} x={basic.x} y={basic.y} index={basic.index}>
          {basic.name}
        </Data>
      ))}
      {advanced.map(ad => (
        <Data status={ad.status} x={ad.x} y={ad.y} index={ad.index} >
          {ad.name}
        </Data>
      ))}
      {ecosys.map(eco => (
        <Data status={eco.status} x={eco.x} y={eco.y} index={eco.index} >
          {eco.name}
        </Data>
      ))}

    </Container>
  );
};

export default Roadmap;
