export const enter = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};
export const lineEnter = {
  hidden: {
    width: "0%",
  },
  show: {
    width: "100%",
    left: "0%",
    transition: {
      duration: 1.25,
      ease: "easeInOut",
    },
  },
};
