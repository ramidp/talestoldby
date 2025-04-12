<template>

    <div class="contact-container">

        <!-- <div class="title">
            <h1>HOME PAGE</h1>
        </div> -->


        <div class="column2 column">
            <div class="square">
                <h1>CONTACTO</h1>
            </div>
        </div>
        <div class="column4 column">
            <div class="square"></div>
            <div class="square"></div>
            <div class="square"></div>
        </div>
        <div class="column3 column">
            <div class="square"></div>
            <div class="square"></div>
        </div>
        <div class="column1 column">
            <div class="square"></div>
            <div class="square"></div>
        </div>

    </div>


</template>

<script setup>
import { ref, onMounted } from 'vue'

const prop = defineProps({
    theme: Object,
})



</script>

<style lang="scss" scoped>
.contact-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 720px;
    width: 100%;
    height: calc(100vh - 85px);
    position: relative;
    margin-top: 85px;


    .column {
        height: 100%;
        width: 25%;
        display: grid;
        background-color: white;
        opacity: 0.5;

        .square {
            width: 100%;
            animation-name: breath;
            animation-duration: 5000ms;
            animation-iteration-count: infinite;


            @keyframes breath {
                0% {
                    filter: opacity(1);
                }

                50% {
                    filter: opacity(0);
                }

                100% {
                    filter: opacity(1);
                }
            }
        }
    }

    .column1 {
        grid-template-rows: repeat(2, 1fr);

        .square {
            animation-delay: 1000ms;
            height: 100%;
            background-color: gray;
        }

        .square:nth-child(2) {
            height: 100%;
            animation-delay: 2000ms;
            background: v-bind('prop.theme.color4');
        }
    }

    .column2 {
        opacity: 1;

        .square {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: v-bind('prop.theme.color1');
            animation: pepe;

            h1 {
                color: white;
                font-weight: bold;
                font-size: calc(75px + 1vw);
                width: 100%;
                padding: 0 20px;
                max-height: calc(100vh - 150px);
            }
        }
    }

    .column3 {
        grid-template-rows: repeat(2, 1fr);

        .square:nth-child(2) {
            height: 100%;
            background: v-bind('prop.theme.color3');
            animation-delay: 5000ms;
        }

        .square {
            height: 100%;
            animation-delay: 500ms;
            background: v-bind('prop.theme.color4');
        }
    }

    .column4 {
        grid-template-rows: repeat(3, 1fr);

        .square:nth-child(2) {
            animation-delay: 3000ms;
            background: v-bind('prop.theme.color2');
        }

        .square:nth-child(3) {
            animation-delay: 1500ms;
            background: v-bind('prop.theme.color1');
        }

        .square {
            height: 100%;
            animation-delay: 500ms;
            background: v-bind('prop.theme.color3');
        }
    }
}
</style>