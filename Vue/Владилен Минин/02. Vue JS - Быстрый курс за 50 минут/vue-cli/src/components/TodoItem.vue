<template>
    <li>
        <span :class="{done: todo.completed}">
            <input 
                type="checkbox" 
                @change="todo.completed = !todo.completed" 
            />
            <strong>{{ index + 1 }}</strong>
            {{ toUpperCase(todo.title) }}
        </span>
        <button 
            class="rm"
            @click="$emit('remove-todo', todo.id)"
        >&times;</button>
    </li>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        },
        index: Number
    },
    methods: {
        toUpperCase(todo) {
            return todo.toUpperCase()
        }
    }
}
</script>

<style scoped>
    li {
        border: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: .5rem 2rem;
        margin-bottom: 1rem;
    }

    .rm {
        cursor: pointer;
        background: red;
        color: #fff;
        border-radius: 50%;
        font-weight: 700;
        border: none;
        outline: none;
    }

    input {
        margin-right: 1rem;
    }

    .done {
        text-decoration: line-through;
    }
</style>