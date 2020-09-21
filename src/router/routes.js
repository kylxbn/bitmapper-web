
const routes = [
  {
    path: '/',
    redirect: '/encode',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'encode', component: () => import('pages/Encode.vue') },
      { path: 'decode', component: () => import('pages/Decode.vue') },
      { path: 'about', component: () => import('pages/About.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
