// 封装分类数据业务相关代码

import { getCategoryAPI } from '@/apis/category';
import { onMounted, ref } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

export  function useCategory(){
    const categoryData = ref({})   //因为接口返回的是空对象
    const route =useRoute()   //  定义路由对象 以便获取路由参数
    
    const getCategory =async (id=route.params.id)=>{
      const res =await getCategoryAPI(id)   //   route.params可以获取路由参数
      categoryData.value = res.result
      // console.log(categoryData.value);
    }
    onMounted(()=>{
      getCategory()
    })

// 目标：希望路由参数变化的时候  可以把分类数据接口重新发送    所以使用：  onBeforeRouteUpdate
onBeforeRouteUpdate((to)=>{
    // console.log("路由变化了",to);
    getCategory(to.params.id)
  })

    return {
        categoryData,
    }
}
