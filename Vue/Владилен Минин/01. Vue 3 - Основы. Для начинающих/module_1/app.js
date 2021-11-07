const App = {
    data: () => {
        return {
            title: 'Список заметок',
            placeholder: 'Введите название заметки',
            inputValue: '',
            nodes: ['Заметка 1', 'Заметка 2']
        }
    },

    methods: {
        addNewNode() {
            if (this.inputValue !== '') {
                this.nodes.push(this.inputValue)
                this.inputValue = ''
            }
            
        },

        toUpperCase(item) {
            return item.toUpperCase()
        },

        removeNode(i) {
            this.nodes.splice(i, 1)
        }
    },

    computed: {
        doubleCountComputed() {
            return this.nodes.length * 2
        }
    },

    watch: {
        inputValue(value) {
            if (value.length > 10) {
                this.inputValue = ''
            }
        }
    }
}

// Способ 1
// const app = Vue.createApp(App)
// app.mount('#app')

// Способ 1
Vue.createApp(App).mount('#app')