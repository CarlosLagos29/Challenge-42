import NonConstructible from './NonContructible';

describe('NonConstructible', () => {
  it('Debe devolver un numero', () => {
    expect(typeof NonConstructible()).toBe('number');
  });
  it('Si el array esta vacio devuelve 1', () => {
    expect(NonConstructible([])).toEqual(1);
  });
  it('El numero minimo que no se que es puede obtener es si no esta en el array 1 ', () => {
    expect(NonConstructible([2, 2, 3, 5, 8])).toEqual(1);
  });
  it('Debe de devolver el numero minimo que no se pueda obtener de la suma', () => {
    expect(NonConstructible([1, 2, 5])).toEqual(4);
    expect(NonConstructible([5, 7, 1, 1, 2, 3, 22])).toEqual(20);
    expect(NonConstructible([2, 2, 1, 3, 5, 8])).toEqual(22);
    expect(NonConstructible([3, 6, 8, 1, 10])).toEqual(2);
    expect(NonConstructible([2, 1, 9, 7, 4, 8])).toEqual(32);
    expect(NonConstructible([2, 1, 8, 6, 2])).toEqual(20);
  });
});
