import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carrousel from '../../components/Carousel'
import PageDefault from '../../components/PageDefault'

function Home() {
  return (
    <PageDefault >

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end?"}></BannerMain>

      <Carrousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carrousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carrousel
        category={dadosIniciais.categorias[2]}
      />

      <Carrousel
        category={dadosIniciais.categorias[3]}
      />

      <Carrousel
        category={dadosIniciais.categorias[4]}
      />

      <Carrousel
        category={dadosIniciais.categorias[5]}
      />
    </PageDefault>
  );
}

export default Home;