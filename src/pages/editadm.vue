<template>
  <q-page padding class="bg-grey-4">
    <q-toolbar class="bg-indigo-6 text-white q-pa-md ">
      <q-toolbar-title class="text-h4">
        Update Jadwal
      </q-toolbar-title>
    </q-toolbar>
    <q-card class="my-card bg-white" >
        <q-card-section class="q-gutter-md" >
        <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-mt-md"
        >
        <div class="q-ml-xl q-mt-sm q-mb-sm" >
          <q-input label="Kode Mata Kuliah" v-model="kode" filled :rules="[ val => val && val.length > 0 || 'Tolong masukkan kodenya']"></q-input>
          <q-input label="Mata Kuliah" v-model="matkul" filled :rules="[ val => val && val.length > 0 || 'Tolong masukkan Mata Kuliah']"></q-input>
          <q-input label="Dosen" v-model="dosen" filled :rules="[ val => val && val.length > 0 || 'Tolong masukkan Nama Dosen']"></q-input>
          <q-input label="Waktu" v-model="waktu" filled :rules="[ val => val && val.length > 0 || 'Tolong masukkan Waktu']"></q-input>
          <q-input label="SKS" v-model="sks" filled :rules="[ val => val && val.length > 0 || 'Tolong masukkan SKS']"></q-input>
          <q-input label="Kelas" v-model="kelas" filled :rules="[ val => val && val.length > 0 || 'Tolong masukkan Kelas']"></q-input>
          <q-btn type="submit" label="Update" color="indigo-10" unelevated></q-btn>
          <q-btn type="reset" label="Reset" color="indigo-10" flat unelevated></q-btn>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      kode: null,
      matkul: null,
      dosen: null,
      waktu: null,
      sks: null,
      kelas: null
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('jadwal/tampilsingle/' + this.$route.params.kode)
        .then(res => {
          const data = res.data
          this.kode = data.kode
          this.matkul = data.matkul
          this.dosen = data.dosen
          this.waktu = data.waktu
          this.sks = data.sks
          this.kelas = data.kelas
        })
    },
    onReset () {
      this.kode = null
      this.matkul = null
      this.dosen = null
      this.waktu = null
      this.sks = null
      this.kelas = null
    },
    onSubmit () {
      this.$axios.put('jadwal/edit/' + this.$route.params.kode, {
        kode: this.kode,
        matkul: this.matkul,
        dosen: this.dosen,
        waktu: this.waktu,
        sks: this.sks,
        kelas: this.kelas
      }).then(res => {
        if (res.data.sukses) {
          this.$q.notify({
            type: 'positive',
            message: res.data.pesan
          })
          this.$router.push({ name: 'tamppiljadwal' })
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
