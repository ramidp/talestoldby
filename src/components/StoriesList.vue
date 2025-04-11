<template>

    <section class="section4">
        <h1>Lista de Historias</h1>

        <div class="stories-container">
            <ul class="stories-list">
                <li v-for="story in stories" :key="story.url">
                    <router-link :to="`/story/${story.url}`">{{ story.titulo }}</router-link>
                </li>
            </ul>
        </div>

    </section>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import stories from '@/assets/stories.json';

const prop = defineProps({
    theme: Object,
})



</script>

<style lang="scss" scoped>
.section4 {
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

    .stories-container {

        .stories-list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;

            li {
                background-color: v-bind('prop.theme.color1');
                width: fit-content;
                padding: 20px;
                transition: 300ms ease all;


                &:hover {
                    background-color: v-bind('prop.theme.color4');

                    &>a {
                        color: black;
                    }
                }

                a {
                    font-size: 30px;
                    text-decoration: none;
                    transition: 300ms ease all;
                    color: v-bind('prop.theme.color3')
                }
            }
        }
    }
}
</style>