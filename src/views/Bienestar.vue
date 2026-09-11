<template>
    <q-page padding style="position: relative; overflow: hidden;">
        <div class="img-background"></div>
        <div class="semi-transparente"></div>

        <div class="content">
            <div class="text-h4 q-mb-lg">Bienestar</div>

            <q-tabs v-model="tab" class="text-white" indicator-color="white" active-color="white">
                <q-tab name="descripcion" label="Descripción"/>
                <q-tab name="detalles" label="Detalles"/>
            </q-tabs>

            <q-tab-panels v-model="tab" class="bg-transparent text-white">

                <q-tab-panel name="descripcion">
                    <p>
                        Bienestar al Aprendiz es una estrategia institucional que busca contribuir a la permanencia de
                        los aprendices en su proceso formativo, promoviendo la cultura, la inclusión, la salud física y
                        mental y el fortalecimiento de habilidades para la vida. También fomenta el deporte, la
                        actividad física, el aprovechamiento del tiempo libre y las expresiones artísticas como parte de
                        la formación integral. Además, brinda apoyos socioeconómicos como sostenimiento, alimentación,
                        transporte y medios tecnológicos, junto con monitorías y espacios para fortalecer el liderazgo.

                    </p>
                </q-tab-panel>

                <q-tab-panel name="detalles">

                    <div class="text-subtitle2 q-mb-xs">
                        <q-icon name="schedule" class="q-mr-xs" />Horario de atención
                    </div>
                    <q-markup-table flat class="q-mb-lg" style="background: transparent;">
                        <tbody>
                            <tr>
                                <td class="text-white">Lunes a viernes</td>
                                <td class="text-white text-right">07:30 a.m. - 12:00 p.m. , 02:00 p.m. - 06:00 p.m.</td>
                            </tr>
                            <tr>
                                <td class="text-white">Sábados</td>
                                <td class="text-white text-right">cerrado</td>
                            </tr>
                            <tr>
                                <td class="text-white">Domingos y festivos</td>
                                <td class="text-white text-right">Cerrado</td>
                            </tr>
                        </tbody>
                    </q-markup-table>

                    <div class="text-subtitle2 q-mb-xs">
                        <q-icon name="call" class="q-mr-xs" />Teléfono de contacto
                    </div>
                    <p class="q-mb-lg">+57 3176377670</p>

                    <div class="text-subtitle2 q-mb-xs">Encargado de atención</div>
                    <q-card flat bordered class="bg-white text-dark q-pa-md">
                        <div class="row items-center q-gutter-md">
                            <q-avatar size="65px" color="primary" text-color="white">
                                <img src="../assets/bienestar-aprendiz-p.jpeg" alt="">
                            </q-avatar>
                            <div>
                                <div class="text-weight-medium">Maria Delea Arenas Mejía</div>
                                <div class="text-caption text-grey-8">Coordinador de Bienestar</div>
                                <div class="text-caption text-primary">mdarenas@sena.edu.com</div>
                            </div>
                        </div>
                    </q-card>

                </q-tab-panel>

            </q-tab-panels>
        </div>
    </q-page>
</template>

<style>
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

<script setup>
import { ref } from 'vue';
const tab = ref('descripcion')
</script>
