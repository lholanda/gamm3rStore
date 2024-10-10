'use client'
import ProdutoItem from "@/components/produto/ProdutoItem";
import useProdutos from "@/data/hooks/useProdutos";

export default function Home() {

  const { produtos } =  useProdutos();

  console.log('teste Home()')
  
  // produto = valor que eu tenho que definir na interface lá em ProdutoItem
  return (
    <div className="grid grid-cols-4 gap-5 container">
      {produtos.map((produto) => (
        <ProdutoItem key={produto.id} produto={produto} />
      ))}
    </div>
  );
}
