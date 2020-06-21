<template>
<q-page class="bg-indigo-3">
      <div class="row">
        <q-card class="fixed-center col-md-4 col-xs-12 bg-white" style="height: 500px; weight: 550px">
          <q-toolbar class="bg-primary glossy text-h4" style="color: white" >
           <q-toolbar-title class="text-h5 text-bold">Register Page</q-toolbar-title>
           </q-toolbar>
      <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-sm"
    >
      <q-input
        standout="bg-indigo-11 text-white"
        class="col q-gutter-sm q-mr-sm"
        v-model="nama"
        label="Masukkan Nama "
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Masukkan Nama Anda!!!']"
      >
      <template v-slot:prepend>
          <q-icon name="account_circle" />
        </template>
      </q-input>

      <q-input
        standout="bg-indigo-11 text-white"
        class="col q-gutter-sm q-mr-sm"
        v-model="username"
        label="Masukkan Username"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Masukkan Username Anda!!!']"
      >
      <template v-slot:prepend>
          <q-icon name="person" />
        </template>
      </q-input>

      <q-input
        standout="bg-indigo-11 text-white"
        class="col q-gutter-sm q-mr-sm"
        v-model="email"
        label="Masukkan E-Mail"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Masukkan E-Mail Anda!!!']"
      >
      <template v-slot:prepend>
          <q-icon name="local_post_office" />
        </template>
      </q-input>

      <q-input
        standout="bg-indigo-11 text-white"
        class="col q-gutter-sm q-mr-sm"
        type="password"
        v-model="password"
        label="Insert your Password"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Masukkan Password Anda!!!']"
      >
      <template v-slot:prepend>
          <q-icon name="vpn_key" />
        </template>
      </q-input>
      <div class="q-ml-md q-mt-sm q-mb-sm">
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn to="/loginadm" label="Login" type="reset" color="primary" flat class="q-ml-sm" />
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
      username: null,
      email: null,
      password: null
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('admin/registeradmin', {
        name: this.nama,
        username: this.username,
        email: this.email,
        password: this.password
      }).then((res) => {
        if (res.data.sukses) {
          this.$q.notify({
            type: 'positive',
            message: res.data.pesan
          })
          this.$router.push({ name: 'loginadmin' })
        } else {
          this.$q.notify({
            type: 'negative',
            message: res.data.pesan
          })
        }
      })
    },
    onReset () {

    }
  }
}
</script>
