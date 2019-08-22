<template>
  <nav class="navbar d-flex justify-content-between">
    <div class="logo d-flex">
      <img src="../assets/fingerprint.png" alt="logo" />
      <a class="navbar-brand" href="#">{{c.title}}</a>
    </div>

    <div class="collapse navbar-collapse show">
      <div class="navbar-nav d-flex flex-row">
        <a
          class="nav-item nav-link"
          :href="link.href"
          v-for="link in c.menu"
          :key="link.href"
        >{{link.name}}</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  props: ["c"]
};
</script>

<style lang="scss" scoped>
.navbar {
  font-family: "PT Bold";
  background-color: transparent;
  padding: 0 0 20px;
  a {
    color: #000;
    transition: color 0.3s ease;
    &:hover {
      color: #6c757d;
    }
  }
  .logo {
    a {
      font-size: 1.5em;
      margin-left: 10px;
    }
  }
  .navbar-collapse {
    flex-basis: 0;
    flex-grow: 0;
    .navbar-nav {
      .nav-item {
        font-size: 1.1em;
        padding: 0 35px;
      }
    }
  }
}
</style>