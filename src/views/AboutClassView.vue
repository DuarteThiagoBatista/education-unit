<template>
	<div class="container">
		<div class="container-about">
			<div class="wrapper-about">
				<h1 class="title">{{ description }}</h1>
				<!-- <div class="subtitle">Sergipe. Na casa dele. Em minha casa webcam.</div> -->
			</div>
			<div>
				<h2 class="title">Sobre a aula</h2>
				<p>
					Lucas ipsum dolor sit amet jinn palpatine c-3po fisto obi-wan windu darth hutt moff palpatine. Yavin lando baba kessel darth. Kamino antilles anakin ben fett. Skywalker coruscant hutt padmé darth luke mandalore jar. Yavin palpatine wampa solo maul luuke ahsoka obi-wan moff. Moff hutt lars fett wicket hutt. Mace obi-wan kenobi sidious skywalker luke. Wedge kashyyyk darth windu solo tatooine moff owen. Windu solo kenobi coruscant palpatine. Organa cade secura wookiee dooku wedge organa windu chewbacca.
					Skywalker windu boba amidala darth hutt kessel chewbacca. 
				</p>
			</div>
			<div>
			
			</div>
			<!-- <div>
				<h2 class="title">Mais sobre {{ title }}</h2>
				<p>{{ description }}</p>
			</div> -->
		</div>
		<div class="container-request">
			<div class="card">
				<div class="perfil-wrapper">
					<img class="img" :src="img" alt="Professor">
					<p class="name">{{ title }}</p>
				</div>
				<ul class="card-content">
					<li>
						<span>Preço hora/aula</span>
						<span class="value">R$50</span>
					</li>
					<li>
						<span>Tempo de resposta</span>
						<span class="value">3h</span>
					</li>
					<li>
						<span>Número de alunos</span>
						<span class="value">34</span>
					</li>
				</ul>
			</div>
			<div class="wrapper-request">
				<h2 class="title">Solicite sua aula</h2>
				<form v-if="!choseDate" class="form" action="">
					<h3><label for="textarea">Informe o que deseja aprender</label></h3>
					<textarea 
						v-model="text" 
						class="textarea"
						name="textarea" 
						cols="40" 
						rows="12"
						placeholder="Ex: Bom dia,
						Eu me chamo Pedro e procuro um professor de Física para aulas via webcam.
						Idealmente, eu gostaria de começar o mais rápido possível.
						Isso te convém? Você poderia me contactar para que possamos combinar a primeira aula?"
					>
					</textarea>
					<!-- <h3 class="class-date-title">Data da aula</h3>
					<div class="radio">
						<input 
							label="Com urgência"
							@click="switchTrue" 
							type="radio" 
							id="radio-one" 
							name="switch" 
							checked
						/>
						<input 
							label="Propor data"
							@click="switchFalse" 
							type="radio" 
							id="radio-two" 
							name="switch"
						/>
					</div>
					<DatePicker class="calendar" v-if="!urgency" v-model="selectedDate" :attributes="attrs"  mode="dateTime" column="1" :first-day-of-week="1" is24hr :minute-increment="5"/> -->
					<button @click="next" class="button" >Escolher data</button>
				</form>
				<SelectDate v-else></SelectDate>
			</div>
		</div>
	</div>
</template>

<script>
	import SelectDate from '../components/scheduleClass/SelectDate.vue';
	import { chosenTeacherStore } from '../stores/chosenTeacher';
	import { scheduleStore } from '../stores/schedule'

	const store = scheduleStore() 

	const storeTeacher = chosenTeacherStore()

  export default {
		components: {
		  SelectDate,
	  },
		data() {
			return {
				choseDate: false,

				urgency: true,
				text: '',
				img: storeTeacher.$state.img,
				title: storeTeacher.$state.title,
				description: storeTeacher.$state.description,

				unavailableDate: false
			}
		},
		computed: {
			// isAvailableDate() {
			// 	console.log("Teste: ", getArray().target)
			// 	return  storeTeacher.$state.dates.includes(this.selectedDate)
			// },
		},
		methods: {
			next() {
				this.choseDate = true;
				store.$state.scheduleData.text = this.text;
				console.log('date: ', this.text)
			},
		},
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: row;
		padding: 15px;
		margin: 20px 0;
	}
	.container-about {
		width: 60%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		padding: 0 10px 0 10px;
	}
	.wrapper-about {
		background-image: linear-gradient(to right, #ec146420, #1A2DF320);
		border-radius: 10px;
		margin: 0 10px 15px 0;
		padding: 10px;
		box-shadow: 0 0 15px #ccc;
	}
	.container-request {
		padding: 0 10px 0 10px;
		width: 40%;
	}
	.card {
		box-shadow: 0 0 15px #ccc;
		min-height: 250px;
		width: 100%;
		margin-bottom: 50px;
		border-radius: 10px;
		display: flex;
		align-items: center;
	}

	.perfil-wrapper {
		padding: 20px;
	}
	.img {
		height: 150px;
		width: 150px;
		background-image: url('../components/img/professor.jpeg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		border-radius: 5px;
		box-shadow: 0.5rem 0.5rem #ec146420, -0.5rem -0.5rem #1A2DF320;
	}
	.name {
		font-size: 20px;
	}
	ul {
		margin:  0 0 60px 0;
		padding: 0;
	}
	li {
		list-style-type: none;
		padding-bottom: 10px;
	}
	.value {
		margin-left: 15px;
		border-color: #ec146420;
		padding: 3px;
		border-radius: 10px;
		border-style: solid;
	}
	.wrapper-request {
		padding: 10px;
		background-image: linear-gradient(to right, #ec146420, #1A2DF320);
		border-radius: 10px;
		box-shadow: 0 0 15px #ccc;
		min-height: 400px;
	}
	.title {
		margin: 0;
		line-height: normal;	
		margin: 10px 0;
	}

	.form {
		display: flex;
		flex-direction: column;
	}

	.textarea {
		max-width: 65%;
	}

	.button{
		font-family: "PoppinsBold";
		background-color: #ec1464;
		color: white;
		padding: 10px 24px;
		height: 40px;
		width: 150px;
		font-size: 10pt;
		border-radius: 10px;
		border: none;
		text-align: center;
		margin: 10px 0;
		cursor: pointer;
		
	}
	@media (hover:hover) {
		.button:hover {
			padding: 6px 20px;
			color: #ec1464;
			background-color: #ffff;
			border-style: solid;
		}
	}

</style>
