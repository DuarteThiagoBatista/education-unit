<template>
    <div class="container-teacher-data">
        <ProfessorFirstPageVue />
		<div class="wrapper-button">
        	<ButtonComponent @click="$router.push('/')" type="next" btnName="Criar Anúncio" />
    	</div>
    </div>
</template>

<script>
import ProfessorFirstPageVue from '../components/ProfessorClass/ProfessorFirstPage.vue';
import ProfessorSecondPageVue from '../components/ProfessorClass/ProfessorSecondPage.vue'
import ButtonComponent from '../components/ButtonComponent.vue'

export default {
    data: () => ({
        page: 1
    }),
    components: {
        ProfessorFirstPageVue,
        ProfessorSecondPageVue,
        ButtonComponent,
    }
}
</script>

<style scoped>
	.container-teacher-data{
		margin-top: 50px;
		padding: 20px;
		border-radius: 10px;
		background-image: linear-gradient(to right, #ec146420, #1A2DF320);
		box-shadow: 0 0 10px #ccc;
	}
	.wrapper-button{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-top: 50px;
	}
</style>