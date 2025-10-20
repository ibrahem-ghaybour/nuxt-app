<template>
  <div class="min-h-screen bg-background">
    <div class="container mx-auto px-4 py-24">
      <!-- Profile Header -->
      <div ref="headerRef" class="relative mb-12">
        <div class="h-48 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 mb-8"></div>
        <div class="absolute top-32 left-8 flex items-end gap-6">
          <Avatar class="w-32 h-32 border-4 border-background">
            <AvatarFallback class="text-4xl bg-gradient-to-br from-purple-600 to-blue-600 text-white">
              JD
            </AvatarFallback>
          </Avatar>
          <div class="pb-2">
            <h1 class="text-3xl font-bold mb-1">John Doe</h1>
            <p class="text-muted-foreground">john.doe@example.com</p>
          </div>
        </div>
      </div>

      <!-- Profile Content -->
      <div class="grid lg:grid-cols-3 gap-8 mt-20">
        <!-- Sidebar -->
        <div ref="sidebarRef" class="lg:col-span-1">
          <Card class="p-6">
            <h3 class="font-semibold mb-4">Account Settings</h3>
            <nav class="space-y-2">
              <button class="w-full text-left px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium">
                Profile Information
              </button>
              <button class="w-full text-left px-4 py-3 rounded-lg hover:bg-muted transition-colors">
                Orders History
              </button>
              <button class="w-full text-left px-4 py-3 rounded-lg hover:bg-muted transition-colors">
                Wishlist
              </button>
              <button class="w-full text-left px-4 py-3 rounded-lg hover:bg-muted transition-colors">
                Addresses
              </button>
              <button class="w-full text-left px-4 py-3 rounded-lg hover:bg-muted transition-colors">
                Payment Methods
              </button>
              <button class="w-full text-left px-4 py-3 rounded-lg hover:bg-muted transition-colors text-red-600">
                Logout
              </button>
            </nav>
          </Card>

          <Card class="p-6 mt-6">
            <h3 class="font-semibold mb-4">Account Stats</h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-sm text-muted-foreground">Total Orders</span>
                <span class="text-2xl font-bold">24</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm text-muted-foreground">Wishlist Items</span>
                <span class="text-2xl font-bold">12</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm text-muted-foreground">Reward Points</span>
                <span class="text-2xl font-bold">350</span>
              </div>
            </div>
          </Card>
        </div>

        <!-- Main Content -->
        <div class="lg:col-span-2">
          <Tabs default-value="info" class="w-full">
            <TabsList class="w-full justify-start mb-6">
              <TabsTrigger value="info">Personal Info</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            </TabsList>

            <!-- Personal Info Tab -->
            <TabsContent value="info">
              <Card ref="infoCardRef" class="p-8">
                <div class="flex items-center justify-between mb-6">
                  <h2 class="text-2xl font-bold">Personal Information</h2>
                  <Button variant="outline">Edit Profile</Button>
                </div>
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="text-sm font-medium">First Name</label>
                    <Input value="John" />
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-medium">Last Name</label>
                    <Input value="Doe" />
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-medium">Email</label>
                    <Input type="email" value="john.doe@example.com" />
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-medium">Phone</label>
                    <Input value="+1 234 567 8900" />
                  </div>
                  <div class="space-y-2 md:col-span-2">
                    <label class="text-sm font-medium">Address</label>
                    <Input value="123 Main Street, New York, NY 10001" />
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-medium">Date of Birth</label>
                    <Input type="date" value="1990-01-01" />
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-medium">Gender</label>
                    <select class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div class="flex justify-end gap-4 mt-8">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </div>
              </Card>
            </TabsContent>

            <!-- Orders Tab -->
            <TabsContent value="orders">
              <div class="space-y-4">
                <Card v-for="i in 3" :key="i" :ref="el => orderRefs[i-1] = el" class="p-6">
                  <div class="flex items-start justify-between mb-4">
                    <div>
                      <h3 class="font-semibold mb-1">Order #{{ 10000 + i }}</h3>
                      <p class="text-sm text-muted-foreground">Placed on Jan {{ i }}, 2025</p>
                    </div>
                    <Badge>{{ i === 1 ? 'Delivered' : i === 2 ? 'In Transit' : 'Processing' }}</Badge>
                  </div>
                  <div class="flex items-center gap-4 mb-4">
                    <div class="w-20 h-20 rounded-lg bg-muted flex items-center justify-center text-3xl">
                      🧥
                    </div>
                    <div class="flex-1">
                      <h4 class="font-medium">Premium Leather Jacket</h4>
                      <p class="text-sm text-muted-foreground">Size: M, Color: Black</p>
                      <p class="text-sm font-semibold mt-1">$299.00</p>
                    </div>
                  </div>
                  <div class="flex gap-3">
                    <Button variant="outline" size="sm" class="flex-1">Track Order</Button>
                    <Button variant="outline" size="sm" class="flex-1">View Details</Button>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <!-- Wishlist Tab -->
            <TabsContent value="wishlist">
              <div class="grid sm:grid-cols-2 gap-6">
                <Card v-for="i in 4" :key="i" :ref="el => wishlistRefs[i-1] = el" class="group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <div class="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-t-xl relative overflow-hidden">
                    <div class="w-full h-full flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                      👔
                    </div>
                    <button class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-red-500 hover:scale-110 transition-transform">
                      ❤️
                    </button>
                  </div>
                  <CardHeader>
                    <CardTitle class="text-base">Wishlist Item {{ i }}</CardTitle>
                    <CardDescription>Fashion</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div class="flex items-center justify-between mb-4">
                      <span class="text-xl font-bold">$199</span>
                      <span class="text-sm">⭐ 4.7</span>
                    </div>
                    <Button class="w-full" size="sm">Add to Cart</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
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
import Tabs from '~/components/ui/tabs/Tabs.vue'
import TabsList from '~/components/ui/tabs/TabsList.vue'
import TabsTrigger from '~/components/ui/tabs/TabsTrigger.vue'
import TabsContent from '~/components/ui/tabs/TabsContent.vue'
import Avatar from '~/components/ui/avatar/Avatar.vue'
import AvatarFallback from '~/components/ui/avatar/AvatarFallback.vue'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const headerRef = ref(null)
const sidebarRef = ref(null)
const infoCardRef = ref(null)
const orderRefs = ref<any[]>([])
const wishlistRefs = ref<any[]>([])

onMounted(() => {
  if (!process.client) return

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.from(headerRef.value, { y: -50, opacity: 0, duration: 1 })
    .from(sidebarRef.value, { x: -100, opacity: 0, duration: 0.8 }, '-=0.5')
    .from(infoCardRef.value?.$el, { x: 100, opacity: 0, duration: 0.8 }, '-=0.6')

  orderRefs.value.forEach((ref, index) => {
    if (ref?.$el) {
      gsap.from(ref.$el, {
        scrollTrigger: { trigger: ref.$el, start: 'top 85%' },
        y: 50, opacity: 0, duration: 0.6, ease: 'power3.out', delay: index * 0.1
      })
    }
  })

  wishlistRefs.value.forEach((ref, index) => {
    if (ref?.$el) {
      gsap.from(ref.$el, {
        scrollTrigger: { trigger: ref.$el, start: 'top 85%' },
        scale: 0.9, opacity: 0, duration: 0.6, ease: 'back.out(1.7)', delay: index * 0.1
      })
    }
  })
})
</script>
