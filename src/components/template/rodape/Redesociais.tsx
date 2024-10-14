import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandYoutube,
} from '@tabler/icons-react'

export default function RedesSociais() {
    return (
        <div className="flex gap-2 ">
            <IconBrandYoutube size={28} stroke={1} />
            <IconBrandInstagram size={28} stroke={1} />
            <IconBrandFacebook size={28} stroke={1} />
            <IconBrandLinkedin size={28} stroke={1} />
        </div> 
    )
}