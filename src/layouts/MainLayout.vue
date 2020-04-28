<template>
  <q-layout view="lHh Lpr lFf">
    <q-header unelevated>
      <div class="q-gutter-y-sm">
      <div class="bg-indigo-10 glossy text-white">
      <q-toolbar class="text-h3" >
        <q-btn flat dense round icon="menu" class="q-mr-sm" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" />
        <q-icon name="schedule" />
        <q-toolbar-title class="text-h4">myschedule.com</q-toolbar-title>
        <q-space />
        <q-btn label="About" icon="people" push color="blue-6" class="q-mr-xs" @click="toolbar = true" >
        <q-dialog v-model="toolbar" persistent transition-show="flip-down" transition-hide="flip-up">
      <q-card class="bg-grey-3 text-black">
        <q-toolbar>
          <q-avatar>
            <img src="https://nnconsultant.com/wp-content/uploads/2019/07/nn-logo-e1564420634472.png"
            style=width:50px >
          </q-avatar>

          <q-toolbar-title><span class="text-weight-bold">NN</span> Project</q-toolbar-title>

          <q-btn flat round dense icon="close" v-close-popup />
        </q-toolbar>

        <q-card-section>
          This project created by Muhammad Nopriansyah and Witatur Niken Pitriyani
        </q-card-section>
      </q-card>
    </q-dialog>
        </q-btn>
        <q-btn to="/" type="submit" icon="logout" label="Logout" push color="red-14" class="q-mr-xs" />
      </q-toolbar>
        <q-toolbar inset>
      </q-toolbar>
    </div>
      </div>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-3"
    >
      <q-list>
        <q-item-label
          header
          class="text-indigo-10"
        >
          Menu
        </q-item-label>
        <q-item clickable active-class="active" exact v-ripple :to="{ name: 'home'}">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

          <q-item-section>
          Home
          </q-item-section>
        </q-item>
        <q-item clickable active-class="active" exact v-ripple :to="{ name: 'pilihJadwal'}">
          <q-item-section avatar>
            <q-icon name="check" />
          </q-item-section>
          <q-item-section>
          Pilih Jadwal
          </q-item-section>
        </q-item>
        <q-item clickable active-class="active" exact v-ripple :to="{ name: 'editJadwal'}">
          <q-item-section avatar>
            <q-icon name="edit" />
          </q-item-section>
          <q-item-section>
          Edit Jadwal
          </q-item-section>
        </q-item>
        <q-item clickable active-class="active" exact v-ripple :to="{ name: 'inputJadwal'}">
          <q-item-section avatar>
            <q-icon name="input" />
          </q-item-section>
          <q-item-section>
          Input Jadwal
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-white">

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: true,
      toolbar: false
    }
  }
}
</script>
