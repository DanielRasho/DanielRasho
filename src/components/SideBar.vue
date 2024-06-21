<template>
  <nav>
    <a v-for="link in links" :key="link.id" @click="handleScrollTo(link.id)">
      <span :style="`--content: \'${link.text}\';`">
        {{ link.text }}
      </span>
    </a>
  </nav>
</template>
<script setup>
import { useLenisStore } from '@/stores/lennis'

const lennis = useLenisStore()

const props = defineProps({
  links: {
    type: Array,
    required: true,
    default: () => []
  }
})

function handleScrollTo(element) {
  lennis.scrollTo(element)
}
</script>

<style>
nav {
  position: fixed;
  width: 100vh;
  top: 100%;
  z-index: 1000;
  transform-origin: top left;
  transform: rotate(-90deg);
  padding: 0.8rem 2rem;

  display: flex;
  align-items: center;
  justify-content: start;

  transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);

  mix-blend-mode: hard-light;
}

nav * {
  font-family: 'IBM Plex Mono';
}

nav a {
  display: inline-block;
  overflow: hidden;
  margin-right: 3ch;
  padding: 0.5rem 5ch 0.5rem 2ch;
}

nav a:hover {
  background-color: var(--darkest-green);
  clip-path: polygon(
    12px 0%,
    calc(100% + 1px) 0,
    calc(100% + 1px) calc(100% + 1px),
    0 calc(100% + 1px),
    0 12px
  );
}

nav a span {
  color: var(--darkest-green);
  display: inline-block;
  cursor: pointer;
  width: fit-content;
  text-align: center;
  position: relative;

  transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-delay: 0.1s;
}

nav a:hover span {
  color: var(--white);
  transform: translateY(200%);
}

nav a span::before {
  content: var(--content);
  position: absolute;
  left: 0;
  right: 0;
  transform: translateY(-200%);
}

@media only screen and (max-width: 650px) {
  nav {
    display: none;
  }
}
</style>
