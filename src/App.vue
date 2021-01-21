<template>
    <todos title="Todo App"></todos>
    <!--<another></another>-->
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import Todos from "./components/Todos.vue";
    import Another from "./components/Another.vue";

    export default {
        name: 'App',
        components: {
            HelloWorld, Todos, Another
        }
    }
</script>
