<template>
    <q-page padding style="position: relative; overflow: hidden;">
        <div class="img-background"></div>
        <div class="semi-transparente"></div>

        <div class="content q-mx-auto" style="width: 60%;">
            <div class="text-h2 text-center q-mb-lg">Biblioteca</div>

            

            <div  class="bg-transparent  text-white ">

                <div class="q-pa-lg background text-center q-mb-md">
                    <div class="q-mb-md text-subtitle1">
                    <q-icon name="description" size="25px" class="q-pb-xs" /> Descripcion
                    </div>
                    <p>
                        La biblioteca ofrece servicios de consulta en sala, préstamos a domicilio e interbibliotecarios
                        (PIP), facilitando el acceso a diferentes recursos bibliográficos y materiales de apoyo para los
                        procesos de formación. También brinda acceso a las Tecnologías de la Información y la
                        Comunicación (TIC), recursos digitales y bases de datos para apoyar la búsqueda y consulta de
                        información. Además, proporciona asesorías para la búsqueda, selección y recuperación de
                        información, así como orientación sobre el uso adecuado del catálogo bibliográfico. Complementa
                        estos servicios con talleres de lectura, capacitaciones y actividades de formación que
                        fortalecen las competencias de los usuarios en el manejo de la información y contribuyen al
                        aprendizaje autónomo, la investigación y el desarrollo académico.

                    </p>
                </div>


                    <div class="glass-card q-pa-md q-mb-md">
                        <div class="text-subtitle2 q-mb-sm text-center">
                            <q-icon size="19px" name="schedule" class="q-mr-xs " />Horario de atención
                        </div>
                        <q-markup-table flat dense class="bg-transparent text-white glass-table">
                            <thead>
                                <tr>
                                    <th class="text-left">Día</th>
                                    <th class="text-right">Horario</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Lunes</td>
                                    <td class="text-right">07:00 a.m. - 10:00 p.m.</td>
                                </tr>
                                <tr>
                                    <td>Martes</td>
                                    <td class="text-right">07:00 a.m. - 10:00 p.m.</td>
                                </tr>
                                <tr>
                                    <td>Miércoles</td>
                                    <td class="text-right">07:00 a.m. - 10:00 p.m.</td>
                                </tr>
                                <tr>
                                    <td>Jueves</td>
                                    <td class="text-right">07:00 a.m. - 10:00 p.m.</td>
                                </tr>
                                <tr>
                                    <td>Viernes</td>
                                    <td class="text-right">07:00 a.m. - 10:00 p.m.</td>
                                </tr>
                                <tr>
                                    <td>Sábado</td>
                                    <td class="text-right">Cerrado</td>
                                </tr>
                                <tr>
                                    <td>Domingo y festivos</td>
                                    <td class="text-right">Cerrado</td>
                                </tr>
                            </tbody>
                        </q-markup-table>
                    </div>

                    <!-- Encargada -->
                    <div class="glass-card q-pa-md">
                        <div class="text-subtitle1 text-weight-bold q-mb-md text-center">
                            <q-icon size="20px" name="support_agent" class="q-mr-sm" />Encargada de atención
                        </div>

                        <div class="column items-center q-mb-md">
                            <div class="profile-photo">
                                <img src="../assets/biblioteca-p.jpeg">
                            </div>
                            <div class="text-weight-medium q-mt-sm" style="font-size: 16px;">Yudith Milagros Martínez
                                Bautista</div>
                            <div class="text-caption" style="opacity: 0.85;">Bibliotecaria</div>
                        </div>

                        <div class="row justify-center contact-row">
                            <div class="contact-chip contact-chip--green row items-center q-gutter-xs no-wrap">
                                <q-avatar color="green-8" text-color="white" icon="call" size="28px" />
                                <div>
                                    <div class="text-caption" style="color: #8bd97a; line-height: 1;">Teléfono</div>
                                    <div class="text-weight-bold" style="font-size: 14px;">+57 3125848032</div>
                                </div>
                            </div>
                            <div class="contact-chip contact-chip--teal row items-center q-gutter-xs no-wrap">
                                <q-avatar color="teal-8" text-color="white" icon="mail" size="28px" />
                                <div style="overflow: hidden;">
                                    <div class="text-caption" style="color: #7fd8d8; line-height: 1;">Email</div>
                                    <div class="text-weight-bold" style="font-size: 13px; word-break: break-all;">
                                        ymmartinez@sena.edu.co</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <q-page-container/>
        </div>
    </q-page>
</template>

<style scoped>
.img-background {
    position: absolute;
    inset: 0;
    background-image: url('../assets/biblioteca.jpeg');
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

.background {
    background: radial-gradient(ellipse, rgba(40, 40, 40, 0.6), rgba(40, 40, 40, 0.4), rgba(40, 40, 40, 0.2), rgba(40, 40, 40, 0.0));
}

.glass-card {
    background: radial-gradient(ellipse, rgba(255, 255, 255, 0.090), rgba(255, 255, 255, 0.050), rgba(255, 255, 255, 0.020));
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 9px;
}

.glass-table tr:hover {
    background-color: rgba(54, 52, 52, 0.1);
}

.glass-table th,
.glass-table td {
    color: white !important;
    border-color: rgba(255, 255, 255, 0.2) !important;
}

.glass-card {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 12px;
}

.contact-row {
    gap: 20px;
    row-gap: 14px;
}

.contact-chip {
    padding: 8px 14px;
    border-radius: 8px;
    width: fit-content;
    max-width: 100%;
}

.contact-chip--green {
    background: linear-gradient(90deg, rgba(57, 169, 0, 0.22), rgba(57, 169, 0, 0.04));
    border: 1px solid rgba(57, 169, 0, 0.4);
}

.contact-chip--teal {
    background: linear-gradient(90deg, rgba(0, 150, 136, 0.22), rgba(0, 150, 136, 0.04));
    border: 1px solid rgba(0, 150, 136, 0.4);
}

.profile-photo {
    width: 130px;
    height: 130px;
    border-radius: 16px;
    overflow: hidden;
    border: 2px solid rgba(255, 255, 255, 0.3);
}

.profile-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>


