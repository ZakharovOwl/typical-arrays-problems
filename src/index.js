
exports.min = function min (array) {
  if(array == undefined || array.length == 0) {
    return 0;
  } else {
  let result = Math.min(...array);
  return result;
  }
}

exports.max = function max (array) {
  if(array == undefined || array.length == 0) {
    return 0;
  } else {
  let result = Math.max(...array);
  return result;
  }
}

exports.avg = function avg (array) {
  if(array == undefined || array.length == 0) {
    return 0;
  } else {
  let a = array.reduce((sum, current) => sum + current, 0);
  let b = array.length;
  let result = a / b;
  return result;
  }
}
