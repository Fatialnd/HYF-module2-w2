'use strict';

const light = {
  state: 'green',
};

function getNextState(state) {
  switch (state) {
    case 'green':
      return 'orange';
    case 'orange':
      return 'red';
    case 'red':
      return 'green';
  }
}

function runSimulation(light, cycles) {
  let output = '';
  let completedCycles = 0;

  while (completedCycles < cycles) {
    output += `The light is ${light.state}\n`;
    console.log("The light is", light.state);

    if (light.state === 'red') {
      completedCycles++;
    }

    light.state = getNextState(light.state);
  }

  return output;
}

const lightOutput = runSimulation(light, 2);

document.getElementById('lightOutput').textContent = lightOutput;
