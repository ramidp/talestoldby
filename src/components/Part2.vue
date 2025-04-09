<template>

    <section class="section2">
        <h1>La historia que todavía fue (Parte 1)</h1>

        <div class="text-content">

            <p>
                De repente llego a la puerta y le mando un mensaje, ya que nunca me dijo en qué piso vivía. Es algo que
                acostumbramos hoy por hoy: pasar direcciones o coordenadas, pero sin tanto detalle. Supongo que no son
                necesarios esos datos, ¿no? Digo, si llego a la puerta o cerca de su puerta, con mandarle un mensaje y
                decirle que baje sería suficiente, ¿verdad? Yo haría lo mismo, más si no la conozco y es la primera vez
                que
                me veo
                con
                ella.
            </p>
            <br>
            <br>
            <p>
                En ese momento pienso: esto ya lo viví, y hace poco encima. Ya fui a la puerta de la casa de una chica
                que
                no conocía y me quedé esperando en la puerta hasta verla venir y, de allí, mi primera impresión. En este
                momento me juega la cabeza. Digo, ¿y si no me gusta? ¿O si me encanta? ¿Podré saber eso tan pronto como
                la
                vea caminar
                por el pasillo y que viene a mí? ¿Acaso alguna vez te pasó eso? Que pensaste o cuál fue tu primer
                pensamiento
                cuando esa persona viene y decís: "Ahh, debe ser esa, ¿no?", o tal vez pensás: "Ojalá que no sea esa",
                jajaja.
            </p>
            <br>
            <br>
            <p>
                Por un lado, tiene cierta diversión y mística hacer esto. Es decir, viene alguien que no conozco, la veo
                caminar
                por el pasillo como si de una pasarela de moda se tratara y yo soy el juez que la mira y dice: "Epa, es
                mucho
                más linda de lo que pensaba" o "Y bueno, le voy a poner onda, aunque no me guste mucho como primera
                impresión,
                pero tal vez tiene su onda y me llega por otro lado".
            </p>
            <br>
            <br>
            <p>
                A todo esto, mi cabeza deja de pensar y, en efecto, ella estaba en la puerta abriendo, y yo pensando
                todo
                esto.
            </p>
            <br>
            <br>
            <p>
                De allí un saludo, tan simple como cualquiera: un beso en la mejilla y un "Hola, jeje", tan inocente y
                un
                tanto
                vergonzoso, o más que vergonzoso, como un saludo de personas que son ajenas entre sí. Pero así se
                empieza,
                ¿no?
                Nadie se saluda y se conoce sin antes conocerse.
            </p>
            <br>
            <br>
            <p>
                Posterior al saludo, caminamos hacia la esquina, y luego con rumbo, pero sin rumbo, ¿se entiende, no?
                Eso de
                decir: vamos a tal lado, pero en verdad luego te perdés en palabras, charlas, incluso en su mirada o en,
                aún
                más
                importante, en sus hermosos ojos, los cuales me dejaron estúpido. No me esperaba tanto en tan poco
                tiempo,
                pero
                volviendo a mí, ya no tenía tanta importancia por dónde caminábamos.
            </p>
            <br>
            <br>
            <p>Asumía que estábamos yendo bien; bah, yo no pensaba tanto en eso, ya me sentía bien.</p>
            <br>
            <br>
            <p>
                Y así transcurrimos, por diferentes lares, caminando, charlando, ella contándome sus cuentos y yo los
                míos.
                Había mucha química, ida y vuelta, risas, complicidad, y eso que éramos personas ajenas una del otro.
                ¿Qué podía salir mal, no? Digo, todo parece digno de un cuento o de una película protagonizada por Ryan
                Gosling
                y Rachel McAdams.

            </p>
        </div>
    </section>

</template>

<script setup>

const prop = defineProps({
    theme: Object,
})


</script>

<style lang="scss">
.section2 {
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
            font-size: 20px;
            color: black;
            letter-spacing: -0.5px;
            line-height: 120%;
            margin: 0;
        }
    }
}
</style>