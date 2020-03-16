function Car(length, doors) {
  if (doors === 0) throw "We cannot enter a doorless car.";
  if (length < 7) throw "We cannot build that small car.";
  if (length - (doors * 2) < 2) throw "We cannot fit that many doors in that car.";

  this.body = {
    component: firstLayer(length, doors)
  }
  this.chassis = {
    component: thirdLayer(length)
  }
};


function firstLayer(length, doors) {
  const roof = ' ' + '_'.repeat(length - 3);
  const doorsLayer = []
  for (let j = 0; j < doors; j++) {
    if (j % 2) {
      doorsLayer.push('[]')
    } else {
      doorsLayer.unshift('[]')
    }
  }
  const middle = Math.floor(doorsLayer.length / 2);
  doorsLayer.splice(middle, 0, ' '.repeat(length - (3 + (doors * 2))))
  const resultDoors = '|' + doorsLayer.join('') + '\\\n';
  return roof + '\n' + resultDoors
}

function thirdLayer(length) {
  const wheel = 'o';
  const element = '-';
  const floor = element + wheel + element.repeat(length - 5) + wheel + element;
  if (length <= 12) {
    return floor + "'"
  } else {
    const amountOfWheels = (length - 6);
    let step = 0;
    const result = [];
    for (let i = 0; i < amountOfWheels; i++) {
      if (i % 2) {
        if (step % 2) {
          result.push(wheel + element);
          step++
        } else {
          result.unshift(element + wheel);
          step++
        }
      }
    }
    const middle = Math.ceil(result.length / 2);
    result.splice(middle, 0, '-'.repeat(length - (result.length * 2) - 1))
    return result.join('') + "'"
  }
}
