<template>
    <div id="menuMbange">

        

        <header>

          <div class="menu-logo">
            <div class="logo-menu">
              <img alt="Mbange" src="../static/LogoMbange.jpg">
            </div>
          </div>

          <div class="menu-principal">
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/province">Shopping</a></li>
                <li><a>Guia Turístico</a></li>
                
                <li><a>Contacto</a></li>
              </ul>
            </nav>
          </div>

          <div class="menu-user">
            <div class="menu-user">
              <div class="menu-user-entrar">
                <a href="/">
                  <i class="fas fa-user-tie"></i>
                  <div>Entrar</div>
                </a>
              </div>
              <div class="menu-user-cadastrar">
                <a href="/">
                  <i class="fas fa-user-edit"></i>
                  <div>Cadastrar</div>
                </a>
              </div>
            </div>
          </div>


        </header>

        
    </div>    
</template>

<script>
export default {
    name:'MenuMbange'
}
</script>


<style scoped>

/*#menuMbange{
    
}*/

.menu{
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2%;
}

header{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 9px 0;
  text-align: center;
  /*background: #069;*/
  background: #DB354D  ;
  z-index: 20;
  
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

.menu-logo,
.menu-user{
  display: none;
}




@media(min-width: 700px){
    
    header{
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      padding: 9px 0;
      text-align: center;
      /*background: #069;*/
      background: #DB354D  ;
        height: 50px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    header ul{
  float: right;
}

.menu-principal nav ul{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
}

.menu-logo,
.menu-user{
  display:flex
}


.logo-menu{
  float: left;
  padding-left: 0;
  margin-left: 0;
  justify-content: left;
  align-items: flex-start;
  margin-top: -9px;
}

.logo-menu img{
  width: 20%;
  height: 50px;
  float: left;
  
}


.menu-user{
  float: right;
  padding-right: 0;
  margin-right: 0;
  justify-content: center;
  align-items: center;
  
  height: 50px;
  display: flex;
  flex-direction: row;
  clear: both;
  margin-top: -6px;
}

.menu-user-entrar{
  justify-content: center;
  align-items: center;
  align-content: center;
  
  margin-right: 0px;
  
  background-color: #000000;
  padding: 0 5px;

}

.menu-user-entrar a{
  justify-content: space-between;
  
  display: flex;
  flex-direction: row;
}

.menu-user-cadastrar{
  background-color:#DB354D ;
  padding: 0 5px;
  
}


.menu-user-cadastrar a{
  justify-content: space-between;
  
  display: flex;
  flex-direction: row;
}

.menu-user-entrar a i{  
  margin-right: 5px;
}

.menu-user div a{  
  justify-content: center;
  align-items: center;
  align-self: center;
  
  height: 50px;
  text-align: center;
}
  



}


@media (min-width: 900px) {

  header{
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      padding: 9px 0;
      text-align: center;
      /*background: #069;*/
      background: #DB354D  ;
        height: 50px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    header ul{
  float: right;
}

.menu-logo,
.menu-user{
  display:flex
}


.logo-menu{
  float: left;
  padding-left: 0;
  margin-left: 0;
  justify-content: left;
  align-items: flex-start;
  margin-top: -9px;
}

.logo-menu img{
  width: 20%;
  height: 50px;
  float: left;
  
}


.menu-user{
  float: right;
  padding-right: 0;
  margin-right: 0;
  justify-content: center;
  align-items: center;
  
  height: 50px;
  display: flex;
  flex-direction: row;
  clear: both;
  margin-top: -6px;
}

.menu-user-entrar{
  justify-content: center;
  align-items: center;
  align-content: center;
  
  margin-right: 0px;
  
  background-color: #000000;
  padding: 0 5px;

}

.menu-user-entrar a{
  justify-content: space-between;
  
  display: flex;
  flex-direction: row;
}

.menu-user-cadastrar{
  background-color:#DB354D ;
  padding: 0 5px;
  
}


.menu-user-cadastrar a{
  justify-content: space-between;
  
  display: flex;
  flex-direction: row;
}

.menu-user-entrar a i{  
  margin-right: 5px;
}

.menu-user div a{  
  justify-content: center;
  align-items: center;
  align-self: center;
  
  height: 50px;
  text-align: center;
}

  
}

</style>
