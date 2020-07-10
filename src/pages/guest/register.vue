<template>
<q-page class="bg-indigo-3">
      <div class="row">
        <q-card class="fixed-center col-md-4 col-xs-12 bg-white" style="height: 500px; weight: 600px">
          <q-toolbar class="bg-primary glossy text-h4" style="color: white" >
           <q-toolbar-title class="text-h5 text-bold">Register Page</q-toolbar-title>
           </q-toolbar>
      <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-sm q-mt-lg"
    >
      <q-input
        standout="bg-indigo-11 text-white"
        class="col q-gutter-sm q-mr-sm"
        v-model="nama"
        label="Masukkan Nama Lengkap"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Masukkan Nama Anda!!!']"
      />
      <q-input
        standout="bg-indigo-11 text-white"
        class="col q-gutter-sm q-mr-sm"
        v-model="npm"
        label="Masukkan NPM"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Masukkan NPM Anda!!!']"
      />
      <q-input
        standout="bg-indigo-11 text-white"
        class="col q-gutter-sm q-mr-sm"
        v-model="email"
        label="Masukkan E-Mail"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Masukkan E-Mail Anda!!!']"
      />
      <q-input
        standout="bg-indigo-11 text-white"
        class="col q-gutter-sm q-mr-sm"
        type="password"
        v-model="password"
        label="Insert your Password"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Ketik lhaa jangan mager']"
      />
      <div class="q-ml-lg q-mt-sm">
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-md" />
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
      nama: null,
      password: null,
      npm: null,
      email: null
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('user/register', {
        name: this.nama,
        npm: this.npm,
        email: this.email,
        password: this.password
      }).then((res) => {
        if (res.data.sukses) {
          this.$q.notify({
            type: 'positive',
            message: res.data.pesan
          })
          this.$router.push({ name: 'login' })
        } else {
          this.$q.notify({
            type: 'negative',
            message: res.data.pesan
          })
        }
      })
    },
    onReset () {
      this.nama = null
      this.password = null
      this.npm = null
      this.email = null
    }
  }
}
</script>
