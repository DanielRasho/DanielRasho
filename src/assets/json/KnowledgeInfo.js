import webIcon from '@/assets/images/web.webp'
import dontOpenIcon from '@/assets/images/dontOpen.webp'
import artDesignIcon from '@/assets/images/artDesign.webp'
import programminIcon from '@/assets/images/programming.webp'

const icons = [
  {
    text: 'Programming.exe',
    icon: programminIcon,
    index: 0
  },
  {
    text: 'Web.js',
    icon: webIcon,
    index: 1
  },
  {
    text: 'Graphic Design.png',
    icon: artDesignIcon,
    index: 2
  },
  {
    text: 'DONT_OPEN.bat',
    icon: dontOpenIcon,
    index: 3
  }
]

const windows = [
  {
    title: 'Programming',
    images: [
      {
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
        name: 'python.exe'
      },
      {
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
        name: 'java.class'
      },
      {
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        name: 'javascript.js'
      },
      {
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg',
        name: 'go.exe'
      },
      {
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg',
        name: 'postgresql.dump'
      },
      {
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
        name: 'mongodb.js'
      },
      {
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
        name: 'Docker.yaml'
      }
    ]
  },
  {
    title: 'Web',
    images: [
      {
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg',
        name: 'react.jsx'
      },
      {
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg',
        name: 'vue.js'
      }
    ]
  },
  {
    title: 'Graphic Arts',
    images: [
      {
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/inkscape/inkscape-original-wordmark.svg',
        name: 'inkscape.exe'
      },
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvO49NOm3hyGGdNAH3aa7Vfmxx0qKHFeHTlQ&s',
        name: 'Affinity Designer.exe' // The name can't be extracted from this URL.
      },
      {
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg',
        name: 'illustrator.exe'
      },
      {
        url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original-wordmark.svg',
        name: 'blender.exe'
      },
      {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Clip_studio_file_logo_SVG.svg/2560px-Clip_studio_file_logo_SVG.svg.png',
        name: 'clip_studio.exe'
      },
      {
        url: 'https://w7.pngwing.com/pngs/268/324/png-transparent-blackmagic-davinci-resolve-logo-brand-font-blackmagic-design-davinci-resolve-14-logo-computer-logo-computer-wallpaper-thumbnail.png',
        name: 'davinci_resolve.exe'
      }
    ]
  },
  {
    title: '🅱🆃🆆',
    images: [
      {
        url: 'https://repository-images.githubusercontent.com/458803330/fd027c0e-dcbb-4127-8670-7dd92566b808',
        name: 'I use Linux BTW'
      }
    ]
  }
]

export { icons, windows }
