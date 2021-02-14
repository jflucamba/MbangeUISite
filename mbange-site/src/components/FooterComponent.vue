<template>  
  <div id="footer-master">       

      <footer>
        
        <b-container  class = "bv-example-row" > 
          
          <b-row >

            <b-col col sm = "3" id="mbange" >

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

            <b-col col sm = "3" id="sobre-nos">

              <h3>Sobre nós</h3>

              <p>
                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
              </p>

            </b-col > 
            
            <b-col col sm = "3" > 
            
              <h3>Conexões</h3>

              <b-row> 

              <b-col>
                  
                <i class="fab fa-facebook fa-2x"></i>

              </b-col>


              <b-col>
                  
                  
                <i class="fab fa-youtube fa-2x"></i>

              </b-col> 


              <b-col >
                  
                
                <i class="fab fa-instagram fa-2x"></i>

              </b-col> 


              <b-col>                  
                
                <i class="fab fa-whatsapp fa-2x"></i>

              </b-col>

        </b-row>

              

               
            
            </b-col >


            <b-col col sm = "3" >

              <h3>Newsletter</h3>

              <span>                
                Fique atualizado com nossas últimas notícias
              </span>

            </b-col >
             
          </b-row >

          <b-row>
            <b-col col sm = "12" >
              <hr>
            </b-col>
            
          </b-row>

          <b-row id="footer-mbange" class="">
            <b-col col sm = "12" > Conteúdo de largura variável </b-col >

            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil 
              impedit quo minus id quod maxime placeat facere possimus, 
              omnis voluptas assumenda est, omnis dolor repellendus. 
              Temporibus autem quibusdam et aut officiis debitis aut 
              rerum necessitatibus saepe eveniet ut et voluptates 
              repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, 
              ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
            </p>

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
    background-color: black;
    color: white;
    
  }

  hr{
    background-color: yellow;
  }

  #footer-mbange{
    text-align: center;
    color: white;
  }

  #footer-master ul {
    list-style-type: none;
  }

  #footer-master ul li{
    
    text-align: left;
  }

  #footer-master ul li a{
    text-decoration: none;
    color: white;
    
  }


#mbange{
  color: red;
}



#sobre-nos{
  text-align: justify;
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
