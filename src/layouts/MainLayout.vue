<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Bitmapper Web
        </q-toolbar-title>

        <div>v0.1 alpha</div>

      </q-toolbar>
      <q-toolbar>
        <q-tabs inline-label align="center">
          <q-route-tab
            icon="mail"
            label="Encode"
            to="/encode"
            exact
          />
          <q-route-tab
            icon="alarm"
            label="Decode"
            to="/decode"
            exact
          />
          <q-route-tab
            icon="alarm"
            label="About"
            to="/about"
            exact
          />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>
