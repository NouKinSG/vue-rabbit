import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout';




export const useCategoryStore = defineStore('category', () => {

    //导航列表的数据管理

    //state 导航列表数据
    const categoryList = ref([])

    //action 获取导航数据的方法
    const getCategory =async ()=>{
    //发起请求
    const res= await getCategoryAPI()
    //返回后数据处理
    categoryList.value = res.result
    }


    return{
        categoryList,
        getCategory 
    }
})
