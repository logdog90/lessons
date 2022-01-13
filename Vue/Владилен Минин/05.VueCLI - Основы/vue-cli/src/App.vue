<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
    </div>
    <app-news 
      v-for="item in news"
      :key="item"
      :title="item"
    >
    </app-news>
  </div>
</template>

<script>
import AppNews from '@/components/AppNews.vue'

export default {
  name: "App",
  components: { AppNews },
  data() {
    return {
      now: new Date().toLocaleDateString(),
      news: [
        'Молодой кавалер Надежды Бабкиной научился ходить на горшок и говорить слово - Надя!',
        'Дети Виктора Рыбина и Натальи Сентчаковой пропахли селёдкой!',
        'Зоофил снимет зооферму!'
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
