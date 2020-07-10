
const routes = [
  {
    path: '/',
    component: () => import('layouts/loginlayout.vue'),
    children: [
      { path: 'login', name: 'login', component: () => import('pages/guest/login.vue') },
      { path: 'register', name: 'register', component: () => import('pages/guest/register.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      authAdmin: true
    },
    children: [
      { path: 'homeadm', name: 'homeadm', component: () => import('pages/admin/homeadmin.vue') },
      { path: 'lihat', name: 'tamppiljadwal', component: () => import('pages/admin/tampiljadwal.vue') },
      { path: 'input', name: 'inputJadwal', component: () => import('pages/admin/inputjadwal.vue') },
      { path: 'edit', name: 'editJadwal', component: () => import('pages/admin/editjadwal.vue') },
      { path: 'edited/:kode', name: 'edit', component: () => import('pages/admin/editadm.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/userlayout.vue'),
    meta: {
      authUser: true
    },
    children: [
      { path: 'home', name: 'home', component: () => import('pages/user/home.vue') },
      { path: 'pilih', name: 'pilihJadwal', component: () => import('pages/user/pilihjadwal.vue') },
      { path: 'hapus', name: 'deleteJadwal', component: () => import('pages/user/userdelete.vue') },
      { path: 'about', name: 'about', component: () => import('pages/user/about.vue') }
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
