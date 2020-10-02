<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="align-center d-flex">
        <v-img
          alt="Vuetify Logo"
          class="mr-2 shrink"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="hidden-sm-and-down mt-1 shrink"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer />

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>
