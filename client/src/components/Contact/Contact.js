import React, { useRef, useState } from 'react';

// IMPORT STYLED COMPONENTS
import { Container, Left, Phone, Email, Round, StyledContact, StyledFormContainer, StyledForm } from './Contact.styled';

// IMPORT GSAP & ANIMATIONS
import { gsap } from 'gsap';
import { handleRound, handleRoundReturn } from './Contact.animation';

// IMPORT MUI COMPONENTS
import TextField from '@material-ui/core/TextField';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Contact = () => {
  let round = useRef(null);
  let left = useRef(null);
  let container = useRef(null);
  let contact = useRef(null);
  let title = useRef(null);
  const [isDeployed, setDeploy] = useState({ initial: false, clicked: null});

  const toggleRound = () => {
    if((isDeployed.initial === false && isDeployed.clicked === null) || (isDeployed.initial === false && isDeployed.clicked === true)) {
      handleRound(round, left, container, contact, title);
      setDeploy({ initial: !isDeployed.initial, clicked: true });
    } else if(isDeployed.initial === true){
      handleRoundReturn(round, left, container, contact, title);
      setDeploy({ initial: !isDeployed.initial, clicked: true });
    }
  };
  return (
    <Container ref={el => (container = el)}>
      <Left ref={el => (left = el)}>
        <p ref={el => (title = el)}>Contactez-moi</p>
        <Phone>
          <PhoneIcon />
          <span>06.17.13.01.61</span>
        </Phone>
        <Email>
          <EmailIcon />
          <a href="mailto: david.chmarzynski@gmail.com">david.chmarzynski@gmail.com</a>
        </Email>
      </Left>
      <StyledContact ref={el => (contact = el)}>
        <Round ref={el => (round = el)} onClick={toggleRound}>
          <ArrowBackIcon />
        </Round>
        <StyledFormContainer>
          <StyledForm>
          <TextField label="Votre nom"/>
          <TextField label="Votre email"/>
          <TextField
            id="standard-multiline-static"
            label="Votre message"
            multiline
            rows={2}
          />
          <button>ENVOYER</button>
          </StyledForm>
        </StyledFormContainer>
      </StyledContact>
    </Container>
  );
};

export default Contact;