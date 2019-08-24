<template>
  <header>
    <nav class="navbar navbar-light d-flex justify-content-between navbar-expand-md">
      <div class="logo d-flex">
        <img src="../assets/fingerprint.png" alt="logo" />
        <a class="navbar-brand" href="#">{{c.title}}</a>
      </div>
      <div class="nav-toggler d-flex align-items-center" @click="toggleMenu">
        <div :class="['hamburger', 'mr-2', showMenu ? 'active' : '']">
          <span class="icon"></span>
          <span class="icon"></span>
          <span class="icon"></span>
        </div>
        <span>Menu</span>
      </div>
      <div :class="['collapse', 'navbar-collapse', 'show', showMenu ? 'visible' : '']">
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
  </header>
</template>

<script>
export default {
  name: "Header",
  props: ["c"],
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  font-family: "PT Bold";
  background-color: transparent;
  padding: 0 0 20px;
  a {
    color: #000 !important;
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
    flex: none;
    .navbar-nav {
      .nav-item {
        font-size: 1.1em;
        padding: 0 35px;
      }
    }
  }
  .nav-toggler {
    .hamburger {
      width: 25px;
      height: 22px;
      position: relative;
      .icon {
        display: block;
        position: absolute;
        height: 5px;
        width: 100%;
        background: #000;
        border-radius: 9px;
        opacity: 1;
        left: 0;
        transition: 0.25s ease-in-out;
        transform: rotate(0deg);
        &:nth-child(1) {
          top: 0;
        }
        &:nth-child(2) {
          top: 8px;
        }
        &:nth-child(3) {
          top: 16px;
        }
      }
      &.active {
        .icon {
          &:nth-child(1) {
            transform: rotate(45deg);
            top: 10px;
            left: 0;
          }
          &:nth-child(2) {
            opacity: 0;
          }
          &:nth-child(3) {
            transform: rotate(-45deg);
            top: 10px;
            left: 0px;
          }
        }
      }
    }
  }
}
@media all and (max-width: 767px) {
  header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    background-color: rgba(252, 219, 0, 0.8);
    z-index: 999;
    .navbar {
      padding: 10px 0 0;
      .logo,
      .nav-toggler {
        margin: 5px 20px;
        padding-bottom: 10px;
      }
    }
  }
  .navbar {
    .navbar-collapse {
      height: auto;
      overflow: hidden;
      transition: height 0.3s ease;
      max-height: 0;
      width: 100%;
      &.visible {
        max-height: 500px;
        .navbar-nav {
          flex-direction: column !important;
          text-align: center;
          a {
            width: 100%;
            padding: 10px 0;
            transition: all 0.3s ease;
            text-transform: uppercase;
            &:first-child {
              margin-top: 10px;
            }
            &:hover {
              background-color: #fcdb00;
              color: #fff !important;
            }
          }
        }
      }
    }
  }
}
</style>