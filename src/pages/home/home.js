import "./home.css";
import Input from "../../components/input";
import Button from "../../components/button";
import Verificar from "../verificacao/verificar";
import React, { useState } from "react";
//aaaaa
function Home() {
  const [estoque, setEstoque] = useState([]);

  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [preco, setPreco] = useState(0);

  const adicionarProduto = (nome, quantidade, preco) => {
    const validar = Verificar(nome, quantidade, preco);

    if (validar) {
      const produto = { nome: nome, quantidade: quantidade, preco: preco };
      // altera o valor do estoque com o estoque antigo + o produto adicionado
      setEstoque([...estoque, produto]);
    }
  };
  return (
    <>
      <div className="App">
        <div>
          <h1 className="Text">Controle de Estoque</h1>
          <Input
            onChange={(value) => setNome(value)}
            placeholder={"Nome do produto"}
          />
          <Input
            onChange={(value) => setQuantidade(value)}
            placeholder={"Quantidade do produto"}
          />
          <Input
            onChange={(value) => setPreco(value)}
            placeholder={"Preço do produto"}
          />
        </div>
        <div className="Click">
          <Button
            name={"adicionar"}
            onClick={() => adicionarProduto(nome, quantidade, preco)}
          >
            Adicionar
          </Button>
        </div>
        <div className="Click">
          <Button>Remover</Button>
        </div>
      </div>
      <table className="Itens">
        <thead>
          <th className="Span"> Intem</th>
          <th className="Span"> Quantidade</th>
          <th className="Span"> Preço</th>
          <th className="Span"> Remover</th>
        </thead>

        {estoque?.map((produto) => (
          <tbody>
            <tr>
              <td className="Span">{produto.nome}</td>
              <td className="Span">{produto.quantidade} </td>
              <td className="Span">{produto.preco}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
}

export default Home;
