<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="isOpen = !isOpen">Открыть</button>
    <p v-if="isOpen">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eum fuga
      molestiae cupiditate totam quod voluptatibus dolores, qui officia cumque
      alias, commodi minima? Sit eveniet dicta eaque quam consequuntur
      obcaecati.
    </p>
  </div>
</template>

<script>
export default {
  props: ['title'],
	data() {
		return {
			isOpen: false
		}
	}
}
</script>