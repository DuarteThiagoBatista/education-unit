<template>
    <div class="home">
        <Welcome class="welcome"/>
        <FindTeacher class="find-teacher"/>
				<BecomeTeacher class="become-teacher"/>
    </div>
</template>

<script>
import Welcome from '../components/WelcomeComponent.vue'
import FindTeacher from '../components/FindTeacher.vue'
import BecomeTeacher from '../components/BecomeTeacher.vue'

export default {
    components: {
        Welcome,
				FindTeacher,
				BecomeTeacher,
    }
}
</script>

<style scoped>
  .home{
		padding: 10px;
  }

	.welcome {
		margin-bottom: 100px;
	}

	.find-teacher {
		margin-bottom: 100px;
	}

	.become-teacher {
		margin-bottom: 100px;

	}

	@media (max-width: 375px) {
		.welcome, .find-teacher, .become-teacher {
		margin-bottom: 50px;
	}
	} 
</style>