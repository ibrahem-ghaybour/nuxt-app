<template>
  <div>
    <nav ref="navRef" class="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg"></div>
            <span class="text-xl font-bold">LuxeStore</span>
          </div>
          <div class="hidden md:flex items-center space-x-8">
            <nuxt-link to="/" class="text-sm font-medium hover:text-primary transition-colors">Home</nuxt-link>
            <nuxt-link to="/categories" class="text-sm font-medium hover:text-primary transition-colors">Categories</nuxt-link>
            <nuxt-link to="/product" class="text-sm font-medium hover:text-primary transition-colors">Products</nuxt-link>
            <nuxt-link to="/lessons" class="text-sm font-medium hover:text-primary transition-colors">Lessons</nuxt-link>
            <nuxt-link to="/profile" class="text-sm font-medium hover:text-primary transition-colors">Profile</nuxt-link>
          </div>
          <div class="flex items-center space-x-4">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
    
    <!-- Main content with padding to prevent navbar overlap -->
    <main class="pt-20">
      <slot />
    </main>
    
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
              <li><NuxtLink to="/new-arrivals" class="hover:text-foreground transition-colors">New Arrivals</NuxtLink></li>
              <li><NuxtLink to="/best-sellers" class="hover:text-foreground transition-colors">Best Sellers</NuxtLink></li>
              <li><NuxtLink to="/sale" class="hover:text-foreground transition-colors">Sale</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Company</h4>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li><NuxtLink to="/about" class="hover:text-foreground transition-colors">About Us</NuxtLink></li>
              <li><NuxtLink to="/careers" class="hover:text-foreground transition-colors">Careers</NuxtLink></li>
              <li><NuxtLink to="/contact" class="hover:text-foreground transition-colors">Contact</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Support</h4>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li><NuxtLink to="/faq" class="hover:text-foreground transition-colors">FAQ</NuxtLink></li>
              <li><NuxtLink to="/shipping" class="hover:text-foreground transition-colors">Shipping</NuxtLink></li>
              <li><NuxtLink to="/returns" class="hover:text-foreground transition-colors">Returns</NuxtLink></li>
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
import { ref } from 'vue'
import Button from '~/components/ui/button/Button.vue'

// Refs for animations (can be used by GSAP if needed)
const navRef = ref(null)
const footerRef = ref(null)
</script>
