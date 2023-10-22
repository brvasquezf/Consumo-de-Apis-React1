
const Buscador = ({ data = [], dataFilter = [], setDataFilter }) => {

    const handleSearch = (e) => {
        e.preventDefault()
        const dataFilter = data.filter((item) =>
            item.pokemon_species.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setDataFilter(dataFilter);
    };

    const sortAlphabetic = (sorting = "asc") => {
        if (sorting === "asc") {
            setDataFilter([...dataFilter.sort((a, b) => {
                return a.pokemon_species.name.localeCompare(b.pokemon_species.name)
            })]);
        } else if (sorting === "desc") {
            setDataFilter([...dataFilter.sort((a, b) => {
                return b.pokemon_species.name.localeCompare(a.pokemon_species.name)
            })]);
        }
    }
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid navbar-box">
                    <div className="col-auto">
                        <a className="navbar-brand">Encuentra a tu Pokemon!</a>
                    </div>
                    <div className="col">
                        <input className="form-control me-2" type="search" placeholder="Ingresa un Pokemon"
                            onChange={(e) => { handleSearch(e) }}
                        />
                    </div>
                    <div className="col-auto">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Ordena la lista
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" onClick={() => sortAlphabetic("asc")} >Ordenar A - Z</a></li>
                                <li><a className="dropdown-item" onClick={() => sortAlphabetic("desc")} >Ordenar Z - A</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Buscador

