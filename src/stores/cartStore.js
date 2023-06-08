// 封装购物车模板
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore =  defineStore('cart',()=>{
    // 1、定义state - cartList
    const cartList = ref([])
    // 2、定义action - addCart
    const addCart = (goods)=>{
        // 添加购物车操作逻辑
        // 已添加过 -count +1
        // 没有添加过 -直接push
        // 思路：  通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过

      const item =   cartList.value.find((item)=> goods.skuId ===item.skuId)
        if(item){
            //找到了
            item.count+=goods.count;
        } else{
            cartList.value.push(goods)
        }
    }

    // 删除购物车商品
    const delCart = (skuId)=>{
        // 思路：1、找到要删除项的下标值 - splice
        // 2、使用数组的过滤方法  - filter
       const idx =  cartList.value.findIndex((item)=>skuId===item.skuId)
        cartList.value.splice(idx,1)
    }

    //单选功能
    const singleCheck =(skuId,selected)=>{
        // 通过skuId找到需要修改的那一项  然后把他的selected修改为传过来的selected
       const item =  cartList.value.find((item)=>item.skuId===skuId)
       item.selected = selected;
    }



    // 计算属性
    // 1、总的数量  所有项的count之和
      const allCount =   computed(()=>cartList.value.reduce((a,c)=> a + c.count ,0))
    // 2、总价      所有项的count* price之和
    const allPrice = computed(()=>cartList.value.reduce((a,c)=> a + c.count*c.price ,0))

    return{
        cartList,
        allCount,
        allPrice,
        addCart,
        delCart,
        singleCheck,
    }

},{
    persist:true,
})