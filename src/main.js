import { createApp } from 'vue'
import './style.css'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Hiragana from './views/Hiragana.vue'
import HiraganaPractice from './components/practice-h/Hiragana-Practice.vue'
import Katakana from './views/Katakana.vue'
import KatakanaPractice from './components/practice-k/Katakana-Practice.vue'
import Kanji from './views/Kanji.vue'
import Keyboard from './views/Keyboard.vue'



const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/', name:'Home', component:Home},
        {path:'/hiragana', name:'Hiragana', component:Hiragana},
        {path:'/hiragana-practice/:data', name:'HiraganaPractice', component:HiraganaPractice, props:true},
        {path:'/katakana', name:'Katakana', component:Katakana},
        {path:'/katakana-practice/:data', name:'KatakanaPractice', component:KatakanaPractice, props:true},
        {path:'/kanji', name:'Kanji', component:Kanji},
        {path:'/keyboard', name:'Keyboard', component:Keyboard},
    ]
})

createApp(App)
.use(router)
.mount('#app')
