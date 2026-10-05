<template>
    <div id="app">
        <h1>{{  message  }}</h1>
        <button @click="changeMessage">Cambiar Mensaje</button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    computed: {
        ...mapState(['message'])
    },
    methods: {
        ...mapMutations(['setMessage']),
        changeMessage() {
            this.setMessage('Hola!!!');
        }
    }
}

</script>