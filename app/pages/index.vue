<template>
  <div class="min-h-screen bg-background">
    <!-- Navigation -->
    <nav ref="navRef" class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg"></div>
            <span class="text-xl font-bold">LuxeStore</span>
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <a href="#" class="text-sm font-medium hover:text-primary transition-colors">Products</a>
            <a href="#" class="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#" class="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#" class="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </div>
          <div class="flex items-center space-x-4">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-4 overflow-hidden">
      <div class="container mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge ref="badgeRef" variant="secondary" class="mb-6">
              <span class="flex items-center gap-2">
                <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                New Collection Available
              </span>
            </Badge>
            <h1 ref="titleRef" class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Elevate Your
              <span class="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Style
              </span>
            </h1>
            <p ref="descRef" class="text-xl text-muted-foreground mb-8 max-w-lg">
              Discover premium fashion that defines elegance. Curated collections for the modern individual.
            </p>
            <div ref="ctaRef" class="flex flex-wrap gap-4">
              <Button size="lg" class="text-base">
                Shop Collection
                <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button size="lg" variant="outline" class="text-base">
                View Lookbook
              </Button>
            </div>
            <div ref="statsRef" class="grid grid-cols-3 gap-8 mt-12 pt-12 border-t">
              <div>
                <div class="text-3xl font-bold">10K+</div>
                <div class="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div class="text-3xl font-bold">500+</div>
                <div class="text-sm text-muted-foreground">Premium Products</div>
              </div>
              <div>
                <div class="text-3xl font-bold">4.9</div>
                <div class="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
          <div ref="heroImageRef" class="relative">
            <div class="aspect-square rounded-3xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 overflow-hidden">
              <div class="w-full h-full flex items-center justify-center">
                <div class="text-8xl">👔</div>
              </div>
            </div>
            <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-600 rounded-2xl opacity-20 blur-2xl"></div>
            <div class="absolute -top-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section class="py-20 px-4 bg-muted/30">
      <div class="container mx-auto">
        <div class="text-center mb-16">
          <h2 ref="productsTitleRef" class="text-4xl md:text-5xl font-bold mb-4">Featured Products</h2>
          <p ref="productsDescRef" class="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked items from our latest collection
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card v-for="(product, index) in products" :key="index" :ref="el => productRefs[index] = el" class="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300">
            <div class="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden relative">
              <div class="w-full h-full flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                {{ product.emoji }}
              </div>
              <Badge class="absolute top-4 right-4" :variant="product.badge === 'New' ? 'default' : 'secondary'">
                {{ product.badge }}
              </Badge>
            </div>
            <CardHeader>
              <CardTitle>{{ product.name }}</CardTitle>
              <CardDescription>{{ product.category }}</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="flex items-center justify-between">
                <span class="text-2xl font-bold">${{ product.price }}</span>
                <div class="flex items-center gap-1">
                  <svg class="w-4 h-4 fill-yellow-500" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span class="text-sm font-medium">{{ product.rating }}</span>
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
          <h2 ref="featuresTitleRef" class="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
          <p ref="featuresDescRef" class="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience shopping redefined with our premium services
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(feature, index) in features" :key="index" :ref="el => featureRefs[index] = el" class="text-center">
            <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-3xl">
              {{ feature.icon }}
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
            <p class="text-muted-foreground">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-20 px-4 bg-muted/30">
      <div class="container mx-auto max-w-4xl">
        <Card ref="newsletterRef" class="p-8 md:p-12 bg-gradient-to-br from-purple-600 to-blue-600 border-0 text-white">
          <div class="text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Stay in the Loop</h2>
            <p class="text-lg mb-8 text-white/90">
              Subscribe to get special offers, free giveaways, and exclusive deals.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                class="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white"
              />
              <Button size="lg" class="bg-white text-purple-600 hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>

    <!-- Footer -->
    <footer ref="footerRef" class="py-12 px-4 border-t">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg"></div>
              <span class="text-xl font-bold">LuxeStore</span>
            </div>
            <p class="text-sm text-muted-foreground">
              Premium fashion for the modern individual.
            </p>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Shop</h4>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" class="hover:text-foreground transition-colors">New Arrivals</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">Best Sellers</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">Sale</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Company</h4>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" class="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Support</h4>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" class="hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">Shipping</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">Returns</a></li>
            </ul>
          </div>
        </div>
        <div class="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2025 LuxeStore. All rights reserved.</p>
        </div>
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
import CardFooter from '~/components/ui/card/CardFooter.vue'
import Badge from '~/components/ui/badge/Badge.vue'
import Input from '~/components/ui/input/Input.vue'

// Register GSAP plugins
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

// Refs for animations
const navRef = ref(null)
const badgeRef = ref(null)
const titleRef = ref(null)
const descRef = ref(null)
const ctaRef = ref(null)
const statsRef = ref(null)
const heroImageRef = ref(null)
const productsTitleRef = ref(null)
const productsDescRef = ref(null)
const productRefs = ref<any[]>([])
const featuresTitleRef = ref(null)
const featuresDescRef = ref(null)
const featureRefs = ref<any[]>([])
const newsletterRef = ref(null)
const footerRef = ref(null)

// Data
const products = [
  { name: 'Classic Blazer', category: 'Formal Wear', price: 299, rating: 4.8, emoji: '🧥', badge: 'New' },
  { name: 'Designer Dress', category: 'Evening Wear', price: 449, rating: 4.9, emoji: '👗', badge: 'Popular' },
  { name: 'Luxury Watch', category: 'Accessories', price: 899, rating: 5.0, emoji: '⌚', badge: 'New' },
  { name: 'Leather Bag', category: 'Accessories', price: 349, rating: 4.7, emoji: '👜', badge: 'Sale' },
  { name: 'Premium Shoes', category: 'Footwear', price: 249, rating: 4.8, emoji: '👞', badge: 'Popular' },
  { name: 'Silk Scarf', category: 'Accessories', price: 129, rating: 4.6, emoji: '🧣', badge: 'New' },
]

const features = [
  { icon: '🚚', title: 'Free Shipping', description: 'On orders over $100' },
  { icon: '🔒', title: 'Secure Payment', description: '100% secure transactions' },
  { icon: '↩️', title: 'Easy Returns', description: '30-day return policy' },
  { icon: '💎', title: 'Premium Quality', description: 'Handpicked products' },
]

onMounted(() => {
  if (!process.client) return

  // Navigation animation
  gsap.from(navRef.value, {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  })

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

  // Footer animation
  gsap.from(footerRef.value, {
    scrollTrigger: {
      trigger: footerRef.value,
      start: 'top 90%',
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  })
})
</script>
