import {Usuario} from "./Usuario"

export function CardVideo () {
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }
    const titulo = "Título do vídeo";
    return (
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img src="https://picsum.photos/400/400?a=1 " alt="" />
            <h4>{titulo}</h4>
            <Usuario/>
        </div>
    )
}