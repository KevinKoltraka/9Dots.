export const containerVariants = (delay = 0) => ({
  offscreen: {
    opacity: 0,
    y: 30,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200, // Increased stiffness for quicker motion
      damping: 8, // Reduced damping for less bounce
      duration: 0.3, // Shorter duration for faster transition
      delay,
    },
  },
});

export const tagVariants = {
  offscreen: {
    opacity: 0,
    y: 10,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200, // Increased stiffness
      damping: 8, // Reduced damping
      duration: 0.25, // Shorter duration for faster animation
    },
  },
};

export const titleVariants = {
  offscreen: {
    opacity: 0,
    y: 30,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 180, // Increased stiffness
      damping: 9, // Reduced damping
      duration: 0.35, // Shorter duration for quicker entrance
    },
  },
};

export const desVariants = {
  offscreen: {
    opacity: 0,
    y: 20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 170, // Increased stiffness
      damping: 10, // Reduced damping
      duration: 0.3, // Shorter duration for smoother effect
      delay: 0.05, // Slightly earlier trigger
    },
  },
};
