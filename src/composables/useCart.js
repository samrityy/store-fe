import {defineStore} from 'pinia'
const STORAGE_KEY = 'cart';
export const useCart = defineStore("counter",{
    id:'cart',
    state: () => ({
        items: JSON.parse(sessionStorage.getItem(STORAGE_KEY)) || [],
        total: 0,
        count:0
    }),
    actions:{
        addToCart(product){
            this.items.push(product)
            console.log(product.price)
            this.total += Number(product.price)
            console.log(this.total)
            this.persistCart()
        },
        removeFromCart(product){
            this.items = this.items.filter(items=> items.id !== product.id)
            this.total -= product.price
            this.persistCart()
        },
        persistCart() {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
          }
    }
});
