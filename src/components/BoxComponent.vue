<template>
    <div class="background">
            <div class="box">
                <div style="display: flex; width: 100%; height: fit-content; justify-content: flex-end;">
                    <img @click="$emit('close')" style="cursor:pointer" width="32" alt="botão de fechar em formato de x" src="../assets/close.png">
                </div>
                <LoginBox @recover="this.login = false; this.recover = true" @register="this.register = true; this.login = false" v-if="login" /> 
                <RegisterBox title="Inscreva-se" @login="this.register = false; this.login = true" v-if="register" />
                <RecoverPasswordBox @login="this.login = true; this.recover = false" v-if="recover" />
            </div>
    </div>
</template>

<script>
import LoginBox from './LoginBoxComponent.vue';
import RegisterBox from './RegisterBoxComponent.vue';
import RecoverPasswordBox from './RecoverPasswordBoxComponent.vue';

export default{
    data: () => ({
        login: true,
        register: false,
        recover: false,
    }),
    components:{
        LoginBox,
        RegisterBox,
        RecoverPasswordBox,
    },
    methods: {}
}
</script>

<style scoped>
    .background{
        width: 100%;
        height:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(34,34,34,0.85);
        box-shadow: inset rgb(34, 34, 34) 1px 1px 10px;
    }
    .box{
        padding: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 450px;
        height: fit-content;
        background: white;
        border-radius: 15px;
        z-index: 1;
        justify-content: space-between;
        position: absolute;
        overflow: visible;
        transition: 0.5s;
    }
</style>