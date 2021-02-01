import React, { useEffect, useRef } from 'react';

// IMPORT GSAP & ANIMATIONS
import { gsap } from 'gsap';
import { handleInfo, handleInfoReturn, staggerReveal, staggerRevealClose, staggerText, fadeInUp, handleHover, handleHoverExit } from './Home.animation';

// IMPORT ROUTER
import { Link } from 'react-router-dom';

// IMPORT STYLED COMPONENTS
import {
  StyledHome,
  StyledSecondaryBackground,
  StyledMenuLayer,
  StyledInfoBackground,
  StyledContainer,
  StyledWrapper,
  StyledMenuLinks,
  StyledNav,
  StyledUl,
  StyledLi,
  StyledInfo,
  StyledProject,
  StyledSocials
} from './Home.styled';

// IMPORT MUI COMPONENTS
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// IMPORT INFOS IMAGES
import avignon from '../../images/avignon.jpg';
import localdrive from '../../images/LD-big-size.png';

// INFOS ARRAY
const infos = [
  { name: "Avignon", image: avignon },
  { name: "Local Drive", image: localdrive }
];

const Home = ({ state }) => {
  // REFS
  let infoBackground = useRef(null);
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let info = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);

  // USE EFFECT
  useEffect(() => {
    // MENU IS OPENED, WANT TO CLOSE IT
    if (state.initial === false) {
      staggerRevealClose(reveal2, reveal1);
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (state.initial === true) {
      // MENU IS CLOSED, WANT TO OPEN IT
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  return (
    <StyledHome ref={el => (menuLayer = el)}>
      <StyledSecondaryBackground ref={el => (reveal1 = el)}>

      </StyledSecondaryBackground>
      <StyledMenuLayer ref={el => (reveal2 = el)}>
        <StyledInfoBackground ref={el => (infoBackground = el)}>

        </StyledInfoBackground>
        <StyledContainer>
          <StyledWrapper>
            <StyledMenuLinks>
              <StyledNav>
                <StyledUl>
                  <StyledLi>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line1 = el)}
                      to="/technos"
                    >
                      Technos.
                    </Link>
                  </StyledLi>
                  <StyledLi>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line2 = el)}
                      to="/roadmap"
                    >
                      Roadmap.
                    </Link>
                  </StyledLi>
                  <StyledLi>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line3 = el)}
                      to="/contact"
                    >
                      Contact.
                    </Link>
                  </StyledLi>
                </StyledUl>
              </StyledNav>
              <StyledInfo ref={el => (info = el)}>
                <h3>A propos.</h3>
                <p>
                  Développeur web Javascript, spécialisé dans
                  l'utilisation du framework ReactJS, je possède
                  également des compétences en NodeJS.
                  Retrouvez mes différents projets ci-dessous.
                </p>
              </StyledInfo>
              <StyledProject>
                Infos:
                {infos.map(el => (
                  <span
                    key={el.name}
                    onMouseEnter={() => handleInfo(el.image, infoBackground)}
                    onMouseOut={() => handleInfoReturn(infoBackground)}
                  >
                    {el.name}
                  </span>
                ))}
              </StyledProject>
              <StyledSocials>

              </StyledSocials>
            </StyledMenuLinks>
          </StyledWrapper>
        </StyledContainer>
      </StyledMenuLayer>
    </StyledHome>
  );
};

export default Home;
