const h = Vue.h

const app = Vue.createApp({
	data: () => ({
		title: 'Это из свойства template'
	}),

	methods: {
		changeTitle() {
			this.title = 'Изменили!'
		}
	},

	render() {
		return h('div', { class: 'card center' }, [
			h('h1', {}, this.title),
			h(
				'button',
				{
					class: 'btn',
					onClick: this.changeTitle
				},
				'Изменить'
			)
		])
	},

	beforeCreate() {
		console.log('beforeCreate')
	},
	created() {
		console.log('created')
	},
	beforeMount() {
		console.log('beforeMount');
	},
	mounted() {
		console.log('mounted');
	},
	beforeUnmount() {
		console.log('beforeUnmount');
	},
	unmounted() {
		console.log('unmounted');
	},
	beforeUpdate() {
		console.log('beforeUpdate');
	},
	updated() {
		console.log('updated');
	}
})

app.mount('#app')

// setTimeout(() => {
// 	app.unmount()
// }, 2000)
