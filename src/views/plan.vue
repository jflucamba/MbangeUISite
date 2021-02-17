<template>
  <div>      
           
    <b-container>

      <b-row>
        <b-col col sm = "12">
          <p>

            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, 
            but also the leap into electronic typesetting, 
            remaining essentially unchanged.

          </p>
        </b-col>
        
      </b-row>

      <b-row>

        <b-col col sm = "12">

          <b-card-group deck>
            
            <b-card bg-variant="secondary" text-variant="white" header="Secondary" class="text-center">
              <b-card-text>

                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
                making this the first true generator on the Internet. 
                It uses a dictionary of over 200 Latin words, 
                combined with a handful of model sentence structures, 
                to generate Lorem Ipsum which looks reasonable.

                <b-button href="#" variant="primary">Comprar plano</b-button>

              </b-card-text>
            </b-card>
            <b-card bg-variant="success" text-variant="white" header="Success" class="text-center">
              <b-card-text>

                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
                making this the first true generator on the Internet. 
                It uses a dictionary of over 200 Latin words, 
                combined with a handful of model sentence structures, 
                to generate Lorem Ipsum which looks reasonable.

                <b-button href="#" variant="primary">Comprar plano</b-button>

              </b-card-text>
            </b-card>
          </b-card-group>

        </b-col>
        
      </b-row>

      <div>
        
        <form @submit.prevent="salvar">
          <labe>Nome</labe>
          <input type="text" placeholder="Nome" v-model="plano.name"> <br>
          <labe>Descrição</labe>
          <input type="text" placeholder="Descrição" v-model="plano.description"> <br>
          <labe>Preço</labe>
          <input type="text" placeholder="Preço" v-model="plano.price"> <br>
          <button class="waves-effect eaves-light btn-small">
            Salvar
          </button>

        </form>
      </div>
      



    </b-container>   

  </div> 
</template>


<script>
//import axios from 'axios';
//import { response } from 'express';

import plan from '../services/plans'
//import { response } from 'express';
export default {

  data(){
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
  }
    
    
}

</script>

<style scoped>

</style>