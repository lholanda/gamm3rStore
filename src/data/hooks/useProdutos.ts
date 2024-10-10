'use client';
import { Produto } from '@/core';
import { useEffect, useState } from 'react';

export default function useProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  console.log('teste useProdutos()')

  async function obterProdutos(): Promise<Produto[]> {
    const resp = await fetch('http://localhost:3005/produtos');
    const produtos = await resp.json();
    return produtos ?? [];
  }

  useEffect(() => {
    obterProdutos().then(setProdutos)
  }, []);

  return {
    produtos,
  };
}


/*
criamos no controler funcao que retorna lista de produtos
*/