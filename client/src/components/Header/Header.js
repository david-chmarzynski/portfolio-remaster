import React, { useEffect, useState } from 'react';

// IMPORT ROUTER
import { withRouter, Link } from 'react-router-dom';

// IMPORT STYLED COMPONENTS
import {
  StyledHeader,
  StyledContainer,
  StyledWrapper,
  StyledInnerHeader,
  StyledLogo,
  StyledMenu
} from './Header.styled';

// IMPORT MUI COMPONENTS
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const Header = ({ history, initial, clicked, menuName, handleSetState }) => {
  // RETURN BUTTON STATE
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    history.listen((location) => {
      if(location.pathname !== "/") {
        handleSetState({ initial: false, clicked: true, menuName: "Close"});
      }
    });
  }, [history, handleSetState]);

  // TOGGLE HOME
  const handleHome = () => {
    disableHome();
    // CASE HOME IS OPEN & NOT CLICKED (== HOMEPAGE)
    if(clicked === null && initial === true) {
      handleSetState({
        initial: false,
        clicked: true,
        menuName: "Close"
      });
    // CASE HOME IS CLOSED & CLICKED
    } else if(clicked === true && initial === false) {
      handleSetState({
        initial: true,
        clicked: true,
        menuName: "Home"
      });
    // CASE ALREADY CLICKED & HOME IS CLOSED
    } else if(clicked === true && initial === true) {
      handleSetState({
        initial: false,
        clicked: true,
        menuName: "Close"
      });
    }
  };

  // DETERMINE IF BUTTON IS DISABLED (TIMEOUT)
  const disableHome = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 800);
  };
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledWrapper>
          <StyledInnerHeader>
            <StyledLogo>
              DAVID CHMARZYNSKI
            </StyledLogo>
            <StyledMenu>
              {!initial && (
                <button disabled={disabled} onClick={handleHome}>
                <Link to='/'>
                  <ArrowBackIosIcon />
                </Link>
                </button>
              )}
            </StyledMenu>
          </StyledInnerHeader>
        </StyledWrapper>
      </StyledContainer>
    </StyledHeader>
  );
};

export default withRouter(Header);