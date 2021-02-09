import React, { useEffect, useRef } from 'react';

// IMPORT STYLED COMPONENTS
import { Container, Tracer, Fundamentals, Line, Advanced, Data, Ecosystem, FundamentalsContainer, AdvancedContainer, EcosystemContainer, Legend, Round1, Round2, Round3 } from './Roadmap.styled';

// IMPORT GSAP & ANIMATIONS
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { handleScrollFundamentals, handleScrollAdvanced, handleScrollEcosystem } from './Roadmap.animation';

// IMPORT DATAS
import { basics, advanced, ecosys } from './Roadmap.data';

const Roadmap = () => {
  // REFS
  let container = useRef(null);
  let data = useRef(null);
  let advancedSection = useRef(null);
  let advancedData = useRef(null);
  let ecosystemSection = useRef(null);
  let ecosystemData = useRef(null);
  let tracer = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    handleScrollFundamentals(container, data);
    handleScrollAdvanced(advancedSection, advancedData);
    handleScrollEcosystem(ecosystemSection, ecosystemData);
  }, []);
  return (
    <Container>
      <p>Roadmap</p>
      <Legend>
        <div>
          <Round1 />
          Acquis
        </div>
        <div>
          <Round2 />
          En cours
        </div>
        <div>
          <Round3 />
          A faire
        </div>
      </Legend>
      <Line />
      <Tracer ref={el => (tracer = el)}/>
      <Fundamentals ref={el => (container = el)}>
        <span>Fondamentaux</span>
      </Fundamentals>
      <Advanced ref={el => (advancedSection = el)}>
        <span>Avancés</span>
      </Advanced>
      <Ecosystem ref={el => (ecosystemSection = el)}>
        <span>Ecosystèmes</span>
      </Ecosystem>
      <FundamentalsContainer ref={el => (data = el)}>
        {basics.map(basic => (
          <Data status={basic.status} x={basic.x} y={basic.y} index={basic.index}>
            {basic.name}
          </Data>
        ))}
      </FundamentalsContainer>
      <AdvancedContainer ref={el => (advancedData = el)}>
        {advanced.map(ad => (
          <Data status={ad.status} x={ad.x} y={ad.y} index={ad.index} >
            {ad.name}
          </Data>
        ))}
      </AdvancedContainer>
      <EcosystemContainer ref={el => (ecosystemData = el)}>
        {ecosys.map(eco => (
          <Data status={eco.status} x={eco.x} y={eco.y} index={eco.index} >
            {eco.name}
          </Data>
        ))}
      </EcosystemContainer>
    </Container>
  );
};

export default Roadmap;
