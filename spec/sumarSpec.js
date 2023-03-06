let app = require("../sumar.js");
describe("Prueba", function () {
  it("Titulo", function () {
    let resultado = app.sumarNumeros(4, 9);
    expect(resultado).toBe(13);
  })
});

