// 封装banner轮播图业务相关代码

import { getBannerAPI } from "@/apis/home"
import { onMounted, ref } from "vue"



export  function useBanner(){
    

    const bannerList = ref([])
    const getBannere =async ()=>{
      const res =await getBannerAPI({
        distributionSite:'2'
      })
      // console.log(res);
      bannerList.value = res.result
    }
    
    

    onMounted(()=>{
      getBannere()
    })

    return{
        bannerList,
    }

}