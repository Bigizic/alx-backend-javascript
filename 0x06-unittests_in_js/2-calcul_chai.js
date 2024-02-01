/**
 * calculateNumber - a simple function for the purpose of unittesting
 * @param {str} type
 * @param {int} a 
 * @param {int} b 
 * @returns a type b
 */

function calculateNumber(type, a, b) {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
  
    } else if (type === 'DIVIDE') {
  
      if (Math.round(b) === 0) {
          return 'Error';
  
      } else { return Math.round(a) / Math.round(b);
   };
    } else if (type === 'SUBTRACT') {
  
      return Math.round(a) - Math.round(b);
    }
  }
  module.exports = calculateNumber;
  