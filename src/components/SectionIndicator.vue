<template>
  <h2 id="section-indicator" :data-theme="INDICATOR_THEME">
    <span id="section-indicator__text"></span>
    <span id="section-indicator__next-text"></span>
  </h2>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import SplitType from 'split-type'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { debounce } from '@/utils/Debounce'

const INDICATOR_THEME = ref('dark')
const CURRENT_TEXT = ref('')
const TEXT_DOM = ref()
const NEXT_TEXT_DOM = ref(null)

const executeAnimation = debounce((section) => {
  if (CURRENT_TEXT.value === section.text) return
  CURRENT_TEXT.value = section.text
  changeTextAnimation(section.text, section.theme)
}, 1000)

onMounted(() => {
  TEXT_DOM.value = document.getElementById('section-indicator__text')
  NEXT_TEXT_DOM.value = document.getElementById('section-indicator__next-text')

  props.sections.forEach((section) => {
    ScrollTrigger.create({
      start: section.start ? section.start : 'top+=1px top',
      end: section.end ? section.end : 'bottom-=10px bottom',
      trigger: section.id,
      invalidateOnRefresh: true,
      markers: true,
      onEnter: () => {
        executeAnimation(section)
      },
      onEnterBack: () => {
        executeAnimation(section)
      }
    })
  })
})

const props = defineProps({
  sections: {
    type: Array,
    required: true,
    default: () => []
  }
})

function setText(HTMLelement, text) {
  HTMLelement.textContent = text
}

function changeTextAnimation(text, theme) {
  setText(NEXT_TEXT_DOM.value, text)

  const splitInstance = new SplitType('#section-indicator__text')
  const nextSplitInstance = new SplitType('#section-indicator__next-text')

  let tl = gsap.timeline({ paused: true })

  tl.to(
    splitInstance.chars,
    {
      yPercent: -100,
      stagger: 0.05,
      duration: 0.3
    },
    0
  )
  tl.add(() => {
    INDICATOR_THEME.value = theme
  }, '+=0.1')
  tl.to(
    nextSplitInstance.chars,
    {
      yPercent: -100,
      stagger: 0.05,
      duration: 0.3
    },
    '+=0.1'
  )
  tl.set(TEXT_DOM.value, { visibility: 'hidden' })
  tl.add(() => {
    splitInstance.revert()
    setText(TEXT_DOM.value, text)
  }, '+=0.1')
  tl.set(TEXT_DOM.value, { visibility: 'visible' })
  tl.add(() => {
    nextSplitInstance.revert()
  })

  tl.call(() => {
    tl.kill
  })

  tl.play()
}
</script>
<style scoped>
#section-indicator {
  position: fixed;
  top: 1ch;
  width: 100%;
  height: 3.5rem;

  z-index: 2000;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  padding-left: 4ch;

  overflow: hidden;
}

#section-indicator * {
  font-family: 'Avigea';
  font-size: 2.5rem;
  line-height: 1.5;
  transition: all 0.5 ease;
}

[data-theme='dark'] * {
  color: var(--dark-geen);
}
[data-theme='light'] * {
  color: var(--white);
}

#section-indicator span {
  font-kerning: none; /* Recommend from Split Type library */
}
@media only screen and (max-width: 650px) {
  #section-indicator {
    display: none;
  }
}
</style>
