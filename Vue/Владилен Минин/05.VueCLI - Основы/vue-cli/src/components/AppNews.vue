<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button
      class="btn"
      @click="open"
    >
      {{ isNewOpen ? 'Закрыть' : 'Открыть' }}
    </button>
    <p v-if="isNewOpen">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eum fuga
      molestiae cupiditate totam quod voluptatibus dolores, qui officia cumque
      alias, commodi minima? Sit eveniet dicta eaque quam consequuntur
      obcaecati.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator(value) {
        return value === true || value === false
      }
    }
  },
	data() {
		return {
      isNewOpen: this.isOpen
    }
	},
  methods: {
    open() {
      this.isNewOpen = !this.isNewOpen
      if (this.isNewOpen) {
        this.$emit('open-news')
      }
    }
  }
}
</script>