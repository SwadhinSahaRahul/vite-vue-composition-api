<template>
    <todos title="Todo App"></todos>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import Todos from "./components/Todos.vue";

    export default {
        name: 'App',
        components: {
            HelloWorld, Todos
        }
    }
</script>
