Vue.createApp({
  data: () => ({
    myHtml: '<h1>Заголовок первого уровня<h1/>',
    title: 'Заголовок второго уровня',
    person: {
      firstName: 'Johnny',
      lastName: 'Bashlak',
      age: 31
    },
    items: [1, 2]
  }),
  methods: {
    addItem() {
      this.items.unshift(this.$refs.myInput.value)
      this.$refs.myInput.value = ''
    },
    remove(i) {
      this.items.splice(i, 1)
    },
    log(item) {
      console.log('Вывод item: ', item)
    }
  },
  computed: {
    evenItems() {
      return this.items.filter(i => i % 2 === 0)
    }
  }
}).mount('#app')