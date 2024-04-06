import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useActiveStore = defineStore('active', () => {
    const activeWeb = ref('/home')
    const updateActiveWeb = (a)=>{
        activeWeb.value = a
    }
    return { activeWeb, updateActiveWeb }
},
{
  persist: true
}
)
