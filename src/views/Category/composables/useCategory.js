import {onBeforeRouteUpdate, useRoute} from 'vue-router'
import {getTopCategoryAPI} from '@/apis/category'

export function useCategory() {
  const categoryData = ref({})
  const route = useRoute()
  const getCategory = async (id) => {
    // 如何在setup中获取路由参数 useRoute() -> route 等价于this.$route
    const { result } = await getTopCategoryAPI(id)
    categoryData.value = result
  }
  onMounted(() => getCategory(route.params.id))

  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id)
  })

  return {
    categoryData
  }
}