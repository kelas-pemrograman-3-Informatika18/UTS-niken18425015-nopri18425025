<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-indigo-10">
      <q-toolbar>
        <q-btn dense flat round @click="leftDrawerOpen = !leftDrawerOpen" icon="menu"/>
        <q-space></q-space>
        <q-btn flat round>
          <q-avatar>
          <q-img src="~assets/user.png"/>
          </q-avatar>
          <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup @click="confirm ()">
              <q-item-section>Logout</q-item-section>
            </q-item>
          </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      content-class="text-white bg-secondary"
    >
      <q-scroll>
        <q-scroll-area class="fit">
          <q-list>
            <q-item class="justify-center text-center q-mt-md q-mb-md">
              <div>
                <q-avatar size="120px">
                  <q-img src="~assets/user.png"/>
                </q-avatar>
                <div class="text-weight-bold q-mt-md"> {{ $q.localStorage.getItem('datauser').name }} </div>
                <div>Aplikasi Susun Jadwal</div>
              </div>
            </q-item>

            <q-item clickable active-class="active" v-ripple exact :to="{ name: 'home' }">
              <q-item-section avatar>
                <q-icon name="home"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Home</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable active-class="active" v-ripple exact :to="{ name: 'pilihJadwal' }">
              <q-item-section avatar>
                <q-icon name="schedule"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Pilih Jadwal</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable active-class="active" v-ripple exact :to="{ name: 'deleteJadwal' }">
              <q-item-section avatar>
                <q-icon name="delete"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Delete Jadwal</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable active-class="active" v-ripple exact :to="{ name: 'about'}">
              <q-item-section avatar>
                <q-icon name="people"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Tentang</q-item-label>
              </q-item-section>
            </q-item>

          </q-list>
        </q-scroll-area>
      </q-scroll>
    </q-drawer>

    <q-page-container class="bg-grey-1">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  methods: {
    confirm () {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Apakah anda yakin ingin keluar dari aplikasi?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$q.localStorage.remove()
        this.$router.push({ name: 'login' })
      })
    }
  },

  name: 'userlayout',
  data () {
    return {
      leftDrawerOpen: true,
      toolbar: false
    }
  }
}
</script>
<style scoped>
.active{
  color: #000;
  background: #fafafa;
  padding-right: 10px;
}
</style>
