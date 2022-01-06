const h = Vue.h

const app = Vue.createApp({
	data: () => ({
		title: "Это из свойства template",
	}),

	methods: {
		changeTitle() {
			this.title = 'Изменили!'
		}
	},

	render() {
		return h(
			"div",
			{
				class: "card center",
			},
			[
				h("h1", {}, this.title),
				h(
					"button",
					{
						class: "btn",
						onClick: this.changeTitle,
					},
					"Изменить"
				),
			]
		);
	},
});

app.mount("#app");
