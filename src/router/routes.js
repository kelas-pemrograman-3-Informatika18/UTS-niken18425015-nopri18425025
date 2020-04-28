
const routes = [
  {
    path: '/',
    component: () => import('layouts/loginlayout.vue'),
    children: [
      { path: '', component: () => import('pages/login.vue') },
      { path: 'register', component: () => import('pages/register.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', name: 'home', component: () => import('pages/home.vue') },
      { path: 'input', name: 'inputJadwal', component: () => import('pages/inputjadwal.vue') },
      { path: 'edit', name: 'editJadwal', component: () => import('pages/editjadwal.vue') },
      { path: 'pilih', name: 'pilihJadwal', component: () => import('pages/pilihjadwal.vue') }
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
