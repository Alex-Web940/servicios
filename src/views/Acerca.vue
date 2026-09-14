<template>
    <q-page style="position: relative; overflow: hidden;">
        <div class="img-background"></div>
        <div class="semi-transparente"></div>

        <div class="content q-mx-auto text-center q-pa-lg" style="width: 70%; position: relative; z-index: 1;">

            <div class="text-h3 q-mb-lg text-white">Información sobre el centro</div>

            <div class="glass-card q-pa-lg text-left q-mb-xl">
                <p class="about-text">
                    El SENA cumple la función que le corresponde al Estado de invertir en el desarrollo social y
                    técnico de los trabajadores colombianos, ofreciendo y ejecutando la formación profesional
                    integral para la incorporación de las personas en actividades productivas que contribuyan al
                    crecimiento social, económico y tecnológico del país.
                    <br><br>
                    Además de la formación profesional integral, impartida a través de nuestros centros de
                    formación, brindamos servicios de formación continua del recurso humano vinculado a las
                    empresas; información; orientación y capacitación para el empleo; apoyo al desarrollo
                    empresarial; servicios tecnológicos para el sector productivo; y apoyo a proyectos de
                    innovación, desarrollo tecnológico y competitividad.
                    <br><br>
                    En el año de 1997, fue creado el Centro Multisectorial de las Provincias Guanentina y Comunera,
                    con sede en el Municipio de San Gil, Departamento de Santander, que inicialmente empezó a
                    cumplir sus funciones en la antigua sede la Escuela Industrial del Municipio de San Gil, con el
                    firme propósito de satisfacer las necesidades de formación del Talento Humano de las Provincias
                    Guanentina y Comunera en acciones de formación laboral, asesoría a empresas y servicios
                    tecnológicos. En el año 2008 mediante Resolución 02428, fue cambiada la denominación de Centro
                    pasando a llamarse Centro Agroturístico.
                    <br><br>
                    El Centro en su crecimiento y en cumplimiento de su misión, en el año 2007 contó con una
                    subsede ubicada en la calle 16 Nº 14-28, en Socorro Santander, y en el año 2012 dentro de sus
                    instalaciones inicia las operaciones de Tecnoparque Colombia Nodo Socorro para apoyar en el
                    desarrollo tecnológico e innovación a la población de las provincias Guanentina y Comunera.
                    <br><br>
                    El SENA fortalece los procesos de formación profesional integral que contribuyen al desarrollo
                    comunitario a nivel urbano y rural para su vinculación o promoción en actividades productivas de
                    interés social y económico. Además, apropia métodos, medios y estrategias dirigidos a la máxima
                    cobertura y calidad de la formación profesional integral; participa en actividades de
                    investigación y desarrollo tecnológico, ocupacional y social, para contribuir a la actualización
                    y mejoramiento de la formación profesional; y propicia las relaciones internacionales tendientes
                    a la conformación y operación de un sistema regional de formación profesional integral.
                </p>
            </div>
        
            <div class="glass-card style-card q-pa-md text-white">
                <div class="text-subtitle1 text-weight-bold q-mb-md text-center">
                    <q-icon size="25px" name="code" class="q-mr-sm" />Equipo desarrollador
                </div>

                <div class="row q-col-gutter-md justify-center">
                    <div class="col-12 col-sm-6" v-for="(dev, i) in equipo" :key="i">
                        <div class="column items-center q-mb-md">
                            <div class="profile-photo">
                                <img src="../assets/descarga.jpg">
                            </div>
                            <div class="text-weight-medium q-mt-sm" style="font-size: 15px;">{{ dev.nombre }}</div>
                            <div class="text-caption dev-role" style="opacity: 0.90; font-size: 18px;">{{ dev.rol }}</div>
                        </div>
                    </div>
                </div>
            </div>
</div>
    </q-page>
</template>

<script setup>
const equipo = [
    { nombre: 'Alex', rol: 'Desarrollo' },
]
</script>

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
    background: rgba(0, 0, 0, 0.6);
}

.about-text {
    font-size: 16px;
    line-height: 1.6;
    color: white;
}

.glass-card {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 12px;
}

.dev-card {
    height: 100%;
}

.dev-role {
    color: rgba(255, 255, 255, 0.75) !important;
}
.style-card{
    max-width: 45%;
    margin: 0 auto;
}
.profile-photo {
    width: 121px;
    height: 120px;
    border-radius: 16px;
    overflow: hidden;
    border: 2px solid rgba(255, 255, 255, 0.3);
    margin: 0 auto;
}

.profile-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>