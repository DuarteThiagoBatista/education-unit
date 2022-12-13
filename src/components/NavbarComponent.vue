<template>
   <nav class="nav">
    <div class="wrapper-routes">
      <RouterLink class="routes" to="/">Início</RouterLink>
    </div>
      <RouterLink to="/" tag="div">
      <img src="../assets/education_1.png" class="logo" width="100">
    </RouterLink>
    <div class="perfil-wrapper">
     	<span class="routes" @click="$emit('clickedLogin')">Conectar</span>
    </div>
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
	.nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 5px 10px 0 10px;
		height: 60px;
		background-image: linear-gradient(to right, #ec146420, #1A2DF320);
		/* background-color: #1A2DF3; */
	}
	.wrapper-routes {
    display: flex;
		justify-content: flex-start;
		margin-left: 10px;
		width: 25%;
	}
	.routes {
		color: #ec1464;
		padding: 0 5px;
		font-size: 17px;
		font-weight: 500;
		border-radius: 10px;
		cursor: pointer;
	}

	.perfil-wrapper {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 25%;
		margin-right: 10px;
	}
	.user {
		border-radius: 10px;
		transition: 0.5s;
		color: #ec1464;
		font-size: 20px;
		font-weight: 500;
		padding: 0 5px;
	}

	@media (hover:hover) {
		.routes:hover {
			background-color: #ec1464;
			box-shadow: 3px 3px 5px #ec146480;
			color: #fff;
			transition: 0.3s;
		}
		.user:hover {
			box-shadow: 3px 3px 5px #ec146480;
			background-color: #ec1464;
			color: #fff;
			transition: 0.3s;
		}
	}
</style>