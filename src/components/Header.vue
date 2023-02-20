<template>
  <header>
    <Logo />
    <ul class="nav nav-pills">
      <li class="nav-item" v-for="nav in navigations" :key="nav.name">
        <RouterLink
          class="nav-link"
          :to="nav.href"
          :class="{ active: isMatch(nav.path) }"
          active-class="active"
        >
          {{ nav.name }}
        </RouterLink>
      </li>
    </ul>
  </header>
</template>

<script>
import Logo from './Logo.vue';
export default {
  components: {
    Logo,
  },
  data() {
    return {
      navigations: [
        {
          name: 'Search',
          href: '/',
        },
        {
          name: 'Movie',
          href: '/movie/${}',
          path: /^\/movie/,
        },
        {
          name: 'About',
          href: '/about',
        },
      ],
    };
  },
  methods: {
    isMatch(path) {
      if (!path) return false;
      return path.test(this.$route.fullPath);
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  .logo {
    margin-right: 40px;
  }
}
</style>
