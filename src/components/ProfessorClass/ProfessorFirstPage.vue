<template>

    <div class="container-subjects">
        <div class="wrapper-checkbox">
            <div class="title">
                <h2 v-if="isSelected">Você dá aula de</h2>
                <h2 v-if="isSelected" style="margin-left: 9px; color: #ec1464">{{ subject }}</h2>
                <h2 v-else>O que você ensina?</h2>
            </div>
            <div class="wrapper-subjects" id="checkbox">
                <CheckboxComponent class="subject" v-for="subject in subjects" :key="subject" :subject-name="subject" @name="(name) => {this.subject = name}" @click="this.isSelected = !this.isSelected"/>
            </div>
        </div>

        <div class="wrapper-about">
					<h2 class="about-title">Sobre sua aula</h2>
					<span>(12 palavras no mínimo)</span>
					<textarea v-model="text" class="textbox" placeholder="ex: Formado no conservatório e artista plástico dá aulas de cantos violão para todos os níveis. Metodologia personalizada e descontraída!"></textarea>
        </div>
        <!-- <div >
            <input class="profilePic" name="profilePic" id="profilePic" type="file" accept="image/png, image/gif, image/jpeg">
            <label for="profilePic">Selecione sua foto</label>
        </div> -->
	</div>
</template>

<script>
import CheckboxComponent from '../Schedule/CheckboxComponent.vue'
import ButtonComponent from '../ButtonComponent.vue';

export default {
    data: () => ({
        subjects: ['Matemática','Física','Química','Português','Inglês','Geografia','História','Biologia'],
        isSelected: false,
        quantity: 0
    }),
    components:{
        CheckboxComponent,
        ButtonComponent,
    },
    methods:{
			handleFileChange(){
					var profilePic = document.querySelector('profilePic');
					var fileDisplayArea = document.querySelector('fileDisplayArea');


			profilePic.addEventListener('change', function(e) {
					var file = profilePic.files[0];
					var imageType = /image.*/;

					if (file.type.match(imageType)) {
							var reader = new FileReader();

							reader.onload = function(e) {
									fileDisplayArea.innerHTML = "";

									var img = new Image();
									img.src = reader.result;

									fileDisplayArea.appendChild(img);
							}

							reader.readAsDataURL(file); 
					} else {
							fileDisplayArea.innerHTML = "File not supported!"
					}
			});
			},
			changeCheckboxWidth() {
				if (this.isSelected) {
					document.querySelector('.checkbox').cl

				}
			}
    },
		updated() {
			console.log('selected: ', this.isSelected)
		}
}
</script>

<style scoped>

	.container-subjects {
		display: flex; 
		flex-direction: row; 
		align-items: center; 
		justify-content: space-around;
	}

	.wrapper-checkbox {
		display:flex; 
		flex-direction:column; 
		justify-content: space-evenly; 
		align-items: center;
		width: 338px;
	}

	.wrapper-about {
		display:flex;
		flex-direction:column; 
		justify-content: space-evenly; 
		align-items: center;
	}

	.about-title {
		margin: 0;
		font-size: 22pt;
	}

	.profilePic + label {
		padding: 5px 10px;
		font-size: 1.25em;
		font-weight: 700;
		color: white;
		background-color: #ec1464;
		display: inline-block;
		border: solid #ec1464;
		border-radius: 5px;
		cursor: pointer;
		outline: 1px dotted #ec1464;
		/* outline: -webkit-focus-ring-color auto 5px; */
	}

	.profilePic:focus + label,
	.profilePic + label:hover {
		background-color: white;
		border: solid #ec1464;
		color: #ec1464;
	}
	.profilePic{
		width: 0.1px;
		height: 0.1px;
		opacity: 0;
		overflow: hidden;
		position: absolute;
		z-index: -1;
	}

	::-webkit-scrollbar {
		width: 5px;
	}
	::-webkit-scrollbar-thumb {
	background: #ec1464;
	border-radius: 5px;
	transition: 0.5s;
	}
	::-webkit-scrollbar-thumb:hover {
	background: #b8104d;
	}
	.title{
		display:flex;
		flex-direction: row;
		justify-content: center;
	}
	h1{
		text-align: center;
		font-size: 32px;
	}
	@media screen and (max-height: 1800px) {
		.wrapper-subjects{
			overflow:hidden scroll;
			height:280px;
			padding: 5px;
		}
	}
	.wrapper-subjects{
		display: flex;
		flex-direction: column;
		width: 300px;
	}
	.checkbox{
		width: 100%;
		margin-bottom: 10px
	}
	.checkboxSelected{
		width: 100%;
		margin-bottom: 10px
	}

	::placeholder{
		color: #455a64b7;
		opacity: 0.5;
	}

	.textbox{
		border: hidden;
		border-radius: 10px;
		color: #455A64;
		font-family: 'Questrial', sans-serif;
		font-size: 12pt;
		width: 600px;
		height: 200px;
		margin-top: 30px;
		resize: none;
		padding: 10px;
		text-align: justify;
	}
	@media (hover:hover){
		.subject:hover{
			transform: scale(1.04);
		}
	}
</style>