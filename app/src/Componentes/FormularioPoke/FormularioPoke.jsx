import React, { useState } from 'react';
import { BuscarPoke } from '../../Servicios/BuscarPoke';
  

const FormularioPoke = (props)=>{

    const [NombrePoke, setNombrePoke]= useState('');
    const [pokeData, setPokeData] = useState(false);

    const handleInputChange = (event) => {
        setNombrePoke(event.target.value);
        console.log(NombrePoke);
      };
    
      const handleBuscarPokemon = async (nombrePoke) => {
        try {
          setPokeData(false);
          const data = await BuscarPoke(nombrePoke);
          setPokeData(data);
          console.log(data);
        } catch (error) {
          console.log(error.message);
        }
      };
    return (
        <div>       
            <form class="row row-cols-lg-auto g-3 offset-4" onSubmit={(e)=> {
            e.preventDefault();
            handleBuscarPokemon(NombrePoke);        
            }}>
                <div class="col-12">
                    <label class="visually-hidden" for="inlineFormInputGroupUsername">Pokemon</label>
                    <div class="input-group">                
                        <input type="text" value={NombrePoke} onChange={handleInputChange} class="form-control" id="inlineFormInputGroupUsername" placeholder="Pokemon"/>
                    </div>
                </div>
                <div class="col-12">
                    <button text={props.text} type='submit' className="btn btn-primary button">Buscar pokemon</button>
                </div>
            </form>
            {pokeData && (                                
                <div className='row'>
                    <div className='col-sm-6 mb-3 mb-sm-0 offset-3' >
                    <br />
                        <div class="card" >
                            <span>
                                <img src={pokeData.sprites.front_default} class="card-img-top img-thumbnail w-25 h-25" alt={pokeData.forms[0].name}/>
                            </span>
                            
                            <div class="card-body">
                                <h5 class="card-title">Nombre: {pokeData.forms[0].name}</h5>
                                <p class="card-text">
                                    <h6 class="card-subtitle mb-2 text-body-secondary">Experiencia base</h6>
                                        <p class="card-text">{pokeData.base_experience}</p>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">Altura</h6>
                                        <p class="card-text">{pokeData.height}</p>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">Estadísticas</h6>
                                    <span>                                  
                                        <ul class="list-group"> 
                                            {pokeData.stats.map((stat, index) => (
                                            <li className='list-group-item' key={index}>
                                                <strong>{stat.stat.name}:</strong> {stat.base_stat}
                                            </li>
                                            ))}
                                        </ul>
                                    </span>  
                                    <br />
                                    <h6 class="card-subtitle mb-2 text-body-secondary">Tipo:</h6>
                                    <p class="card-text">{pokeData.types[0].type.name}</p>

                                    <h6 class="card-subtitle mb-2 text-body-secondary">Peso:</h6>
                                    <p class="card-text">{pokeData.weight} lb</p>
                                </p>                                
                            </div>
                        </div>                       
                    </div>
                </div>
            )}
        </div>
    )
}

export default FormularioPoke;