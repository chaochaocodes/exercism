//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (array) => {

  const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
  let twoDigit = []

  twoDigit.push(COLORS.indexOf(array[0]))
  twoDigit.push(COLORS.indexOf(array[1]))
  return Number(twoDigit)

};