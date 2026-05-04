/**
 * assets.ts — Centralized asset registry for GKPI Sinode website.
 *
 * All image paths are defined here so they can be updated in one place
 * when official assets are replaced. Components import from this file
 * instead of hardcoding paths directly.
 */

export const assets = {
  /**
   * Primary church logo.
   * File: /public/logo.png
   * Used in: Navbar, Footer
   */
  logo: "/logo.png",

  /**
   * Hero section background image.
   * File: /public/hero-bg.png
   * Used in: Hero, About section (secondary)
   */
  heroBg: "/hero-bg.png",

  /**
   * Hero Slideshow Images
   */
  slide1: "/hero_slide_1.png",
  slide2: "/hero_slide_2.png",
  slide3: "/hero_slide_3.png",
  slide4: "/hero_slide_4.png",
  slide5: "/hero_slide_5.png",
  slide6: "/hero_slide_6.png",
  slide7: "/hero_slide_7.png",

  /**
   * About section image (dedicated).
   * Replace with an interior/congregation photo when available.
   * Falls back to heroBg until official asset is provided.
   */
  aboutImg: "/hero-bg.png",

  /**
   * Placeholder for future images.
   * Structure below makes it easy to add more later.
   */
  // newsImg: "/images/news-placeholder.png",
  // bannerImg: "/images/banner.png",
} as const;

export type AssetKey = keyof typeof assets;
