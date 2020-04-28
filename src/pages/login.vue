<template>
<q-page class="bg-indigo-3">
      <div class="row">
        <q-card class="fixed-center col-md-4 col-xs-12 bg-white" style="height: 310px; weight: 300px">
          <q-toolbar class="bg-primary glossy" style="color: white" >
           <q-toolbar-title class="text-h4 text-bold">Login Page</q-toolbar-title>
           </q-toolbar>
        <q-form
        @submit="onSubmit"
        @reset="onReset"
        @register="onRegister"
        class="q-gutter-md"
    >
      <q-input
        standout="bg-primary text-white"
        class="col q-gutter-md q-mr-md"
        v-model="username"
        label="Insert your Username"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Isi Usename Anda!!!']"
      />

      <q-input
        standout="bg-primary text-white"
        class="col q-gutter-md q-mr-md"
        type="password"
        v-model="password"
        label="Insert your password"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Isi password Anda!!!']"
      />

      <div class="q-ml-xl q-mt-sm q-mb-sm">
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        <q-btn to= "/register" label="register" type="register" color="blue" />
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
      username: null,
      password: null
    }
  },
  methods: {
    onSubmit () {
      if (this.username === 'nopri' && this.password === '123') {
        this.$q.notify({
          message: 'selamat berhasil login',
          type: 'positive'
        })
        this.$router.push('/home')
      } else if (this.username === 'niken' && this.password === '123') {
        this.$q.notify({
          message: 'selamat berhasil login',
          type: 'positive'
        })
        this.$router.push('/home')
      } else {
        this.$q.notify({
          type: 'negative',
          message: 'gagal login, username atau password anda salah'
        })
      }
    },
    onReset () {
      this.username = null
      this.password = null
    },
    onRegister () {
    }
  }
}
</script>
