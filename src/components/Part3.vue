<template>



    <section class="section3">
        SIN USO HASTA NUEVO AVISO
        <h1>TITULO</h1>

        <div v-if="contenidoHTML">
            <h2>Contenido del Google Doc:</h2>
            <div v-html="contenidoHTML"></div>
        </div>
        <button @click="handleLogin">Iniciar sesión con Google</button>
    </section>

</template>

<script setup>
import { ref, onMounted } from 'vue'

const prop = defineProps({
    theme: Object,
})


const accessToken = ref('')
const contenidoHTML = ref('')

// Reemplazá estos con tus datos reales
const CLIENT_ID = '209546100863-k7npkqhc211kb7l8v7hg8c3bjbg18fju.apps.googleusercontent.com'
const DOCUMENT_ID = '10BxnRFjaMOILXsZS1NbboVovu2KqEljImpA5wP3pJt8'

const handleLogin = () => {
    const client = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: 'https://www.googleapis.com/auth/documents.readonly',
        callback: (tokenResponse) => {
            accessToken.value = tokenResponse.access_token
            fetchGoogleDoc()
        }
    })

    client.requestAccessToken()
}

const fetchGoogleDoc = () => {
    fetch(`https://docs.googleapis.com/v1/documents/${DOCUMENT_ID}`, {
        headers: {
            Authorization: `Bearer ${accessToken.value}`
        }
    })
        .then(res => res.json())
        .then(data => {
            const contenido = data.body.content
            let html = ''

            contenido.forEach(elemento => {
                if (elemento.paragraph) {
                    const partes = elemento.paragraph.elements
                    partes.forEach(parte => {
                        if (parte.textRun) {
                            html += `<p>${parte.textRun.content}</p>`
                        }
                    })
                }
            })

            contenidoHTML.value = html
        })
        .catch(err => {
            console.error('Error al obtener el documento:', err)
        })
}

onMounted(() => {
    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    document.head.appendChild(script)
})


onMounted(() => {
    window.google.accounts.id.initialize({
        client_id: '209546100863-k7npkqhc211kb7l8v7hg8c3bjbg18fju.apps.googleusercontent.com',
        callback: handleCredentialResponse
    })

    window.google.accounts.id.renderButton(
        document.getElementById('googleButton'),
        { theme: 'outline', size: 'large' }
    )
})

function handleCredentialResponse(response) {
    console.log("ID Token:", response.credential)
    // Enviás esto a tu backend o validás con Google
}

</script>

<style lang="scss" scoped>
.section3 {
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