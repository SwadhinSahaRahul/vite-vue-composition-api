<template>
    <div>
        <h1>{{title}}</h1>
        <form action="#" @submit.prevent="add">
            <label>
                Add New Todo
                <input type="text" v-model="state.newTodo">
            </label>
        </form>

        <ul>
            <li v-for="todo in state.todos">
                <label>
                    <input type="checkbox" v-model="todo.isComplete">
                </label>
                {{todo.description}}
                <button @click="remove(todo.id)">Remove</button>
            </li>
        </ul>
    </div>
    <div>
        Items Left: {{itemsLeft}}
    </div>
</template>

<script>
    import {computed, onMounted, reactive, watch} from 'vue';

    export default {
        props: ['title'],

        setup(props) {
            const state = reactive({
                newTodo: '',
                newTodoId: 4,
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
            });

            function add() {
                state.todos.push({
                    id: state.newTodoId,
                    description: state.newTodo,
                    isComplete: false,
                });

                state.newTodoId++;
                state.newTodo = '';
            }

            function remove(id) {
                state.todos = state.todos.filter(todo => todo.id !== id);
            }

            const itemsLeft = computed(() => state.todos.filter(todo => !todo.isComplete).length);

            onMounted(() => {
                console.log('Mounted');
                console.log(props.title);
            });

            watch(
                () => state.newTodoId,
                (newValue, oldValue) => {
                    console.log(newValue, oldValue);
                });

            return {
                state,
                add,
                remove,
                itemsLeft
            }
        }
    }
</script>

<style scoped>

</style>
