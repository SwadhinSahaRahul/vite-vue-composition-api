<template>
    <div>
        <h1>{{title}}</h1>
        <form action="#" @submit.prevent="add">
            <label>
                Add New Todo
                <input type="text" v-model="newTodo">
            </label>
        </form>

        <ul>
            <li v-for="todo in todos">
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
    import {computed, onMounted, ref, watch} from 'vue';

    export default {
        props: ['title'],

        setup(props) {
            const newTodo = ref('');
            const newTodoId = ref(4);
            const todos = ref([
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
            ]);

            function add() {
                todos.value.push({
                    id: newTodoId.value,
                    description: newTodo.value,
                    isComplete: false,
                });

                newTodoId.value++;
                newTodo.value = '';
            }

            function remove(id) {
                todos.value = todos.value.filter(todo => todo.id !== id);
            }

            const itemsLeft = computed(() => todos.value.filter(todo => !todo.isComplete).length);

            onMounted(() => {
                console.log('Mounted');
                console.log(props.title);
            });

            watch(
                () => newTodoId.value,
                (newValue, oldValue) => {
                    console.log(newValue, oldValue);
                });

            return {
                newTodoId, newTodo, todos,
                add,
                remove,
                itemsLeft
            }
        }
    }
</script>

<style scoped>

</style>
