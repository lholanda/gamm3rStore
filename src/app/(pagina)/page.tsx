'use client';
import ProdutoItem from '@/components/produto/ProdutoItem';
import { Produto } from '../../core/produto';

import useProdutos from '@/data/hooks/useProdutos';



// versao original acessando cor
//import produtos from "../core/constants/produtos";

export default function Inicio() {
  const { produtos } = useProdutos();

  console.log('page Home() call useProdutos()' + Array.isArray(produtos));


  const sizeProdutos = produtos.length;
  console.log('novo sizeProdutos', sizeProdutos); // dando 0

  const qtyExibir = sizeProdutos;
  //const produtosExibir = produtos.filter((x) => Number(x.id) <= qtyExibir);
  console.log('qtde a exibir 1', sizeProdutos); // dando 0

  return exibeProdutos(produtos, qtyExibir);
}

// exibe nada e depois exibe produtos..... sizeProdutos vem 0 depois vem com valor ?????

function exibeProdutos(produtos: Produto[], qtyExibir: number): any {
  console.log('qtde a exibir 2', qtyExibir);
  if (qtyExibir > 0) {
    return (
      <div className="grid grid-cols-4 gap-5 container">
        {produtos.map((produto) => (
          <ProdutoItem key={produto.id} produto={produto} />
        ))}
        {qtyExibir}
      </div>
    );
  } else {
    return 'nada';
  }
}
