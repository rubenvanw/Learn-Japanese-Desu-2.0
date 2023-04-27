<template>
    <div v-for="row in rows">
        <router-link :to="
        {path:`/katakana-practice/${row.data}`}">{{ row.characters }}</router-link>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        rows: [
          {characters: 'アイウエオ', data:'{ "ア": "a", "イ": "i", "ウ": "u", "エ": "e", "オ": "o" }'},

          { characters: 'カキクケコ', data:'{ "カ": "ka", "キ": "ki", "ク": "ku", "ケ": "ke", "コ": "ko" }'},

          { characters: 'サシスセソ', data:'{ "サ": "sa", "シ": "shi", "ス": "su", "セ": "se", "ソ": "so" }'},

          { characters: 'タチツテト', data:'{ "タ": "ta", "チ": "chi", "ツ": "tsu", "テ": "te", "ト": "to" }'},

          { characters: 'ナニヌネノ', data:'{ "ナ": "na", "ニ": "ni", "ヌ": "nu", "ネ": "ne", "ネ": "no" }'},

          { characters: 'ハヒフヘホ', data:'{ "ハ": "ha", "ヒ": "hi", "フ": "fu", "ヘ": "he", "ホ": "ho" }'},
  
          { characters: 'マミムメモ', data:'{ "ア": "ma", "イ": "mi", "ウ": "mu", "エ": "me", "オ": "mo" }'},

          { characters: 'ヤユヨ', data:'{ "ヤ": "ya", "ユ": "yu", "ヨ": "yo"}'},

          { characters: 'ラリルレロ', data:'{ "ラ": "ra", "リ": "ri", "ル": "ru", "レ": "re", "ロ": "ro" }'},

          { characters: 'ワヲン', data:'{ "ワ": "wa", "ヲ": "wo", "ン": "n"}'},
        ],
      }
    }
  }
  </script>