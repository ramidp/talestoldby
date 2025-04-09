<template>
    <header>
        <div class="navbar">
            <ul>
                <router-link to="/">Home</router-link>
                <router-link to="/part2">Part2</router-link>
                <li>Historias</li>
                <li>Contacto</li>
            </ul>
        </div>
    </header>
</template>

<script setup>


</script>

<style lang="scss" scoped>
header {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .navbar {
        background-color: rgb(98, 98, 249);
        display: flex;
        height: 60px;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        width: 50%;
        top: 25px;
        z-index: 1;
        position: fixed;
        box-shadow: 2px 5px 10px 2px rgba(0, 0, 0, 0.5);

        ul {
            display: flex;
            margin: 0;
            padding: 0;
            list-style: none;
            gap: 20px;

            li {
                a {
                    color: white;
                    font-weight: bold;
                    text-decoration: none;

                    &:hover {
                        color: rgb(56, 56, 150);
                    }
                }
            }
        }
    }
}
</style>