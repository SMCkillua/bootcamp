import React from 'react';

const Linea_de_Personaje = ({ character }) => {
  return (
    <tr>
      <td className='name'>{character.name}</td>
      <td><img src={character.image} alt={character.name} /><img src={character.alterEgoImage} alt={`${character.name} alter ego`} /></td>
    </tr>
  );
};

export default Linea_de_Personaje;
