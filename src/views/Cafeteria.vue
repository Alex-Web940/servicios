<template>
    <q-page padding style="position: relative; overflow: hidden;">
        <div class="img-background"></div>
        <div class="semi-transparente"></div>

        <div class="content">
            <div class="text-h4 q-mb-lg">Cafetería</div>

            <q-tabs v-model="tab" class="text-white" indicator-color="white" active-color="white">
                <q-tab name="descripcion" label="Descripción" />
                <q-tab name="detalles" label="Detalles" />
            </q-tabs>

            <q-tab-panels v-model="tab" class="bg-transparent text-white">

                <q-tab-panel name="descripcion">
                    <p>
                        Ofrece servicios de venta y atención al cliente relacionados con alimentos, brindando productos
                        preparados y de calidad a aprendices, instructores y demás integrantes de la comunidad SENA.
                        También promueve una atención amable, eficiente y orientada a satisfacer las necesidades de los
                        usuarios.

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
                                <td class="text-white text-right">7:30 a.m. - 12:00 p.m. , 01:00 p.m. - 05:30 p.m. ,
                                    07:00 p.m. - 9:30 p.m.</td>
                            </tr>
                            <tr>
                                <td class="text-white">Sábados</td>
                                <td class="text-white text-right">cerrado</td>
                            </tr>
                            <tr>
                                <td class="text-white">Domingos</td>
                                <td class="text-white text-right">Cerrado</td>
                            </tr>
                        </tbody>
                    </q-markup-table>

                    <div class="text-subtitle2 q-mb-xs">
                        <q-icon name="call" class="q-mr-xs" />Teléfono de contacto
                    </div>
                    <p class="q-mb-lg">+57 3223038451</p>

                    <div class="text-subtitle2 q-mb-xs">Encargada de atención</div>
                    <q-card flat bordered class="bg-white text-dark q-pa-md">
                        <div class="row items-center q-gutter-md">
                            <q-avatar size="65px" color="primary" text-color="white" >
                            <img src="../assets/images.png" alt="">
                            </q-avatar>
                            <div>
                                <div class="text-weight-medium">Marcela Ibáñez Torres</div>
                                <div class="text-caption text-grey-8">cordinadora de cafetería </div>
                                <div class="text-caption text-primary">lcarreno@sena.edu.com</div>
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
