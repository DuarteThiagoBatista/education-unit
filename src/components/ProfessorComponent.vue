<template>
	<div class="container">
		<ul class="wrapper-professor">
			<li class="professor" v-for="item in professores" @click="setValues(item.img, item.title, item.description, item.dates)">
				<RouterLink to="/agendar/listagem-professor/sobre-aula-x">
					<div>
						<img class="img" :src="item.img" alt="Professor">
						<!-- <div class="img"></div> -->
						<div class="name">{{ item.title }}</div>
						<div class="description">{{ item.description }}</div>
					</div>
				</RouterLink>
			</li>
		</ul>
	</div>
</template>

<script setup>
	import { listTeacherStore } from '../stores/listTeachers'
	import { chosenTeacherStore } from '../stores/chosenTeacher'
	import { mapActions, storeToRefs } from 'pinia';

	const store = listTeacherStore()
	const professores = store.listTeacherData


	const storeTeacher = chosenTeacherStore()

	const { img, title, description, dates } = storeToRefs(storeTeacher)

	const { setValues } = mapActions(chosenTeacherStore, ["setValues"])

	// function setChosenTeacher(img) {
	// 	console.log('img: ', img)
	// 	storeChosenTeacher.chosenTeacherData.img = img
	// 	console.log('professor: ', storeChosenTeacher.chosenTeacherData.img)
	// } 

</script>

<style scoped>
	
	.wrapper-professor {
		padding: 0;
		display: flex;
  	flex-wrap: wrap;
  	justify-content: center;
		
	}

	.professor {
		width: 200px;
  	height: 400px;
		list-style-type: none;
		margin: 0 50px 0 50px;
	}

	.img {
		width: 200px;
  	height: 150px;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		margin-bottom: 10px;
		border-radius: 5px;
	}

	.name {
		font-size: 18px;
		color: #455A64;
	}

	.description {
		color: #455A64;
	}
</style>