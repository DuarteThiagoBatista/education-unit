<template>
	<div class="container-become-professor">
		<h2 class="title">Deseja compartilhar seus conhecimentos?</h2>
		<p class="subtitle">Venha fazer parte da família education!</p>
		<RouterLink class="button" to="/cadastro">Saber mais</RouterLink>
	</div>		
</template>

<style scoped>
	.container-become-professor {
		padding: 60px;
		box-shadow: 0 0 20px #ccc;
		border-radius: 30px;
		margin: 0 40px 0 40px;
		background-image: linear-gradient(to right, #ec146410, #1A2DF310);
		min-height: 160px;
	}

	.title {
		margin: 0;
		margin-bottom: 20px;
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
	@media (max-width: 520px) {
			.container-become-professor {
				padding: 40px;
				margin: 0 10px 0 10px;
			}
		}
	@media (max-width: 375px) {
			.container-become-professor {
				margin: 0;
				padding: 20px;
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