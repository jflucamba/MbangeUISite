<template>  
  <div id="footer-master">       

      <footer>
        
        <b-container  class = "bv-example-row" > 
          
          <b-row >

            <b-col col sm = "3" >

              <h3>Mbange</h3>

              <ul >
                <li>
                  <a href="#">
                    App Mbnage
                  </a>
                </li>

                <li>
                  <a href="#">
                    Shopping
                  </a>
                </li>

                <li>
                  <a href="#">
                    Futuro
                  </a>
                </li>

                <li>
                  <a href="#">
                    Whatsapp
                  </a>
                </li>

              </ul>
            
            </b-col > 

            <b-col col sm = "3">

              <h3>Nossos parceiros</h3>

              <ul>
                <li>
                  <a href="#">
                    DJ-Soft
                  </a>
                </li>

                <li>
                  <a href="#">
                    Cinemax
                  </a>
                </li>

                <li>
                  <a href="#">
                    Banco Sol
                  </a>
                </li>

                <li>
                  <a href="#">
                    ITA
                  </a>
                </li>

              </ul>

            </b-col > 
            
            <b-col col sm = "3" > 
            
              <h3>Conexções</h3>

              <ul>
                <li>
                  <a href="#">
                    Facebook
                  </a>
                </li>

                <li>
                  <a href="#">
                    YouTube
                  </a>
                </li>

                <li>
                  <a href="#">
                    Instagram
                  </a>
                </li>

                <li>
                  <a href="#">
                    Whatsapp
                  </a>
                </li>

              </ul>  
            
            </b-col >


            <b-col col sm = "3" >

              <h3>Localização</h3>

              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31532.472609365024!2d13.173665169214686!3d-8.920517640147363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f53b60545d67%3A0xed624daf9afdcf09!2sTalatona!5e0!3m2!1spt-PT!2sao!4v1612810202677!5m2!1spt-PT!2sao" width="150" height="100" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

            </b-col >
             
          </b-row >

          <b-row>
            <b-col col sm = "12" >
              <hr>
            </b-col>
            
          </b-row>

          <b-row id="footer-mbange" class="">
            <b-col col sm = "12" > Conteúdo de largura variável </b-col >
          </b-row>

        </b-container >

      </footer>
    
  </div>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #footer-master{
    background-color: slategrey;
    color: white;
    
  }

  hr{
    background-color: yellow;
  }

  #footer-mbange{
    text-align: center;
    color: yellow;
  }

  #footer-master ul {
    list-style-type: none;
    text-align: left;
  }

  #footer-master ul li a{
    text-decoration: none;
    color: white;
    text-align: left;
  }

 

  /*footer {
    position: absolute;
    bottom: 0;
    background-color: blue;
    color: #FFF;
    width: 100%;
    height: 100px;    
    text-align: center;
    line-height: 100px;
}*/
</style>
