import React, { useRef } from 'react';

// IMPORT GSAP & ANIMATIONS
import { gsap } from 'gsap';
import { handleInfo ,handleInfoReturn } from './Home.animation';

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

const Home = () => {
  // REFS
  let infoBackground = useRef(null);
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);

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
                    <Link to="/technos">
                      Technos.
                    </Link>
                  </StyledLi>
                  <StyledLi>
                    <Link to="/roadmap">
                      Roadmap.
                    </Link>
                  </StyledLi>
                  <StyledLi>
                    <Link to="/contact">
                      Contact.
                    </Link>
                  </StyledLi>
                </StyledUl>
              </StyledNav>
              <StyledInfo>
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
