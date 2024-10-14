'use client';
import { Produto } from '@/core';
import useProdutos from '@/data/hooks/useProdutos';
import { useEffect, useState } from 'react';

export default function PaginaProduto(props: any) {
  const { obterProdutoPorId } = useProdutos();
  const [produto, setProduto] = useState<Produto | null>(null)
  
  // se o props.params.id mudar , obtem outro valor no servidor
  useEffect(() => {
    obterProdutoPorId(+props.params.id).then(setProduto)
  }, [props.params.id, obterProdutoPorId])

  // se props.params.id mudar, vai pegar Produto no servidor

  return produto ? ( <div>{produto?.nome}</div> ) : ( <div>Produto não encontrado</div> );
}
