<template>
  <q-page padding class="bg-indigo-10 glossy">
    <div class="q-pa-md row items-start q-gutter-md">
    <q-card
      class="my-card text-white"
      style="background: transparent"
      flat
    >
      <q-card-section>
        <div class="text-h6">Tentang Aplikasi</div>
        <div class="text-subtitle2">My Schedule</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ tentang }}
      </q-card-section>
      <q-card-section class="q-pt-none">
        {{ tentang1 }}
      </q-card-section>
      <q-card-section class="q-pt-none">
        {{ tentang2 }}
      </q-card-section>
      <q-card-section class="q-pt-none">
        {{ tentang3 }}
      </q-card-section>
      <q-card-section class="q-pt-none">
        {{ tentang4 }}
      </q-card-section>
      <q-card-section class="q-pt-none">
        {{ tentang5 }}
      </q-card-section>
      <q-card-section class="q-pt-none">
        {{ tentang6 }}
      </q-card-section>
      <q-card-section class="q-pt-none">
        {{ tentang7 }}
      </q-card-section>
      <q-card-section class="q-pt-none">
        {{ tentang8 }}
      </q-card-section>
      <q-card-section class="q-pt-none">
        {{ tentang9 }}
      </q-card-section>
      <q-card-section class="q-pt-none">
        {{ tentang10 }}
      </q-card-section>
      <q-card-section class="q-pt-none">
        {{ tentang11 }}
      </q-card-section>
      <q-card-section class="q-pt-none">
        {{ tentang12 }}
      </q-card-section>
      <div class="q-pa-md row items-start q-gutter-md">
      </div>
    </q-card>
    </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      tentang: 'Aplikasi ini membantu mahasiswa untuk menginput jadwal perkuliahan semester',
      tentang1: 'Cara input jadwal:',
      tentang2: '1.Mahasiswa harus login lewat website yang disediakan My Schedule.',
      tentang3: '2.Mahasiswa login dengan username dan password untuk menuju beranda utama.',
      tentang4: '3.Jika belum mendaftar mahasiswa harus registrasi untuk mendapatkan username dan password untuk login.',
      tentang5: '4.Setelah itu mahasiswa akan ditunjukkan beranda utama untuk memilih matakuliah yang akan diambil disemester tersebut.',
      tentang6: '5.Jika kelas penuh maka system akan memberitahukan dan mahasiswa harus memilih matakuliah lain.',
      tentang7: '6.Untuk jadwal yang diinput bisa diedit dan dihapus.',
      tentang8: '7.Setelah selesai input jadwal system akan menampilkan semua jadwal yang dipilih.',
      tentang9: '8.Mahasiswa bisa logout dari aplikasi atau website My Schedule',
      tentang10: '9.Mahasiswa bisa kuliah dengan jadwal yang sudah diinput.',
      tentang11: '10.Selesai',
      tentang12: 'Bagi mahasiswa yang ingin menngambil matakuliah yang sudah penuh kelasnya maka mahasiswa harus menemui dosen yang bersangkutan untuk meminta penambahan kelas matakuliah tersebut. Setelah itu dosen yang bersangkutan akan memberitahukan admin untuk menginput tambahan kelas atau kelas baru bagi mahasiswa yang belum bisa mengambil matakuliah tersebut. Semoga aplikasi ini bermanfaat bagi mahasiswa khususnya prodi informatika universitas bandar lampung. Aplikasi ini mungkin masih sangat sederhana dan masih banyak kekurangannya maka dari itu masih banyak perbaikan ataupun pengembangan dalam aplikasi ini.'
    }
  }
}
</script>
