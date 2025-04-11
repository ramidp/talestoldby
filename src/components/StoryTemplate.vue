<template>
    <section class='section-story-template' v-if="story">
        <h1>{{ story.titulo }}</h1>

        <p class="reading-time">Lectura estimada: {{ tiempoLectura }} min</p>

        <div class="text-content">
            <p v-for="(parrafo, index) in story.contenido" :key="index">{{ parrafo }}</p>
        </div>
    </section>

    <div v-else>
        <p>Historia no encontrada.</p>
    </div>
</template>

<script setup>
import { onMounted, nextTick, ref } from 'vue'
import { useRoute } from 'vue-router';
import stories from '@/assets/stories.json';

const route = useRoute();
const story = ref(null);

const prop = defineProps({
    theme: Object,
})

const tiempoLectura = ref(0)

function calcularTiempoLectura(selector = '.text-content', palabrasPorMinuto = 100) {
    const contenedor = document.querySelector(selector)

    if (!contenedor) return 0

    const parrafos = contenedor.querySelectorAll('p')
    let texto = ''
    parrafos.forEach(p => {
        texto += ' ' + (p.innerText || p.textContent || '')
    })

    const palabras = texto.trim().split(/\s+/).length
    return Math.ceil(palabras / palabrasPorMinuto)
}


onMounted(async () => {
    const url = route.params.url
    story.value = stories.find(h => h.url === url)

    await nextTick() // 💥 Esperamos a que se renderice el DOM con la historia
    tiempoLectura.value = calcularTiempoLectura()
})

</script>

<style scoped>
.section-story-template {
    gap: 35px;

    h1 {
        color: v-bind('prop.theme.color1');
        font-size: calc(40px + 1vw);
        width: 100%;
        left: 0;
        font-weight: 400;
        text-transform: uppercase;
        background-color: v-bind('prop.theme.color2');
        padding: 25px 0;
        padding-left: 50px;

        @media (max-width: 768px) {
            padding-left: 25px;
        }
    }

    .reading-time {
        font-weight: bold;
        margin-left: 15px;
    }

    .text-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: v-bind('prop.theme.color4');
        padding: 50px;

        @media (max-width: 768px) {
            padding: 25px;
        }

        p {
            font-weight: 400;
            font-size: 22px;
            color: black;
            letter-spacing: -0.5px;
            line-height: 120%;
            margin: 0;
            margin-bottom: 15px;
        }
    }
}
</style>