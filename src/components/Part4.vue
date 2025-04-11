<template>

    <section class="section2">
        <h1>Por vos,
            <br>
            el cielo
        </h1>

        <p class="reading-time">Lectura estimada: {{ tiempoLectura }} min</p>

        <div class="text-content">

            <p>En cuanto se dio cuenta de todo lo que la quería, no pudo evitar pensar en alguna frase trillada sobre
                darlo todo, bajarle la luna u obsequiarle el cielo, porque representaba su todo.</p>
            <br>
            <p>Un tanto peligroso, quizás, exponer y otorgarle tanto valor a otra persona, alguien que un día podría no
                estar más.</p>
            <br>
            <p>Aunque esa reflexión ya había rondado su cabeza, no le impidió sentir que hoy era ese momento. Y si
                mañana llegaba y su todo se convertía en nada, pues que la tristeza viniera, que lo abrazara.</p>
            <br>
            <p>
                Gracias a la tristeza, podemos entender y discernir los momentos de felicidad; gracias a la nada,
                podemos comprender el todo.
            </p>
            <br>
            <p>
                Y hoy su todo era ella, quien merecía el cielo y algo más.
            </p>
            <br>

            <span class="phrase">"Hoy la nada puede ser todo, pero mañana puede cambiar"</span>

        </div>
    </section>

</template>

<script setup>
import { ref, onMounted } from 'vue'

const prop = defineProps({
    theme: Object,
})


const tiempoLectura = ref(0)

onMounted(() => {
    tiempoLectura.value = calcularTiempoLectura('.text-content')
})

function calcularTiempoLectura(selector = '.text-content', palabrasPorMinuto = 100) {
    const contenedor = document.querySelector(selector)

    if (!contenedor) return 0

    const texto = contenedor.innerText || contenedor.textContent || ''
    const palabras = texto.trim().split(/\s+/).length

    return Math.ceil(palabras / palabrasPorMinuto)
}


</script>

<style lang="scss" scoped>
.section2 {
    gap: 35px;


    .text-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: v-bind('prop.theme.color4');
        padding: 50px;

        @media (max-width: 768px) {
            padding: 25px;
        }

    }
}
</style>