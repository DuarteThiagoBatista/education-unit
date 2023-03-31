<template>
    <div class="register-container">
        <div class="wrapper-text">
            <h3 class="title">Dar aulas e viver de sua paixão!</h3>
            <span class="text">Livre e sem intermediários! Dê aulas de casa e encontre alunos geniais nas redondezas. <br> Dê reforço escolar com a gente e junte-se à família do education! <br> Estamos te esperando! :D</span>
        </div>
        <div class="registerBox">
					<span class="titleRB">Criar conta</span>
					<div style="display: flex;">
							<input v-model="name" style="margin-right: 15px; width: 100%;" placeholder="Nome" type="text">
							<input v-model="lastName" style="width: 100%;" placeholder="Sobrenome" type="text">
					</div>
					<input v-model="email" placeholder="E-mail" type="email">
					<input v-model="password" placeholder="Senha" type="password">
					<input v-model="confirmPassword" placeholder="Confirme sua senha" type="password" >
					<div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
							<input v-model="checkbox" class="checkbox" type="checkbox">
							<div class="terms">
								<span style="margin-top: 30px; margin-right: 2px">Li e concordo com os</span>
								<span class="link"><strong>Termos de Uso {{ password }}</strong></span>
								<span>.</span>
							</div>
					</div>
					<RouterLink @click="saveTeacherData" class="button" to="/agendar/professor">Cadastrar-se</RouterLink>
					<div class="login">
							<span style="margin-right: 3px">Já possui uma conta? Clique em</span>
							<span style="color:#ec1464" class="link" @click="$emit('back'); $emit('login')"><strong>entrar</strong></span>
							<span>.</span>
					</div>
        </div>
    </div>
</template>

<script>
	import { teacherStore } from '../stores/teacher'

	const store = teacherStore() 

	export default {
			data() {
				return {
					name: '',
					lastName: '',
					email: ''
				}
			},
			methods: {
				saveTeacherData() {
					this.$state.teacherData.name = this.name;
					this.$state.teacherData.lastName = this.lastName;
					this.$state.teacherData.email = this.email;
				}
			},
	}
</script>

<style scoped>

	.register-container{
		/* margin: 50px 0; */
		padding: 40px;
		display: flex;
        justify-content: space-between;
		border-radius: 0px;
		background: linear-gradient(to right, #ec146420, #1a2df320);
		/* box-shadow: 0 0 10px #ccc; */
	}

	.wrapper-text{
		margin-right: 20px;
		align-self: center;
	}

	h3.title{
		margin-top: 0;
		font-size: 37px;
	}
	.text{
		font-size: 18px;
	}
	.registerBox{
		padding: 30px 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 450px;
		height: 550px;
		background:white;
		border-radius: 15px;
	}

	br {
		margin-top: 10px;
	}


	
	.invalid{
			border-bottom: solid rgb(255, 0, 0) 2px;
			color: rgb(255, 0, 0);
			transition-duration: 0.5s;
	}
	.closeIcon{
			cursor: pointer;
	}
	.checkbox{
			width: 25px;
			height: fit-content;
			cursor:pointer;
	}
	input{
			border-style: none;
			border-radius: 2px;
			width: 100%;
			height: 40px;
			padding: 5px 10px;
			border-bottom: solid #455a64 2px;
			/* background-color: #dbd2d5; */
			font-family: 'Questrial', sans-serif;
			font-size: 12pt;
			color: #455A64;
			background: none;
			margin-bottom: 30px;
	}
	.titleRB{
			font-size: 33px;
			margin-top: -10px;
			margin-bottom: 30px;
	}
	.btn{
			cursor: pointer;
			background-color: #ec1464;
			color: white;
			font-family: 'PoppinsBold';
			transition: 0.3s;
			border:none;
			margin-bottom: 30px;
	}
	.terms{
			font-family:'Questrial', sans-serif;
			margin-bottom: 30px;
	}

	.link{
			cursor: pointer;
			transition: 0.5s;
	}
	.img{
			cursor: pointer;
			transition: 0.5s;
	}
	@media (hover:hover){
			.link:hover{
					border-bottom: solid #ec1464 1px;
			}
			.btn:hover{
					transform: scale(1.02);
			}
			.img:hover{
					transform: scale(1.04)
			}
	}
	.login{
			font-family: 'Questrial', sans-serif;
	}
	::placeholder{
			color: #455a64;
			opacity: 0.8;
	}

	.button{
		font-family: "PoppinsBold";
		background-color: #ec1464;
		color: white;
		padding: 10px 24px;
		border-radius: 10px;
		border-color: #ec1464;
		text-align: center;
		margin-bottom: 30px;
		width: 100%;
		border-style: solid;
	}
	@media (hover:hover) {
		.button:hover {
			color: #ec1464;
			background-color: #ffff;
			border-style: solid;
		}
	}
    @media (max-width: 1390px){
        .text{
            font-size: 15px;
        }
    }
    @media (max-width: 1290px){
        .register-container{
            justify-content: space-between;
        }
        h3.title{
            font-size: 30px;
        }
        .text{
            font-size: 12px;
        }
    }
    @media (max-width: 1150px){
        h3 .title{
            font-size: 22px;
        }
        .text{
            font-size: 12px;
        }
    }
    @media (max-width: 880px){
        .wrapper-text{
            margin-bottom: 100px;
        }
        .register-container{
            align-items: center;
            flex-direction: column;
        }
        
        .title{
            font-size: 30px;
            text-align: center;
        }
        .text{
            font-size: 18px;
        }
    }
    @media (max-width: 520px){
        .wrapper-text{
            display: none;
        }
        .register-container{
            padding: 0px;
            box-shadow: none;
            background: white;
        }
        .registerBox{
            background: linear-gradient(to right, #ec146420, #1a2df320);
            box-shadow: none;
			border-radius: 0px;
			width: 100%;
			margin: 40px 0px;
        }
        input{
            background-color: rgba(255, 255, 255, 0.2);
        }
    }
    @media (max-width: 451px){
        .registerBox{
            padding: 40px 65px;
        }
        .titleRB{
            font-size: 25px;
        }
    }
</style>