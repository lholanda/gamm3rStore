import {
    IconBrandWhatsapp,
} from '@tabler/icons-react'
import Logo from '../shared/Logo'
import RedesSociais from './rodape/Redesociais'
import Direitos from './rodape/Direitos'
import Contato from './rodape/Contato'
import Sobre from './rodape/Sobre'

export default function Rodape() {
    return (
        <footer className="flex flex-col bg-black/30 text-zinc-400 mt-10">
            <div className="h-px bg-gradient-to-r from-violet-600/20 via-violet-600/80 to-violet-600/20"></div>
            <div className="container flex flex-col py-10 gap-10">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left gap-5 md:gap-0">
                    <Logo />
                    <Sobre/>
                    <Contato/>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-1.5 justify-between">
                    <RedesSociais/>
                    <Direitos/>
                </div>
            </div>
            
        </footer>
    )
}
