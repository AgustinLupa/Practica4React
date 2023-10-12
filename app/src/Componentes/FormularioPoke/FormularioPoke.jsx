import React, { useState } from 'react';
import BaseButton from "../buttons/BaseButton";
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
          console.error(error.message);
        }
      };
    return (
        <div>       
            <form class="row row-cols-lg-auto g-3 align-items-center" onSubmit={(e)=> {
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
                    <button text={props.text} callback={handleBuscarPokemon} params={NombrePoke} type='submit' className="btn btn-primary button">Buscar pokemon</button>
                </div>
            </form>
            {pokeData && (
                <div>
                    <h2>Lista de Pokémon:</h2>
                <ul>
                    {
                                {
                                    //JSON.stringify(pokeData)
                                pokeData.data.abilities.map( (item) => {
                                    return (
                                        <>
                                            <li > +{item.ability.name}</li>
                                        </>
                                    )
                                })

                                }
                    }
                </ul>
                </div>
            )}
        </div>
    )
}

export default FormularioPoke;