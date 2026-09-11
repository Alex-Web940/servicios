<template>
    <q-page padding style="position: relative; overflow: hidden;">
        <div class="img-background"></div>
        <div class="semi-transparente"></div>

        <div class="content">
            <div class="text-h4 q-mb-sm">Centro de Formación SENA</div>
            <p style="max-width: 500px;">
                Consulta aquí la información de los servicios de bienestar disponibles
                para la comunidad SENA: horarios de atención, teléfonos de contacto y
                encargados de cada área. Usa el menú lateral para navegar entre ellos.
            </p>
        </div>
    </q-page>
</template>

<style scoped>
.img-background {
    position: absolute;
    inset: 0;
    background-image: url('../assets/ini-sena.png');
    background-size: cover;
    background-position: center;
    filter: blur(3px);
}

.semi-transparente {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
}

.content {
    position: relative;
    z-index: 1;
    padding: 24px;
    color: white;
}
</style>
