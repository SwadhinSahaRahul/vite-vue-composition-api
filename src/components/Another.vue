<template>
    <div>
        <h2>Mouse Position</h2>
        <p>X: {{positionX}}</p>
        <p>Y: {{positionY}}</p>
    </div>
</template>

<script>
    import {useMousePosition} from "../functions/useMousePosition";

    export default {
        setup() {
            const {x: positionX, y: positionY} = useMousePosition();
            return {
                positionX, positionY
            }
        }
    }
</script>

<style scoped>

</style>
