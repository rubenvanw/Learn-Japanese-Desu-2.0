<template>
    <!-- <div v-for="(translation, character, index) in data">
        {{ character }}
        <input type="text" :data-translation=translation :data-character=character>
    </div> -->
    <select id="amount" @change="changeAmount">
        <option value=5>5</option>
        <option value=10>10</option>
        <option value=15>15</option>
        <option value=20>20</option>
    </select>
    <div v-for="data in shuffledData">
        {{ data[0] }}
        <input type="text" :data-translation=data[1] :data-character=data[0]>
    </div>
    <button @click="magic">ᗜˬᗜ</button>
</template>

<script>
export default {
    data() {
        return {
            data: this.$route.params.data,
            shuffledData: [],
        }
    },
    methods: {
        magicMethod() {
            this.data = JSON.parse(this.data)
        },
        magic() {
            document.querySelectorAll('input').forEach(input => {
                if (input.value == input.dataset.translation) {
                    input.style.backgroundColor = "green"
                } else {
                    input.style.backgroundColor = "red"
                }
            });
        },
        randomizeArray(array) {
            array.sort(() => Math.random() - 0.5);
        },
        randomNumber() {
            return Math.floor(Math.random() * 5);
        },
        shuffe() {

            let foo = Object.entries({ ...this.data })
            let bar = []

            for (let x = 0; x < foo.length; x++) {
                bar.push(foo[x])
            }

            this.randomizeArray(bar)

            this.shuffledData = bar

        },
        changeAmount(event) {

            let foo = Object.entries({ ...this.data })
            let bar = []

            for (let x = 0; x < event.target.value; x++) {
                bar.push(foo[this.randomNumber()])
            }

            this.randomizeArray(bar)

            this.shuffledData = bar
        }
    },
    mounted() {
        this.magicMethod()
        this.shuffe()
    },
}
</script>