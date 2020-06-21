<template>
<q-page class="bg-indigo-3">
      <div>
        <q-card class="fixed-center col-md-4 col-xs-12 bg-white" style="height: 300px; weight: 400px;" >
          <q-toolbar class="bg-primary glossy" style="color: white" >
           <q-toolbar-title class="text-h4 text-bold">Welcome To Schedule.com</q-toolbar-title>
           </q-toolbar>

        <q-form
        @submit="onSubmit"
    >
    <div class="col">
        <q-img src="~assets/images(6).jpg" style="height: 300px" >
          <div class="absolute-full flex flex-center">
            <q-space/>
        <div class="q-pa-md row items-start">
      <q-card flat class="my-card bg-transparent q-mr-md " >
      <q-card-section class="bg-transparent text-black">
        <div class="text-h6 text-center" >Admin</div>
      </q-card-section>
      <template v-slot:prepend>
          <q-icon name="how_to_reg" />
      </template>
      <q-separator />
      <q-card-actions align="around">
        <q-btn class="my-button" color="grey-5" to="/loginadm" label="Login" type="loginadm" glossy text-color="black" />
        <q-btn class="my-button" color="black" to="/verifikasi" label="Register" type="regisadm" glossy text-color="white" />
      </q-card-actions>
    </q-card>
    <q-card class="my-card bg-transparent  q-mr-sm">
      <q-card-section class="bg-transparent text-black">
        <template v-slot:prepend>
          <q-icon name="local_library" />
        </template>
        <div class="text-h6 text-center" icon="local_library">User</div>
      </q-card-section>
      <q-separator />
      <q-card-actions align="around">
        <q-btn class="my-button" color="grey-5" to="/login" label="Login" type="loginusr" glossy text-color="black"/>
        <q-btn class="my-button" color="black" to="/register" label="Register" type="register" glossy text-color="white"/>
      </q-card-actions>
    </q-card>
    </div>
    <q-space/>
          </div>
        </q-img>
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
      kode: null
    }
  },
  methods: {
    onSubmit () {
      if (this.kode === '12345') {
        this.$q.notify({
          type: 'positive',
          message: 'Selamat Datang Di Registrasi Admin'
        })
        this.$router.push({ name: 'registeradmin' })
      } else {
        this.$q.notify({
          type: 'negative',
          message: 'Segera minta kode ke Admin'
        })
      }
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 150px
.my-button
  width: 100%
  max-width: 150px
</style>
