<template>
  <div class="min-h-screen bg-background">
    <!-- Navigation -->
    <nav ref="navRef" class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <a href="#home" class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Portfolio
          </a>
          <div class="hidden md:flex items-center space-x-8">
            <a href="#about" class="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#projects" class="text-sm font-medium hover:text-primary transition-colors">Projects</a>
            <a href="#skills" class="text-sm font-medium hover:text-primary transition-colors">Skills</a>
            <a href="#contact" class="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </div>
          <Button size="sm">Download CV</Button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="min-h-screen flex items-center justify-center px-4 pt-20">
      <div class="container mx-auto text-center">
        <div ref="heroContentRef" class="max-w-4xl mx-auto">
          <div ref="greetingRef" class="text-lg text-muted-foreground mb-4">Hello, I'm</div>
          <h1 ref="nameRef" class="text-6xl md:text-8xl font-bold mb-6">
            <span class="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>
          <div ref="titleRef" class="text-2xl md:text-4xl font-semibold mb-8 text-muted-foreground">
            Full Stack Developer & UI/UX Designer
          </div>
          <p ref="bioRef" class="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Crafting beautiful digital experiences with modern technologies. 
            Passionate about creating intuitive interfaces and scalable applications.
          </p>
          <div ref="ctaRef" class="flex flex-wrap gap-4 justify-center">
            <Button size="lg">
              View My Work
              <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </Button>
            <Button size="lg" variant="outline">Get In Touch</Button>
          </div>
        </div>
        <div ref="scrollIndicatorRef" class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg class="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-32 px-4 bg-muted/30">
      <div class="container mx-auto max-w-6xl">
        <h2 ref="aboutTitleRef" class="text-4xl md:text-5xl font-bold text-center mb-16">About Me</h2>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div ref="aboutImageRef" class="relative">
            <div class="aspect-square rounded-3xl bg-gradient-to-br from-purple-600 to-blue-600 p-1">
              <div class="w-full h-full rounded-3xl bg-background flex items-center justify-center text-8xl">
                👨‍💻
              </div>
            </div>
          </div>
          <div ref="aboutTextRef">
            <h3 class="text-2xl font-semibold mb-4">Creative Developer & Designer</h3>
            <p class="text-muted-foreground mb-6 leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating 
              exceptional digital experiences that combine aesthetics with functionality.
            </p>
            <p class="text-muted-foreground mb-6 leading-relaxed">
              My expertise spans across modern frameworks like Vue.js, React, and Node.js, 
              with a keen eye for design and user experience.
            </p>
            <div class="grid grid-cols-2 gap-4 mt-8">
              <div class="p-4 rounded-lg bg-background border">
                <div class="text-3xl font-bold text-primary">50+</div>
                <div class="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div class="p-4 rounded-lg bg-background border">
                <div class="text-3xl font-bold text-primary">30+</div>
                <div class="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-32 px-4">
      <div class="container mx-auto">
        <h2 ref="projectsTitleRef" class="text-4xl md:text-5xl font-bold text-center mb-4">Featured Projects</h2>
        <p ref="projectsDescRef" class="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          A selection of my recent work showcasing various technologies and design approaches
        </p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card v-for="(project, index) in projects" :key="index" :ref="el => projectRefs[index] = el" 
                class="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300">
            <div class="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                {{ project.icon }}
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <Button variant="secondary" size="sm">View Project</Button>
              </div>
            </div>
            <CardHeader>
              <div class="flex items-center justify-between mb-2">
                <CardTitle>{{ project.title }}</CardTitle>
                <Badge>{{ project.category }}</Badge>
              </div>
              <CardDescription>{{ project.description }}</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="flex flex-wrap gap-2">
                <Badge v-for="tech in project.tech" :key="tech" variant="outline" class="text-xs">
                  {{ tech }}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-32 px-4 bg-muted/30">
      <div class="container mx-auto max-w-6xl">
        <h2 ref="skillsTitleRef" class="text-4xl md:text-5xl font-bold text-center mb-16">Skills & Expertise</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(category, index) in skillCategories" :key="index" :ref="el => skillRefs[index] = el">
            <Card class="h-full p-6">
              <div class="text-4xl mb-4">{{ category.icon }}</div>
              <h3 class="text-xl font-semibold mb-4">{{ category.title }}</h3>
              <div class="space-y-3">
                <div v-for="skill in category.skills" :key="skill.name" class="space-y-2">
                  <div class="flex justify-between text-sm">
                    <span>{{ skill.name }}</span>
                    <span class="text-muted-foreground">{{ skill.level }}%</span>
                  </div>
                  <div class="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      class="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transition-all duration-1000"
                      :style="{ width: `${skill.level}%` }"
                    ></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-32 px-4">
      <div class="container mx-auto max-w-4xl">
        <h2 ref="contactTitleRef" class="text-4xl md:text-5xl font-bold text-center mb-4">Get In Touch</h2>
        <p ref="contactDescRef" class="text-lg text-muted-foreground text-center mb-16">
          Have a project in mind? Let's work together to create something amazing
        </p>
        <Card ref="contactFormRef" class="p-8">
          <div class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-sm font-medium">Name</label>
                <Input placeholder="Your name" />
              </div>
              <div class="space-y-2">
                <label class="text-sm font-medium">Email</label>
                <Input type="email" placeholder="your@email.com" />
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium">Subject</label>
              <Input placeholder="Project inquiry" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium">Message</label>
              <textarea 
                class="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <Button size="lg" class="w-full">Send Message</Button>
          </div>
        </Card>
        <div ref="socialRef" class="flex justify-center gap-6 mt-12">
          <a href="#" class="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
            <span class="text-xl">💼</span>
          </a>
          <a href="#" class="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
            <span class="text-xl">🐙</span>
          </a>
          <a href="#" class="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
            <span class="text-xl">🐦</span>
          </a>
          <a href="#" class="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
            <span class="text-xl">📧</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer ref="footerRef" class="py-8 px-4 border-t">
      <div class="container mx-auto text-center text-sm text-muted-foreground">
        <p>&copy; 2025 Your Name. Crafted with ❤️ using Vue & GSAP</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '~/components/ui/button/Button.vue'
import Card from '~/components/ui/card/Card.vue'
import CardHeader from '~/components/ui/card/CardHeader.vue'
import CardTitle from '~/components/ui/card/CardTitle.vue'
import CardDescription from '~/components/ui/card/CardDescription.vue'
import CardContent from '~/components/ui/card/CardContent.vue'
import Badge from '~/components/ui/badge/Badge.vue'
import Input from '~/components/ui/input/Input.vue'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

// Refs
const navRef = ref(null)
const greetingRef = ref(null)
const nameRef = ref(null)
const titleRef = ref(null)
const bioRef = ref(null)
const ctaRef = ref(null)
const scrollIndicatorRef = ref(null)
const heroContentRef = ref(null)
const aboutTitleRef = ref(null)
const aboutImageRef = ref(null)
const aboutTextRef = ref(null)
const projectsTitleRef = ref(null)
const projectsDescRef = ref(null)
const projectRefs = ref<any[]>([])
const skillsTitleRef = ref(null)
const skillRefs = ref<any[]>([])
const contactTitleRef = ref(null)
const contactDescRef = ref(null)
const contactFormRef = ref(null)
const socialRef = ref(null)
const footerRef = ref(null)

// Data
const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Modern online shopping experience with real-time inventory',
    category: 'Web App',
    icon: '🛍️',
    tech: ['Vue.js', 'Node.js', 'MongoDB']
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with team features',
    category: 'SaaS',
    icon: '✅',
    tech: ['React', 'Firebase', 'Tailwind']
  },
  {
    title: 'Portfolio Website',
    description: 'Creative portfolio with stunning animations and interactions',
    category: 'Website',
    icon: '🎨',
    tech: ['Nuxt', 'GSAP', 'Three.js']
  },
  {
    title: 'Mobile Banking App',
    description: 'Secure financial management with intuitive interface',
    category: 'Mobile',
    icon: '💳',
    tech: ['React Native', 'TypeScript']
  },
  {
    title: 'AI Chat Assistant',
    description: 'Intelligent chatbot powered by machine learning',
    category: 'AI/ML',
    icon: '🤖',
    tech: ['Python', 'OpenAI', 'FastAPI']
  },
  {
    title: 'Analytics Dashboard',
    description: 'Real-time data visualization and reporting platform',
    category: 'Dashboard',
    icon: '📊',
    tech: ['Vue.js', 'D3.js', 'PostgreSQL']
  }
]

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: '💻',
    skills: [
      { name: 'Vue.js / Nuxt', level: 95 },
      { name: 'React / Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 }
    ]
  },
  {
    title: 'Backend Development',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 78 }
    ]
  },
  {
    title: 'Design & Tools',
    icon: '🎨',
    skills: [
      { name: 'UI/UX Design', level: 90 },
      { name: 'Figma', level: 88 },
      { name: 'Git', level: 92 },
      { name: 'Docker', level: 75 }
    ]
  }
]

onMounted(() => {
  if (!process.client) return

  // Navigation
  gsap.from(navRef.value, {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })

  // Hero animations
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  heroTl
    .from(greetingRef.value, { y: 30, opacity: 0, duration: 0.8 })
    .from(nameRef.value, { y: 50, opacity: 0, duration: 1, scale: 0.9 }, '-=0.4')
    .from(titleRef.value, { y: 30, opacity: 0, duration: 0.8 }, '-=0.6')
    .from(bioRef.value, { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')
    .from(ctaRef.value, { y: 30, opacity: 0, duration: 0.8 }, '-=0.4')
    .from(scrollIndicatorRef.value, { opacity: 0, duration: 0.5 }, '-=0.3')

  // About section
  gsap.from(aboutTitleRef.value, {
    scrollTrigger: { trigger: aboutTitleRef.value, start: 'top 80%' },
    y: 50, opacity: 0, duration: 1, ease: 'power3.out'
  })

  gsap.from(aboutImageRef.value, {
    scrollTrigger: { trigger: aboutImageRef.value, start: 'top 80%' },
    x: -100, opacity: 0, duration: 1.2, ease: 'power3.out'
  })

  gsap.from(aboutTextRef.value, {
    scrollTrigger: { trigger: aboutTextRef.value, start: 'top 80%' },
    x: 100, opacity: 0, duration: 1.2, ease: 'power3.out'
  })

  // Projects section
  gsap.from(projectsTitleRef.value, {
    scrollTrigger: { trigger: projectsTitleRef.value, start: 'top 80%' },
    y: 50, opacity: 0, duration: 1, ease: 'power3.out'
  })

  gsap.from(projectsDescRef.value, {
    scrollTrigger: { trigger: projectsDescRef.value, start: 'top 80%' },
    y: 30, opacity: 0, duration: 0.8, ease: 'power3.out'
  })

  projectRefs.value.forEach((ref, index) => {
    if (ref?.$el) {
      gsap.from(ref.$el, {
        scrollTrigger: { trigger: ref.$el, start: 'top 85%' },
        y: 80, opacity: 0, duration: 1, ease: 'power3.out', delay: index * 0.1
      })
    }
  })

  // Skills section
  gsap.from(skillsTitleRef.value, {
    scrollTrigger: { trigger: skillsTitleRef.value, start: 'top 80%' },
    y: 50, opacity: 0, duration: 1, ease: 'power3.out'
  })

  skillRefs.value.forEach((ref, index) => {
    if (ref?.$el) {
      gsap.from(ref.$el, {
        scrollTrigger: { trigger: ref.$el, start: 'top 85%' },
        y: 60, opacity: 0, duration: 0.8, ease: 'power3.out', delay: index * 0.15
      })
    }
  })

  // Contact section
  gsap.from(contactTitleRef.value, {
    scrollTrigger: { trigger: contactTitleRef.value, start: 'top 80%' },
    y: 50, opacity: 0, duration: 1, ease: 'power3.out'
  })

  gsap.from(contactDescRef.value, {
    scrollTrigger: { trigger: contactDescRef.value, start: 'top 80%' },
    y: 30, opacity: 0, duration: 0.8, ease: 'power3.out'
  })

  if (contactFormRef.value?.$el) {
    gsap.from(contactFormRef.value.$el, {
      scrollTrigger: { trigger: contactFormRef.value.$el, start: 'top 80%' },
      scale: 0.9, opacity: 0, duration: 1, ease: 'back.out(1.7)'
    })
  }

  gsap.from(socialRef.value, {
    scrollTrigger: { trigger: socialRef.value, start: 'top 85%' },
    y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1
  })

  // Footer
  gsap.from(footerRef.value, {
    scrollTrigger: { trigger: footerRef.value, start: 'top 90%' },
    y: 30, opacity: 0, duration: 0.8, ease: 'power3.out'
  })

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href') as string)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  })
})
</script>
