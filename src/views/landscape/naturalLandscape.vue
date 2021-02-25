<template>
    <div id="naturalLandscape">
        <b-container>   

            <b-row>
                <b-col cols="3" id="imagem-capa">
                    
                    
                    <img src="../../static/Kalandula.jpg">
                        

                </b-col>

                <b-col cols="9">
                    <b-row>
                        <b-col cols="12">
                            <h4>Quedas de Calandula</h4>

                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </b-col>

                        <b-col cols="12">
                            <b-row id="imagem-galeria">

                                <b-col>
                                    <img src="../../static/Kalandula.jpg">
                                </b-col>

                                <b-col>
                                    <img src="../../static/Kalandula.jpg">
                                </b-col>

                                <b-col>
                                    <img src="../../static/Kalandula.jpg">
                                </b-col>

                            </b-row>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                    descrevendo qualquer coisa
                </b-col>
            </b-row>

        </b-container>
    </div>
</template>

<script>
export default {
    name:'naturalLandscape'
    
}
</script>

<style scoped>
#imagem-capa img{
    width: 100%;
    height: 100%;
}

#imagem-galeria img{
    width: 100%;
}


</style>