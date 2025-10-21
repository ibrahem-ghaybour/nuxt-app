export const useHome = () => {
  const baseURL = 'https://node-js-nine-gamma.vercel.app/api'

  interface Stats {
    totalUsers: number
    totalProducts: number
    totalOrders: number
    totalCategories: number
    averageRating: number
    totalReviews: number
  }

  interface Category {
    _id: string
    name: string
    description: string
  }

  interface Product {
    _id: string
    name: string
    description: string
    price: number
    category: Category
    stock: number
    images: string[]
    primaryImage: string
    averageRating?: number
    totalReviews?: number
  }

  interface Review {
    _id: string
    user: {
      _id: string
      name: string
      email: string
      avatar: string
    }
    product: {
      _id: string
      name: string
      primaryImage: string
    }
    rating: number
    comment: string
    createdAt: string
  }

  interface WhyChooseUs {
    title: string
    description: string
    icon: string
  }

  interface HomeData {
    stats: Stats
    latestProducts: Product[]
    featuredProducts: Product[]
    categories: Category[]
    customerReviews: Review[]
    whyChooseUs: WhyChooseUs[]
  }

  const getHomeData = async () => {
    const { data, error, pending } = await useFetch<{ success: boolean; data: HomeData }>(`${baseURL}/home`, {
      method: 'GET',
      key: 'home-data',
      server: true, // Enable SSR
      lazy: false, // Wait for data before rendering
    })

    return {
      data: computed(() => data.value?.data || null),
      error: computed(() => error.value),
      loading: computed(() => pending.value),
    }
  }

  return {
    getHomeData,
  }
}
