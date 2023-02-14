function Evento({ numero }) {

    function meuEvento() {
        console.log(`evento ${numero} disparado!`)
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento} >ATIVAR!</button>
        </div>
    )
}

export default Evento