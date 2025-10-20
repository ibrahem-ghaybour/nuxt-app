<template>
  <div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section ref="heroRef" class="relative py-20 px-4 bg-gradient-to-br from-purple-600 to-blue-600 text-white overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      <div class="container mx-auto relative z-10">
        <div class="max-w-3xl">
          <h1 ref="heroTitleRef" class="text-5xl md:text-6xl font-bold mb-6">Shop by Category</h1>
          <p ref="heroDescRef" class="text-xl text-white/90 mb-8">Discover our curated collection of premium products</p>
          <div ref="searchRef" class="max-w-xl">
            <Input 
              placeholder="Search products..." 
              class="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Grid -->
    <section class="py-16 px-4">
      <div class="container mx-auto">
        <h2 ref="categoriesTitleRef" class="text-3xl font-bold mb-8">Browse Categories</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          <div 
            v-for="(category, index) in categories" 
            :key="index"
            :ref="el => categoryRefs[index] = el"
            @click="selectedCategory = category.name"
            :class="cn(
              'p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg',
              selectedCategory === category.name 
                ? 'border-primary bg-primary/5' 
                : 'border-border hover:border-primary/50'
            )"
          >
            <div class="text-4xl mb-3 text-center">{{ category.icon }}</div>
            <h3 class="text-sm font-semibold text-center">{{ category.name }}</h3>
            <p class="text-xs text-muted-foreground text-center mt-1">{{ category.count }} items</p>
          </div>
        </div>

        <!-- Filters & Products -->
        <div class="grid lg:grid-cols-4 gap-8">
          <!-- Sidebar Filters -->
          <div ref="filtersRef" class="lg:col-span-1">
            <Card class="p-6 sticky top-24">
              <h3 class="font-semibold mb-4">Filters</h3>
              
              <div class="space-y-6">
                <div>
                  <h4 class="text-sm font-medium mb-3">Price Range</h4>
                  <div class="space-y-2">
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" class="rounded border-gray-300" />
                      <span class="text-sm">Under $100</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" class="rounded border-gray-300" />
                      <span class="text-sm">$100 - $300</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" class="rounded border-gray-300" />
                      <span class="text-sm">$300 - $500</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" class="rounded border-gray-300" />
                      <span class="text-sm">Over $500</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 class="text-sm font-medium mb-3">Rating</h4>
                  <div class="space-y-2">
                    <label v-for="rating in [5, 4, 3]" :key="rating" class="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" class="rounded border-gray-300" />
                      <span class="text-sm flex items-center gap-1">
                        <span v-for="i in rating" :key="i">⭐</span>
                        <span class="text-muted-foreground">& up</span>
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 class="text-sm font-medium mb-3">Availability</h4>
                  <div class="space-y-2">
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" class="rounded border-gray-300" />
                      <span class="text-sm">In Stock</span>
                    </label>
                    <label class="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" class="rounded border-gray-300" />
                      <span class="text-sm">On Sale</span>
                    </label>
                  </div>
                </div>

                <Button class="w-full" variant="outline">Reset Filters</Button>
              </div>
            </Card>
          </div>

          <!-- Products Grid -->
          <div class="lg:col-span-3">
            <div class="flex items-center justify-between mb-6">
              <p class="text-sm text-muted-foreground">Showing {{ products.length }} products</p>
              <select class="text-sm border rounded-md px-3 py-2">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
                <option>Best Rating</option>
              </select>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card 
                v-for="(product, index) in products" 
                :key="index"
                :ref="el => productRefs[index] = el"
                class="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div class="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
                  <div class="w-full h-full flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                    {{ product.emoji }}
                  </div>
                  <Badge v-if="product.badge" class="absolute top-3 right-3">{{ product.badge }}</Badge>
                  <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <Button size="sm" variant="secondary">Quick View</Button>
                  </div>
                </div>
                <CardHeader>
                  <div class="flex items-start justify-between gap-2">
                    <CardTitle class="text-base">{{ product.name }}</CardTitle>
                    <button class="text-muted-foreground hover:text-red-500 transition-colors">
                      ❤️
                    </button>
                  </div>
                  <CardDescription>{{ product.category }}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div class="flex items-center justify-between">
                    <div>
                      <span class="text-2xl font-bold">${{ product.price }}</span>
                      <span v-if="product.oldPrice" class="text-sm text-muted-foreground line-through ml-2">${{ product.oldPrice }}</span>
                    </div>
                    <div class="flex items-center gap-1">
                      <span class="text-yellow-500">⭐</span>
                      <span class="text-sm font-medium">{{ product.rating }}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button class="w-full">Add to Cart</Button>
                </CardFooter>
              </Card>
            </div>

            <!-- Pagination -->
            <div ref="paginationRef" class="flex justify-center gap-2 mt-12">
              <Button variant="outline" size="sm">Previous</Button>
              <Button size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'
import Button from '~/components/ui/button/Button.vue'
import Card from '~/components/ui/card/Card.vue'
import CardHeader from '~/components/ui/card/CardHeader.vue'
import CardTitle from '~/components/ui/card/CardTitle.vue'
import CardDescription from '~/components/ui/card/CardDescription.vue'
import CardContent from '~/components/ui/card/CardContent.vue'
import CardFooter from '~/components/ui/card/CardFooter.vue'
import Badge from '~/components/ui/badge/Badge.vue'
import Input from '~/components/ui/input/Input.vue'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const heroRef = ref(null)
const heroTitleRef = ref(null)
const heroDescRef = ref(null)
const searchRef = ref(null)
const categoriesTitleRef = ref(null)
const categoryRefs = ref<any[]>([])
const filtersRef = ref(null)
const productRefs = ref<any[]>([])
const paginationRef = ref(null)
const selectedCategory = ref('All')

const categories = [
  { name: 'Fashion', icon: '👔', count: 124 },
  { name: 'Electronics', icon: '📱', count: 89 },
  { name: 'Home', icon: '🏠', count: 156 },
  { name: 'Beauty', icon: '💄', count: 78 },
  { name: 'Sports', icon: '⚽', count: 92 },
  { name: 'Books', icon: '📚', count: 234 },
]

const products = [
  { name: 'Premium Leather Jacket', category: 'Fashion', price: 299, oldPrice: 399, rating: 4.8, emoji: '🧥', badge: 'Sale' },
  { name: 'Wireless Headphones', category: 'Electronics', price: 199, rating: 4.9, emoji: '🎧', badge: 'New' },
  { name: 'Smart Watch Pro', category: 'Electronics', price: 449, rating: 4.7, emoji: '⌚', badge: 'Hot' },
  { name: 'Designer Handbag', category: 'Fashion', price: 349, oldPrice: 499, rating: 4.6, emoji: '👜', badge: 'Sale' },
  { name: 'Running Shoes', category: 'Sports', price: 129, rating: 4.8, emoji: '👟' },
  { name: 'Coffee Maker', category: 'Home', price: 89, rating: 4.5, emoji: '☕' },
  { name: 'Skincare Set', category: 'Beauty', price: 79, rating: 4.9, emoji: '🧴', badge: 'New' },
  { name: 'Yoga Mat', category: 'Sports', price: 45, rating: 4.7, emoji: '🧘' },
  { name: 'Table Lamp', category: 'Home', price: 65, rating: 4.6, emoji: '💡' },
]

onMounted(() => {
  if (!process.client) return

  // Hero animations
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  heroTl
    .from(heroTitleRef.value, { y: 50, opacity: 0, duration: 1 })
    .from(heroDescRef.value, { y: 30, opacity: 0, duration: 0.8 }, '-=0.6')
    .from(searchRef.value, { y: 30, opacity: 0, duration: 0.8 }, '-=0.5')

  // Categories animation
  gsap.from(categoriesTitleRef.value, {
    scrollTrigger: { trigger: categoriesTitleRef.value, start: 'top 80%' },
    y: 30, opacity: 0, duration: 0.8, ease: 'power3.out'
  })

  categoryRefs.value.forEach((ref, index) => {
    if (ref) {
      gsap.from(ref, {
        scrollTrigger: { trigger: ref, start: 'top 85%' },
        y: 50, opacity: 0, scale: 0.9, duration: 0.6, ease: 'back.out(1.7)', delay: index * 0.05
      })
    }
  })

  // Filters animation
  gsap.from(filtersRef.value, {
    scrollTrigger: { trigger: filtersRef.value, start: 'top 80%' },
    x: -50, opacity: 0, duration: 0.8, ease: 'power3.out'
  })

  // Products stagger animation
  productRefs.value.forEach((ref, index) => {
    if (ref?.$el) {
      gsap.from(ref.$el, {
        scrollTrigger: { trigger: ref.$el, start: 'top 85%' },
        y: 60, opacity: 0, duration: 0.8, ease: 'power3.out', delay: index * 0.08
      })
    }
  })

  // Pagination animation
  gsap.from(paginationRef.value, {
    scrollTrigger: { trigger: paginationRef.value, start: 'top 90%' },
    y: 30, opacity: 0, duration: 0.8, ease: 'power3.out'
  })
})
</script>
