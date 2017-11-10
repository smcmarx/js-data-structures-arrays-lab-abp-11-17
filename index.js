// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push ('Ralph');
}

function destructivelyPrependDriver(name){
  drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const copyOfDrivers = [...drivers, 'Broom']
  return copyOfDrivers;
}

function prependDriver(name) {
  const copyOfDrivers = ['Broom', ...drivers];
  return copyOfDrivers;
}

function removeLastDriver() {
  const copyOfDrivers = drivers.slice(0, drivers.length -1)
  return copyOfDrivers;
}

function removeFirstDriver() {
  const copyOfDrivers = drivers.slice(1)
  return copyOfDrivers;
}
