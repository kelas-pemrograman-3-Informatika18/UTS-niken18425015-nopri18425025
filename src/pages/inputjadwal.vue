<template>
  <q-page padding class="bg-grey-4">
    <q-toolbar class="bg-indigo-6 text-white q-pa-md ">
      <q-toolbar-title class="text-h4">
        Input Jadwal
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
          <q-btn type="submit" label="Input" color="indigo-10" unelevated></q-btn>
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
      sks: null
    }
  },
  methods: {
    onReset () {
      this.kode = null
      this.matkul = null
      this.dosen = null
      this.waktu = null
      this.sks = null
    },
    onSubmit () {
      this.$q.notify({
        type: 'positive',
        message: 'selamat berhasil input jadwal'
      })
      this.$router.push({ name: 'editJadwal' })
    }
  }
}
</script>
