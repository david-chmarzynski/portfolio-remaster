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

const Header = ({ history }) => {
  // HOME STATE
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Home"
  });

  // RETURN BUTTON STATE
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    history.listen(() => {
      setState({ initial: true, clicked: false, menuName: "Home"});
    });
  }, [history]);

  // TOGGLE HOME
  const handleHome = () => {
    disableHome();
    if(state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close"
      });
    } else if(state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Home"
      });
    } else if(state.clicked === false) {
      setState({
        clicked: !state.clicked,
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
              {!state.clicked && (
                <Link to='/' disabled={disabled} onClick={handleHome}>
                  <ArrowBackIosIcon />
                </Link>
              )}
            </StyledMenu>
          </StyledInnerHeader>
        </StyledWrapper>
      </StyledContainer>
    </StyledHeader>
  );
};

export default withRouter(Header);