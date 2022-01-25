export const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

export const fadeInVariants = {
  visible: {
    opacity: 1,
    transition: {
      ...transition,
      delay: 0.75,
    },
  },
  hidden: {
    opacity: 0,
  },
};