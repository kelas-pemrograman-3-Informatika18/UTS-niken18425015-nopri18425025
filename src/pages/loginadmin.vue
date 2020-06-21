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
        label="Masukkan Username"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Isi Username Anda!!!']"
      >
      <template v-slot:prepend>
          <q-icon name="person" />
        </template>
      </q-input>

      <q-input
        standout="bg-primary text-white" :type="isPwd ? 'password' : 'text'"
        class="col q-gutter-md q-mr-md"
        v-model="password"
        label="Insert your password"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Isi password Anda!!!']"
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
        <q-btn to="/" label="Back" type="reset" color="primary" flat class="q-ml-sm" />
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
      password: '',
      isPwd: true
    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('admin/loginadmin', {
        username: this.username,
        password: this.password
      }).then(res => {
        if (res.data.sukses) {
          this.$router.push({ name: 'homeadm' })
        } else {
          this.$q.notify({
            type: 'negative',
            message: res.data.pesan
          })
        }
      })
    },
    onReset () {
    },
    onRegister () {
    }
  }
}
</script>
