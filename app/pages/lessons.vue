<template>
  <div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section ref="heroRef" class="relative py-24 px-4 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 text-white overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      <div class="container mx-auto relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <Badge ref="badgeRef" class="mb-6 bg-white/20 text-white border-white/30">
            🎓 Learn & Grow
          </Badge>
          <h1 ref="titleRef" class="text-5xl md:text-6xl font-bold mb-6">Master New Skills</h1>
          <p ref="descRef" class="text-xl text-white/90 mb-8">
            Explore our comprehensive courses designed by industry experts
          </p>
          <div ref="statsRef" class="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div class="text-4xl font-bold">50+</div>
              <div class="text-sm text-white/80">Courses</div>
            </div>
            <div>
              <div class="text-4xl font-bold">10K+</div>
              <div class="text-sm text-white/80">Students</div>
            </div>
            <div>
              <div class="text-4xl font-bold">4.9</div>
              <div class="text-sm text-white/80">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="py-16 px-4 bg-muted/30">
      <div class="container mx-auto">
        <h2 ref="categoriesTitleRef" class="text-3xl font-bold text-center mb-12">Browse by Category</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div 
            v-for="(category, index) in courseCategories" 
            :key="index"
            :ref="el => categoryRefs[index] = el"
            class="p-6 rounded-2xl bg-background border-2 border-border hover:border-primary cursor-pointer transition-all duration-300 hover:shadow-lg text-center"
          >
            <div class="text-4xl mb-3">{{ category.icon }}</div>
            <h3 class="text-sm font-semibold">{{ category.name }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Courses -->
    <section class="py-20 px-4">
      <div class="container mx-auto">
        <div class="flex items-center justify-between mb-12">
          <div>
            <h2 ref="coursesTitleRef" class="text-4xl font-bold mb-2">Featured Courses</h2>
            <p class="text-muted-foreground">Start learning with our top-rated courses</p>
          </div>
          <Button variant="outline">View All</Button>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card 
            v-for="(course, index) in courses" 
            :key="index"
            :ref="el => courseRefs[index] = el"
            class="group cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div class="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 relative overflow-hidden">
              <div class="w-full h-full flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                {{ course.icon }}
              </div>
              <Badge class="absolute top-4 left-4" :variant="course.level === 'Beginner' ? 'secondary' : 'default'">
                {{ course.level }}
              </Badge>
              <Badge class="absolute top-4 right-4 bg-black/60 text-white border-0">
                {{ course.duration }}
              </Badge>
            </div>
            <CardHeader>
              <div class="flex items-center gap-2 mb-2">
                <Badge variant="outline" class="text-xs">{{ course.category }}</Badge>
                <div class="flex items-center gap-1 ml-auto">
                  <span class="text-yellow-500 text-sm">⭐</span>
                  <span class="text-sm font-medium">{{ course.rating }}</span>
                  <span class="text-xs text-muted-foreground">({{ course.reviews }})</span>
                </div>
              </div>
              <CardTitle>{{ course.title }}</CardTitle>
              <CardDescription>{{ course.description }}</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span class="flex items-center gap-1">
                  📚 {{ course.lessons }} lessons
                </span>
                <span class="flex items-center gap-1">
                  👥 {{ course.students }}
                </span>
              </div>
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-2xl font-bold">${{ course.price }}</span>
                  <span v-if="course.oldPrice" class="text-sm text-muted-foreground line-through ml-2">${{ course.oldPrice }}</span>
                </div>
                <Button size="sm">Enroll Now</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- Learning Path -->
    <section class="py-20 px-4 bg-muted/30">
      <div class="container mx-auto max-w-4xl">
        <h2 ref="pathTitleRef" class="text-4xl font-bold text-center mb-4">Your Learning Path</h2>
        <p class="text-center text-muted-foreground mb-16">Follow a structured path to master your skills</p>
        
        <div class="space-y-8">
          <div 
            v-for="(step, index) in learningPath" 
            :key="index"
            :ref="el => pathRefs[index] = el"
            class="flex gap-6 items-start"
          >
            <div class="flex-shrink-0">
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                {{ index + 1 }}
              </div>
            </div>
            <Card class="flex-1 p-6 hover:shadow-lg transition-shadow">
              <div class="flex items-start justify-between mb-3">
                <div>
                  <h3 class="text-xl font-semibold mb-2">{{ step.title }}</h3>
                  <p class="text-muted-foreground">{{ step.description }}</p>
                </div>
                <Badge>{{ step.duration }}</Badge>
              </div>
              <div class="flex items-center gap-4 mt-4">
                <div class="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    class="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transition-all duration-1000"
                    :style="{ width: `${step.progress}%` }"
                  ></div>
                </div>
                <span class="text-sm font-medium">{{ step.progress }}%</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Instructors -->
    <section class="py-20 px-4">
      <div class="container mx-auto">
        <h2 ref="instructorsTitleRef" class="text-4xl font-bold text-center mb-4">Meet Our Instructors</h2>
        <p class="text-center text-muted-foreground mb-16">Learn from industry experts</p>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card 
            v-for="(instructor, index) in instructors" 
            :key="index"
            :ref="el => instructorRefs[index] = el"
            class="text-center p-6 hover:shadow-xl transition-all duration-300"
          >
            <Avatar class="w-24 h-24 mx-auto mb-4">
              <AvatarFallback class="text-3xl bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                {{ instructor.initials }}
              </AvatarFallback>
            </Avatar>
            <h3 class="font-semibold text-lg mb-1">{{ instructor.name }}</h3>
            <p class="text-sm text-muted-foreground mb-3">{{ instructor.title }}</p>
            <div class="flex items-center justify-center gap-4 text-sm mb-4">
              <span>⭐ {{ instructor.rating }}</span>
              <span>👥 {{ instructor.students }}</span>
            </div>
            <Button variant="outline" size="sm" class="w-full">View Profile</Button>
          </Card>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4">
      <div class="container mx-auto max-w-4xl">
        <Card ref="ctaRef" class="p-12 bg-gradient-to-br from-purple-600 to-blue-600 border-0 text-white text-center">
          <h2 class="text-4xl font-bold mb-4">Start Your Learning Journey Today</h2>
          <p class="text-xl text-white/90 mb-8">
            Join thousands of students and unlock your potential
          </p>
          <div class="flex flex-wrap gap-4 justify-center">
            <Button size="lg" class="bg-white text-purple-600 hover:bg-white/90">
              Browse All Courses
            </Button>
            <Button size="lg" variant="outline" class="border-white text-white hover:bg-white/10">
              Become an Instructor
            </Button>
          </div>
        </Card>
      </div>
    </section>
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
import Avatar from '~/components/ui/avatar/Avatar.vue'
import AvatarFallback from '~/components/ui/avatar/AvatarFallback.vue'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const heroRef = ref(null)
const badgeRef = ref(null)
const titleRef = ref(null)
const descRef = ref(null)
const statsRef = ref(null)
const categoriesTitleRef = ref(null)
const categoryRefs = ref<any[]>([])
const coursesTitleRef = ref(null)
const courseRefs = ref<any[]>([])
const pathTitleRef = ref(null)
const pathRefs = ref<any[]>([])
const instructorsTitleRef = ref(null)
const instructorRefs = ref<any[]>([])
const ctaRef = ref(null)

const courseCategories = [
  { name: 'Development', icon: '💻' },
  { name: 'Design', icon: '🎨' },
  { name: 'Business', icon: '💼' },
  { name: 'Marketing', icon: '📊' },
  { name: 'Photography', icon: '📷' },
  { name: 'Music', icon: '🎵' },
]

const courses = [
  {
    title: 'Complete Web Development Bootcamp',
    description: 'Master modern web development from scratch',
    category: 'Development',
    level: 'Beginner',
    duration: '40h',
    rating: 4.9,
    reviews: 1234,
    lessons: 156,
    students: '12K',
    price: 89,
    oldPrice: 199,
    icon: '💻'
  },
  {
    title: 'UI/UX Design Masterclass',
    description: 'Create stunning user interfaces and experiences',
    category: 'Design',
    level: 'Intermediate',
    duration: '30h',
    rating: 4.8,
    reviews: 892,
    lessons: 98,
    students: '8.5K',
    price: 79,
    icon: '🎨'
  },
  {
    title: 'Digital Marketing Strategy',
    description: 'Build effective marketing campaigns',
    category: 'Marketing',
    level: 'Beginner',
    duration: '25h',
    rating: 4.7,
    reviews: 654,
    lessons: 72,
    students: '6.2K',
    price: 69,
    oldPrice: 149,
    icon: '📊'
  },
  {
    title: 'Advanced JavaScript & React',
    description: 'Deep dive into modern JavaScript frameworks',
    category: 'Development',
    level: 'Advanced',
    duration: '50h',
    rating: 4.9,
    reviews: 1567,
    lessons: 189,
    students: '15K',
    price: 99,
    icon: '⚛️'
  },
  {
    title: 'Photography Fundamentals',
    description: 'Master the art of photography',
    category: 'Photography',
    level: 'Beginner',
    duration: '20h',
    rating: 4.8,
    reviews: 432,
    lessons: 64,
    students: '4.8K',
    price: 59,
    icon: '📷'
  },
  {
    title: 'Business Management Essentials',
    description: 'Learn to manage and grow your business',
    category: 'Business',
    level: 'Intermediate',
    duration: '35h',
    rating: 4.6,
    reviews: 789,
    lessons: 112,
    students: '9.3K',
    price: 84,
    icon: '💼'
  },
]

const learningPath = [
  {
    title: 'Foundation',
    description: 'Start with the basics and build a strong foundation',
    duration: '2 weeks',
    progress: 100
  },
  {
    title: 'Core Concepts',
    description: 'Master the essential concepts and techniques',
    duration: '4 weeks',
    progress: 75
  },
  {
    title: 'Advanced Topics',
    description: 'Dive deep into advanced subjects',
    duration: '6 weeks',
    progress: 40
  },
  {
    title: 'Real Projects',
    description: 'Apply your skills to real-world projects',
    duration: '8 weeks',
    progress: 0
  },
]

const instructors = [
  { name: 'Sarah Johnson', title: 'Web Development Expert', initials: 'SJ', rating: 4.9, students: '25K' },
  { name: 'Michael Chen', title: 'UI/UX Designer', initials: 'MC', rating: 4.8, students: '18K' },
  { name: 'Emily Davis', title: 'Marketing Strategist', initials: 'ED', rating: 4.7, students: '15K' },
  { name: 'David Wilson', title: 'Business Consultant', initials: 'DW', rating: 4.9, students: '22K' },
]

onMounted(() => {
  if (!process.client) return

  // Hero animations
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  heroTl
    .from(badgeRef.value, { y: 30, opacity: 0, duration: 0.8 })
    .from(titleRef.value, { y: 50, opacity: 0, duration: 1 }, '-=0.5')
    .from(descRef.value, { y: 30, opacity: 0, duration: 0.8 }, '-=0.6')
    .from(statsRef.value, { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')

  // Categories
  gsap.from(categoriesTitleRef.value, {
    scrollTrigger: { trigger: categoriesTitleRef.value, start: 'top 80%' },
    y: 30, opacity: 0, duration: 0.8, ease: 'power3.out'
  })

  categoryRefs.value.forEach((ref, index) => {
    if (ref) {
      gsap.from(ref, {
        scrollTrigger: { trigger: ref, start: 'top 85%' },
        y: 40, opacity: 0, scale: 0.9, duration: 0.6, ease: 'back.out(1.7)', delay: index * 0.05
      })
    }
  })

  // Courses
  gsap.from(coursesTitleRef.value, {
    scrollTrigger: { trigger: coursesTitleRef.value, start: 'top 80%' },
    y: 30, opacity: 0, duration: 0.8, ease: 'power3.out'
  })

  courseRefs.value.forEach((ref, index) => {
    if (ref?.$el) {
      gsap.from(ref.$el, {
        scrollTrigger: { trigger: ref.$el, start: 'top 85%' },
        y: 60, opacity: 0, duration: 0.8, ease: 'power3.out', delay: index * 0.1
      })
    }
  })

  // Learning Path
  gsap.from(pathTitleRef.value, {
    scrollTrigger: { trigger: pathTitleRef.value, start: 'top 80%' },
    y: 30, opacity: 0, duration: 0.8, ease: 'power3.out'
  })

  pathRefs.value.forEach((ref, index) => {
    if (ref) {
      gsap.from(ref, {
        scrollTrigger: { trigger: ref, start: 'top 85%' },
        x: index % 2 === 0 ? -100 : 100, opacity: 0, duration: 1, ease: 'power3.out'
      })
    }
  })

  // Instructors
  gsap.from(instructorsTitleRef.value, {
    scrollTrigger: { trigger: instructorsTitleRef.value, start: 'top 80%' },
    y: 30, opacity: 0, duration: 0.8, ease: 'power3.out'
  })

  instructorRefs.value.forEach((ref, index) => {
    if (ref?.$el) {
      gsap.from(ref.$el, {
        scrollTrigger: { trigger: ref.$el, start: 'top 85%' },
        y: 50, opacity: 0, duration: 0.8, ease: 'power3.out', delay: index * 0.1
      })
    }
  })

  // CTA
  if (ctaRef.value?.$el) {
    gsap.from(ctaRef.value.$el, {
      scrollTrigger: { trigger: ctaRef.value.$el, start: 'top 80%' },
      scale: 0.9, opacity: 0, duration: 1, ease: 'back.out(1.7)'
    })
  }
})
</script>
