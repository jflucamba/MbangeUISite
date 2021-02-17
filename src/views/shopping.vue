<template>

  <div>

    <b-container>

        <div>
          <b-card-group deck>

            

            <b-card bg-variant="primary" text-variant="white" header="Luanda" class="text-center" >
              <b-link href="/shoppingCounty">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>        
              </b-link>            
            </b-card>
            
            
            <b-card to="/shoppingCounty" bg-variant="secondary" text-variant="white" header="Benguela" class="text-center">
              <b-link href="#foo">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
              </b-link>
            </b-card>
              

            <a href="/shoppingCounty">
              <b-card bg-variant="success" text-variant="white" header="Malanje" class="text-center">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
              </b-card>
            </a>
            
          </b-card-group>
        </div>


        <div class="mt-3">
          <b-card-group deck>

            <a href="/shoppingCounty">
              <b-card bg-variant="info" text-variant="white" header="Huíla" class="text-center">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
              </b-card>
            </a>

            <a href="/shoppingCounty">
              <b-card bg-variant="warning" text-variant="white" header="Namibe" class="text-center">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
              </b-card>
            </a>

            <a href="/shoppingCounty">
              <b-card bg-variant="danger" text-variant="white" header="Huambo" class="text-center">
                <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
              </b-card>
            </a>

          </b-card-group>
        </div>
        
      <div class="mt-3">
        <b-card-group deck>
          <b-card bg-variant="light" header="Lunda-Norte" class="text-center">
            /shoppingCounty
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

          <b-card bg-variant="dark" header="Lunda-Sul" text-variant="white" class="text-center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

          <b-card header="Bengo" class="text-center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>

        </b-card-group>
      </div>

    </b-container>
        
  </div>

</template>


<script>
export default {
    
}
</script>

<style scoped>

</style>