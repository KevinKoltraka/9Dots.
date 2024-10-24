export const containerVariants = (delay = 0) => ({
  offscreen: {
    opacity: 0,
    y: 20, // Reduced y offset
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100, // Decreased stiffness for less bounce
      damping: 15, // Increased damping for smoother effect
      duration: 0.2, // Short duration for fast transition
      delay,
    },
  },
});

export const tagVariants = {
  offscreen: {
    opacity: 0,
    y: 5, // Reduced y offset
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100, // Decreased stiffness
      damping: 15, // Increased damping
      duration: 0.2,
    },
  },
};

export const titleVariants = {
  offscreen: {
    opacity: 0,
    y: 20, // Reduced y offset
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100, // Decreased stiffness
      damping: 15, // Increased damping
      duration: 0.2,
    },
  },
};

export const desVariants = {
  offscreen: {
    opacity: 0,
    y: 10, // Reduced y offset
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100, // Decreased stiffness
      damping: 15, // Increased damping
      duration: 0.2,
      delay: 0.02, // Minimal delay for quick trigger
    },
  },
};
