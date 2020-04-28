<template>
<q-page class="bg-indigo-3">
      <div class="row">
        <q-card class="fixed-center col-md-4 col-xs-12 bg-white" style="height: 570px; weight: 600px">
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
      />
      <q-input
        standout="bg-indigo-11 text-white"
        class="col q-gutter-sm q-mr-sm"
        v-model="username"
        label="Masukkan Username"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Masukkan Username Anda!!!']"
      />
      <q-input
        standout="bg-indigo-11 text-white"
        class="col q-gutter-sm q-mr-sm"
        v-model="prodi"
        label="Masukkan Prodi"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Masukkan Prodi Anda!!!']"
      />
      <q-input
        standout="bg-indigo-11 text-white"
        class="col q-gutter-sm q-mr-sm"
        v-model="semester"
        label="Masukkan Semester"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Masukkan Semester Anda!!!']"
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
      <div class="q-ml-xl q-mt-sm q-mb-sm">
        <q-btn to="/" label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
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
      username: null,
      semester: null,
      prodi: null
    }
  },
  methods: {
    onSubmit () {
      console.log('ini fungsi submit')
    },
    onReset () {
      this.nama = null
      this.password = null
      this.username = null
      this.semester = null
      this.prodi = null
    }
  }
}
</script>
