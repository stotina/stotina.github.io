<template>
  <div class="header theme-bg-nav">
    <nav class="navbar navbar-expand navbar-fixed-top">
      <a class="navbar-brand pointer" v-on:click="navigate('/')">
        <span class="site-title titleFont">
          <img id="site-title-logo" src="/images/logo-small.png" />
          STOTINA
        </span>
      </a>

      <ul class="nav navbar-nav ml-auto">
        <li class="nav-item">
          <div
            class="nav-link theme-c-headerLinks theme-c-hover pointer"
            v-on:click="navigate('/')"
          >
            <i class="fas fa-home"></i> Home
          </div>
        </li>
        <li class="nav-item">
          <div
            class="nav-link theme-c-headerLinks theme-c-hover pointer"
            v-on:click="navigate('/about')"
          >
            About
          </div>
        </li>
        <li class="nav-item">
          <div
            class="nav-link theme-c-headerLinks theme-c-hover pointer"
            v-on:click="navigate('/apps')"
          >
            Applications
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderElement",
  data() {
    return {};
  },
  props: {},
  computed: {
    currentPage() {
      return this.$router.currentRoute.path;
    },
  },
  methods: {
    navigate(path) {
      this.$router.push(path);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  position: relative;
  z-index: 2;
  border-bottom: 1px solid #96969636;
}
.nav-item.active {
  text-decoration: underline;
}
.nav-link {
}
.site-title {
  font-size: 2rem;
  display: inline-block;
  padding: 2px 0;
}
#site-title-logo {
  height: 2rem;
  margin-left: 0.5rem;
  margin-right: 0.3rem;
  border: 2px solid #ffffff40;
  border-radius: 2rem;
}
</style>
