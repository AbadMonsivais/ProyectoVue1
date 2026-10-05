<template>
    <div class="componente 1">
        <h1 v-bind:class="{ highlighted: isHighlighted }">{{  title  }}</h1>
        <button v-on:click="toggleHighlight">Toggle Highlight</button>
        <input v-model="message">

        <ul>
            <li v-for="item in list" :key="item.id">{{  item.text  }}</li>
        </ul>
    </div>
</template>
<style scoped>
.highlighted {
    color: gold;
}
</style>

<script>
export default {
    name: 'PrimerComponente' ,
    data() {
        return {
            message: 'Hola mundo con Vue!!!',
            title: 'Este es el titulo',
            isHighlighted: false,
            isVisible: true,
            list: [
                { id: 1, text: 'Primer item' },
                { id: 2, text: 'Segundo item' },
                { id: 3, text: 'Tercer item' }
            ]
        }
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        },
        sayHello() {
            alert('Hola!!!');
        },
        toggleHighlight() {
            this.isHighlighted = !this.isHighlighted;
        }
    }
}


</script>