<template>
    <div id="box">

        <ul class="estilizacao">
            <li>
                <img src="../static/hotal_capa.jpg" alt="">
                <div class="conteudo">
                    <p class="nome-secao">Mbange</p>
                    <p class="descricao">O seu shopping movel</p>
                    <a href="" class="btn-more">Ver mais</a>
                </div>
            </li>
            <li>
                <img src="../static/ViajarAgora.jpg" alt="">
                <div class="conteudo">
                    <p class="nome-secao">Hoteis</p>
                    <p class="descricao">Faça sua reserva nos melhores hoteis do mundo</p>
                    <a href="" class="btn-more">Ver mais</a>
                </div>
            </li>
            <li>
                <img src="../static/hotal_capa.jpg" alt="">
                <div class="conteudo">
                    <p class="nome-secao">Paisagens</p>
                    <p class="descricao">Desfrute do maior potencial, apreciando a natureza</p>
                    <a href="" class="btn-more">Ver mais</a>
                </div>
            </li>
            <li>
                <img src="../static/ViajarAgora.jpg" alt="">
                <div class="conteudo">
                    <p class="nome-secao">Nosso rio</p>
                    <p class="descricao">O maior rio de África</p>
                    <a href="" class="btn-more">Ver mais</a>
                </div>
            </li>
            
        </ul>

    </div>
</template>

<script>
export default {
    name: 'CarrosselTesteComponent'
}
</script>


<style scoped>
.titulo{
    display: block;
    width: 100%;
    text-align: center;
    color: #b3b9bf;
    font-size: 30px;
    margin: 25px 0;
}

#box{
    width: 880px;
    height: auto;
    margin: 15px auto;
    display: block;
    margin-bottom: 50px;
}

#box:after{
    display: block;
    content: '.';
    line-height: 0;
    visibility: hidden;
}


.estilizacao{
    display: block;
    widows: 880px;
    list-style: none;
}

.estilizacao li{
    position: relative;
    display: block;
    float: left;
    width: 400px;
    
    margin: 20px;
    cursor: pointer;
}

.estilizacao li img{
    width: 100%;
    height: 100%;
    display: block;
    z-index: 999;
    position: absolute;
    transition: .5s;
}

.estilizacao li a{
    color: #fff;
}

.conteudo{
    display: block;
    width: 100%;
    height: 110px;
    background: #202633;
    overflow: hidden;
    color: #fff;
    margin-top: 220px;
}

.estilizacao li:hover img{
    margin-top: -80px;
}

.conteudo p{
    display: block;
    color: #fff;
    position: relative;
    float: left;
    width: 250px;
    margin: 10px;
    margin-bottom: 0;
    font-family: 'Lato', sans-serif;
    text-indent: 10px;
}

.btn-more{
    display: block;
    text-decoration: none;
    color: #fff;
    position: relative;
    float: right;
    padding: 3px 10px;
    background: #AE2341;
    border-radius: 4px;
    margin: 10px;
}

.nome-secao{
    font-size: 18px;
}

.descricao{
    font-size: 14px;
}

</style>