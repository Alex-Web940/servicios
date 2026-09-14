<template>
    <q-page style="position: relative; overflow: hidden;">

        <div class="hero">
            <div class="img-background"></div>
            <div class="semi-transparente"></div>

            <div class="hero-content column items-center text-center q-px-md">
                <q-avatar size="100px" class="q-mb-md hero-avatar">
                    <img src="../assets/logosena.png">
                </q-avatar>
                <div class="text-h3 text-weight-bold">Centro de Formación SENA</div>
                <div class="text-subtitle1 q-mt-sm hero-subtitle">
                    Servicios de bienestar para toda la comunidad
                </div>
                <p class="hero-text q-mt-md background">
                    Consulta aquí la información sobre los diferentes servicios disponibles para aprendices,
                    instructores y demás integrantes de la comunidad SENA. Conoce los servicios ofrecidos, sus
                    funciones, horarios de atención, datos de contacto y responsables de cada área. Selecciona una
                    tarjeta para conocer más información.
                </p>
            </div>
        </div>


        <div class="services-section">
            <div class="text-h5 text-center text-weight-medium q-mb-lg">Nuestros servicios</div>

            <div class="row q-col-gutter-md justify-center services-grid">
                <div class="col-12 col-sm-6 col-md-4" v-for="service in services" :key="service.to">
                    <q-card class="service-card" clickable v-ripple @click="$router.push(service.to)">
                        <div class="service-img" :style="{ backgroundImage: `url(${service.image})` }">
                            <div class="service-img-overlay"></div>
                            <q-icon :name="service.icon" size="34px" class="service-icon" />
                        </div>
                        <q-card-section>
                            <div class="text-subtitle1 text-weight-bold">{{ service.title }}</div>
                            <div class="text-caption service-desc">{{ service.description }}</div>
                        </q-card-section>
                        <q-card-section class="q-pt-none">
                            <div class="row items-center text-primary service-link">
                                <span class="text-caption text-weight-medium">Ver más</span>
                                <q-icon name="arrow_forward" size="16px" class="q-ml-xs" />
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
            </div>
        </div>

    </q-page>
</template>

<script setup>
import biblioteca from '../assets/biblioteca.jpeg'
import bienestar from '../assets/bienestar-aprendiz.jpeg'
import cafeteria from '../assets/cafeteria.jpeg'
import coordinacion from '../assets/coordinacion.jpeg'
import enfermeria from '../assets/enfermeria.jpeg'

const services = [
    {
        title: 'Biblioteca',
        description: 'Consultas, préstamos y recursos bibliográficos',
        icon: 'menu_book',
        image: biblioteca,
        to: '/Biblioteca'
    },
    {
        title: 'Bienestar',
        description: 'Apoyo integral para tu bienestar y permanencia',
        icon: 'spa',
        image: bienestar,
        to: '/Bienestar'
    },
    {
        title: 'Cafetería',
        description: 'Alimentación para la comunidad SENA',
        icon: 'restaurant',
        image: cafeteria,
        to: '/Cafeteria'
    },
    {
        title: 'Coordinación',
        description: 'Gestión académica y logística de ambientes',
        icon: 'groups',
        image: coordinacion,
        to: '/Coordinacion'
    },
    {
        title: 'Enfermería',
        description: 'Promoción, prevención y primeros auxilios',
        icon: 'medical_services',
        image: enfermeria,
        to: '/Enfermeria'
    }
]
</script>

<style scoped>
.hero {
    position: relative;
    min-height: 46vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

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
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.65));
}

.hero-content {
    position: relative;
    z-index: 1;
    color: white;
    max-width: 640px;
    padding: 32px 16px;
}
.background {
    background: radial-gradient(ellipse, rgba(40, 40, 40, 0.61), rgba(40, 40, 40, 0.41), rgba(40, 40, 40, 0.19), rgba(40, 40, 40, 0.00));
}
.hero-avatar {
    background: rgba(255, 255, 255, 0.9);
    padding: 6px;
}

.hero-subtitle {
    opacity: 0.9;
}

.hero-text {
    opacity: 0.90;
    font-size: 15px;
    line-height: 1.5;
}

.services-section {
    position: relative;
    background: #1c1c1c;
    padding: 40px 24px 56px;
    color: white;
}

.services-grid {
    max-width: 1100px;
    margin: 0 auto;
}

.service-card {
    background: #262626;
    color: white;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    height: 100%;
}

.service-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.4);
}

.service-img {
    height: 120px;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.service-img-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
}

.service-icon {
    position: relative;
    z-index: 1;
    color: white;
}

.service-desc {
    opacity: 0.75;
}

.service-link {
    color: #7ed957 !important;
}
</style>
