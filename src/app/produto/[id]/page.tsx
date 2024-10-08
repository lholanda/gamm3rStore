'use client';
import useProdutos from '@/data/hooks/useProdutos';

export default function PaginaProduto(props: any) {
  const { produtos } = useProdutos();

  const id = Number(props.params.id); // se colocar + na frente tambem converte
  const produto = produtos.find((p) => p.id === id);

  return produto ? (
    <div>{produto?.nome}</div>
  ) : (
    <div>Produto não encontrado</div>
  );
}
