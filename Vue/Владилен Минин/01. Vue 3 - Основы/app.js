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
        },
        inputKeyPress(event) {
            if (event.key === 'Enter') {
                this.addNewNote()
            }
        }
    }
}

Vue.createApp(App).mount('#app')
