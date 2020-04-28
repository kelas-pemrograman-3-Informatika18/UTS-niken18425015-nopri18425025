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
          <q-td key="aksi" :props="props">
            <div class="row">
              <div class="col">
                <q-btn label="Edit" color="green" icon="edit" unelevated></q-btn>
              </div>
              <div class="col">
                <q-btn label="Hapus" color="negative" icon="delete" unelevated></q-btn>
              </div>
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
        </q-page>
</template>

<script>
export default {
  name: 'PageEditjadwal',
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
        { name: 'sks', align: 'center', label: 'SKS', field: 'sks' },
        { name: 'aksi', label: 'Aksi', field: 'aksi', align: 'center' }
      ],

      data: [
        {
          kode: 'K001',
          matkul: 'Interaksi Manusia dan Komputer',
          dosen: 'Ahmad Cucus',
          waktu: 'Senin, 08.00-10.40',
          sks: '3'
        },
        {
          kode: 'K002',
          matkul: 'Sistem Operasi',
          dosen: 'Arnes Yuli Vandika',
          waktu: 'Selasa, 08.00-10.40',
          sks: '3'
        },
        {
          kode: 'K003',
          matkul: 'Entrepreneurship',
          dosen: 'Fenty Ariani',
          waktu: 'Selasa, 13.00-14.40',
          sks: '2'
        },
        {
          kode: 'K004',
          matkul: 'Sistem Keamanan Komputer',
          dosen: 'Adi Wijaya',
          waktu: 'Rabu, 08.00-10.40',
          sks: '3'
        },
        {
          kode: 'K005',
          matkul: 'Teori Bahasa Forma & otomata',
          dosen: 'Wamiliana',
          waktu: 'kamis, 08.00-10.40',
          sks: '3'
        },
        {
          kode: 'K006',
          matkul: 'Pemrograman III',
          dosen: 'Dika Hastanto',
          waktu: 'Kamis, 13.00-16.10',
          sks: '4'
        },
        {
          kode: 'K007',
          matkul: 'Analisa Kebutuhan Sistem',
          dosen: 'Yuthsi Aprilinda',
          waktu: 'Jumat, 08.00-10.40',
          sks: '3'
        },
        {
          kode: 'K008',
          matkul: 'Data Mining',
          dosen: 'Iing Lukman',
          waktu: 'Jumat, 13.30-15.40',
          sks: '3'
        }
      ]
    }
  }
}
</script>
