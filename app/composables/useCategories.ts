export const useCategories = () => {
  const baseURL = 'https://node-js-nine-gamma.vercel.app/api'

  interface Category {
    _id: string
    name: string
    description: string
    isActive: boolean
    createdBy: {
      _id: string
      name: string
      email: string
    }
    createdAt: string
    updatedAt: string
  }

  interface Pagination {
    page: number
    limit: number
    total: number
    pages: number
  }

  interface CategoriesResponse {
    success: boolean
    count: number
    pagination: Pagination
    data: Category[]
  }

  const getCategories = async (page: number = 1, limit: number = 10) => {
    const { data, error, pending } = await useFetch<CategoriesResponse>(
      `${baseURL}/categories`,
      {
        method: 'GET',
        key: `categories-${page}-${limit}`,
        server: true,
        lazy: false,
        query: {
          page,
          limit,
        },
      }
    )

    return {
      data: computed(() => data.value?.data || []),
      pagination: computed(() => data.value?.pagination || null),
      count: computed(() => data.value?.count || 0),
      error: computed(() => error.value),
      loading: computed(() => pending.value),
    }
  }

  const getCategoryById = async (id: string) => {
    const { data, error, pending } = await useFetch<{ success: boolean; data: Category }>(
      `${baseURL}/categories/${id}`,
      {
        method: 'GET',
        key: `category-${id}`,
        server: true,
        lazy: false,
      }
    )

    return {
      data: computed(() => data.value?.data || null),
      error: computed(() => error.value),
      loading: computed(() => pending.value),
    }
  }

  return {
    getCategories,
    getCategoryById,
  }
}
