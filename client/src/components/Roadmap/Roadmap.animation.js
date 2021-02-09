import gsap from 'gsap';

export const handleScrollFundamentals = (container, data) => {
  gsap.to(data, {
    scrollTrigger: {
      trigger: container,
      // markers: true,
      start: "top 750vh",
      end: "400px 400vh",
      toggleActions: "restart reverse restart reverse",
      // scrub: true
    },
    duration: 1,
    opacity: 1
  });
};

export const handleScrollAdvanced = (advancedSection, advancedData) => {
  gsap.to(advancedData, {
    scrollTrigger: {
      trigger: advancedSection,
      // markers: true,
      start: "top 750vh",
      end: "400px 400vh",
      toggleActions: "restart reverse restart reverse",
      // scrub: true
    },
    duration: 1,
    opacity: 1
  });
};

export const handleScrollEcosystem = (ecosystemSection, ecosystemData) => {
  gsap.to(ecosystemData, {
    scrollTrigger: {
      trigger: ecosystemSection,
      // markers: true,
      start: "top 750vh",
      end: "400px 400vh",
      toggleActions: "restart reverse restart reverse",
      // scrub: true
    },
    duration: 1,
    opacity: 1
  });
};