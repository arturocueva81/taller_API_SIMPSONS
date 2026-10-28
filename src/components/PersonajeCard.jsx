function PersonajeCard(props) {
    const { personaje } = props;
    const imagenUrl = `https://cdn.thesimpsonsapi.com/500${personaje.portrait_path}`;
    let estiloEstado = "badge badge-desconocido";

    if (personaje.status === "Alive") {
        estiloEstado = "badge badge-vivo";
    } else if (personaje.status === "Dead") {
        estiloEstado = "badge badge-muerto";
    }

    return (
        <div className="tarjeta">
            <img src={imagenUrl} alt={personaje.name} />
            <div className="tarjeta-info">
                <h3>{personaje.name}</h3>
                <p>{personaje.occupation}</p>
                <p>{personaje.age} años</p>
                <p>{personaje.gender}</p>
                <span className={estiloEstado}>{personaje.status}</span>
            </div>
        </div>
    );
}

export default PersonajeCard;