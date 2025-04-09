<template>

    <section class="section1">
        <div id="questions" class="ask"></div>
        <ul class="answers" id="answers"></ul>
    </section>



</template>

<script setup>
import { onMounted } from 'vue';
import { story } from '@/assets/story.js';

const prop = defineProps({
    theme: Object,
})


// Función para renderizar preguntas y respuestas
function renderQuestion(node) {
    const questionsElement = document.getElementById('questions');
    const answersElement = document.getElementById('answers');

    // Limpia las respuestas y preguntas anteriores
    questionsElement.innerHTML = '';
    answersElement.innerHTML = '';

    // Itera sobre las propiedades del objeto `question` y las muestra
    Object.entries(node.question).forEach(([key, value]) => {
        const p = document.createElement('p');
        p.textContent = value;
        questionsElement.appendChild(p);
    });

    // Genera las respuestas
    node.answers.forEach((answer) => {
        const li = document.createElement('li');
        li.textContent = answer.text;
        li.addEventListener('click', () => handleAnswer(answer));
        answersElement.appendChild(li);
    });
}

// Manejar una respuesta seleccionada
function handleAnswer(answer) {
    if (answer.next) {
        renderQuestion(answer.next); // Muestra la siguiente pregunta
    } else {
        // Si no hay más preguntas, muestra el fin
        const questionsElement = document.getElementById('questions');
        const answersElement = document.getElementById('answers');
        questionsElement.innerHTML = '<p>Fin de la historia</p>';
        answersElement.innerHTML = '';
    }
}


onMounted(() => {
    // Inicializa la primera pregunta
    renderQuestion(story);
});
</script>

<style lang="scss" scoped>
main {
    width: 100%;
    height: calc(100vh - 150px);
    padding: 150px;


    .ask {
        :deep(p) {
            font-size: calc(24px + 0.35vw);
        }
    }

    .answers {
        width: 100%;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-top: 20px;

        :deep(li) {
            background-color: rgb(98, 98, 249);
            color: white;
            padding: 7px 20px;

            &:hover {
                background-color: rgb(47, 47, 203);
            }
        }
    }
}
</style>