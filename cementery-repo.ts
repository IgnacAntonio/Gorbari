import {Human} from "./human-model";

export const HumansMap = new Map([
   [1, { firstName: 'John', lastName: 'Doe', yearOfBirth: 1990, yearOfDeath: 1995, isMale: true, placeOfBirth: 'Linz', placeOfDeath: 'Wien' }],
   [2, {  firstName: 'Jane', lastName: 'Smith', yearOfBirth: 1985, yearOfDeath: 2020, isMale: false, placeOfBirth: 'Vienna', placeOfDeath: 'Salzburg' }],
   [3, {  firstName: 'Michael', lastName: 'Johnson', yearOfBirth: 1978, yearOfDeath: 1999, isMale: true, placeOfBirth: 'Graz', placeOfDeath: 'Salzburg' }],
   [4, {  firstName: 'Emily', lastName: 'Williams', yearOfBirth: 2000, yearOfDeath: 2010, isMale: false, placeOfBirth: 'Innsbruck', placeOfDeath: 'Wien' }],
   [5, {  firstName: 'David', lastName: 'Brown', yearOfBirth: 1965, yearOfDeath: 2022, isMale: true, placeOfBirth: 'Salzburg', placeOfDeath: 'Graz' }]
]);

let nextId = Math.max(...HumansMap.keys())+1;

export function getAllHumans():Human[]{
   return [... HumansMap.values()];
}

export function getByName(lastName: string):Human | undefined | null{
      for (const [id, person] of HumansMap) {
         if (person.lastName === lastName) {
            return person;
         }
      }
      return null;
}

export function addPerson( firstName: string, lastName: string, isMale: boolean, yearOfBirth: number, yearOfDeath: number, placeOfBirth: string, placeOfDeath: string): Human {
    const newPerson: Human = {
        firstName,
        lastName,
        yearOfBirth,
        yearOfDeath,
        isMale,
        placeOfBirth,
        placeOfDeath
    };

    HumansMap.set(nextId, newPerson);
    return newPerson;
}
