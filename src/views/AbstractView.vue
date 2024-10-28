<template>
  <section id="abstract-section">
    <div class="abstract-section__left">
      <div id="abstract-left-img" class="img-container">
        <img src="../assets/images/sideHuman.webp" alt="My dev side" />
      </div>
      <div class="dev-title">DEV</div>
      <div class="dev-description">
        <div>
          Frontend, Backend? I enjoy working in both. I'm an active Linux user, interested in the
          field of simulation and graphics.
        </div>
      </div>
    </div>
    <div class="abstract-section__right">
      <div id="abstract-right-img" class="img-container">
        <img src="../assets/images/sideRobot.webp" alt="My design side" />
      </div>
      <div class="design-title">DESIGN</div>
      <div class="design-description">
        <div>
          I have also worked as a Graphic Design freelancer, which gives me good intuition to design
          and develop good-looking UI and UX.
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

onMounted(() => {
  const leftImgContainer = document.getElementById('abstract-left-img')
  const rightImgContainer = document.getElementById('abstract-right-img')
  leftImgContainer.style = '--hide: 100%;'
  rightImgContainer.style = '--hide: -100%;'

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#abstract-section',
      start: 'top+=1px top',
      end: 'bottom-=10px bottom',
      invalidateOnRefresh: true,
      once: true,
      scrub: false,
      onEnter: (self) => {
        leftImgContainer.style = ''
        rightImgContainer.style = ''
      }
    }
  })
})
</script>
<style scoped>
#abstract-section {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
}

.abstract-section__left,
.abstract-section__right {
  overflow: hidden;
  position: relative;
  width: 50%;
  display: flex;
  align-items: end;
}

.abstract-section__left {
  justify-content: right;
}

#abstract-section .img-container {
  height: 85vh;
  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 2s;
  z-index: 100;
}

#abstract-section .img-container img {
  height: 100%;
  object-fit: contain;
}

.abstract-section__right .img-container {
  transform: translateX(var(--hide, -35%));
}
.abstract-section__left .img-container {
  transform: translateX(var(--hide, 25%));
}
.abstract-section__left .img-container:hover {
  transform: translate(10%);
}
.abstract-section__right .img-container:hover {
  transform: translate(-20%);
}

#abstract-section .dev-description,
#abstract-section .design-description,
#abstract-section .dev-title,
#abstract-section .design-title {
  position: absolute;
}

#abstract-section .dev-title,
#abstract-section .design-title {
  font-family: 'Avigea';
  font-size: 9rem;
  bottom: 10%;
}
#abstract-section .dev-title {
  left: 45%;
  transform: translate(-50%);
}
#abstract-section .design-title {
  left: 55%;
  transform: translate(-50%);
}

#abstract-section .dev-description {
  font-size: 1.5rem;
  width: 20ch;
  border-left: 2px solid var(--dark-green);
  padding-left: 1ch;
  transform: translate(-50%);
  left: 45%;
  top: 30%;
}
#abstract-section .design-description {
  font-size: 1.5rem;
  width: 20ch;
  border-left: 2px solid var(--dark-green);
  padding-left: 1ch;
  transform: translate(50%);
  right: 40%;
  top: 30%;
}

@media only screen and (max-width: 1600px) {
  #abstract-section .dev-title,
  #abstract-section .design-title {
    font-size: 6.5rem;
  }
}
@media only screen and (max-width: 1460px) {
  .abstract-section__left,
  .abstract-section__right {
    width: 100%;
  }
  #abstract-section .dev-title,
  #abstract-section .design-title {
    font-size: 9rem;
  }
  #abstract-section {
    display: block;
    height: auto;
  }
}
@media only screen and (max-width: 900px) {
  .abstract-section__left,
  .abstract-section__right {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #abstract-section .dev-title,
  #abstract-section .design-title {
    font-size: 7rem;
    bottom: 50%;
  }

  #abstract-section .dev-title {
    transform: rotateZ(-90deg) translateY(-50%);
    left: 20%;
  }
  #abstract-section .design-title {
    transform: rotateZ(-90deg) translateY(50%);
    right: 20%;
  }
  .abstract-section__left .img-container,
  .abstract-section__right .img-container {
    transform: translate(50%);
    width: 65%;
    height: fit-content;
    overflow: visible;
  }
  .abstract-section__right .img-container {
    transform: translate(-50%);
  }
  #abstract-section .abstract-section__left .img-container img,
  #abstract-section .abstract-section__right .img-container img {
    width: 100%;
  }

  #abstract-section .dev-description,
  #abstract-section .design-description {
    width: 70%;
    position: static;
    transform: none;
    margin-right: 20%;
    margin-left: 20%;
    margin: 5rem 20%;
  }

  #abstract-section .abstract-section__left .img-container:hover {
    transform: translate(50%);
  }
  #abstract-section .abstract-section__right .img-container:hover {
    transform: translate(-50%);
  }
}
</style>
