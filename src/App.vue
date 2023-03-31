<template>
	<Transition name="login">
		<BoxComponent @close="this.clickedLogin = false" v-if="this.clickedLogin" style="position: fixed; z-index: 3" />
	</Transition>
	<header>
		<NavbarComponent @clicked-login="this.clickedLogin = true;"/>
		<Transition name="login">
			<CollapseMenuComponent v-if="this.hambuger" />
		</Transition>
	</header>
	<body class="body">
		<RouterView @open="this.clickedLogin = true" />
	</body>
	<footer class="rodape">
		<FooterComponent />
	</footer>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import NavbarComponent from './components/NavbarComponent.vue';
import ProfessorNavbarComponent from './components/ProfessorNavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import BoxComponent from './components/BoxComponent.vue'
import CollapseMenuComponent from './components/CollapseMenuComponent.vue';


export default {
	data: () => ({
		clickedLogin: false,
		hambuger: false,
	}),
	components: {
		NavbarComponent,
		ProfessorNavbarComponent,
		FooterComponent,
		BoxComponent,
		CollapseMenuComponent,
	},
	updated() {
		console.log('clickedLogin: ', clickedLogin)
	}
}
</script>

<style scoped>


	.login-enter-active,
	.login-leave-active {
  		transition: opacity 0.5s ease;
	}

	.login-enter-from,
	.login-leave-to {
  		opacity: 0;
	}
	.login-enter-active,
	.login-leave-active {
  		transition: opacity 0.5s ease;
	}

	.login-enter-from,
	.login-leave-to {
  		opacity: 0;
	}
</style>
