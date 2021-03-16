<template>
    <div id="menuLogin">

        <header>
          <div class="logo">
            <img alt="Mbange" src="../static/LogoMbange.jpg">
          </div>

          <div class="menu">
            <div class="menu-entrar">
              <a href="/">
                <i class="fas fa-user-tie"></i>
                <div>Entrar</div>
              </a>
            </div>
            <div class="menu-cadastrar">
              <a href="/">
                <i class="fas fa-user-edit"></i>
                <div>Cadastrar</div>
              </a>
            </div>
          </div>
        </header>
                
    </div>    
</template>

<script>
export default {
    name:'MenuLogin'
}
</script>


<style scoped>

#menuLogin{
  margin-bottom: 75px;
}

/*.menu{
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2%;
  color: #000000;
}*/



.menu nav ul li a{
  
  color: #000000;
}

header{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 51px;
  /*padding: 9px 0;*/
  text-align: center;
  /*background: #069;*/
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: honeydew 1px solid;
  z-index: 1;
}

header ul{
  margin: 0;
  padding: 0;
}

header ul li{
  display: inline-block;
  margin: 0 10px;
}



header a{
  text-decoration: none;
  color: white;
}

header ul li a:hover{
  color: #000000;
}

header ul li a::after:active{
  color: yellow;
}

.logo{
  float: left;
  padding-left: 0;
  margin-left: 0;
  justify-content: left;
  align-items: flex-start;
  
}

.logo img{
  width: 20%;
  height: 50px;
  float: left;
  
}

.menu{
  float: right;
  padding-right: 0;
  margin-right: 0;
  justify-content: center;
  align-items: center;
  
  height: 50px;
  display: flex;
  flex-direction: row;
  clear: both;
}

.menu-entrar{
  justify-content: center;
  align-items: center;
  align-content: center;
  
  margin-right: 0px;
  
  background-color: #000000;
  padding: 0 5px;

}

.menu-entrar a{
  justify-content: space-between;
  
  display: flex;
  flex-direction: row;
}

.menu-cadastrar{
  background-color:#DB354D ;
  padding: 0 5px;
  
}


.menu-cadastrar a{
  justify-content: space-between;
  
  display: flex;
  flex-direction: row;
}

.menu-entrar a i{  
  margin-right: 5px;
}

.menu div a{  
  justify-content: center;
  align-items: center;
  align-self: center;
  
  height: 50px;
  text-align: center;
}

/* testando tooltip*/

.dica{
  margin: 30px;
  display: inline-block;
}

.dica:hover .dica-texto{
  visibility: visible;
}

.dica-texto{
  position: absolute;
}

.dica-texto::after{
  content: "";
  position: absolute;
  border-width: 5px;
  border-style: solid;
  border-color: #000 transparent transparent transparent;
}

@media(min-width: 700px){

  #menuLogin{
    display: none;
    width: 150px;
    background-color: red;
    color: blue;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    
  }
  

}

</style>
