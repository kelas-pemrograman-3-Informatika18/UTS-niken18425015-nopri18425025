
const routes = [
  {
    path: '/',
    component: () => import('layouts/loginlayout.vue'),
    children: [
      { path: '', name: 'pilih', component: () => import('pages/pilihan.vue') },
      { path: 'login', name: 'login', component: () => import('pages/login.vue') },
      { path: 'register', component: () => import('pages/register.vue') },
      { path: 'loginadm', name: 'loginadmin', component: () => import('pages/loginadmin.vue') },
      { path: 'registeradm', name: 'registeradmin', component: () => import('pages/registeradmin.vue') },
      { path: 'verifikasi', name: 'verif', component: () => import('pages/kodeverifikasi.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'homeadm', name: 'homeadm', component: () => import('pages/homeadmin.vue') },
      { path: 'lihat', name: 'tamppiljadwal', component: () => import('pages/tampiljadwal.vue') },
      { path: 'input', name: 'inputJadwal', component: () => import('pages/inputjadwal.vue') },
      { path: 'edit', name: 'editJadwal', component: () => import('pages/editjadwal.vue') },
      { path: 'edited/:kode', name: 'edit', component: () => import('pages/editadm.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/userlayout.vue'),
    children: [
      { path: 'home', name: 'home', component: () => import('pages/home.vue') },
      { path: 'pilih', name: 'pilihJadwal', component: () => import('pages/pilihjadwal.vue') },
      { path: 'hapus', name: 'deleteJadwal', component: () => import('pages/userdelete.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
