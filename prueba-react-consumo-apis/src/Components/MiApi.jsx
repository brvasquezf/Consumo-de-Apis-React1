import { useEffect, useState } from 'react';
import Buscador from './Buscador';

const MiApi = () => {

    const [data, setData] = useState([]);
    const [dataFilter, setDataFilter] = useState([]);

    useEffect(() => { dataBase(); }, []);

    const dataBase = async () => {
        const url = "https://pokeapi.co/api/v2/pokedex/2/"
        const res = await fetch(url)
        const info = await res.json();
        setData(info.pokemon_entries);
        setDataFilter(info.pokemon_entries);
    }

    return (
        <div className='container'>
                <Buscador data={data} dataFilter={dataFilter} setDataFilter={setDataFilter} />
            <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4'>
                {dataFilter.map((pokemon, index) => {
                    return (
                        <div className="container text-center" key={`${index}-pokemon`} style={{ width: '18rem' }}>
                            <div className='col m-3 text-bg-danger bg-opacity-50 border border-4 border-dange box-card'>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/${pokemon.entry_number}.png`} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title border-bottom border-danger text-capitalize p-3">{pokemon.pokemon_species.name}</h5>
                                    <p className="card-text">{pokemon.entry_number}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default MiApi