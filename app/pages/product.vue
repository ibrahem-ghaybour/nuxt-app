<template>
  <div class="min-h-screen bg-background">
    <div class="container mx-auto px-4 py-24">
      <!-- Breadcrumb -->
      <nav ref="breadcrumbRef" class="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <a href="/" class="hover:text-foreground">Home</a>
        <span>/</span>
        <a href="/categories" class="hover:text-foreground">Categories</a>
        <span>/</span>
        <span class="text-foreground">Product</span>
      </nav>

      <!-- Product Detail -->
      <div class="grid lg:grid-cols-2 gap-12 mb-20">
        <!-- Product Images -->
        <div ref="imagesRef">
          <div class="aspect-square rounded-3xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 mb-4 overflow-hidden relative group">
            <div class="w-full h-full flex items-center justify-center text-9xl">
              🧥
            </div>
            <Badge class="absolute top-4 right-4">Sale -25%</Badge>
          </div>
          <div class="grid grid-cols-4 gap-4">
            <div v-for="i in 4" :key="i" class="aspect-square rounded-lg bg-muted cursor-pointer hover:ring-2 ring-primary transition-all flex items-center justify-center text-3xl">
              🧥
            </div>
          </div>
        </div>

        <!-- Product Info -->
        <div ref="infoRef">
          <Badge class="mb-4">Premium Collection</Badge>
          <h1 class="text-4xl md:text-5xl font-bold mb-4">Premium Leather Jacket</h1>
          <div class="flex items-center gap-4 mb-6">
            <div class="flex items-center gap-1">
              <span v-for="i in 5" :key="i" class="text-yellow-500">⭐</span>
              <span class="text-sm font-medium ml-2">4.8</span>
            </div>
            <span class="text-sm text-muted-foreground">(127 reviews)</span>
            <span class="text-sm text-green-600 font-medium">In Stock</span>
          </div>
          
          <div class="flex items-baseline gap-4 mb-8">
            <span class="text-5xl font-bold">$299</span>
            <span class="text-2xl text-muted-foreground line-through">$399</span>
            <Badge variant="destructive">Save $100</Badge>
          </div>

          <p class="text-lg text-muted-foreground mb-8 leading-relaxed">
            Crafted from premium Italian leather, this jacket combines timeless style with modern comfort. 
            Perfect for any occasion, featuring a tailored fit and durable construction.
          </p>

          <div class="space-y-6 mb-8">
            <div>
              <label class="text-sm font-medium mb-3 block">Size</label>
              <div class="flex gap-3">
                <button v-for="size in ['XS', 'S', 'M', 'L', 'XL']" :key="size" 
                        class="px-6 py-3 border-2 rounded-lg hover:border-primary transition-colors font-medium">
                  {{ size }}
                </button>
              </div>
            </div>

            <div>
              <label class="text-sm font-medium mb-3 block">Color</label>
              <div class="flex gap-3">
                <button v-for="color in ['bg-black', 'bg-amber-800', 'bg-gray-600']" :key="color" 
                        :class="cn('w-12 h-12 rounded-full border-2 hover:scale-110 transition-transform', color)">
                </button>
              </div>
            </div>

            <div>
              <label class="text-sm font-medium mb-3 block">Quantity</label>
              <div class="flex items-center gap-4">
                <Button variant="outline" size="sm">-</Button>
                <span class="text-lg font-medium w-12 text-center">1</span>
                <Button variant="outline" size="sm">+</Button>
              </div>
            </div>
          </div>

          <div class="flex gap-4 mb-8">
            <Button size="lg" class="flex-1">Add to Cart</Button>
            <Button size="lg" variant="outline">
              ❤️
            </Button>
          </div>

          <div class="grid grid-cols-3 gap-4 p-6 bg-muted rounded-xl">
            <div class="text-center">
              <div class="text-2xl mb-2">🚚</div>
              <div class="text-xs font-medium">Free Shipping</div>
            </div>
            <div class="text-center">
              <div class="text-2xl mb-2">↩️</div>
              <div class="text-xs font-medium">30-Day Returns</div>
            </div>
            <div class="text-center">
              <div class="text-2xl mb-2">🔒</div>
              <div class="text-xs font-medium">Secure Payment</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Product Details Tabs -->
      <div ref="tabsRef">
        <Tabs default-value="description" class="w-full">
          <TabsList class="w-full justify-start mb-8">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews (127)</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description">
            <Card class="p-8">
              <h3 class="text-2xl font-semibold mb-4">Product Description</h3>
              <div class="prose dark:prose-invert max-w-none">
                <p class="text-muted-foreground leading-relaxed mb-4">
                  This premium leather jacket is the epitome of style and sophistication. Handcrafted from the finest Italian leather, 
                  it features a classic design that never goes out of fashion.
                </p>
                <p class="text-muted-foreground leading-relaxed mb-4">
                  The jacket includes multiple pockets, a comfortable lining, and adjustable cuffs for the perfect fit. 
                  Whether you're dressing up or keeping it casual, this jacket is your go-to choice.
                </p>
                <ul class="list-disc list-inside text-muted-foreground space-y-2">
                  <li>100% Genuine Italian Leather</li>
                  <li>Tailored Fit Design</li>
                  <li>Multiple Interior & Exterior Pockets</li>
                  <li>Premium YKK Zippers</li>
                  <li>Comfortable Polyester Lining</li>
                </ul>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="specifications">
            <Card class="p-8">
              <h3 class="text-2xl font-semibold mb-6">Specifications</h3>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-4">
                  <div class="flex justify-between py-3 border-b">
                    <span class="font-medium">Material</span>
                    <span class="text-muted-foreground">Italian Leather</span>
                  </div>
                  <div class="flex justify-between py-3 border-b">
                    <span class="font-medium">Lining</span>
                    <span class="text-muted-foreground">Polyester</span>
                  </div>
                  <div class="flex justify-between py-3 border-b">
                    <span class="font-medium">Closure</span>
                    <span class="text-muted-foreground">Zipper</span>
                  </div>
                </div>
                <div class="space-y-4">
                  <div class="flex justify-between py-3 border-b">
                    <span class="font-medium">Care</span>
                    <span class="text-muted-foreground">Professional Clean</span>
                  </div>
                  <div class="flex justify-between py-3 border-b">
                    <span class="font-medium">Origin</span>
                    <span class="text-muted-foreground">Italy</span>
                  </div>
                  <div class="flex justify-between py-3 border-b">
                    <span class="font-medium">Warranty</span>
                    <span class="text-muted-foreground">2 Years</span>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <Card class="p-8">
              <div class="flex items-center justify-between mb-8">
                <h3 class="text-2xl font-semibold">Customer Reviews</h3>
                <Button>Write a Review</Button>
              </div>
              <div class="space-y-6">
                <div v-for="i in 3" :key="i" class="pb-6 border-b last:border-0">
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-semibold">
                      JD
                    </div>
                    <div class="flex-1">
                      <div class="flex items-center justify-between mb-2">
                        <h4 class="font-semibold">John Doe</h4>
                        <span class="text-sm text-muted-foreground">2 days ago</span>
                      </div>
                      <div class="flex items-center gap-1 mb-3">
                        <span v-for="j in 5" :key="j" class="text-yellow-500">⭐</span>
                      </div>
                      <p class="text-muted-foreground">
                        Absolutely love this jacket! The quality is outstanding and it fits perfectly. 
                        Worth every penny. Highly recommended!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <!-- Related Products -->
      <section class="mt-20">
        <h2 ref="relatedTitleRef" class="text-3xl font-bold mb-8">You May Also Like</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card v-for="i in 4" :key="i" :ref="el => relatedRefs[i-1] = el" class="group cursor-pointer hover:shadow-xl transition-all duration-300">
            <div class="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-t-xl flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
              👔
            </div>
            <CardHeader>
              <CardTitle class="text-base">Related Product {{ i }}</CardTitle>
              <CardDescription>Fashion</CardDescription>
            </CardHeader>
            <CardContent>
              <div class="flex items-center justify-between">
                <span class="text-xl font-bold">$199</span>
                <span class="text-sm">⭐ 4.7</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
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
import Badge from '~/components/ui/badge/Badge.vue'
import Tabs from '~/components/ui/tabs/Tabs.vue'
import TabsList from '~/components/ui/tabs/TabsList.vue'
import TabsTrigger from '~/components/ui/tabs/TabsTrigger.vue'
import TabsContent from '~/components/ui/tabs/TabsContent.vue'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const breadcrumbRef = ref(null)
const imagesRef = ref(null)
const infoRef = ref(null)
const tabsRef = ref(null)
const relatedTitleRef = ref(null)
const relatedRefs = ref<any[]>([])

onMounted(() => {
  if (!process.client) return

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  tl.from(breadcrumbRef.value, { y: -20, opacity: 0, duration: 0.6 })
    .from(imagesRef.value, { x: -100, opacity: 0, duration: 1 }, '-=0.3')
    .from(infoRef.value, { x: 100, opacity: 0, duration: 1 }, '-=0.8')

  gsap.from(tabsRef.value, {
    scrollTrigger: { trigger: tabsRef.value, start: 'top 80%' },
    y: 50, opacity: 0, duration: 1, ease: 'power3.out'
  })

  gsap.from(relatedTitleRef.value, {
    scrollTrigger: { trigger: relatedTitleRef.value, start: 'top 80%' },
    y: 30, opacity: 0, duration: 0.8, ease: 'power3.out'
  })

  relatedRefs.value.forEach((ref, index) => {
    if (ref?.$el) {
      gsap.from(ref.$el, {
        scrollTrigger: { trigger: ref.$el, start: 'top 85%' },
        y: 60, opacity: 0, duration: 0.8, ease: 'power3.out', delay: index * 0.1
      })
    }
  })
})
</script>
