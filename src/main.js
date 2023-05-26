

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
 
//  引入初始化样式文件
import '@/styles/common.scss'

// 测试接口函数
// import { getCategory } from '@/apis/testapi' 

// getCategory().then(res=>{
//     console.log(res)
// })

// vueUse的导入
import { useIntersectionObserver } from '@vueuse/core'




const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


//定义全局指令
app.directive('img-lazy',{
    mounted(el,binding){
        // el：指令绑定的那个元素
        // binding：bindding.value 指令等于号后面绑定的表达式的值  图片url
        console.log(el,binding.value);

        useIntersectionObserver(
            el,
            ([{ isIntersecting }],) => {
              console.log(isIntersecting);
                if(isIntersecting){
                    //元素进入视图区域
                    el.src=binding.value
                }
            },
          )
    }
})
