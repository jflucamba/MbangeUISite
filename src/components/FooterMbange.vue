<template>
    <div id="footerMbange">

        <footer>

          <section class="footer-content">

            <div class="links-mbange">
              
              <h2>Mbange</h2>

              <div class="links-mbange-link">
                <a href="#">
                  App Mbange
                </a> <br>
                <a href="/shopping">
                  Shopping
                </a> <br>
                <a href="#">
                  Futuro
                </a> <br>
                <a href="#">
                  Whatsapp
                </a>
              </div>

            </div>

            <div class="sobre">

              <div>
                <h2>Sobre nós</h2>
              </div>

              <div class="texto-sobre">
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is 
                  reproduced below for those interested.
                </p>
              </div>              
              
            </div>

            <div class="conexoes">
              <div>
                <h2>Siga-nos</h2>
              </div>
              <div>
                <small>Sejamos sociais</small>
              </div>
              <div class="redes">
                <div>
                  <a href="#">
                    <i class="fab fa-facebook fa-2x"></i>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <i class="fab fa-youtube fa-2x"></i>
                  </a>
                </div> 
                <div>
                  <a href="#">
                    <i class="fab fa-instagram fa-2x"></i>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <i class="fab fa-whatsapp fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="links-mbange">
              
              <h2>Mbange</h2>

              <div class="links-mbange-link">

                <a href="#">
                  App Mbange
                </a> <br>
                <a href="/shopping">
                  Shopping
                </a> <br>
                <a href="#">
                  Futuro
                </a> <br>
                <a href="#">
                  Whatsapp
                </a>

              </div>
              
            </div>

          </section>
        
          <section  class = "linha-title" > 

            <div>            
              <hr>                        
            </div>

            <div>            
              <h2>
                Mbange
              </h2>                     
            </div>
            
          </section >

        </footer>          

        
    </div>    
</template>

<script>
export default {
    name:'MenuMbange'
}
</script>


<style scoped>

#footerMbange{
  background-color: #343a40;
  
  
}

footer{
  width: 100%;
  
}





footer section.footer-content{
  display: flex;
  flex-direction: column;
  
}

section{
  color: #777777;
}

footer h2,h3{
  color: #fff;
}


.links-mbange a{
  text-decoration: none;
  color: #777777;
}

.sobre{
  display: flex;
  flex-direction: column;
}

.sobre p{
  text-align: justify;
}

.conexoes{
  display: flex;
  flex-direction: column;
  margin: 5px 0;
}

.redes{
  display: flex;
  flex-direction: row;
  
  color: white;
}

.redes a{
  text-decoration: none;
  color: #fff;
  padding-right: 10px;
}

.redes a:hover{
  color: red;
}


/* RESPONSIVIDADDE */

@media(min-width: 700px){

  footer section.footer-content{
  display: flex;
  flex-direction: row;
  
}

.footer-content{
  margin-bottom: 10px;
  padding: 0 5px;
}

.links-mbange,
.sobre,
.conexoes{
  width: 25%;
  margin-top: 5px;
  
}



.sobre{
  margin-right: 10px;
}

.linha-title h2{
  text-align: center;
  margin-top: 5px;
  padding-bottom: 5px;
}

.links-mbange-link,
.texto-sobre{
  margin-top: 5px;
}

small{
  margin-top: 30px;
  font-weight: 500;
  
}

.redes{
  margin-top: 20px;
}

.sobre p{
  padding-right: 5px;
}



}

</style>
