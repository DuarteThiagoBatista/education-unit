<template>
            <span class="title">Redefinir minha senha</span>
                <input placeholder="E-mail" type="email">
                <input class="btn" type="submit" value="Conectar-se">
                <span @click="$emit('login')" class="link">&#60; Voltar à página de conexão</span>
</template>

<style scoped>
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
        font-size: 20pt;
        font-family: 'PoppinsBold';
        margin-top: -10px;
        margin-bottom: 30px;
    }
    .btn{
        cursor: pointer;
        background-color: #ec1464;
        color: white;
        font-family: 'PoppinsBold';
        transition: 0.3s;
        border-bottom: #455A6400;
        margin-bottom: 30px;
    }

    .link{
        cursor: pointer;
        transition: 0.5s;
        border-bottom: rgba(0, 0, 0, 0) solid 1px;
    }
    .img{
        cursor: pointer;
        transition: 0.5s;
    }
    .link:hover{
        border-bottom: solid #ec1464 1px;
    }
    .btn:hover{
        transform: scale(1.02);
    }
    .login{
        font-family: 'Questrial', sans-serif;
    }
    ::placeholder{
        color: #455a64;
        opacity: 0.8;
    }
</style>