<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="open">
      {{ isNewOpen ? "Закрыть" : "Открыть" }}
    </button>
    <button
      v-if="wasRead"
      class="btn danger"
      @click="$emit('unmark', id)"
    >Отметить непрочитанной</button>
    <div v-if="isNewOpen">
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eum fuga
        molestiae cupiditate totam quod voluptatibus dolores, qui officia cumque
        alias, commodi minima? Sit eveniet dicta eaque quam consequuntur
        obcaecati.
      </p>
      <button
        v-if="!wasRead"
        class="btn primary"
        @click="mark"
      >Прочесть новость</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    wasRead: Boolean,
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator(value) {
        return value === true || value === false;
      },
    },
  },
  // emits: ['open-news'],
  emits: {
    'open-news': null,
    'read-news'(id) {
      if(id) {
        return true
      }
      console.warn('Нет параметра id для emit read-news')
      return false
    },
    unmark: null
  },
  data() {
    return {
      isNewOpen: this.isOpen,
    };
  },
  methods: {
    open() {
      this.isNewOpen = !this.isNewOpen;
      if (this.isNewOpen) {
        this.$emit("open-news", 42);
      }
    },
    mark() {
      this.isNewOpen = false
      this.$emit('read-news', this.id);
    }
  },
};
</script>