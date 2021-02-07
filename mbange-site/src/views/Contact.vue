<template>
   <div>
       
       <form name="formteste" action="" method="post">

<h1>Contato</h1>

<p class="nome">
 <input type="text" name="nome" placeholder="informe seu nome" required="required">
 </p>

<p class="email">
 <input type="email" name="email" placeholder="informe seu email" required="required">
 </p>

<p class="assunto">
 <input type="text" name="assunto" placeholder="informe o assunto" required="required">
 </p>

<p class="mensagem">
 <textarea name="mensagem" placeholder="deixe sua mensagem"></textarea>
 </p>

<p class="enviar">
 <input type="submit" name="enviar" value="Enviar">
 </p>

</form>

    </div> 
</template>


<script>
export default {
    
}
</script>

<style scoped>

    form{
font-size: 16px;
background: #CCC;
max-width: 500px;
margin: 0 auto;
padding: 0 10px 10px 10px;

}

h1{
color: #333
}

input, textarea{
width: 474px;
padding: 10px;
}

.enviar input {
background-color: #069;
height: 40px;
width: 150px;
font-weight: bold;
border-radius: 5px;
-webkit-border-radius: 5px;
-moz-border-radius: 5px;
border: 1px solid;
color: #FFF;
cursor: pointer;
}

.enviar input:hover{
background: #078;
}

textarea {
width: 474px;
height: 120px;
line-height: 20px;
}

</style>