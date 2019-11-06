/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */
import POTTER from './data/potter/potter.js';
import { showPotterCharacters } from './data.js';

console.log(POTTER);

document.querySelector('#insertPotterCharacter').innerHTML = showPotterCharacters(POTTER);

const filterSelection = document.querySelector('#filterSelection');
console.log(filterSelection);

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
  } else if (filterSelection.value == 'Estudiantes') {
    const filteredStudents = [...POTTER].filter(item => item.hogwartsStudent === true);
    console.log(filteredStudents);
    document.querySelector('#insertPotterCharacter').innerHTML = showPotterCharacters(filteredStudents);
  } else if (filterSelection.value == 'Profesores') {
    const filteredProfesors = [...POTTER].filter(item => item.hogwartsStaff === true);
    console.log(filteredProfesors);
    document.querySelector('#insertPotterCharacter').innerHTML = showPotterCharacters(filteredProfesors);
  } else if (filterSelection.value == 'Gryffindor') {
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
  }
});

const insertPotterCharacter = document.querySelector('#insertPotterCharacter');
const insertPotterOcupation = document.querySelector('#insertPotterOcupation');
const filteredStudentsMenu = document.querySelector('#subOption1');
console.log(filteredStudentsMenu);

filteredStudentsMenu.addEventListener('click', () => {
  insertPotterCharacter.classList.add('hide');
  insertPotterOcupation.classList.remove('hide');
  const filteredStudents = [...POTTER].filter(item => item.hogwartsStudent === true);
  console.log(filteredStudents);
  document.querySelector('#insertPotterOcupation').innerHTML = showPotterCharacters(filteredStudents);
});

const filteredProfesorMenu = document.querySelector('#subOption2');

filteredProfesorMenu.addEventListener('click', () => {
  insertPotterCharacter.classList.add('hide');
  insertPotterOcupation.classList.remove('hide');
  const filteredProfesors = [...POTTER].filter(item => item.hogwartsStaff === true);
  console.log(filteredProfesors);
  document.querySelector('#insertPotterOcupation').innerHTML = showPotterCharacters(filteredProfesors);
});
