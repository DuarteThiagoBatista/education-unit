
<template>
            <span class="title">Criar conta</span>
            <div style="display: flex;">
                <input v-model="name" style="margin-right: 10px; width: 100%;" placeholder="Nome" type="text">
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
			<RouterLink @click="saveData" class="button" to="/agendar/professor">Cadastrar-se</RouterLink>
            <div class="login">
                <span style="margin-right: 3px">Já possui uma conta? Clique em</span>
                <span style="color:#ec1464" class="link" @click="$emit('back'); $emit('login')"><strong>entrar</strong></span>
                <span>.</span>
            </div>
</template>

<script>
	export default{
		data: () => ({
			name: '',
			lastName: '',
			email: ''
		}),
		methods: {
			saveData() {
				// this.$state.teacherRegistrationData.name = this.name;
				// this.$state.teacherRegistrationData.lastName = this.lastName;
				// this.$state.teacherRegistrationData.email = this.email;
				// console.log('name:', this.$state.teacherRegistrationData.name);
				// console.log('lastName:', this.$state.teacherRegistrationData.lastName);
				console.log('email:', this.$state);
			}
		},
		mounted() {
			console.log('email:', this.$state);
		},
		updated() {
			// console.log('name:', this.name);
			// console.log('lastName:', this.lastName);
			// console.log('email:', this.email);
		}
	}
</script>

<style scoped>

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
    .title{
        font-size: 25pt;
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
</style>
