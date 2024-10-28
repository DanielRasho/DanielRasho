<template>
  <section id="projects-section">
    <div class="projects__line-container">
      <svg viewBox="0 0 722 816" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="">
        <path
          id="computer-path"
          d="M2946.56 4320v350.64s-12.6 211.35 66.3 221.21c78.89 9.86 88.54 13.81 0 31.77-88.56 17.95-271.5 39.8 24.34 72.67s616.34 110.12 154.49 118.34c-461.84 8.22-483.21 14.79-483.21 14.79"
          style="fill: none; stroke: #fffdf0; stroke-width: 4px"
          transform="matrix(1 0 0 .99999 -2705.658 -4317.17)"
          preserve-aspect-ratio="xMidYMax meet"
        />
      </svg>
    </div>
    <div class="projects__images">
      <div class="projects__computer-slideshow">
        <div class="pc-display">
          <div class="image-track" :style="itemIndexStyle">
            <div id="no-signal-overlay" class="image-item">
              <img src="../assets/images/noSignalOverlay.webp" alt="hello" />
            </div>
            <div class="image-item">
              <img src="../assets/images/Therapisttrack.webp" alt="hello" />
            </div>
            <div class="image-item">
              <img src="../assets/images/Therapisttrack.webp" alt="hello" />
            </div>
            <div class="image-item">
              <img src="../assets/images/Jlisp.webp" alt="hello" />
            </div>
            <div class="image-item">
              <img src="../assets/images/WireWiz.webp" alt="hello" />
            </div>
          </div>
        </div>
        <img class="pc-frame" src="../assets/images/computer.webp" alt="" />
      </div>
    </div>
    <div class="projects__info">
      <div class="info-track" :style="itemIndexStyle">
        <ProjectItem
          title="Therapisttrack"
          description="A medical records storage system. I'm the current project leader for this project under development."
          link="https://github.com/TherapistTrack/Therapisttrack-App"
        />
        <ProjectItem
          title="IAmHuman Bot"
          description="A Discord bot developed in Go and Vue for managing the CS community server in Universidad del Valle de Guatemala"
          link="https://github.com/ElrohirGT/Chessy"
        />
        <ProjectItem
          title="Lisp Interpreter"
          description="A small implementation of Lisp on Java supporting many operations, and capable of detecting syntax erros."
          link="https://github.com/DiegoLinares11/LISP-Project"
        />
        <ProjectItem
          title="Wire Wiz"
          description="A simulator for electrons flow through a wire. Made with Vue and love"
          link="https://github.com/DanielRasho/wireWiz"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue'
import ProjectItem from '@/components/ProjectItem.vue'
import ImportantButton from '@/components/ImportantButton.vue'
import { gsap } from 'gsap/gsap-core'
import ScrollTrigger from 'gsap/ScrollTrigger'

// STATE
const itemIndex = ref(0)

const itemIndexStyle = computed(() => {
  return `--project-index:${itemIndex.value};`
})

function getPathLength(SVGelement) {
  return SVGelement.getTotalLength()
}

// SVG UTILITY FUNCTION
function initSVGPath(SVGelement) {
  let pathLength = getPathLength(SVGelement)
  SVGelement.style.strokeDasharray = pathLength + ' ' + pathLength
  SVGelement.style.strokeDashoffset = pathLength
}

// ANIMATION
onMounted(() => {
  let computerPath = document.getElementById('computer-path')
  initSVGPath(computerPath)

  let overlay = document.getElementById('no-signal-overlay')

  ScrollTrigger.create({
    trigger: '#projects-section',
    start: 'top 80%',
    end: 'bottom bottom',
    scrub: true,
    invalidateOnRefresh: true,
    onUpdate: (self) => {
      let scrollPercentage = self.progress.toFixed(3)
      var drawLength = getPathLength(computerPath) * scrollPercentage
      computerPath.style.strokeDashoffset = getPathLength(computerPath) - drawLength
    }
  })
  ScrollTrigger.create({
    trigger: '#projects-section',
    end: 'bottom+=200% bottom',
    pin: true,
    scrub: true,
    onEnter: () => {
      overlay.style.visibility = 'hidden'
    },
    onUpdate: (self) => {
      if (self.progress.toFixed(2) == 0.0) {
        itemIndex.value = 0
      } else if (self.progress.toFixed(2) == 0.25) {
        itemIndex.value = 1
      } else if (self.progress.toFixed(2) == 0.5) {
        itemIndex.value = 2
      } else if (self.progress.toFixed(2) == 0.75) {
        itemIndex.value = 3
      }
    }
  })
})
</script>
<style>
/* SECTION STYLE */
#projects-section {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: var(--dark-green);
  display: flex;
  position: relative;
}

.projects__images,
.projects__info {
  position: relative;
  z-index: 1000;
  width: 50%;
}

/* SVG LINE DRW STYLE */
.projects__line-container {
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  z-index: 100;
}

.projects__line-container svg {
  display: inline-block;
  height: 70%;
  z-index: 100;
  transform: translateX(17%);
}

/* IMAGE CARROSEL STYLE */
.projects__images {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.projects__computer-slideshow {
  position: relative;
  width: 75%;
}

.projects__images .pc-frame {
  position: relative; /* Neccesary for frame be over slideshow */
  width: 100%;
  height: fit-content;
  object-fit: contain;
  z-index: 800;
}

.projects__images .pc-display {
  position: absolute;
  /** This measures come from calculating the proportions
  of the screen with respect to the pc frame */
  width: 62%;
  height: 42%;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);

  z-index: 100;
  overflow: hidden;
}

#projects-section .image-track {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  transition: transform cubic-bezier(0.165, 0.84, 0.44, 1) 1s;
  transform: translateY(calc(var(--project-index, 0) * -100%));
}
.image-track .image-item {
  min-width: 100%;
  min-height: 100%;
}
.image-track .image-item img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
#no-signal-overlay {
  position: absolute;
  height: 100%;
}

/* INFO STYLE */
.projects__info {
  padding-top: 5rem;
  overflow: hidden;
}

.projects__info .info-track {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform cubic-bezier(0.165, 0.84, 0.44, 1) 1s;

  transform: translateX(calc(var(--project-index, 0) * -100%));
}

/* MEDIA QUERIES */
@media only screen and (max-width: 1040px) {
  #projects-section {
    flex-direction: column;
    padding-top: 0;
  }
  #projects-section svg {
    display: none;
  }
  #projects-section .projects__images,
  #projects-section .projects__info {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .projects__info {
    padding-top: 2rem;
  }

  #projects-section .projects__images {
    padding-top: 2rem;
  }
}
</style>
