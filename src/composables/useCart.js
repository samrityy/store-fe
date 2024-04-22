import {defineStore} from 'pinia'
export const useCart = defineStore("counter",{
    id:'cart',
    state: () => ({
        items:[],
        total: 0,
        count:0
    }),
    actions:{
        addToCart(product){
            this.items.push(product)
            console.log(product.price)
            this.total += Number(product.price)
            this.count+=1
            console.log(this.total)

        },
        removeFromCart(product){
            this.items = this.items.filter(items=> items.id !== product.id)
            this.total -= product.price
            this.count -=1
        }
    }
});