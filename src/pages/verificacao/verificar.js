function Verificar(nome, quantidade, preco) {
  // funçao para verificar se todos os items estao preenchidos antes de adicionar
  if (nome === "" && quantidade === 0 && preco <= 0) {
    window.alert(
      "Preencha todos os campos para adicionar um produto/item no estoque!"
    );
    return false;
    // exibe alertas de erro
  } else if (nome === "") {
    window.alert(
      'Preencha o "Nome do Item" para adicionar um produto/item no estoque!'
    );
    return false;
  } else if (quantidade === 0) {
    window.alert(
      'Preencha a "Quantidade" para adicionar um produto/item no estoque!'
    );
    return false;
  } else if (preco <= 0) {
    window.alert(
      'Preencha o campo "Preço" para adicionar um produto/item no estoque!'
    );
    return false;
  }
  return true;
}
export default Verificar;
