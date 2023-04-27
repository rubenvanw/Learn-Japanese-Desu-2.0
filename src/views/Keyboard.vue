<template>
    <textarea id="keyboard"></textarea>
    <div class="keyboard-actions">
        <button @click="copy">copy</button>
    </div>
    <div class="columns">
        <div class="column" v-for="column in columns">
            <span v-for="character in column.characters">
                <button @click="clicked" class="keyboard-character">{{ character }}</button>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            keyboard: "",
            columns: [
                { characters: ['あ', 'い', 'う', 'え', 'お'] },
                { characters: ['か', 'き', 'く', 'け', 'こ'] },
                { characters: ['さ', 'し', 'す', 'せ', 'そ'] },
                { characters: ['た', 'ち', 'つ', 'て', 'と'] },
                { characters: ['な', 'に', 'ぬ', 'ね', 'の'] },

                { characters: ['は', 'ひ', 'ふ', 'へ', 'ほ'] },
                { characters: ['ま', 'み', 'む', 'め', 'も'] },
                { characters: ['や', 'ゆ', 'よ'] },
                { characters: ['ら', 'り', 'る', 'れ', 'ろ'] },
                { characters: ['わ', 'を', 'ん'] },

            ]
        }
    },
    methods: {
        clicked(event) {
            this.keyboard.innerHTML += event.target.innerHTML
        },
        copy(){
            navigator.clipboard.writeText(this.keyboard.innerHTML)
        }
    },
    mounted() {
        this.keyboard = document.getElementById("keyboard")
    }
}
</script>