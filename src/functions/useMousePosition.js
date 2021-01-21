import {onMounted, reactive, toRefs} from "vue";

export function useMousePosition() {

    /*const x = ref(0);
    const y = ref(0);*/

    const pos = reactive({
        x: 0,
        y: 0
    });

    onMounted(() => {
        window.addEventListener('mousemove', update);
    });

    function update(e) {
        pos.x = e.pageX;
        pos.y = e.pageY;
    }

    return toRefs(pos);
}
