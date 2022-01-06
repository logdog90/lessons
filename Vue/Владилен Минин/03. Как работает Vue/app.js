const app = Vue.createApp({
	data: () => ({
		title: "Это из свойства template",
	}),

	template: `
		<div class="card center">
			<h1>{{ title }}</h1>
			<button class="btn" @click="title = 'Изменили!'">Изменить</button>
		</div>
	`,
});

app.mount("#app");
