<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-green-9 text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img alt="logo" src="./assets/logosena.png">
          </q-avatar>
          Servicio SENA
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay behavior="mobile" bordered>
      <q-list>
        <q-item v-for="(menuItem, index) in menuList" :key="index" clickable v-ripple :to="menuItem.to"
          exact-active-class="bg-green text-white">
          <q-item-section avatar>
            <q-icon :name="menuItem.icon" />
          </q-item-section>
          <q-item-section>
            {{ menuItem.label }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

     <footer class="bg-grey-8 text-white q-pa-md flex flex-center">
      <q-img src="./assets/logo-footer.png" style="height: 40px; width: 65px" />
    </footer>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const menuList = [
  { label: 'Servicios', icon: 'api', to: '/' },
  { label: 'Biblioteca', icon: 'menu_book', to: '/Biblioteca' },
  { label: 'Bienestar', icon: 'spa', to: '/Bienestar' },
  { label: 'Cafeteria', icon: 'restaurant', to: '/Cafeteria' },
  { label: 'Coordinacion', icon: 'groups', to: '/Coordinacion' },
  { label: 'Enfermeria', icon: 'medical_services', to: '/Enfermeria' },
  { label: 'Acerca de', icon: 'info', to: '/Acerca' },
]
</script>