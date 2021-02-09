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
  StyledSocials,
  LocalDriveInfo,
  ChatroomInfo
} from './Home.styled';

// IMPORT MUI COMPONENTS
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// IMPORT INFOS IMAGES
import avignon from '../../images/avignon.jpg';
import localdrive from '../../images/LD-big-size.png';
import messenger from '../../images/messenger-theme.png';

// INFOS ARRAY
const infos = [
  { name: "Avignon", image: avignon, link: "#" },
  { name: "Local Drive", image: localdrive, link: "http://local-drive.fr/" },
  { name: "Chatroom", image: messenger, link: "https://messenger-new.herokuapp.com/"}
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
  let ldInfo = useRef(null);
  let messengerInfo = useRef(null);

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
              <LocalDriveInfo ref={el => (ldInfo = el)}>
                <h3>Local Drive.</h3>
                <p>
                  En Janvier 2020, j'ai l'idée et la volonté de créer
                  une plateforme de "Click & Collect" à destination
                  des producteurs et commerçants locaux. N'hésitez pas à visiter
                  l'application.
                </p>
              </LocalDriveInfo>
              <ChatroomInfo ref={el => (messengerInfo = el)}>
                <h3>Chatroom.</h3>
                <p>
                  Ce "Messenger-Like" est un réel défi tant
                  Front-End, avec l'utilisation
                  de ReactJS et les Styled-Components, que Back-End
                  avec l'utilisation de Socket.io pour l'échange de données
                  en temps réel. N'hésitez pas à visiter l'application.
                </p>
              </ChatroomInfo>
              <StyledProject>
                Infos:
                {infos.map(el => (
                  <span
                    key={el.name}
                    onMouseEnter={() => handleInfo(el.image, infoBackground, info, line1, line2, line3, ldInfo, el.name, messengerInfo)}
                    onMouseOut={() => handleInfoReturn(infoBackground, info, line1, line2, line3, ldInfo, el.name, messengerInfo)}
                  >
                    <a href={el.link}>
                      {el.name}
                    </a>
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
