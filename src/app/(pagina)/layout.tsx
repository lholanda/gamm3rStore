import Pagina from "@/components/template/Pagina";

export default function Layout(props: any){
    return (
        <Pagina semCabecalho = {false} semRodape = {false}>
            {props.children}
        </Pagina>
    )
}