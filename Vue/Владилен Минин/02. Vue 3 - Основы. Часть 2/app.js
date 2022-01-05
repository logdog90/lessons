Vue.createApp({
  data: () => ({
    myHtml: '<h1>Заголовок первого уровня<h1/>',
    title: 'Заголовок второго уровня',
    person: {
      firstName: 'Johnny',
      lastName: 'Bashlak',
      age: 31
    },
    items: [1, 2, 3, 4, 5, 6]
  }),
  computed: {
    evenItems() {
      return this.items.filter(i => i % 2 === 0)
    }
  }
}).mount('#app')