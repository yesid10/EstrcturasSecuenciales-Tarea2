/*Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero.
 Para cada pedido tiene que proporcionar las medidas de la tela en pulgadas,
  pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, 
determinando cuántas pulgadas debe pedir con base en los metros que requiere. (1 pulgada = 0.0254 m). */

let metros;
let pulgada;
const pul = 0.0254; 

metros = Number(prompt(`Medidas de telas
Ingrese la medida que tiene de la tela en metros:`));
pulgada = (metros/pul).toFixed(2);

alert (`La medida de ${metros} m a pulgada es de ${pulgada}`);