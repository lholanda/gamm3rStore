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
    <div className="flex gap-5 flex-wrap">
      {produtos.map((value, index) => (
        <ProdutoItem key={index} produto={value} />
      ))}
    </div>
  );
}
