<script setup>
import SideBar from '@/components/SideBar.vue'
import HomeView from './views/HomeView.vue'
import AbstractView from './views/AbstractView.vue'
import ExperienceView from './views/ExperienceView.vue'
import ProjectsView from './views/ProjectsView.vue'
import KnowledgeView from './views/KnowledgeView.vue'
import SectionIndicator from './components/SectionIndicator.vue'
import ContactsView from './views/ContactsView.vue'

const navLinks = [
  {
    text: 'Contacts',
    id: '#contacts-section'
  },
  {
    text: 'Projects',
    id: '#projects-section'
  },
  {
    text: 'Experience',
    id: '#experience-section'
  }
]

const sectionHeaders = [
  {
    id: '#home-section',
    text: '‎ ',
    theme: 'dark',
    start: 'top+=1px top'
  },
  {
    id: '#abstract-section',
    text: 'Abstract',
    theme: 'dark'
  },
  {
    id: '#experience-section',
    text: 'Experience',
    theme: 'dark'
  },
  {
    id: '#projects-section',
    text: 'Projects',
    theme: 'light',
    start: 'top-=10px top',
    end: 'bottom+=201% bottom'
  },
  {
    id: '#knowledge-section',
    text: 'Knowledge',
    theme: 'dark',
    start: 'top+=200% top',
    end: 'bottom+=200% 50%'
  },
  {
    id: '#contacts-section',
    text: 'Contacts',
    theme: 'dark',
    start: 'top+=200%+1px top',
    end: 'bottom+=200% bottom'
  }
]
</script>

<template>
  <SectionIndicator :sections="sectionHeaders" />
  <SideBar :links="navLinks" />
  <HomeView />
  <AbstractView />
  <ExperienceView />
  <ProjectsView />
  <KnowledgeView />
  <ContactsView />
</template>

<style scoped></style>
