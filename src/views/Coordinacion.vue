<template>
    <q-page padding style="position: relative; overflow: hidden;">
        <div class="img-background"></div>
        <div class="semi-transparente"></div>

        <div class="content q-mx-auto" style="width: 60%;">
            <div class="text-h2 text-center q-mb-lg">Coordinación</div>

            <q-tabs v-model="tab" class="text-white" indicator-color="white" active-color="white">
                <q-tab name="descripcion" label="Descripción" />
                <q-tab name="detalles" label="Detalles" />
            </q-tabs>

            <q-tab-panels v-model="tab" class="bg-transparent text-white">

                <q-tab-panel name="descripcion">
                    <p>
                        Se apoya la gestión de novedades de los aprendices de formación titulada, incluyendo retiros,
                        deserciones y aplazamientos. También se brinda apoyo en la programación de instructores y en la
                        logística de los ambientes de formación. Además, se verifica que los ambientes se encuentren en
                        óptimas condiciones para garantizar el adecuado desarrollo de las actividades formativas.
                    </p>
                </q-tab-panel>

                <q-tab-panel name="detalles">

                    <div class="text-subtitle2 q-mb-xs">
                        <q-icon name="schedule" class="q-mr-xs" />Horario de atención
                    </div>
                    <q-markup-table flat bordered class="q-mb-lg text-white" style="background: transparent;">
                        <thead>
                            <tr>
                                <th class="text-left" style="
                                padding-right
                                : 13px;">Día</th>
                                <th class="text-right">Horario</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Lunes</td><td class="text-right">07:30 a.m. - 12:00 p.m.</td></tr>
                            <tr><td>Martes</td><td class="text-right">07:30 a.m. - 12:00 p.m.</td></tr>
                            <tr><td>Miércoles</td><td class="text-right">07:30 a.m. - 12:00 p.m.</td></tr>
                            <tr><td>Jueves</td><td class="text-right">07:30 a.m. - 12:00 p.m.</td></tr>
                            <tr><td>Viernes</td><td class="text-right">07:30 a.m. - 12:00 p.m.</td></tr>
                            <tr><td>Sábado</td><td class="text-right">Cerrado</td></tr>
                            <tr><td>Domingo y festivos</td><td class="text-right">Cerrado</td></tr>
                        </tbody>
                    </q-markup-table>

                    <div class="text-subtitle2 q-mb-xs">
                        <q-icon name="call" class="q-mr-xs" />Teléfono de contacto
                    </div>
                    <p class="q-mb-lg">+57 607 724 8100</p>

                    <div class="text-subtitle2 q-mb-xs">Encargado de atención</div>
                    <q-card flat bordered class="bg-white text-dark q-pa-md">
                        <div class="row items-center q-gutter-md">
                            <q-avatar size="65px" color="primary" text-color="white">
                                <img src="../assets/coordinacion-p.jpeg" alt="" >
                            </q-avatar>
                            <div>
                                <div class="text-weight-medium">Luis Carlos Reina</div>
                                <div class="text-caption text-grey-8">Coordinador académico</div>
                                <div class="text-caption text-primary">lreinas@sena.edu.com</div>
                            </div>
                        </div>
                    </q-card>

                </q-tab-panel>

            </q-tab-panels>
        </div>
    </q-page>
</template>

<style scoped>
.img-background {
    position: absolute;
    inset: 0;
    background-image: url('../assets/coordinacion.jpeg');
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

.text-subtitle2 {
    font-size: 18px !important;
}

.q-markup-table td,
.q-markup-table th {
    font-size: 16px !important;
}

.text-caption {
    font-size: 15px !important;
}

p {
    font-size: 16px;
}
</style>

<script setup>
import { ref } from 'vue';
const tab = ref('descripcion')
</script>
