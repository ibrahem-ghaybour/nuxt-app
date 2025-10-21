<template>
  <div class="min-h-screen bg-background relative custom-cursor-area">
    <!-- Custom Cursor -->
    <div ref="cursorDot" class="cursor-dot"></div>
    <div ref="cursorOutline" class="cursor-outline"></div>
    
    <!-- Loading State -->
    <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div class="text-center">
        <div class="relative w-24 h-24 mx-auto mb-6">
          <div class="absolute inset-0 border-4 border-purple-200 dark:border-purple-900 rounded-full"></div>
          <div class="absolute inset-0 border-4 border-transparent border-t-purple-600 rounded-full animate-spin"></div>
          <div class="absolute inset-2 border-4 border-transparent border-t-blue-600 rounded-full animate-spin" style="animation-duration: 1.5s; animation-direction: reverse;"></div>
        </div>
        <h3 class="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Loading...</h3>
        <p class="text-muted-foreground">Preparing your shopping experience ✨</p>
      </div>
    </div>
    
    <!-- Animated Background Elements -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div ref="floatingCircle1" class="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div ref="floatingCircle2" class="absolute w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div ref="floatingCircle3" class="absolute w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
    </div>
    
    <!-- Epic Hero Section -->
    <section class="relative z-10 min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div class="container mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge ref="badgeRef" variant="secondary" class="mb-8 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium backdrop-blur-sm bg-purple-500/10 border-purple-500/20">
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              ✨ New Collection 2025 - Shop Now
            </Badge>
            <h1 ref="titleRef" class="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
              <span class="block text-foreground">Discover</span>
              <span class="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Luxury
              </span>
              <span class="block text-foreground">Fashion</span>
            </h1>
            <p ref="descRef" class="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Experience the perfect blend of <span class="text-purple-600 font-semibold">elegance</span> and <span class="text-blue-600 font-semibold">style</span>. 
              Curated collections for those who dare to stand out.
            </p>
            <div ref="ctaRef" class="flex flex-wrap gap-6 mb-12">
              <Button size="lg" class="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 group">
                <span class="mr-2">🛍️</span>
                Shop Collection
                <svg class="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button size="lg" variant="outline" class="text-lg px-8 py-6 border-2 border-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white hover:border-transparent transform hover:scale-110 transition-all duration-300 shadow-lg group">
                <span class="mr-2">📖</span>
                View Lookbook
                <svg class="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </Button>
            </div>
            <div ref="statsRef" class="grid grid-cols-3 gap-8 mt-12 pt-12 border-t">
              <div class="group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div class="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">{{ stats?.totalUsers || 0 }}+</div>
                <div class="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Happy Customers</div>
              </div>
              <div class="group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">{{ stats?.totalProducts || 0 }}+</div>
                <div class="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Premium Products</div>
              </div>
              <div class="group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div class="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">{{ stats?.averageRating || 0 }}</div>
                <div class="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Average Rating</div>
              </div>
            </div>
          </div>
          <div ref="heroImageRef" class="relative">
            <!-- Simple Hero Image -->
            <div class="relative aspect-square rounded-3xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 overflow-hidden group">
              <div class="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-transparent to-blue-600/20"></div>
              
              <div class="w-full h-full flex items-center justify-center">
                <div class="text-9xl animate-float">🛍️</div>
              </div>
              
              <!-- Simple glow effects -->
              <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-600 rounded-2xl opacity-20 blur-2xl"></div>
              <div class="absolute -top-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl opacity-20 blur-2xl"></div>
            </div>
            
            <!-- Floating badges -->
            <div class="absolute -top-4 -left-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-3 animate-bounce-slow">
              <div class="text-xl">🔥</div>
            </div>
            <div class="absolute -bottom-4 -right-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-3 animate-bounce-slow" style="animation-delay: 0.5s;">
              <div class="text-xl">⚡</div>
            </div>
          </div>
        </div>
        
        <!-- Scroll Down Indicator -->
        <!-- <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer group">
          <span class="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Scroll to explore</span>
          <div class="w-6 h-10 border-2 border-purple-600 rounded-full flex items-start justify-center p-2">
            <div class="w-1.5 h-3 bg-purple-600 rounded-full animate-pulse"></div>
          </div>
          <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div> -->
      </div>
    </section>

    <!-- Products Section -->
    <section class="py-20 px-4 bg-muted/30">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h2 ref="productsTitleRef" class="text-4xl md:text-5xl font-bold mb-4">
            Featured <span class="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Products</span>
          </h2>
          <p ref="productsDescRef" class="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked items from our latest collection ✨
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card v-for="(product, index) in products" :key="product._id" :ref="el => productRefs[index] = el" class="overflow-hidden group cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-2 hover:border-purple-500/50">
            <div class="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden relative">
              <div class="absolute inset-0 bg-gradient-to-tr from-purple-500/0 via-transparent to-blue-500/0 group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-all duration-500"></div>
              <div v-if="product.primaryImage" class="w-full h-full">
                <img :src="product.primaryImage" :alt="product.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div v-else class="w-full h-full flex items-center justify-center text-6xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">
                📦
              </div>
              <Badge class="absolute top-4 right-4" :variant="product.stock > 10 ? 'default' : 'secondary'">
                {{ product.stock > 10 ? 'In Stock' : 'Limited' }}
              </Badge>
            </div>
            <CardHeader>
              <CardTitle>{{ product.name }}</CardTitle>
              <CardDescription>{{ product.category?.name || 'Uncategorized' }}</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="flex items-center justify-between">
                <span class="text-2xl font-bold">${{ product.price }}</span>
                <div v-if="product.averageRating" class="flex items-center gap-1">
                  <svg class="w-4 h-4 fill-yellow-500" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span class="text-sm font-medium">{{ product.averageRating }}</span>
                  <span class="text-xs text-muted-foreground">({{ product.totalReviews }})</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button class="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 px-4">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h2 ref="featuresTitleRef" class="text-4xl md:text-5xl font-bold mb-4">
            Why <span class="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Choose Us</span>
          </h2>
          <p ref="featuresDescRef" class="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience shopping redefined with our premium services 💎
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(feature, index) in features" :key="index" :ref="el => featureRefs[index] = el" class="text-center group cursor-pointer">
            <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-3xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-2xl">
              <span v-if="feature.icon === 'truck'">🚚</span>
              <span v-else-if="feature.icon === 'shield'">🔒</span>
              <span v-else-if="feature.icon === 'refresh'">↩️</span>
              <span v-else-if="feature.icon === 'award'">💎</span>
              <span v-else>✨</span>
            </div>
            <h3 class="text-xl font-semibold mb-2 group-hover:text-purple-600 transition-colors duration-300">{{ feature.title }}</h3>
            <p class="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Reviews Section -->
    <section v-if="reviews.length > 0" class="py-20 px-4">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            Customer <span class="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Reviews</span>
          </h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
            What our customers say about us ⭐
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card v-for="review in reviews.slice(0, 6)" :key="review._id" class="p-6 hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                {{ review.user.name.charAt(0).toUpperCase() }}
              </div>
              <div class="flex-1">
                <h4 class="font-semibold">{{ review.user.name }}</h4>
                <div class="flex items-center gap-1 mt-1">
                  <svg v-for="star in 5" :key="star" class="w-4 h-4" :class="star <= review.rating ? 'fill-yellow-500' : 'fill-gray-300'" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>
            <p class="text-muted-foreground mb-3">{{ review.comment }}</p>
            <div class="text-xs text-muted-foreground border-t pt-3">
              Product: <span class="font-medium">{{ review.product.name }}</span>
            </div>
          </Card>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-20 px-4 bg-muted/30">
      <div class="container mx-auto max-w-4xl">
        <Card ref="newsletterRef" class="relative p-8 md:p-12 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 border-0 text-white overflow-hidden">
          <!-- Animated background pattern -->
          <div class="absolute inset-0 opacity-10">
            <div class="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
          </div>
          <div class="relative z-10 text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Stay in the Loop ✨</h2>
            <p class="text-lg mb-8 text-white/90">
              Subscribe to get special offers, free giveaways, and exclusive deals.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                class="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white backdrop-blur-sm"
              />
              <Button size="lg" class="bg-white text-purple-600 hover:bg-white/90 hover:scale-105 transition-transform duration-300 shadow-xl">
                Subscribe
              </Button>
            </div>
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
import CardFooter from '~/components/ui/card/CardFooter.vue'
import Badge from '~/components/ui/badge/Badge.vue'
import Input from '~/components/ui/input/Input.vue'

// Register GSAP plugins
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

// Refs for animations
const cursorDot = ref(null)
const cursorOutline = ref(null)
const badgeRef = ref(null)
const titleRef = ref(null)
const descRef = ref(null)
const ctaRef = ref(null)
const statsRef = ref(null)
const heroImageRef = ref(null)
const floatingCircle1 = ref(null)
const floatingCircle2 = ref(null)
const floatingCircle3 = ref(null)
const productsTitleRef = ref(null)
const productsDescRef = ref(null)
const productRefs = ref<any[]>([])
const featuresTitleRef = ref(null)
const featuresDescRef = ref(null)
const featureRefs = ref<any[]>([])
const newsletterRef = ref(null)

// Fetch home data with SSR
const { getHomeData } = useHome()
const { data: homeDataResponse, loading, error } = await getHomeData()

// Computed data from API
const homeData = computed(() => homeDataResponse.value)
const products = computed(() => homeDataResponse.value?.featuredProducts || [])
const features = computed(() => homeDataResponse.value?.whyChooseUs || [])
const stats = computed(() => homeDataResponse.value?.stats || null)
const reviews = computed(() => homeDataResponse.value?.customerReviews || [])
const categories = computed(() => homeDataResponse.value?.categories || [])
const isLoading = computed(() => loading.value)

onMounted(() => {
  if (!process.client) return

  // Custom Cursor Animation
  let mouseX = 0
  let mouseY = 0
  let cursorX = 0
  let cursorY = 0
  let outlineX = 0
  let outlineY = 0
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  })
  
  // Smooth cursor follow animation
  const animateCursor = () => {
    // Dot follows quickly
    cursorX += (mouseX - cursorX) * 0.3
    cursorY += (mouseY - cursorY) * 0.3
    
    // Outline follows with delay
    outlineX += (mouseX - outlineX) * 0.15
    outlineY += (mouseY - outlineY) * 0.15
    
    if (cursorDot.value) {
      cursorDot.value.style.left = cursorX + 'px'
      cursorDot.value.style.top = cursorY + 'px'
    }
    
    if (cursorOutline.value) {
      cursorOutline.value.style.left = outlineX + 'px'
      cursorOutline.value.style.top = outlineY + 'px'
    }
    
    requestAnimationFrame(animateCursor)
  }
  
  animateCursor()
  
  // Cursor interactions with elements
  const interactiveElements = document.querySelectorAll('button, a, .cursor-pointer, .group')
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorDot.value?.classList.add('cursor-hover')
      cursorOutline.value?.classList.add('cursor-hover')
    })
    
    el.addEventListener('mouseleave', () => {
      cursorDot.value?.classList.remove('cursor-hover')
      cursorOutline.value?.classList.remove('cursor-hover')
    })
  })
  
  // Click effect
  document.addEventListener('mousedown', () => {
    cursorDot.value?.classList.add('cursor-click')
    cursorOutline.value?.classList.add('cursor-click')
  })
  
  document.addEventListener('mouseup', () => {
    cursorDot.value?.classList.remove('cursor-click')
    cursorOutline.value?.classList.remove('cursor-click')
  })

  // Floating background circles animation with parallax effect
  gsap.set(floatingCircle1.value, { x: -200, y: -100 })
  gsap.set(floatingCircle2.value, { x: window.innerWidth - 200, y: window.innerHeight - 200 })
  gsap.set(floatingCircle3.value, { x: window.innerWidth / 2, y: window.innerHeight / 2 })
  
  gsap.to(floatingCircle1.value, {
    x: '+=300',
    y: '+=200',
    duration: 20,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })
  
  gsap.to(floatingCircle2.value, {
    x: '-=400',
    y: '-=300',
    duration: 25,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })
  
  gsap.to(floatingCircle3.value, {
    x: '+=250',
    y: '-=200',
    duration: 22,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })
  
  // Mouse parallax effect
  if (window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01
      
      gsap.to(floatingCircle1.value, { x: `+=${moveX}`, y: `+=${moveY}`, duration: 1 })
      gsap.to(floatingCircle2.value, { x: `-=${moveX * 0.8}`, y: `-=${moveY * 0.8}`, duration: 1.2 })
      gsap.to(floatingCircle3.value, { x: `+=${moveX * 0.5}`, y: `-=${moveY * 0.5}`, duration: 1.5 })
    })
  }

  // Hero section animations
  const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  heroTimeline
    .from(badgeRef.value, {
      y: 30,
      opacity: 0,
      duration: 0.8,
    })
    .from(titleRef.value, {
      y: 50,
      opacity: 0,
      duration: 1,
    }, '-=0.5')
    .from(descRef.value, {
      y: 30,
      opacity: 0,
      duration: 0.8,
    }, '-=0.7')
    .from(ctaRef.value, {
      y: 30,
      opacity: 0,
      duration: 0.8,
    }, '-=0.6')
    .from(statsRef.value, {
      y: 30,
      opacity: 0,
      duration: 0.8,
    }, '-=0.5')
    .from(heroImageRef.value, {
      x: 100,
      opacity: 0,
      duration: 1.2,
      rotate: 5,
    }, '-=1.5')
  

  // Products section scroll animations
  gsap.from(productsTitleRef.value, {
    scrollTrigger: {
      trigger: productsTitleRef.value,
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  })

  gsap.from(productsDescRef.value, {
    scrollTrigger: {
      trigger: productsDescRef.value,
      start: 'top 80%',
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  })

  // Stagger animation for product cards
  productRefs.value.forEach((ref, index) => {
    if (ref?.$el) {
      gsap.from(ref.$el, {
        scrollTrigger: {
          trigger: ref.$el,
          start: 'top 85%',
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: index * 0.1,
      })
    }
  })

  // Features section animations
  gsap.from(featuresTitleRef.value, {
    scrollTrigger: {
      trigger: featuresTitleRef.value,
      start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  })

  gsap.from(featuresDescRef.value, {
    scrollTrigger: {
      trigger: featuresDescRef.value,
      start: 'top 80%',
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
  })

  // Stagger animation for features
  featureRefs.value.forEach((ref, index) => {
    if (ref) {
      gsap.from(ref, {
        scrollTrigger: {
          trigger: ref,
          start: 'top 85%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: index * 0.15,
      })
    }
  })

  // Newsletter animation
  if (newsletterRef.value?.$el) {
    gsap.from(newsletterRef.value.$el, {
      scrollTrigger: {
        trigger: newsletterRef.value.$el,
        start: 'top 80%',
      },
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)',
    })
  }

})
</script>

<style scoped>
/* Hide default cursor */
.custom-cursor-area {
  cursor: none;
}

.custom-cursor-area * {
  cursor: none !important;
}

/* Custom Cursor Dot */
.cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #9333ea, #3b82f6);
  border-radius: 50%;
  pointer-events: none;
  z-index: 10000;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease, background 0.3s ease;
  box-shadow: 0 0 20px rgba(147, 51, 234, 0.8);
}

/* Custom Cursor Outline */
.cursor-outline {
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  border: 2px solid transparent;
  border-image: linear-gradient(135deg, #9333ea, #ec4899, #3b82f6) 1;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.3s ease, height 0.3s ease, border-width 0.3s ease;
  animation: cursor-pulse 2s ease-in-out infinite;
}

/* Cursor Hover State */
.cursor-dot.cursor-hover {
  width: 16px;
  height: 16px;
  background: linear-gradient(135deg, #ec4899, #9333ea);
  box-shadow: 0 0 30px rgba(236, 72, 153, 1);
}

.cursor-outline.cursor-hover {
  width: 60px;
  height: 60px;
  border-width: 3px;
  animation: cursor-rotate 1s linear infinite;
}

/* Cursor Click State */
.cursor-dot.cursor-click {
  width: 12px;
  height: 12px;
  background: linear-gradient(135deg, #3b82f6, #9333ea);
}

.cursor-outline.cursor-click {
  width: 30px;
  height: 30px;
  border-width: 4px;
}

/* Cursor Animations */
@keyframes cursor-pulse {
  0%, 100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1.1);
  }
}

@keyframes cursor-rotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

/* Cursor Trail Effect */
.cursor-dot::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: inherit;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: cursor-trail 1s ease-out infinite;
}

@keyframes cursor-trail {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
}

/* Animated gradient background */
@keyframes gradient {
  0%, 100% {
    background-size: 200% 200%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

.animate-gradient {
  animation: gradient 3s ease infinite;
  background-size: 200% 200%;
}

/* Smooth hover effects */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Pulse glow effect */
@keyframes pulse-glow {
  0%, 100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.1);
  }
}

/* Shimmer effect for cards */
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #9333ea, #3b82f6);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #7c3aed, #2563eb);
}

/* Glow effect on hover */
.group:hover {
  filter: drop-shadow(0 0 20px rgba(147, 51, 234, 0.3));
}

/* Simple Float Animation */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Slow Bounce Animation */
@keyframes bounce-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}
</style>
