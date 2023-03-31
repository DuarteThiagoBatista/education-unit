<template>
    <div class="router-wrapper-hamburger">
        <ButtonComponent type="next" btnName="Dar aulas" @click="$router.push('/cadastro')" />
        <ButtonComponent type="next" btnName="Conectar" @click="$emit('clickedLogin')" />
        <ButtonComponent type="next" btnName="Próximo" />
    </div>
</template>

<script>
import ButtonComponent from './ButtonComponent.vue';
export default{
    methods: {
        ButtonComponent,
    }
}
</script>

<style>
    .router-wrapper-hamburger{
        width: 100%;
        height: 100%;
        border: none 20px;
        background: #ec1464;
        z-index: 1;
        display: flex;
        justify-content: space-between;
    }
</style>