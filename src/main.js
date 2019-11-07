/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */
import POTTER from './data/potter/potter.js';
import { showPotterCharacters } from './data.js';

document.querySelector('#insertPotterCharacter').innerHTML = showPotterCharacters(POTTER);

const filterSelection = document.querySelector('#filterSelection');

filterSelection.addEventListener('change', () => {
  if (filterSelection.value == 'A-Z') {
    const arrAsc = [...POTTER] //... operador que junta los elementos de un array en un nuevo array
    .map(item => item.name)
    .sort()
    .map(name => [...POTTER].find(it => it.name === name));
    console.log(arrAsc);
    document.querySelector('#insertPotterCharacter').innerHTML = showPotterCharacters(arrAsc);
  } else if (filterSelection.value == 'Z-A') {
    const arrDesc = [...POTTER].map(item => item.name)
      .sort().reverse()
      .map(name => [...POTTER].find(it => it.name === name));
    console.log(arrDesc);
    document.querySelector('#insertPotterCharacter').innerHTML = showPotterCharacters(arrDesc);
  } else if (filterSelection.value == 'Femenino') {
    const filteredFemale = [...POTTER].filter(item => item.gender === 'female');
    console.log(filteredFemale);
    document.querySelector('#insertPotterCharacter').innerHTML = showPotterCharacters(filteredFemale);
  } else if (filterSelection.value == 'Masculino') {
    const filteredMale = [...POTTER].filter(item => item.gender === 'male');
    console.log(filteredMale);
    document.querySelector('#insertPotterCharacter').innerHTML = showPotterCharacters(filteredMale);
  } /* else if (filterSelection.value == 'Gryffindor') {
    const filteredGryffindor =  [...POTTER].filter(item => item.house === 'Gryffindor');
    console.log(filteredGryffindor);
    document.querySelector('#insertPotterCharacter').innerHTML = showPotterCharacters(filteredGryffindor);
  } else if (filterSelection.value == 'Slytherin') {
    const filteredSlytherin = [...POTTER].filter(item => item.house === 'Slytherin');
    console.log(filteredSlytherin);
    document.querySelector('#insertPotterCharacter').innerHTML = showPotterCharacters(filteredSlytherin);
  } else if (filterSelection.value == 'Hufflepuff') {
    const filteredHufflepuff = [...POTTER].filter(item => item.house === 'Hufflepuff');
    console.log(filteredHufflepuff);
    document.querySelector('#insertPotterCharacter').innerHTML = showPotterCharacters(filteredHufflepuff);
  } else if (filterSelection.value == 'Ravenclaw') {
    const filteredRavenclaw = [...POTTER].filter(item => item.house === 'Ravenclaw');
    console.log(filteredRavenclaw);
    document.querySelector('#insertPotterCharacter').innerHTML = showPotterCharacters(filteredRavenclaw);
  } */
});

const filteredStudentsMenu = document.querySelector('#subOption1');
const filteredProfesorsMenu = document.querySelector('#subOption2');
const principalContainer = document.querySelector('#principalContainer');
const potterStudents = document.querySelector('#potterStudents');
const potterProfesors = document.querySelector('#potterProfesors');

filteredStudentsMenu.addEventListener('click', () => {
  principalContainer.classList.add('hide');
  potterStudents.classList.remove('hide');
  potterProfesors.classList.add('hide');
  const filteredStudents = [...POTTER].filter(item => item.hogwartsStudent === true);
  console.log(filteredStudents);
  document.querySelector('#insertPotterStudents').innerHTML = showPotterCharacters(filteredStudents);
});

filteredProfesorsMenu.addEventListener('click', () => {
  principalContainer.classList.add('hide');
  potterStudents.classList.add('hide');
  potterProfesors.classList.remove('hide');

  const filteredProfesors = [...POTTER].filter(item => item.hogwartsStaff === true);
  console.log(filteredProfesors);
  document.querySelector('#insertPotterProfesors').innerHTML = showPotterCharacters(filteredProfesors);
});
