// importamos la función `example`
import { filterHogwartsStudents, orderByNameAndGender } from '../src/data';

describe('orderByNameAndGender', () => {
  it('debería ser una función', () => {
    expect(typeof orderByNameAndGender).toBe('function');
  });

  it('es una función que ordena a los personajes por nombre en orden ascendente y descendente', () => {
    const input = [
      { name: 'Ron Weasley' },
      { name: 'Draco Malfoy' },
      { name: 'Minerva McGonagall' },
    ];
    const outputAsc = [
      { name: 'Draco Malfoy' },
      { name: 'Minerva McGonagall' },
      { name: 'Ron Weasley' },
    ];
    const outputDesc = [
      { name: 'Ron Weasley' },
      { name: 'Minerva McGonagall' },
      { name: 'Draco Malfoy' },
    ];
    expect(orderByNameAndGender(input, 'A-Z')).toEqual(outputAsc);
    expect(orderByNameAndGender(input, 'Z-A')).toEqual(outputDesc);
  });
});

describe('filterHogwartsStudents', () => {
  it('debería ser una función', () => {
    expect(typeof filterHogwartsStudents).toBe('function');
  });

  it('Es una funcion que filtra estudiantes', () => {
    const input = [
      {
        name: 'Ron Weasley',
        hogwartsStudent: true,
      },
      {
        name: 'Draco Malfoy',
        hogwartsStudent: true,
      },
      {
        name: 'Minerva McGonagall',
        hogwartsStudent: false,
      },
    ];
    const output = [
      {
        name: 'Ron Weasley',
        hogwartsStudent: true,
      },
      {
        name: 'Draco Malfoy',
        hogwartsStudent: true,
      },
    ];
    expect(filterHogwartsStudents(input)).toEqual(output);
  });
});
