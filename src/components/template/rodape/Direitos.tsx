

export default function Direitos() {
return (
    <div className="flex flex-col md:flex-row items-center gap-1.5 text-sm text-zinc-500">
        <div className="flex gap-1.5">
            <span>Feito com</span>
            <span>❤️</span>
            <span>em {new Date().getFullYear()}</span>
        </div>
        <span className="hidden md:inline-block">-</span>
        <span>Todos os direitos reservados</span>
    </div>
   )
}