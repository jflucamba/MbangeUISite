<template>
    <div id="county">
        
      <b-container class="county">

        <b-row class="detalhe-provincia">

          <b-col class="mais-detalhes">
            <div class="texto">
              <a :href="link">Luanda</a>
            </div>
          </b-col>

          <b-col class="mais-detalhes">
            <div class="texto">
              <a :href="link">Viana</a>
            </div>
          </b-col>

          <b-col class="mais-detalhes">
            <div class="texto">
              <a :href="link">Belas</a>
            </div>
          </b-col>

          
        </b-row>

        

        <b-row class="detalhe-provincia">

          <b-col class="mais-detalhes">
            <div class="texto">
              <a :href="link">Cazenga</a>
            </div>
          </b-col>

          <b-col class="mais-detalhes">
            <div class="texto">
              <a :href="link">Talatona</a>
            </div>
          </b-col>

          <b-col class="mais-detalhes">
            <div class="texto">
              <a :href="link">Kilamba-Kiaxi</a>
            </div>
          </b-col>

          
        </b-row>

        <b-row class="detalhe-provincia">

          <b-col class="mais-detalhes">
            <div class="texto">
              <a :href="link">Cacuaco</a>
            </div>
          </b-col>

          <b-col class="mais-detalhes">
            <div class="texto">
              <a :href="link">Icolo e Bengo</a>
            </div>
          </b-col>

          <b-col class="mais-detalhes">
            <div class="texto">
              <a :href="link">Quissama</a>
            </div>
          </b-col>

          
        </b-row>

        

      </b-container>

    </div>
</template>


<script>
export default {
    data(){
      return{
        link:'/shoppingList'
      }
    }
}
</script>

<style scoped>

.county{
  margin-top: 35px;
  margin-bottom: 65px;
}

.detalhe-provincia{
  /*background-color: red;*/
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center
}

.mais-detalhes{
  
  justify-content: center;
  align-items: center;
  margin: 5px auto;
}

.mais-detalhes div{
  background-color:#6f42c1;
  width: 100%;
  height: 70px;
  border-radius: 3%;
  
}

.texto{
  text-align: center;  
  padding-top: 25px;
  justify-content: center;
  align-items: center
}

.mais-detalhes .texto a{
  text-decoration: none;
  color: #fff;
}

.visibilidade{
  visibility: hidden;
}



</style>