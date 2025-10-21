<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <!-- Logo & Title -->
      <div ref="headerRef" class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl mb-4 shadow-lg">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
          </svg>
        </div>
        <h1 class="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Forgot Password?
        </h1>
        <p class="text-gray-600 dark:text-gray-400 mt-2">No worries, we'll send you reset instructions</p>
      </div>

      <!-- Forgot Password Card -->
      <Card v-if="!emailSent" ref="cardRef" class="shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle class="text-2xl">Reset Password</CardTitle>
          <CardDescription>Enter your email address and we'll send you a link to reset your password</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4">
          <!-- Email Input -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <Input 
                v-model="email" 
                type="email" 
                placeholder="you@example.com"
                class="pl-10 h-12 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500"
                @keyup.enter="handleResetPassword"
              />
            </div>
          </div>

          <!-- Reset Button -->
          <Button 
            @click="handleResetPassword"
            :disabled="!email || isLoading"
            class="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ isLoading ? 'Sending...' : 'Send Reset Link' }}
          </Button>

          <!-- Back to Login -->
          <div class="text-center pt-2">
            <NuxtLink 
              to="/auth/login" 
              class="inline-flex items-center text-sm text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to login
            </NuxtLink>
          </div>
        </CardContent>
      </Card>

      <!-- Success Message Card -->
      <Card v-else ref="successRef" class="shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <CardContent class="pt-6">
          <div class="text-center space-y-4">
            <!-- Success Icon -->
            <div class="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full">
              <svg class="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
              </svg>
            </div>

            <!-- Success Message -->
            <div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Check your email</h3>
              <p class="text-gray-600 dark:text-gray-400">
                We've sent a password reset link to
              </p>
              <p class="text-purple-600 dark:text-purple-400 font-semibold mt-1">
                {{ email }}
              </p>
            </div>

            <!-- Instructions -->
            <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-left">
              <p class="text-sm text-gray-700 dark:text-gray-300">
                <strong>Didn't receive the email?</strong>
              </p>
              <ul class="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>• Check your spam folder</li>
                <li>• Verify the email address is correct</li>
                <li>• Wait a few minutes and try again</li>
              </ul>
            </div>

            <!-- Resend Button -->
            <Button 
              @click="handleResend"
              variant="outline"
              :disabled="resendCooldown > 0"
              class="w-full h-12 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              {{ resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Resend Email' }}
            </Button>

            <!-- Back to Login -->
            <div class="pt-2">
              <NuxtLink 
                to="/auth/login" 
                class="inline-flex items-center text-sm text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to login
              </NuxtLink>
            </div>
          </div>
        </CardContent>
      </Card>

      <!-- Footer Links -->
      <div ref="footerRef" class="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>
          Need help? 
          <a href="#" class="text-purple-600 hover:text-purple-700 dark:text-purple-400 font-medium ml-1">
            Contact Support
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card/index'
import { Input } from '~/components/ui/input/index'
import { Button } from '~/components/ui/button'

// Form state
const email = ref('')
const isLoading = ref(false)
const emailSent = ref(false)
const resendCooldown = ref(0)

// Refs for animations
const headerRef = ref(null)
const cardRef = ref(null)
const successRef = ref(null)
const footerRef = ref(null)

// Cooldown timer
let cooldownInterval: ReturnType<typeof setInterval> | null = null

// Handle password reset
const handleResetPassword = async () => {
  if (!email.value) return
  
  isLoading.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  console.log('Password reset requested for:', email.value)
  
  // Show success message
  emailSent.value = true
  startResendCooldown()
  
  isLoading.value = false
  
  // Animate success card
  setTimeout(() => {
    if (successRef.value) {
      gsap.from(successRef.value, {
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out(1.7)'
      })
    }
  }, 100)
}

// Handle resend
const handleResend = async () => {
  if (resendCooldown.value > 0) return
  
  isLoading.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  console.log('Resending password reset email to:', email.value)
  
  startResendCooldown()
  isLoading.value = false
}

// Start resend cooldown
const startResendCooldown = () => {
  resendCooldown.value = 60
  
  cooldownInterval = setInterval(() => {
    resendCooldown.value--
    if (resendCooldown.value <= 0 && cooldownInterval) {
      clearInterval(cooldownInterval)
    }
  }, 1000)
}

// GSAP Animations
onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'back.out(1.7)' } })
  
  tl.from(headerRef.value, {
    y: -50,
    opacity: 0,
    duration: 0.6
  })
  .from(cardRef.value, {
    y: 50,
    opacity: 0,
    scale: 0.9,
    duration: 0.6
  }, '-=0.3')
  .from(footerRef.value, {
    y: 20,
    opacity: 0,
    duration: 0.4
  }, '-=0.2')
})

// Cleanup
onUnmounted(() => {
  if (cooldownInterval) {
    clearInterval(cooldownInterval)
  }
})
</script>
