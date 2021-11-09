module.exports = {
  createUrlSemiNovos(url, params) {
    const {
      brand,
      model,
      initialYear,
      finalYear,
      initialPrice,
      finalPrice,
      page
    } = params;

    return `${url}/carro/${brand}/${model}/ano-${initialYear}-${finalYear}/preco-${initialPrice}-${finalPrice}?page=${page}&ajax`;
  },

  createUrlAuto(url, params) {
    const {
      brand,
      model,
      initialYear,
      finalYear,
      initialPrice,
      finalPrice,
      page
    } = params;

    return `${url}/comprar/carros/novos-seminovos-usados/todos-os-estados/todas-as-cidades/${brand}/todos-os-modelos/todas-as-versoes/ano-${initialYear}:${finalYear}/todas-as-cores/preco-${initialPrice}:${finalPrice}/?page=${page}`;
    //https://busca.autoline.com.br/comprar/carros/novos-seminovos-usados/todos-os-estados/todas-as-cidades/fiat/argo/todas-as-versoes/ano-2000:2022/todas-as-cores/preco-4900:100000/?
  }
};
