import { defineStore } from 'pinia'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Ensure GSAP plugins are registered
gsap.registerPlugin(ScrollTrigger)

export const useLenisStore = defineStore('lenis', {
  state: () => ({
    lenis: null
  }),
  actions: {
    initializeLenis() {
      this.lenis = new Lenis()

      // Register Lenis scroll event with ScrollTrigger update
      this.lenis.on('scroll', ScrollTrigger.update)

      // Integrate with GSAP ticker
      gsap.ticker.add((time) => {
        this.lenis.raf(time * 500)
      })

      // Disable lag smoothing
      gsap.ticker.lagSmoothing(0)
    },
    scrollTo(elementId) {
      this.lenis.scrollTo(elementId)
    }
  }
})
