const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholder: 'Введите название заметки',
            inputValue: ''
        }
    }
}

Vue.createApp(App).mount('#app')
