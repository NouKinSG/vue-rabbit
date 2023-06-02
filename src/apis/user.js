// 封装所有和用户相关的接口函数
import reuqest from '@/utils/http'

export const loginAPI = ({account,password})=>{
     return reuqest({
        url:'/login',
        method:'POST',
        data:{
            account,
            password,
        }
    })
}