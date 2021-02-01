import React from 'react';

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

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledWrapper>
          <StyledInnerHeader>
            <StyledLogo>
              DAVID CHMARZYNSKI
            </StyledLogo>
            <StyledMenu>
              <Link to='/'>
                <ArrowBackIosIcon />
              </Link>
            </StyledMenu>
          </StyledInnerHeader>
        </StyledWrapper>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;