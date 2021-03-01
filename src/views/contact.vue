<template>
   <div id="contact">

    <b-container  class = "bv-example-row" > 

        <b-row class="mt-4">
          <b-col col sm = "12" >
            
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31532.472609365024!2d13.173665169214686!3d-8.920517640147363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f53b60545d67%3A0xed624daf9afdcf09!2sTalatona!5e0!3m2!1spt-PT!2sao!4v1612810202677!5m2!1spt-PT!2sao" 
                width="100%" 
                height="350" 
                frameborder="0" 
                style="border:0;" 
                allowfullscreen="" 
                aria-hidden="false" 
                tabindex="0">
              </iframe>

          </b-col>
          
        </b-row>

        <hr>

        <b-row> 

            <b-col id="contacto-detalhes">
                  
                <b-row > 
                    <b-col cols = "12" > 
                    
                        <b-row > 
                            <b-col cols = "1" > 
                                <i class="fas fa-house-user fa-lg"></i>
                            </b-col >
                            <b-col cols = "11" >
                                <span>Luanda, Angola</span> <br>
                                <span>Mbange</span>
                            </b-col >                 
                        </b-row > 
    
                    </b-col >                 
                </b-row > 

                <b-row class="mt-3"> 
                    <b-col  cols = "12"  >

                        <b-row > 
                            <b-col cols = "1" > 
                                <i class="fas fa-phone-volume fa-lg"></i>
                            </b-col >
                            <b-col cols = "11" >
                                <span>+ (244) 923923923</span> <br>
                                <span>
                                    De segunda a sexta, das 9h às 18h
                                </span>
                            </b-col >                 
                        </b-row >

                    </b-col >
                </b-row >

                <b-row  class="mt-3">
                    <b-col  cols = "12" >
                    
                        <b-row > 
                            <b-col cols = "1" > 
                                <i class="fas fa-envelope fa-lg"></i>
                            </b-col >
                            <b-col cols = "11" class="contact-text" >
                                <span>mbange.support@mbange.com.ao</span> <br>
                                <span>
                                    Envie-nos a sua consulta!
                                </span>
                            </b-col >                 
                        </b-row >

                    </b-col > 
                </b-row >

            </b-col>

            <b-col>
                  
                <b-row >
                
                    <b-col cols = "12" > 
                    
                        <b-row>
                            <b-form-input id="input-small"  placeholder="Nome"></b-form-input>
                        </b-row>
    
                        <b-row class="mt-3">
                            <b-form-input id="input-small"  placeholder="Email"></b-form-input>
                        </b-row>
    
                        <b-row class="mt-3">
                            <b-form-input id="input-small"  placeholder="Assunto"></b-form-input>
                        </b-row>                              
    
                    </b-col >
                                  
                </b-row >

                
            </b-col> 

            <b-col >
                  
                <b-row class="">
                
                    <b-form-textarea
                      id="textarea-small"
                      size="sm"
                      rows="6"                      
                      placeholder="Mensagem"
                    ></b-form-textarea>
                </b-row>

            </b-col> 
              
        </b-row>

        <b-row class="mt-3">
            <b-col cols="12">
                <b-button id="contact-button">
                    Enviar
                </b-button>
            </b-col>
        </b-row>

        <hr>

        <!--b-row>
            <b-col>
                <owl-carousel-component/>
            </b-col>
        </!--b-row-->
       
       

    </b-container >

   </div> 
</template>


<script>
    import OwlCarouselComponent from '../components/OwlCarouselComponent'
    export default {
        name: 'Contact',
        components: {
          OwlCarouselComponent
        }

    }
</script>

<style scoped>

#btn-div{
    background: yellowgreen;
}

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
width: 370px;
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
width: 370px;
height: 120px;
line-height: 20px;
}

#contacto-detalhes{
    color:red;
    font-size: small;
}

#contacto-detalhes span{
    color:blue;
}

.contact-text{
    margin-right: -20px;
}

i.fa {
color:#cccccc;
}

#contact-button{
    float: right;
    background: #FF7F50;
    color: E0FFFF;
}

#contact-button-col{
    align-items: flex-end;
}

</style>