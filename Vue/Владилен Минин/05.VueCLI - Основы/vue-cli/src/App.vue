<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
      <span>Открыто: {{ openRate }}</span>
    </div>
    <app-news 
      v-for="item in news"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :is-open="item.isOpen"
      @open-news="openNews"
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
      openRate: 0,
      news: [
        {
          id: 1,
          title: 'Молодой кавалер Надежды Бабкиной научился ходить на горшок и говорить слово - Надя!',
          isOpen: false
        },
        {
          id: 2,
          title: 'Дети Виктора Рыбина и Натальи Сентчаковой пропахли селёдкой!',
          isOpen: false
        },
        {
          id: 3,
          title: 'Зоофил снимет зооферму!',
          isOpen: false
        }
      ]
    };
  },
  methods: {
    openNews() {
      this.openRate++
    }
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
