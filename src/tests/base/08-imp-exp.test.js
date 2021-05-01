import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de heroes", () => {
  test("Debe retornar un heroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test("Debe retornar undefined sí Héroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("Debe retornar un arreglo con los héroes de DC", () => {
    const owner = "DC";
    const heroesDC = getHeroesByOwner(owner);

    const heroesDCData = heroes.filter((heroe) => heroe.owner === owner);

    expect(heroesDC).toEqual(heroesDCData);
  });

  test("Debe retornar un arreglo con los héroes de Marvel", () => {
    const owner = "Marvel";
    const heroesDC = getHeroesByOwner(owner);

    expect(heroesDC.length).toBe(2);
  });
});
