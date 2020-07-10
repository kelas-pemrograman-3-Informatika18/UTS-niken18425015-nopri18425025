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
              <div class="text-h6">Pilih Jadwal</div>
              <div>Silahkan Pilih Jadwal Yang Ingin Anda Ambil</div>
            </q-banner>
          </div>
        </div>
      </div>
    </div>
    <q-card flat>
<q-table
      title="Jadwal"
      :data="data"
      :columns="columns"
      row-key="name"
      class="bg-light-blue-2"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="kode" :props="props">
            {{ props.row.kode }}
          </q-td>
          <q-td key="matkul" :props="props">
            {{ props.row.matkul }}
          </q-td>
          <q-td key="dosen" :props="props">
            {{ props.row.dosen }}
          </q-td>
          <q-td key="waktu" :props="props">
            {{ props.row.waktu }}
          </q-td>
          <q-td key="sks" :props="props">
            {{ props.row.sks }}
          </q-td>
          <q-td key="kelas" :props="props">
            {{ props.row.kelas }}
          </q-td>
          <q-td key="aksi" :props="props">
            <div class="row">
              <div class="col">
                <q-btn label="Pilih" @click="confirm(props.row.kode)" color="amber" unelevated></q-btn>
              </div>
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
    </q-card>

</q-page>
</template>

<script>
export default {
  data () {
    return {
      selected: [],
      columns: [
        {
          name: 'kode',
          required: true,
          label: 'Kode Mata Kuliah',
          align: 'center',
          field: 'kode',
          sortable: true
        },
        { name: 'matkul', align: 'center', label: 'Mata Kuliah', field: 'matkul', sortable: true },
        { name: 'dosen', align: 'center', label: 'Dosen', field: 'dosen', sortable: true },
        { name: 'waktu', align: 'center', label: 'Waktu', field: 'waktu', sortable: true },
        { name: 'sks', align: 'center', label: 'SKS', field: 'sks' },
        { name: 'kelas', align: 'center', label: 'Kelas', field: 'kelas' },
        { name: 'aksi', label: 'Aksi', field: 'aksi', align: 'center' }
      ],
      data: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('jadwal/tampil')
        .then(res => {
          if (res.data.sukses) {
            this.data = res.data.data
          } else {
            this.$q.notify({
              type: 'negative',
              message: res.data.pesan
            })
          }
        })
    },
    confirm (kodeb) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Apakah Anda Yakin Menambah Data Ini?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.$axios.get('jadwal/tampilsingle/' + kodeb)
          .then(res => {
            if (res.data.sukses) {
              this.$axios.post('kegiatan/input', {
                kode: res.data.data.kode,
                matkul: res.data.data.matkul,
                dosen: res.data.data.dosen,
                waktu: res.data.data.waktu,
                sks: res.data.data.sks,
                kelas: res.data.data.kelas
              }).then((res) => {
                if (res.data.sukses) {
                  this.$q.notify({
                    type: 'positive',
                    message: res.data.pesan
                  })
                } else {
                  this.$q.notify({
                    type: 'negative',
                    message: res.data.pesan
                  })
                }
              })
            }
          })
      })
    }
  }
}
</script>
<style scoped>
.left {
  width: 4px;
  height: 100%;
  background-color: rgb(3, 6, 51);
}
</style>
