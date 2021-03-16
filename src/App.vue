<template>
  <div id="app">

    <menu-login/>

    <div>
      <menu-mbange/>
    </div>

    <div>
      <router-view path="$router.key"/>
    </div>

    

    <div>
      <footer-mbange/>
    </div>    

  </div>
</template>

<script>
 import './styles/global.css';
 import MenuMbange from '@/components/MenuMbange.vue'
 import FooterMbange from '@/components/FooterMbange.vue'
 import MenuLogin from '@/components/MenuLogin.vue'
 
 
 
export default {
  name: 'App',
  components: {
    MenuMbange,
    FooterMbange,
    MenuLogin,
    
    
    
    
  }
}
</script>

<style>

#app{
  color: var(--color-text-title);
  display: flex;
  flex-direction: column;
}

/*.menu{
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
  
  background: #DB354D  ;
}

header li{
  display: inline-block;
  margin: 0 10px;
}

header a{
  text-decoration: none;
  color: white;
}

.conteudo{
  height: 2000px;
}

section.content{
  margin-top: 40px;
}*/

</style>
