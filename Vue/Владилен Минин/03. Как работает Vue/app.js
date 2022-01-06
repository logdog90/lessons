const data = {
	message: "серенький козлик",
	title: "Жил-был у бабушке серенький козлик",
}

const proxy = new Proxy(data, {
	set(target, key, value) {
		if (key === 'message') {
			target.title = 'Жил-был у бабушке ' + value
		}
		target[key] = value
	}
})

proxy.message = 'серенький ослик'
console.log(proxy)
