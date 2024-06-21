<template>
  <section id="contacts-section">
    <div class="contacts-section__header">
      <div class="contacts-section__tv">
        <img src="@/assets/images/tv.webp" alt="" />
        <div>
          <span> Contact Me </span>
          <span id="contacts-header__typed-text"></span>
        </div>
      </div>
    </div>
    <footer class="contacts-section__footer">
      <div class="contacts-section__wrapper">
        <div class="contacts-section__category">
          <div><span>PRINCIPAL</span></div>
          <div class="category-links">
            <ContactLink
              text="Linkedln"
              href="https://www.linkedin.com/in/daniel-alfredo-rayo-rold%C3%A1n-38727a303/"
              icon-id="fa-solid fa-paperclip"
            />
            <ContactLink
              text="Mail"
              href="mailto: drayoroldan@gmail.com"
              icon-id="fa-solid fa-paperclip"
            />
            <ContactLink
              text="Github"
              href="https://github.com/DanielRasho"
              icon-id="fa-solid fa-paperclip"
            />
          </div>
        </div>
        <div class="contacts-section__category">
          <div><span>OTHERS</span></div>
          <div class="category-links">
            <ContactLink
              text="DEV Blogs"
              href="https://dev.to/danielrasho"
              icon-id="fa-solid fa-paperclip"
            />
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>
<script setup>
import ContactLink from '@/components/ContactLink.vue'
import { onMounted } from 'vue'
import gsap from 'gsap'
onMounted(() => {
  const words = [':3', '(☞ﾟヮﾟ)☞', '｡◕ ‿ ◕｡', '¯\\_(ツ)_/¯', 'ʕ•ᴥ•ʔ', 'ರ_ರ']
  let masterTl = gsap.timeline({ repeat: -1 })

  words.forEach((word) => {
    let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 2 })
    tl.to('#contacts-header__typed-text', { duration: 2, text: word })
    masterTl.add(tl)
  })
})
</script>
<style scoped>
#contacts-section {
  height: 100vh;
  width: 100vw;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
}

/* TV HEADER */

.contacts-section__header {
  position: relative;
  height: 75%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  padding-bottom: 2rem;
}

.contacts-section__tv {
  height: auto;
  max-width: 350px;
  position: relative;
  margin: 0 3rem 0 3rem;
}

.contacts-section__tv img {
  position: relative; /* Neccesary for frame be over slideshow */
  width: 100%;
  height: fit-content;
  object-fit: contain;
  z-index: 800;
}

.contacts-section__tv div {
  position: absolute;
  /** This measures come from calculating the proportions
  of the screen with respect to the pc frame */
  top: 42%;
  left: 15%;
  width: 70%;
  height: 42%;

  z-index: 100;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.contacts-section__tv div span {
  font-family: 'IBM Plex Mono';
  color: var(--red);
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 1.5;
}
#contacts-header__typed-text {
  position: relative;
}

@keyframes cursor-blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#contacts-header__typed-text::after {
  content: '';
  background-color: var(--red);
  width: 1ch;
  height: 100%;
  transform: translateX(100%);
  position: absolute;
  top: 0;
  right: 0;

  animation-name: cursor-blink;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}
/* CONTACTS LINKS */

.contacts-section__footer {
  height: 25%;
  background-color: var(--dark-green);
  display: flex;
  justify-content: center;
  align-items: center;
}

.contacts-section__footer span {
  color: var(--white);
  font-family: 'IBM Plex Mono';
}

.contacts-section__wrapper {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
}

.contacts-section__category {
  display: flex;
}

.contacts-section__category > div {
  width: 20ch;
}
.contacts-section__category .category-links {
  display: flex;
  flex-direction: column;
}
</style>
