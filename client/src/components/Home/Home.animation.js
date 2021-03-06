import gsap from 'gsap';

export const handleInfo = (city, target, info, line1, line2, line3, ldInfo, name, messengerInfo) => {
  gsap.to(target, {
    duration: 0,
    background: `url(${city}) center center`
  });
  gsap.to(target, {
    duration: 0.6,
    opacity: 1,
    ease: "power3.inOut"
  });
  gsap.from(target, {
    duration: 0.4,
    transformOrigin: "right top"
  });
  gsap.to(info, {
    duration: 0,
    display: "none",
    opacity: 0
  });
  gsap.to(line1, {
    duration: .4,
    opacity: 0
  });
  gsap.to(line2, {
    duration: .4,
    opacity: 0
  });
  gsap.to(line3, {
    duration: .4,
    opacity: 0
  });
  if (name === "Local Drive") {
    gsap.to(ldInfo, {
      duration: .5,
      display: "block",
      opacity: 1
    });
  } 
  if (name === "Chatroom") {
    gsap.to(messengerInfo, {
      duration: .5,
      display: "block",
      opacity: 1
    });
  }
};

// Removes the city image once you hover off
export const handleInfoReturn = (target, info, line1, line2, line3, ldInfo, name, messengerInfo) => {
  gsap.to(target, {
    duration: 0.4,
    opacity: 0,
  });
  gsap.to(info, {
    duration: 0.4,
    display: "block",
    opacity: 1
  });
  gsap.to(line1, {
    duration: .4,
    opacity: 1
  });
  gsap.to(line2, {
    duration: .4,
    opacity: 1
  });
  gsap.to(line3, {
    duration: .4,
    opacity: 1
  });
  if (name === "Local Drive") {
    gsap.to(ldInfo, {
      duration: 0,
      display: "none",
      opacity: 0
    });
  } 
  if (name === "Chatroom") {
    gsap.to(messengerInfo, {
      duration: 0,
      display: "none",
      opacity: 0
    });
  }
};


export const staggerReveal = (node1, node2) => {
  gsap.from([node1, node2], {
    duration: 0.8,
    height: 0,
    transformOrigin: "right top",
    skewY: 2,
    ease: "power3.inOut",
    stagger: {
      amount: 0.1
    }
  });
};

// CLOSE MENU
export const staggerRevealClose = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0.8,
    height: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.07
    }
  });
};

// STAGGER THE LINKS TO APPEAR
export const staggerText = (node1, node2, node3) => {
  gsap.from([node1, node2, node3], {
    duration: 0.8,
    y: 100,
    delay: 0.1,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3
    }
  });
};

// Fade up for the additonal info on our menu
export const fadeInUp = node => {
  gsap.from(node, {
    y: 60,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    ease: "power3.inOut"
  });
};

// Hover on the link
export const handleHover = e => {
  gsap.to(e.target, {
    duration: 0.3,
    y: 3,
    skewX: 4,
    ease: "power3.inOut"
  });
};

// Hover off the link
export const handleHoverExit = e => {
  gsap.to(e.target, {
    duration: 0.3,
    y: -3,
    skewX: 0,
    ease: "power3.inOut"
  });
};