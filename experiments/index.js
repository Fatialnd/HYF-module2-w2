"use strict";

function runExperiment(sampleSize) {
  const valueCounts = Array(6).fill(0);

  for (let i = 0; i < sampleSize; i++) {
    const randomDie = Math.ceil(Math.random() * 6);
    valueCounts[randomDie - 1]++;
  }

  return valueCounts.map(count => ((count / sampleSize) * 100).toFixed(2));
}

function main() {
  const sampleSizes = [100, 1000, 1000000];

  for (const size of sampleSizes) {
    console.log(runExperiment(size), size);
  }
}

main();
