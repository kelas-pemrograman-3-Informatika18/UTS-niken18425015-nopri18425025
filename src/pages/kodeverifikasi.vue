<template>
<q-page class="bg-indigo-3">
      <div class="row">
        <q-card class="fixed-center col-md-4 col-xs-12 bg-white" style="height: 210px; weight: 300px">
          <q-toolbar class="bg-primary glossy" style="color: white" >
           <q-toolbar-title class="text-h4 text-bold">Verifikasi Kode</q-toolbar-title>
           </q-toolbar>
        <q-form
        @submit="onSubmit"
        class="q-gutter-md"
    >

      <q-input
        standout="bg-primary text-white" :type="isPwd ? 'password' : 'text'"
        class="col q-gutter-md q-mr-md"
        v-model="password"
        label="Masukkan Kode verifikasi dari admin"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Isi Kodenya!!!']"
      >
      <template v-slot:prepend>
          <q-icon name="vpn_key" />
      </template>
      <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
      </template>
      </q-input>

      <div class="q-ml-xl q-mt-sm q-mb-sm">
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
        </q-form>
        </q-card>
      </div>
    </q-page>
</template>
<script>
export default {
  data () {
    return {
      password: '',
      isPwd: true
    }
  },
  methods: {
    onSubmit () {
      if (this.password === '12345') {
        this.$q.notify({
          type: 'positive',
          message: 'Selamat Datang Di Registrasi Admin'
        })
        this.$router.push({ name: 'registeradmin' })
      } else {
        this.$q.notify({
          type: 'negative',
          message: 'Anda Kurang Ikhtiar Untuk Masuk ke Sini'
        })
      }
    }
  }
}
</script>
