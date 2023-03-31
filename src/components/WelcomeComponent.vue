<template>
    <div class="container-welcome">
        <div class="welcome-title">
            <h1 class="title">Boas-vindas ao <span class="education-title">education</span>!</h1>

        </div>
        <div class="welcome-text">
            <p class="text"><i><strong>education</strong></i> é uma plataforma de educação que tem como objetivo encurtar a distância entre o aluno que necessita de aulas de reforço e o professor que busca ter uma renda
				extra ou trabalhar por tempo integral e podendo estar em casa ou qualquer local com internet.
			</p> 
        </div>
    </div>
</template>

<style scoped>
    .container-welcome {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }
    .welcome-title {
        display: flex;
        justify-content: space-around;
    }
    .education-title {
        color:#ec1464; 
    }
    .welcome-text {
        display: flex;
        margin: 0 20px;
        justify-content: space-between;
    }

    .text {
        margin: 0;
    }

    @media (max-width: 375px) { 
		.title {
            font-size: 16pt;
        }
        .text {
            font-size: 12pt;
        }
    }
</style>