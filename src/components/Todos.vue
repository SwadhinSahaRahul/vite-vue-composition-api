<template>
    <div>
        <h1>{{title}}</h1>
        <button @click="toggleItemsLeft" class="px-2 py-2 rounded bg-blue-500 text-white">Toggle Items Left</button>
        <button @click="toggleMousePosition" class="px-2 py-2 rounded bg-blue-500 text-white">Toggle Mouse Position
        </button>
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
    <div v-show="itemsLeftVisible">
        Items Left: {{itemsLeft}}
    </div>

    <div v-show="mousePositionVisible">
        <h2>Mouse Position</h2>
        <p>X: {{x}}</p>
        <p>Y: {{y}}</p>
    </div>
</template>

<script>
    import {computed, onMounted, ref, watch} from 'vue';
    import {useMousePosition} from '../functions/useMousePosition';
    import {useToggle} from '../functions/useToggle';

    export default {
        props: ['title'],

        setup(props) {
            const {x, y} = useMousePosition();

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

            watch(
                () => newTodoId.value,
                (newValue, oldValue) => {
                    console.log(newValue, oldValue);
                });


            onMounted(() => {
                console.log(props.title);
            });

            const {isVisible: itemsLeftVisible, toggleVisible: toggleItemsLeft} = useToggle();
            const {isVisible: mousePositionVisible, toggleVisible: toggleMousePosition} = useToggle();

            return {
                newTodoId, newTodo, todos,
                x, y,
                add,
                remove,
                itemsLeft,
                itemsLeftVisible, toggleItemsLeft,
                mousePositionVisible, toggleMousePosition,
            }
        }
    }
</script>

<style scoped>

</style>
