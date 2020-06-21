<template>
  <q-page padding>
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
        </q-tr>
      </template>
    </q-table>
        </q-page>
</template>

<script>
export default {
  name: 'PageTampiljadwal',
  data () {
    return {
      columns: [
        {
          name: 'kode',
          required: true,
          label: 'Kode Mata Kuliah',
          align: 'left',
          field: 'kode',
          sortable: true
        },
        { name: 'matkul', align: 'center', label: 'Mata Kuliah', field: 'matkul', sortable: true },
        { name: 'dosen', align: 'center', label: 'Dosen', field: 'dosen', sortable: true },
        { name: 'waktu', align: 'center', label: 'Waktu', field: 'waktu', sortable: true },
        { name: 'sks', align: 'center', label: 'SKS', field: 'sks' }
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
    }
  }
}
</script>
