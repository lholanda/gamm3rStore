import { IconBrandWhatsapp } from '@tabler/icons-react';

export default function Contato() {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-2xl font-bold text-zinc-200 pb-2">Contato</span>
      <span className="text-sm">suporte@gam3r.store</span>
      <div className=" text-sm flex items-center gap-2 justify-center md:justify-start">
        <IconBrandWhatsapp size={20} className="text-green-500" />
        <span>WhatsApp</span>
      </div>
    </div>
  );
}
