<template>
  <app-navbar />
  <router-view />
  <app-footer />
</template>

<script>
import { AppNavbar, AppFooter } from '@components/App';
export default {
  name: 'AppHomeLayout',
  components: {
    AppNavbar,
    AppFooter
  },
  setup() {}
};
</script>
