<template>
  <div id="">
  <b-navbar toggleable="lg" type="" variant="light">
    <b-navbar-brand id="logo" to="/">
      <img src="../static/LogoMbange.jpg">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        
        <b-navbar-nav id="nav-color">
        <b-nav-item class="active" to="/">Home</b-nav-item>
        <b-nav-item class="active" to="/province">Shopping</b-nav-item>
        <b-nav-item class="active" to="/leisureSpace">Guia Turístico</b-nav-item>
        <!--b-nav-item class="active" to="/plan">Planos</!--b-nav-item-->
        <b-nav-item class="active" to="/contact">Contacto</b-nav-item>
        
      </b-navbar-nav>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'NavBarComponent'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#menu-principal{
  /*background: blue;*/
  color: black;
}

#nav-collapse:hover:link{
  color: red !important;
}

.b-nav-item{
  color: red;
}


  #logo{
    color: red;
  }

  .menu-click{
    color: green;
  }

  .navbar-nav ul li a{
    color: black;
  }

  .navbar-nav ul li a:hover, .navbar-nav ul li a:active{
    color: red;
  }

  

  .navbar-nav ul li a:active{
    color: red;
  }

.nav-color:hover{
  color: orange;
}

  #logo img{
    width: 100px;
    height: 70px;
  }

  /* placeholder */
::-webkit-input-placeholder  {
  color: #bebcbc; 
  font-style: italic;
}
 
input:-moz-placeholder,
textarea:-moz-placeholder{
  color: #bebcbc;
  font-style: italic;
}


</style>
