import { Produto } from "@/core";
import Image from "next/image";
import Link from "next/link";

export interface ProdutoItemProps {
  produto: Produto;
}

// componente funcional
export default function ProdutoItem(props: ProdutoItemProps) {
  const { produto } = props;
  return (
    <Link
      href={`/produto/${produto.id}`}
      className="flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px]"
    >
      <div className="h-48 w-full relative">
        <Image
          className="object-contain"
          src={produto.imagem}
          fill
          alt="Imagem do produto"
        />
      </div>
      <div className="flex-1 flex flex-col p-5 gap-3 border-t border-white/10 ">
        <span className="text-lg font-semibold">{produto.nome}</span>    
        <span className="text-sm border-b border-dashed self-start">
          {produto.especificacoes.destaque}
        </span>
        <div className="flex-1"></div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400 line-through">de {produto.precoBase} </span>
          <span className="text-xl font-semibold text-emerald-400">por {produto.precoPromocional} </span>
        </div>
        <button className='text-sm'>
          <span>Adicionar</span>
        </button>
      </div>
    </Link>
  );
}
