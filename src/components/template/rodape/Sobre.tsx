import Link from "next/link";

export default function Sobre() {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-2xl font-bold text-zinc-200 pb-2">Sobre</span>
      <span className="text-sm"><Link href={`/historia/`}>Nossa História</Link></span>
      <span className="text-sm">Política de Privacidade</span>
      <span className="text-sm">Termos de Uso</span>
    </div>
  );
}
