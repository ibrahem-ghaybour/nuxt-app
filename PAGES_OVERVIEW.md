# E-Commerce Platform - Pages Overview

## 🎨 Complete Page List

### 1. **Home Page** (`/`)
- **Features**: Hero section, featured products, features showcase, newsletter, footer
- **Animations**: Stagger animations, scroll triggers, fade-ins
- **Components**: Cards, Badges, Buttons, Input

### 2. **Categories Page** (`/categories`)
- **Features**: 
  - Hero banner with search
  - Category grid (6 categories)
  - Sidebar filters (price, rating, availability)
  - Product grid with 9 products
  - Pagination
- **Animations**: Hero timeline, category stagger, product fade-ins
- **Responsive**: Mobile-friendly grid layouts

### 3. **Product Detail Page** (`/product`)
- **Features**:
  - Product image gallery
  - Size & color selection
  - Quantity selector
  - Product tabs (Description, Specifications, Reviews)
  - Related products section
- **Animations**: Slide-in animations, scroll triggers
- **Interactive**: Hover effects, tab switching

### 4. **Profile Page** (`/profile`)
- **Features**:
  - Profile header with avatar
  - Sidebar navigation
  - Account stats
  - Tabs: Personal Info, Orders, Wishlist
  - Editable profile form
- **Animations**: Slide animations, stagger effects
- **Components**: Avatar, Tabs, Forms

### 5. **Lessons/Courses Page** (`/lessons`)
- **Features**:
  - Hero with statistics
  - Course categories (6 categories)
  - Featured courses grid (6 courses)
  - Learning path timeline
  - Instructors showcase
  - CTA section
- **Animations**: Hero timeline, category stagger, course fade-ins, path alternating slides
- **Educational**: Course ratings, duration, student count

### 6. **Portfolio Page** (`/portfolio`)
- **Features**:
  - Full-screen hero
  - About section with stats
  - Projects showcase (6 projects)
  - Skills with progress bars
  - Contact form
  - Social links
- **Animations**: Sequential hero animations, scroll triggers, stagger effects
- **Professional**: Clean design, gradient accents

### 7. **Login Page** (`/auth/login`)
- **Features**:
  - Email & password authentication
  - Password visibility toggle
  - Remember me option
  - Social login (Google, GitHub)
  - Forgot password link
  - Link to registration page
- **Animations**: Card entrance, fade-in effects
- **Security**: Password masking, form validation

### 8. **Register Page** (`/auth/register`)
- **Features**:
  - Full name, email, password fields
  - Password strength indicator (4 levels)
  - Password confirmation
  - Terms & conditions checkbox
  - Social registration (Google, GitHub)
  - Link to login page
- **Animations**: Sequential form animations, strength bar transitions
- **Validation**: Real-time password strength, matching passwords

### 9. **Forgot Password Page** (`/auth/forgot-password`)
- **Features**:
  - Email input for reset
  - Success confirmation screen
  - Resend email with cooldown timer (60s)
  - Instructions for troubleshooting
  - Back to login link
- **Animations**: Card transitions, success state animation
- **UX**: Clear feedback, helpful instructions

## 🎭 GSAP Animations Used

- **Timeline Animations**: Sequential entrance effects
- **ScrollTrigger**: Animations triggered on scroll
- **Stagger Effects**: Sequential item animations
- **Scale & Fade**: Smooth transitions
- **Slide Animations**: Left/right entrance effects
- **Back Ease**: Bouncy spring effects
- **Hover Transforms**: Scale and shadow effects

## 🎨 shadcn-vue Components

- ✅ Button (with variants)
- ✅ Card (Header, Title, Description, Content, Footer)
- ✅ Badge (multiple variants)
- ✅ Input
- ✅ Tabs (Root, List, Trigger, Content)
- ✅ Avatar (Root, Image, Fallback)

## 🚀 Navigation Structure

```
Home (/)
├── Categories (/categories)
├── Product (/product)
├── Lessons (/lessons)
├── Portfolio (/portfolio)
├── Profile (/profile)
└── Authentication (/auth)
    ├── Login (/auth/login)
    ├── Register (/auth/register)
    └── Forgot Password (/auth/forgot-password)
```

## 📱 Responsive Design

All pages are fully responsive with:
- Mobile-first approach
- Grid layouts that adapt (2 cols → 3 cols → 4 cols)
- Hidden navigation on mobile
- Touch-friendly buttons and cards
- Optimized spacing for all screen sizes

## 🎯 Key Features

1. **Beautiful Gradients**: Purple to blue gradient theme throughout
2. **Smooth Animations**: GSAP-powered animations on every page
3. **Dark Mode Support**: Full dark mode compatibility
4. **Interactive Elements**: Hover effects, transitions, and micro-interactions
5. **Professional UI**: Clean, modern design with proper spacing
6. **Consistent Branding**: Unified color scheme and typography

## 🔗 Quick Access URLs

- Home: http://localhost:3001/
- Categories: http://localhost:3001/categories
- Product: http://localhost:3001/product
- Profile: http://localhost:3001/profile
- Lessons: http://localhost:3001/lessons
- Portfolio: http://localhost:3001/portfolio
- Login: http://localhost:3001/auth/login
- Register: http://localhost:3001/auth/register
- Forgot Password: http://localhost:3001/auth/forgot-password
