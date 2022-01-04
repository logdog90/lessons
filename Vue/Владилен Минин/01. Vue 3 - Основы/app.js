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
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote(i) {
            this.notes.splice(i, 1)
        }
    },
    computed: {
        doubleCountComputed() {
            return this.notes.length * 2
        }
    }
}

Vue.createApp(App).mount('#app')
