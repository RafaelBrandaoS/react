function OutraLista({ itens }) {
    return (
        <>
            <h3>Lista de itens:</h3>
            {itens.length > 0 ? (
                itens.map((itens, index) => (
                <p key={index}>{itens}</p> 
            ))) : (
                <p>não há itens na lista!</p>
            )}
        </>
    )
}


export default OutraLista