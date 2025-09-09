import { setPuntuacion } from "./modelo";
import { actualizarMensaje, gameOver } from "./ui";

describe("Comprobar si GAMEoVER () muestra el mensaje cuando un jugador ha ganado o no", () => {
  it("Debería mostrar 'HAS GANADO !!!!!  - GAME OVER' cuando la puntuación es 7.5", () => {
    // ARRANGE

    const puntuacion = 7.5;
    const texto = `HAS GANADO !!!!!  - GAME OVER`;

    const mensaje = document.getElementById("mensaje-despues-tiros");

    // ACT
    setPuntuacion(puntuacion);
    actualizarMensaje(texto);
    gameOver();

    // ASSERT
    expect(mensaje?.textContent).toBe(texto);
  });
});
