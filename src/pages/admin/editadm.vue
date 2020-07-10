<template>
  <q-page padding>
    <div class="row q-mb-md col-gutter-md">
      <div class="col-md-12 col-xs-12 col-lg-12">
        <div class="row">
          <div class="col-auto">
            <div class="left"></div>
            </div>
          <div class="col">
            <q-banner inline-actions class="text-blue-grey-14">
              <div class="text-h6">Input Jadwal</div>
              <div>Input jadwal yang ingin ditambahkan</div>
            </q-banner>
          </div>
        </div>
      </div>
    </div>
     <q-card flat >
        <q-card-section class="row" >
        <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-col-gutter-md q-col-lg-6 col-md-6 col-xs-12"
        >
        <div class="q-ml-xl q-mt-sm q-mb-sm" >
          <q-input label="Kode Mata Kuliah" v-model="kode" filled :rules="[ val => val && val.length > 0 || 'Tolong masukkan kodenya']"></q-input>
          <q-input label="Mata Kuliah" v-model="matkul" filled :rules="[ val => val && val.length > 0 || 'Tolong masukkan Mata Kuliah']"></q-input>
          <q-input label="Dosen" v-model="dosen" filled :rules="[ val => val && val.length > 0 || 'Tolong masukkan Nama Dosen']"></q-input>
          <q-input label="Waktu" v-model="waktu" filled :rules="[ val => val && val.length > 0 || 'Tolong masukkan Waktu']"></q-input>
          <q-input label="SKS" v-model="sks" filled :rules="[ val => val && val.length > 0 || 'Tolong masukkan SKS']"></q-input>
          <q-input label="Kelas" v-model="kelas" filled :rules="[ val => val && val.length > 0 || 'Tolong masukkan Kelas']"></q-input>
          <q-btn type="submit" label="Update" color="indigo-10" unelevated></q-btn>
          <q-btn type="reset" label="Reset" color="indigo-10" flat unelevated class="q-ml-md"></q-btn>
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
          this.kode = data.data.kode
          this.matkul = data.data.matkul
          this.dosen = data.data.dosen
          this.waktu = data.data.waktu
          this.sks = data.data.sks
          this.kelas = data.data.kelas
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
<style scoped>
.left {
  width: 4px;
  height: 100%;
  background-color: rgb(46, 58, 216);
}
</style>
