//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (color) => {
  // let colors = {
  //   "black": 0,
  //   "brown": 1,
  //   "red": 2,
  //   "orange": 3,
  //   "yellow": 4,
  //   "green": 5,
  //   "blue": 6,
  //   "violet": 7,
  //   "grey": 8,
  //   "white": 9
  // }
  
  //   return (color in colors ) ? colors[color] : Object.keys(colors)
  
  for (let i = 0; i < COLORS.length; i++) {
    if (COLORS[i] === color) return i
  }

};

export const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];
