const App = {
    data() {
        return {
            title: 'Список заметок',
            placeholder: 'Введите название заметки',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        addNewNote() {
            this.notes.push(this.inputValue)
            this.inputValue = ''
        }

    }
}

Vue.createApp(App).mount('#app')
