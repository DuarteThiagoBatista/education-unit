<template>
  <nav class="nav">
   <div class="left-routes-wrapper">
     <RouterLink class="routes" to="/">Início</RouterLink>
   </div>
     <img src="../assets/education2.svg" class="logo" width="75">
   <div v-if="(!(this.windowWidth <= 1000))" class="right-router-wrapper">
     <span class="user" @click="$router.addRoute('#')">Criar Anúncio</span>
   </div>
   <img v-if="((menuOpen == false) && (this.windowWidth <= 1000))" @click="$emit('menuOpen'); menuOpen = true" class="hamburger" src="../assets/menu.svg">
   <img v-if="((menuOpen == true) && (this.windowWidth <= 1000))" @click="$emit('menuClose'); menuOpen = false" class="hamburger" src="../assets/close.svg">
  </nav>
</template>

<script>
export default{
  data: () => ({
    menuOpen: false,
    windowWidth: 0,
    windowHeight: 0,
  }),
  created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
            this.windowHeight = window.innerHeight;
        }
    }
}
</script>

<style scoped>

    span{
      text-decoration: none;
      color: #ec1464;
      border-bottom: #ec146300 solid;
      border-radius: 0;
      transition: 0.3s;
      cursor: pointer;
    }

    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-image: linear-gradient(to right,#ec146420,#1A2DF320);
        z-index: 2;
        
    }
    .hamburger{
      width: 32px;
      cursor: pointer;
    }
    .left-routes-wrapper {
      display: flex;
      justify-content: flex-start;
      margin-left: 10px;
      width: 25%;
    }
    .routes {
      margin-right: 10px;
      padding: 0 5px;
      font-size: 16px;
      font-weight: 500;
      margin-top: 5px;
    }
    .right-router-wrapper {
      visibility: visible;
      display: flex;
		  align-items: center;
		  justify-content: flex-end;
		  width: 25%;
		  margin-right: 20px;
    }
    .user {
      margin-left: 10px;
		  font-size: 16px;
		  font-weight: 500;
		  padding: 0 5px;
      margin-top: 5px;
    }
    .users{
      visibility: hidden;
      margin-left: 10px;
		  font-size: 16px;
		  font-weight: 500;
		  padding: 0 5px;
      margin-top: 5px;
    }
    .logo{
      padding: 10px;
      /* background-color: white;
      border: #ec1464 solid;
      border-radius: 5px; */
      cursor:pointer;
      transition-duration: 0.5s;
    }
      .logo:hover{
          transform: scale(1.04);
      }
      span.user:hover{
        border-radius: 0 0 5px 0px;
        border-bottom: #ec1464 solid;
      }
      span.users:hover{
        border-radius: 0 0 5px 0px;
        border-bottom: #ec1464 solid;
      }
</style>