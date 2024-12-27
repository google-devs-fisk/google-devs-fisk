// animations.ts
export const cardAnimation = (delay: number) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  },
});

export const imageAnimation = (delay: number) => ({
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { delay: delay + 0.2, duration: 0.6 },
  },
});

export const contentAnimation = (delay: number) => ({
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: delay + 0.4, duration: 0.6 },
  },
});

export const staggeredAnimation = (delay: number) => ({
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: delay + 0.6 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  },
});
