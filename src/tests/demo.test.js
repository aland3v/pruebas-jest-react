describe("Pruebas en el archivo demo.test.js", () => {
  test("Debe de ser true", () => {
    // 1. Inicialización
    const mensaje = "hola mundo";

    // 2. Estímulo
    const mensaje2 = `hola mundo`;

    // 3. Observar el comportamiento
    expect(mensaje).toBe(mensaje2); // ===
  });
});
