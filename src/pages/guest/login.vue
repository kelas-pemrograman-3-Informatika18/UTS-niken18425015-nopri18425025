<template>
  <q-layout class="bg-indigo-1" view="lHh Lpr Lff">
    <q-page-container>
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pa-md">
            <q-card flat class="text-blue-grey-14">
              <div class="row items-center">
                <div class="col-md-6 col-sm-12-col-xs-12">
                  <div class="row q-pt-md q-pb-md">
                    <div class="col-md-8 offset-2">
                      <q-img src="~assets/book_lover_monochromatic.svg"></q-img>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <q-card-section>
                    <div class="text-h5">My Schedule</div>
                    <div>Login Akun Anda</div>
                  </q-card-section>
                  <q-form
                  >
                    <q-card-section>
                      <q-input
                      v-model="npm"
                      label="Username/NPM">
                      <template v-slot:prepend>
                        <q-icon name="person" />
                       </template>
                      </q-input>

                      <q-input
                      type="password"
                      v-model="password"
                      label="Password">
                      <template v-slot:prepend>
                       <q-icon name="vpn_key" />
                      </template>
                      </q-input>
                      </q-card-section>
                    <q-card-section>
                      <q-btn class="full-width" @click="login ()" unelevated color="indigo-9" label="Login" />
                      <q-btn class="full-width q-mt-md" :to="{ name: 'register' }" flat unelevated color="indigo-9" label="Register" />
                    </q-card-section>
                  </q-form>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  data () {
    return {
      npm: null,
      password: null
    }
  },
  methods: {
    login () {
      this.$axios.post('user/login', {
        npm: this.npm,
        password: this.password
      }).then(res => {
        console.log(res)
        if (res.data.sukses) {
          this.$q.localStorage.set('datauser', res.data.data)
          if (res.data.data.level === 1) {
            this.$router.push({ name: 'homeadm' })
          } else {
            this.$router.push({ name: 'home' })
          }
        } else {
          this.$q.notify({
            type: 'negative',
            message: res.data.pesan
          })
        }
      })
    }
  }
}
</script>
