import {
  generarCartaAleatoria,
  valorCarta,
  sumarPuntos,
  jugarCarta,
  rutaCarta,
  mensajeMePlanto,
} from "./motor";
import * as motor from "./motor";
import { vi } from "vitest";

describe(" valorCarta", () => {
  it("Deberia de devolver un numero cuyo valor es igual al valor del numeroAleatorio de entrada cuando este sea < a 7 ", () => {
    //ARANGE
    const numeroAleatorio = 6;
    //ACT
    const response = valorCarta(numeroAleatorio);

    //ASSERT
    expect(response).toBe(numeroAleatorio);
  });
});

it("Deberia de devolver un numero cuyo valor es igual a 0.5 cuando el numeroAleatorio es > 7 ", () => {
  //ARANGE
  const numeroAleatorio = 8;
  //ACT
  const response = valorCarta(numeroAleatorio);
  //ASSERT
  expect(response).toBe(0.5);
});

describe(" generarCartaAleatoria", () => {
  it("Deberia devolver un numero entero entre 8 y 12 cuando el numeroAleatoriocomo parametro de entrada es >7", () => {
    //ARANGE
    const numeroAleatorio = 8;
    //ACT
    const response = generarCartaAleatoria(numeroAleatorio);
    //ASSERT
    expect(response).toBe(10);
  });

  it("Deberia devolver un numero igual al numeroAleatoriointroducido como parametro, cuando este es <= 7", () => {
    //ARANGE
    const numeroAleatorio = 7;
    //ACT
    const response = generarCartaAleatoria(numeroAleatorio);
    //ASSERT
    expect(response).toBe(numeroAleatorio);
  });
});

describe("sumarPuntos", () => {
  it("Deberia devolver la suma de la puntuacion actual + numeroAleatorio", () => {
    //ARANGE
    const numeroAleatorio = 5;
    vi.spyOn(motor, "valorCarta").mockReturnValue(5);
    //ACT
    const response = sumarPuntos(numeroAleatorio);
    //ASSERT
    expect(response).toBe(numeroAleatorio);
  });
});

describe("jugarCarta", () => {
  it("Deberia devolver un objeto con el numero de carta y la puntuacion", () => {
    //ARANGE
    const numeroAleatorio = 5;
    vi.spyOn(motor, "generarCartaAleatoria").mockReturnValue(5);
    vi.spyOn(motor, "sumarPuntos").mockReturnValue(10);

    //ACT
    const response = jugarCarta(numeroAleatorio);

    //ASSERT
    expect(response).toEqual({
      numeroCarta: 5,
      puntuacion: 10,
    });
  });
});

describe("rutaCarta", () => {
  it("Deberia devolver la ruta de la imagen de la carta ", () => {
    //ARANGE
    const numeroCarta = 2;
    //ACT

    const response = rutaCarta(numeroCarta);
    //ASSERT

    expect(response).toBe("src/img/2_dos-copas.jpg");
  });
});

describe("mensajeMePlanto", () => {
  it("Deberia devolver un mensaje en funcion del valor de la puntuacion", () => {
    //ARANGE
    const puntuacion = 6;
    //ACT
    const response = mensajeMePlanto(puntuacion);
    //ASSERT
    expect(response).toBe("CASI CASI  EH!!!");
  });
});
