const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {

// 1. Test ruta GET /cafes status code 200 y el tipo de dato recibido es un arreglo con por lo menos 1 objeto.
it("GET /cafes devuelve un status code 200 y un arreglo con por lo menos 1 objeto", async () => {
    const response = await request(server).get("/cafes");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });

  // 2. Comprobar que se obtiene un código 404 al intentar eliminar un café con un id que no existe.
  it("DELETE /cafes/:id devuelve 404 si intentas eliminar un café con un id que no existe", async () => {
    const jwt = "Bearer tokenValido";
    const nonExistentId = 999;
    const response = await request(server)
      .delete(`/cafes/${nonExistentId}`)
      .set("Authorization", jwt);
    expect(response.statusCode).toBe(404);
  });

  // 3. Prueba que la ruta POST /cafes agrega un nuevo café y devuelve un código 201.
  it("POST /cafes agrega un nuevo café y devuelve un código 201", async () => {
    const newCafe = { id: 5, nombre: "Latte" };
    const response = await request(server).post("/cafes").send(newCafe);
    expect(response.statusCode).toBe(201);
    expect(response.body).toContainEqual(newCafe);
  });

  // 4. Prueba que la ruta PUT /cafes devuelve un status code 400 si intentas actualizar un café enviando un id en los parámetros que sea diferente al id dentro del payload.
  it("PUT /cafes/:id devuelve 400 si el id del parámetro es diferente al id en el payload", async () => {
    const cafeToUpdate = { id: 3, nombre: "Café Mocha" };
    const differentId = 4;
    const response = await request(server)
      .put(`/cafes/${differentId}`)
      .send(cafeToUpdate);
    expect(response.statusCode).toBe(400);
  });
});
