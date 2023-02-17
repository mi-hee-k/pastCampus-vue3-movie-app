<template>
  <footer>
    <Logo />
    <a href="https://github.com/mi-hee-k" target="_blank">
      (C) {{ new Date().getFullYear() }} MIHEE
    </a>
  </footer>
</template>

<script>
import Logo from '../components/Logo.vue';
export default {
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
footer {
  padding: 70px 0;
  text-align: center;
  opacity: 0.3;
  .logo {
    display: block;
    margin-bottom: 4px;
  }
}
</style>
