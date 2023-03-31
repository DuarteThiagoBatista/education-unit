<template>
	<div class="find-teacher-container">
		<div class="wrapper-teacher">
			<h2 class="title">Professores certificados</h2>
			<p class="subtitle">Escolha o professor que mais lhe agrade!</p>
			<RouterLink class="button" to="/agendar/listagem-professor">Encontre seu professor</RouterLink>
		</div>
		<div class="container-img">
			<ul class="wrapper-img-content">
				<li class="professor" v-for="item in professores.slice(0,4)" @click="setValues(item.img, item.title, item.description, item.dates)">
					<RouterLink class="wrapper-img" to="/agendar/listagem-professor/sobre-aula-x">
						<div>
							<div>
								<img class="img" :src="item.img" alt="">
								<div class="name">{{ item.title }}</div>
							</div>
						</div>
					</RouterLink>
				</li>
			</ul>
		</div>
	</div>		
</template>

<script setup>
	import { ref } from 'vue'
	import { listTeacherStore } from '../stores/listTeachers'
	import { chosenTeacherStore } from '../stores/chosenTeacher'
	import { mapActions, storeToRefs } from 'pinia';

	const store = listTeacherStore()
	const professores = store.listTeacherData


	const storeTeacher = chosenTeacherStore()

	const { img, title, description, dates } = storeToRefs(storeTeacher)

	const { setValues } = mapActions(chosenTeacherStore, ["setValues"])

</script>

<style scoped>
	.find-teacher-container {
		display: flex;
		justify-content: space-around;
	}

	.wrapper-teacher {
		min-height: 190px;
	}

	.title {
		margin: 0;
		margin-bottom: 10px;
	}

	.subtitle {
		margin: 0;
		margin-bottom: 40px;
	}

	.button{
		background-color: #ec1464;
		color: white;
		padding: 10px 24px;
		margin-top: 10px;
		height: 22px;
		width: 230px;
		font-size: 13pt;
		text-align: center;
		border-radius: 10px;
	}
	@media (hover:hover) {
		.button:hover {
			padding: 6px 20px;
			color: #ec1464;
			background-color: #fff;
			border-style: solid;
		}
	}


	.wrapper-img-content {
		height: 50%;
		width: 50%;
		display: grid;
		gap: 20px;
		grid-template-columns: auto auto;
		margin: 0;
		padding: 0;
		background-color: #54545405;
	}

	.professor {
		list-style-type: none;
  	height: 150px;
		width: 200px;

	}

	.wrapper-img {
		height: 150px;
		width: 200px;

	}

	.img {
		height: 150px;
		width: 200px;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		border-radius: 5px;
		margin: 0;
		display: flex;
	}

	.name {
		font-size: 18px;
		color: #ffffff;
		align-self: flex-end;
		margin: 0 0 15px 15px;
	}

	.description {
		color: #ffffff99;
	}

	@media(hover:hover) {
		.img:hover {
			box-shadow: 0 0 20px #ccc;

		}
	}

	@media (max-width: 940px) {
		.find-teacher-container {
			box-shadow: 0 0 20px #ccc;
			border-radius: 30px;
			padding: 60px;
			margin: 0 40px 0 40px;
			background-image: linear-gradient(to right, #ec146410, #1A2DF310);
			justify-content: flex-start;
		}
		
		.container-img {
			display: none;
		}
	}

		@media (max-width: 520px) {
			.find-teacher-container {
				padding: 40px;
				margin: 0 10px 0 10px;
			}
		}
		@media (max-width: 375px) {
			.find-teacher-container {
				margin: 0;
				padding: 20px;
			}
			.wrapper-teacher {
				min-height: 160px;
			}
			.title {
				font-size: 15pt;
			}
			.subtitle {
				margin-bottom: 20px;
				font-size: 12pt;
			}
			.button {
				margin-bottom: 10px;
				font-size: 10pt;
			}
		}
</style>