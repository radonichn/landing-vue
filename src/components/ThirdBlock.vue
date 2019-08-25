<template>
  <div class="third-block">
    <div class="wrapper">
      <div class="form text-center">
        <p class="h3 title bold">{{c.title}}</p>
        <p class="h5 subtitle">{{c.subtitle}}</p>
        <form>
          <div class="row justify-content-between">
            <input
              type="text"
              class="form-control col-12 col-md-8"
              :placeholder="c.form.placeholder"
              name="email"
              v-model="email"
            />
            <button
              class="btn bold col-3"
              name="submit"
              type="submit"
              @click.prevent="sendMail"
            >{{c.form.submit}}</button>
          </div>
        </form>
        <span
          :class="[this.isError ? 'error' : 'success', this.isError === 'loading' ? 'loading' : '']"
        >{{this.status}}</span>
      </div>
      <div class="socials row justify-content-center">
        <i
          :class="[i,'fa-3x', 'col-3', 'col-md-2', 'col-lg-1']"
          v-for="i in c.icons"
          :key="Math.random()*325+i"
        ></i>
      </div>
      <div class="contacts row justify-content-center">
        <div class="left col-12 col-md-3">
          <p v-for="i in c.contacts.left" :key="Math.random()*3132+i">{{i}}</p>
        </div>
        <div class="right col-12 col-md-9 row">
          <div
            :class="['col-6', `col-md-${colWidth}`, 'item-holder']"
            v-for="block in this.dividedItems"
            :key="block[0]+Math.random()*984"
          >
            <p v-for="item in block" :key="item+Math.random()*563">{{item}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Email from "../assets/smtp.js";
export default {
  name: "Thirdblock",
  props: ["c"],
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      },
      email: "",
      isError: true,
      status: ""
    };
  },
  computed: {
    itemsInColumn() {
      return parseInt(this.c.contacts.right.items_in_column);
    },
    colWidth() {
      const total = Math.ceil(
        this.c.contacts.right.items.length / this.itemsInColumn
      );
      return Math.floor(12 / total);
    },
    allItems() {
      return this.c.contacts.right.items;
    },
    dividedItems() {
      let arr = [],
        tmp = [];
      const menu = [...this.allItems];
      for (let i = 0; i < menu.length; i++) {
        if (i % this.itemsInColumn === 0 && i > 0) {
          arr.push(tmp);
          tmp = [];
        }
        tmp.push(menu[i]);
      }
      arr.push(tmp);
      return arr;
    },
    formValid() {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.email).toLowerCase());
    }
  },
  methods: {
    sendMail() {
      this.status = "Loading...";
      this.isError = "loading";
      if (this.formValid) {
        let templateParams = {
          to: this.email,
          subject: "Test site",
          msg:
            "Привіт, це перевірка тестового завдання, яке зробив Ніколай Радоніч."
        };
        window.emailjs
          .send("gmail", "landing_vue", templateParams)
          .then(res => {
            this.isError = false;
            this.status = "Message has been sent successfully!";
            setTimeout(() => {
              this.status = "";
              this.isError = true;
            }, 1000);
          })
          .catch(err => {
            this.isError = true;
            this.status = err;
          });
      } else {
        this.isError = true;
        this.status = "Email is incorrect";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$yellow: #fcdb00;
$yellow_h: #beaa10;
.third-block {
  background-color: #010101;
  padding: 100px 0 120px;
  .wrapper {
    .form {
      width: 80%;
      margin: 0 auto 40px;
      .title {
        color: $yellow;
      }
      .subtitle {
        color: #898989;
      }
      form {
        margin: 40px 0 10px;
        > .row {
          width: 100%;
          margin: 0;
        }
        input,
        button {
          padding: 20px;
        }
        button {
          text-transform: uppercase;
          background-color: $yellow;
          padding: 0 20px;
          margin-left: 20px;
        }
      }
      > span {
        width: 100%;
        display: block;
        text-align: left;
        &.success {
          color: rgba(5, 161, 5, 1);
        }
        &.error {
          color: rgba(238, 0, 0, 1);
        }
        &.loading {
          color: rgb(219, 158, 25);
        }
      }
    }
    .socials {
      i {
        display: flex;
        justify-content: center;
        color: $yellow;
        cursor: pointer;
        transition: color 0.3s ease;
        &:hover {
          color: $yellow_h;
        }
      }
    }
    .contacts {
      color: #fff;
      margin-top: 80px;
      .left {
        p {
          margin: 0;
          padding: 0;
        }
      }
    }
  }
}
@media all and (max-width: 767px) {
  .third-block {
    .wrapper {
      .form {
        width: 95%;
        form {
          > .row {
            justify-content: center !important;
            button {
              margin: 10px 0 0;
              padding: 5px;
            }
          }
        }
        > span {
          text-align: center;
          margin: 0;
        }
      }
      .contacts {
        .left {
          margin-bottom: 40px;
        }
        .right {
          .item-holder {
            margin-top: 35px;
            &:nth-of-type(2n + 1) {
              padding-left: 0;
            }
          }
        }
      }
    }
  }
}
</style>