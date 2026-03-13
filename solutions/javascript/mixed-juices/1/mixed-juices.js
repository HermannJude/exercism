// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name){
    case 'Pure Strawberry Joy':
      return 0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
      break;
    case 'Tropical Island':
      return 3.0;
      break;
    case 'All or Nothing':
      return 5.0;
      break;
    default:
      return 2.5
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let limesCut = 0;
  let wedgesCounted = 0;

  while (wedgesCounted < wedgesNeeded && limesCut < limes.length) {
    switch (limes[limesCut]) {
      case 'small':
        wedgesCounted += 6;
        break;
      case 'medium':
        wedgesCounted += 8;
        break;
      case 'large':
        wedgesCounted += 10;
        break;
    }
    limesCut++;
  }
  return limesCut;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while(timeLeft > 0 && orders.length > 0){
    let currentJuice = orders.shift();
    let timeNeeded;
    switch(currentJuice){
      case 'Pure Strawberry Joy':
        timeNeeded = 0.5;
        break;
      case 'Energizer':
      case 'Green Garden':
        timeNeeded = 1.5;
        break;
      case 'Tropical Island':
        timeNeeded = 3.0;
        break;
      case 'All or Nothing':
        timeNeeded = 5.0;
        break;
      default:
        timeNeeded = 2.5
    }
    timeLeft -= timeNeeded;
  }
  return orders
}
