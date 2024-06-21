import './assets/styles/03-main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// ANIMATION LIBRARY
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { useLenisStore } from './stores/lennis'

// GSAP INITIALIZATION
gsap.registerPlugin(ScrollTrigger, TextPlugin)

// APP CREATION
const app = createApp(App)

app.use(createPinia())

app.mount('#app')

const lenisStore = useLenisStore()
lenisStore.initializeLenis()
