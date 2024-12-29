/**
 * Framer Motion Animation Variants
 * A collection of reusable animation transitions for Projects page UI patterns.
 */

/**
 * Scale and fade animation - useful for background, modals, cards, or any element that needs
 * to scale up while fading in from center
 * Starting scale value (default: 0.7)
 */
export const scaleUpFadeIn = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.3, ease: "easeOut" },
};

/**
 * Slide up and fade animation - good for content reveals, tooltips, or floating elements
 * that enter from bottom
 * Starting Y offset in pixels (default: 200)
 */
export const slideUpFadeIn = {
  initial: { y: 200, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
};

/**
 * Directional slide animation - perfect for carousels, sliders, or side panels
 * Can slide in from either direction based on the direction parameter
 * Positive slides from right, negative from left
 * Slide distance in pixels (default: 200)
 */
export const carouselTransition = {
  initial: (direction: number) => ({
    x: direction * 200,
    opacity: 0,
  }),
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

/**
 * Staggered fade in animation - ideal for lists, grids, or any group of elements
 * that should appear sequentially
 * Delay between each child animation (default: 0.1)
 * Delay before animation starts (default: 0.3)
 */
export const staggeredFadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5, // Initial delay before animation starts
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.3, // Delay between each child animation
    },
  },
};
