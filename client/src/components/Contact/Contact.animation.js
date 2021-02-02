import gsap from 'gsap';

export const handleRound = (round, left, container, contact, title) => {
  gsap.to(round, {
    duration: .4,
    rotate: 180
  });
  gsap.to(title, {
    duration: .4,
    display: "none"
  });
  gsap.to(left, {
    duration: .3,
    width: "0%"
  });
  gsap.fromTo(container, {
    duration: .4,
    width: "50%"
  }, {
    duration: .4,
    width: "20%"
  });
  gsap.to(contact, {
    duration: .2,
    width: "100%"
  });
};

export const handleRoundReturn = (round, left, container, contact, title) => {
  gsap.to(round, {
    duration: .4,
    rotate: 0
  });
  gsap.to(title, {
    duration: .4,
    display: "block"
  });
  gsap.to(left, {
    duration: .4,
    width: "58%"
  });
  gsap.to(container, {
    duration: .4,
    width: "50%"
  });
  gsap.to(contact, {
    duration: .4,
    width: "42%"
  });
};