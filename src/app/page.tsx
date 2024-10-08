//import Image from "next/image";

import ProdutoItem from "@/components/produto/ProdutoItem";
import { produtos } from "@/core";

export default function Home() {
  // exemplos de manunipulacao de arrays
  const [primeiroProduto] = produtos;
  //const [,segundoProduto] = produtos
  console.log(primeiroProduto.especificacoes);

  const val: string[] = ["Cozinhar", "Praticar"];
  console.log(val);

  // produto = valor que eu tenho que definir na interface lá em ProdutoItem

  return (
    <div className="grid grid-cols-4 gap-5">
      {produtos.map((produto) => (
        <ProdutoItem key={produto.id} produto={produto} />
      ))}
    </div>
  );
}
