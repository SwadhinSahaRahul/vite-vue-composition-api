<template>
    <div class="container">
        <h1>Todo App</h1>
        <form action="#" @submit.prevent="add">
            <input type="text" v-model="newTodo">
        </form>

        <ul>
            <li v-for="(todo, index) in todos">{{todo.description}}
                <button @click="remove(todo, index)">Remove</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                todos: [
                    {
                        id: 1,
                        description: "Install Vue 3",
                        isComplete: false,
                    },
                    {
                        id: 2,
                        description: "Install Vite",
                        isComplete: false,
                    },
                    {
                        id: 3,
                        description: "Install Tailwind Css",
                        isComplete: false,
                    }
                ],
                newTodo: ''
            }
        },
        methods: {
            add() {
                this.todos.push({
                    id: '',
                    description: this.newTodo,
                    isComplete: false,
                });
                this.newTodo = '';
            },
            remove(todo, index) {
                this.todos.splice(index, 1);
            }
        },
        computed: {
            itemsLeft() {
                return this.todos.filter(todo => !todo.isComplete).length
            }
        }
    }
</script>

<style scoped>

</style>
