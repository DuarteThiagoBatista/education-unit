
<template>
            <span class="title">Conectar-se</span>
                <input placeholder="E-mail" type="email">
                <input placeholder="Senha" type="password">
                <input class="btn" type="submit" value="Conectar-se">
                <div class="login">
                    <span style="margin-right: 3px">Não tem uma conta ainda?</span>
                    <span style="color:#ec1464" class="link" @click="$emit('register')"><strong>Cadastre-se</strong></span>
                    <span>.</span>
                </div>
                <span @click="$emit('recover')" class="link">Esqueci minha senha</span>
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
        font-size: 25pt;
        font-family: 'PoppinsBold';
        margin-top: -0px;
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
        margin-bottom: 15px;
    }
    ::placeholder{
        color: #455a64;
        opacity: 0.8;
    }
</style>