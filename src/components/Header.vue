<template>
    <header>
        <div class="navbar">
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/stories-list">Historias</router-link>
                </li>
                <li>
                    <router-link to="/contact">Contact</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script setup>

const prop = defineProps({
    theme: Object,
})


</script>

<style lang="scss" scoped>
header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;


    .navbar {
        background-color: v-bind('prop.theme.color1');
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 25px 0;
        height: 85px;
        z-index: 1;
        top: 0;
        position: fixed;


        ul {
            display: flex;
            margin: 0;
            padding: 0;
            list-style: none;
            gap: 40px;

            li {
                a {
                    color: white;
                    font-weight: 300;
                    font-size: 24px;
                    letter-spacing: -1px;
                    text-decoration: none;
                    text-transform: uppercase;
                    font-family: "Instrument Serif";

                    &:hover {
                        color: v-bind('prop.theme.color3')
                    }
                }
            }
        }
    }
}
</style>