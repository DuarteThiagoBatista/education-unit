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
		min-height: 230px;
		margin-bottom: 100px;
	}
	.find-teacher {
		height: 400px;
		margin-bottom: 30px;
	}
	.become-teacher {
		margin-bottom: 100px;
		min-height: 350px;
	}
</style>