<template>
<q-page>
  <div class="q-pa-md" >
    <q-form
    @submit="onSubmit"
        @reset="onReset"
        class="q-mt-md">
    <q-table
      title="Jadwal"
      :data="data"
      :columns="columns"
      row-key="name"
      :selected-rows-label="getSelectedString"
      selection="multiple"
      :selected.sync="selected"
       class="bg-light-blue-2"
    />
    <div class="q-ml-xl q-mt-sm q-mb-sm" >
<q-btn type="submit" label="Pilih" color="indigo-10" unelevated></q-btn>
<q-btn to="/home" type="back" label="Back" color="indigo-10" flat unelevated></q-btn>
    </div>
    <div class="q-mt-md">
      Selected: {{ JSON.stringify(selected) }}
    </div>
    </q-form>
  </div>

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
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'matkul', align: 'center', label: 'Mata Kuliah', field: 'matkul', sortable: true },
        { name: 'dosen', align: 'center', label: 'Dosen', field: 'dosen', sortable: true },
        { name: 'waktu', align: 'center', label: 'Waktu', field: 'waktu', sortable: true },
        { name: 'sks', align: 'center', label: 'SKS', field: 'sks' }
      ],
      data: [
        {
          name: 'K001',
          matkul: 'Interaksi Manusia dan Komputer',
          dosen: 'Ahmad Cucus',
          waktu: 'Senin, 08.00-10.40',
          sks: '3'
        },
        {
          name: 'K002',
          matkul: 'Sistem Operasi',
          dosen: 'Arnes Yuli Vandika',
          waktu: 'Selasa, 08.00-10.40',
          sks: '3'
        },
        {
          name: 'K003',
          matkul: 'Entrepreneurship',
          dosen: 'Fenty Ariani',
          waktu: 'Selasa, 13.00-14.40',
          sks: '2'
        },
        {
          name: 'K004',
          matkul: 'Sistem Keamanan Komputer',
          dosen: 'Adi Wijaya',
          waktu: 'Rabu, 08.00-10.40',
          sks: '3'
        },
        {
          name: 'K005',
          matkul: 'Teori Bahasa Forma & otomata',
          dosen: 'Wamiliana',
          waktu: 'kamis, 08.00-10.40',
          sks: '3'
        },
        {
          name: 'K006',
          matkul: 'Pemrograman III',
          dosen: 'Dika Hastanto',
          waktu: 'Kamis, 13.00-16.10',
          sks: '4'
        },
        {
          name: 'K007',
          matkul: 'Analisa Kebutuhan Sistem',
          dosen: 'Yuthsi Aprilinda',
          waktu: 'Jumat, 08.00-10.40',
          sks: '3'
        },
        {
          name: 'K008',
          matkul: 'Data Mining',
          dosen: 'Iing Lukman',
          waktu: 'Jumat, 13.30-15.40',
          sks: '3'
        }
      ]
    }
  },
  methods: {
    getSelectedString () {
      return this.selected.length === 0 ? '' : `${this.selected.length} record${this.selected.length > 1 ? 's' : ''} selected of ${this.data.length}`
    },
    onSubmit () {
      this.$q.notify({
        type: 'positive',
        message: 'selamat berhasil memilih jadwal'
      })
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
