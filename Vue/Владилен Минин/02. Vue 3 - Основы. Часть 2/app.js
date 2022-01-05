Vue.createApp({
  data: () => ({
    myHtml: '<h1>Заголовок первого уровня<h1/>',
    title: 'Заголовок второго уровня'
  })
}).mount('#app')