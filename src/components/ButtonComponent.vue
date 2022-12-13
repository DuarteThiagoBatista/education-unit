<template>
    <div :class="this.type === 'next' ? 'btnRosa' : 'btnCinza'">
        {{ btnName }}
    </div>
</template>

<style scoped>
.btnRosa{
    cursor:pointer;
    padding: 5px 10px;
    border-style: solid;
    border-radius: 5px;
    border-color: #ec1464;
    background-color: #ec1464;
    color: white;
    width: 350px;
    font-size: large;
    text-align: center;
    transition: 0.3s;
}

.btnCinza{
    cursor:pointer;
    padding: 5px 10px;
    border-style: solid;
    border-radius: 5px;
    border-color: #dbd2d5;
    background-color: #dbd2d5;
    color: #ec1464;
    width: 350px;
    font-size: large;
    text-align: center;
    transition: 0.3s;
}
.btnRosa:hover{
        /* border-radius: 10px; */
        /* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); */
        background-color: white;
        border:#ec1464 solid;
        color: #ec1464;
}
.btnCinza:hover{
        /* border-radius: 10px; */
        /* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); */
        background-color: white;
        border:#ec1464 solid;
        color: #ec1464;
}
</style>

<script>
export default{
    data: () => ({
    }),
     props:{
        btnName: String,
        type: String,
     },
}


</script>