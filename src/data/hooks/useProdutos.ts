'use client'
import { Produto } from '@/core';
import { useCallback, useEffect, useState } from 'react';

const urlBase = 'http://localhost:3005';

export default function useProdutos() {
  // aqui retorna um array 
  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function obterProdutos(): Promise<Produto[]> {
    const resp = await fetch(`${urlBase}/produtos`);
    const produtos = await resp.json();
    return produtos ?? [];
  }

  // const obterProdutoPorId = useCallback( por que esta funcao é exportada
  // aqui retorna um array 
  const obterProdutoPorId = useCallback(async function obterProdutoPorId(id: number): Promise<Produto | null> {
    const resp = await fetch(`${urlBase}/produtos/${id}`);
    const produto = await resp.json();  
    return produto ?? null;
  },[]);

  //const obterProdutosPorId = obterProdutoPorId();

  useEffect(() => {
    obterProdutos().then(setProdutos);
  }, []);

  return {
    produtos, obterProdutoPorId,
  };
}

/*
criamos no controler funcao que retorna lista de produtos
*/
