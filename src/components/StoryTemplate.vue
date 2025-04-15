<template>
    <section class='section-story-template' v-if="story">

        <div class="main">
            <h1>{{ story.titulo }}</h1>

            <p class="reading-time">Lectura estimada: {{ tiempoLectura }} min</p>

            <div class="text-content">
                <p v-for="(parrafo, index) in story.contenido" :key="index">{{ parrafo }}</p>
            </div>

            <span v-if="story.quote" class="quote">"{{ story.quote }}"</span>
        </div>

        <div class="side-bar">
            <h2>Más Historías</h2>

            <div class="more-stories-container">


                <a v-for="story in stories
                    .slice()
                    .sort((a, b) => a.id - b.id)
                    .filter(story => `/story/${story.url}` !== currentPath)" :key="story.id" class="story"
                    :href="`/story/${story.url}`">
                    {{ story.titulo }}
                </a>



            </div>
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

let currentPath = ref('')

onMounted(async () => {
    const url = route.params.url
    story.value = stories.find(h => h.url === url)
    currentPath.value = window.location.pathname
    console.log(currentPath.value)

    await nextTick()
    tiempoLectura.value = calcularTiempoLectura()
})



</script>

<style scoped>
.section-story-template {
    gap: 35px;
    flex-direction: row;

    .main {
        display: flex;
        flex-direction: column;
        gap: 35px;
        width: 80%;

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
                font-size: calc(14px + 0.25vw);
                color: black;
                letter-spacing: -0.5px;
                line-height: 120%;
                margin: 0;
                margin-bottom: 15px;
            }
        }

        .quote {
            font-style: italic;
            font-size: calc(14px + 0.5vw);
            color: gray;
            font-weight: 600;
            padding: 0 25px;
        }
    }

    .side-bar {
        width: 20%;
        height: fit-content;
        background-color: v-bind('prop.theme.color2');
        padding: 50px 20px;
        display: flex;
        flex-direction: column;
        gap: 50px;
        position: sticky;

        h2 {
            margin: 0;
            font-size: 30px;
        }

        .more-stories-container {
            display: flex;
            flex-direction: column;
            gap: 15px;


            a {
                width: 100%;
                height: 100%;
                padding: 15px;
                text-decoration: none;
                color: black;
                font-weight: 600;
                font-size: 20px;
                transition: 300ms ease all;
                background-color: rgb(223, 223, 223);


                &:hover {
                    cursor: pointer;
                    background-color: rgb(71, 71, 71);
                    color: rgb(189, 189, 189);

                }


            }
        }
    }

}
</style>