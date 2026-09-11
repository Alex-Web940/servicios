<template>
    <q-page padding>

        <div class="text-h3 q-mb-xs">Sobre el centro</div>
        <p class="q-mb-lg" style="max-width: 700px;">
            El SENA cumple la función que le corresponde al Estado de invertir en el desarrollo social y técnico de los
            trabajadores colombianos, ofreciendo y ejecutando la formación profesional integral para la incorporación de
            las personas en actividades productivas que contribuyan al crecimiento social, económico y tecnológico del
            país.

            Además de la formación profesional integral, impartida a través de nuestros centros de formación, brindamos
            servicios de formación continua del recurso humano vinculado a las empresas; información; orientación y
            capacitación para el empleo; apoyo al desarrollo empresarial; servicios tecnológicos para el sector
            productivo; y apoyo a proyectos de innovación, desarrollo tecnológico y competitividad.

            En el año de 1997, fue creado el Centro Multisectorial de las Provincias Guanentina y Comunera, con sede en
            el Municipio de San Gil, Departamento de Santander, que inicialmente empezó a cumplir sus funciones en la
            antigua sede la Escuela Industrial del Municipio de San Gil, con el firme propósito de satisfacer las
            necesidades de formación del Talento Humano de las Provincias Guanentina y Comunera en acciones de formación
            laboral, asesoría a empresas y servicios tecnológicos. En el año 2008 mediante Resolución 02428, fue
            cambiada la denominación de Centro pasando a llamarse Centro Agroturistico.

            El Centro en su crecimiento y en cumplimiento de su misión, en el año 2007 conto con una subsede ubicada en
            la calle 16 Nº 14-28, en socorro Santander, y en el año 2012 dentro de sus instalaciones inicia las
            operaciones de Tecnoparque Colombia Nodo Socorro para apoyar en el desarrollo tecnológico e innovación a la
            población de las provincias Guanentina y comunera.

            El SENA fortalece los procesos de formación profesional integral que contribuyen al desarrollo comunitario a
            nivel urbano y rural para su vinculación o promoción en actividades productivas de interés social y
            económico. Además, apropia métodos, medios y estrategias dirigidos a la maxima de la cobertura y la calidad
            de la formación profesional integral; participa en actividades de investigación y desarrollo tecnológico,
            ocupacional y social, para contribuir a la actualización y mejoramiento de la formación profesional; y
            propiciar las relaciones internacionales tendientes a la conformación y operación de un sistema regional de
            formación profesional integral.
        </p>

        <div class="text-h4 q-mb-md">Equipo desarrollador</div>
        <div class="row q-col-gutter-md">
            <div class="col-12 col-sm-4 col-md-4" v-for="(dev, i) in equipo" :key="i">
                <q-card flat bordered class="q-pa-md text-center">
                    <q-avatar size="70px" color="primary" text-color="white">
                        <img src="../assets/피자배달온 도로롱.jpg" alt="">
                    </q-avatar>
                    <div class="text- q-mt-sm">{{ dev.nombre }}</div>
                    <div class="text- text-grey-8">{{ dev.rol }}</div>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script setup>
const equipo = [
    { nombre: 'Alex', rol: 'Desarrollo' },

]
</script>
