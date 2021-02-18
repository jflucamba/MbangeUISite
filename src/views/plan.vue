<template>
  <div>      
           
    <b-container>

      <b-row>
        <b-col>
          <h2>
            Escolha o plano de acordo a sua preferência.
          </h2>
        </b-col>
      </b-row>
      
      <b-row>

        <b-col>
          
          <b-card-group deck>
              <b-card
                title="Cassai"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </b-card-text>

                <b-button href="#" variant="primary">Go somewhere</b-button>
              </b-card>

              
            </b-card-group>
          
        </b-col>

        <b-col>

          <b-card-group deck>
              

              <b-card
                title="Zambeze"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </b-card-text>

                <b-button href="#" variant="primary">Go somewhere</b-button>
              </b-card>

              
            </b-card-group>

        </b-col>

        <b-col>

          <b-card-group deck>
              

              <b-card
                title="Congo"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </b-card-text>

                <b-button href="#" variant="primary">Go somewhere</b-button>
              </b-card>

              
            </b-card-group>

        </b-col>


      </b-row>

    
    </b-container>   

  </div> 
</template>


<script>
//import axios from 'axios';
//import { response } from 'express';

//import plan from '../services/plans'
//import { response } from 'express';
export default {

 /* data(){
    return{
      plano: {
        name:'',
        description:'',
        price:''
      },
      planos: []
    }
  },
  
  mounted(){
    

    plan.listAll().then(
      (resposta) => {
        
        this.planos=resposta.data
        console.log(this.planos)
      })
      .catch(error => {
        console.log(error.resposta)
      });
  },
  methods:{
    salvar(){

      plan.salvar(this.plano).then(resposta => {
        alert("Salvo com sucesso!")
        console.log(resposta)
      })

    }
  }*/
    
    
}

</script>

<style scoped>

</style>