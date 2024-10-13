'use client';
import { Produto } from '@/core';
import { useEffect, useState } from 'react';

const urlBase = 'http://localhost:3005';

export default function useProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  console.log('teste useProdutos()');

  async function obterProdutos(): Promise<Produto[]> {
    const resp = await fetch(`${urlBase}/produtos`);
    const produtos = await resp.json();
    return produtos ?? [];
  }

  async function obterProdutoPorId(id: number): Promise<Produto | null> {
    const resp = await fetch(`${urlBase}/produtos/${id}`);
    const produtos = await resp.json();
    return produtos ?? [];
  }

  //const obterProdutosPorId = obterProdutoPorId();


  useEffect(() => {
    obterProdutos().then(setProdutos);
  }, []);

  return {
    produtos, obterProdutoPorId
  };
}

/*
criamos no controler funcao que retorna lista de produtos
*/
