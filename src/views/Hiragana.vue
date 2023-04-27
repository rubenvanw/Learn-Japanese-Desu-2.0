<template>
  <div v-for="row in rows">
        <router-link :to="
        {path:`/hiragana-practice/${row.data}`}">{{ row.characters }}</router-link>
    </div>
</template>


<script>
export default {
  data() {
    return {
      rows: [
          {characters: 'あいうえお', data:'{ "あ": "a", "い": "i", "う": "u", "え": "e", "お": "o" }'},

          { characters: 'かきくけこ', data:'{ "か": "ka", "き": "ki", "く": "ku", "け": "ke", "こ": "ko" }'},

          { characters: 'さしすせそ', data:'{ "さ": "sa", "し": "shi", "す": "su", "せ": "se", "そ": "so" }'},

          { characters: 'たちつてと', data:'{ "た": "ta", "ち": "chi", "つ": "tsu", "て": "te", "と": "to" }'},

          { characters: 'なにぬねの', data:'{ "な": "na", "に": "ni", "ぬ": "nu", "ね": "ne", "の": "no" }'},

          { characters: 'はひふへほ', data:'{ "は": "ha", "ひ": "hi", "ふ": "fu", "へ": "he", "ほ": "ho" }'},
  
          { characters: 'まみむめも', data:'{ "ま": "ma", "み": "mi", "む": "mu", "め": "me", "も": "mo" }'},

          { characters: 'やゆよ', data:'{ "や": "ya", "ゆ": "yu", "よ": "yo"}'},

          { characters: 'らりるれろ', data:'{ "ら": "ra", "り": "ri", "る": "ru", "れ": "re", "ろ": "ro" }'},

          { characters: 'わをん', data:'{ "わ": "wa", "を": "wo", "ん": "n"}'},
        ],
    }
  }
}
</script>
