<template>
  <nav class="navbar navbar-light bg-light d-flex justify-content-between">
    <a class="navbar-brand" href="#">Navbar</a>

    <div class="collapse navbar-collapse show">
      <div class="navbar-nav d-flex flex-row">
        <a class="nav-item nav-link" href="#">Features</a>
        <a class="nav-item nav-link" href="#">Support</a>
        <a class="nav-item nav-link" href="#">Blog</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.navbar {
  .navbar-nav {
    flex-basis: 0;
    flex-grow: 0;
    .nav-item {
    }
  }
}
</style>