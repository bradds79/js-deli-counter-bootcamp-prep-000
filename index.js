function takeANumber(katzDeli, name) {
  katzDeli.push(`${name}`);
  return (`Welcome, ${name}. You are number ${katzDeli.length} in line.`);
}

function nowServing (katzDeli) {
  var i = 0;
  while (i < katzDeli.length) {
    i++;
 }
 if (katzDeli.length === 0) {
   return"There is nobody waiting to be served!" 
 } else {
   return (`Currently serving ${katzDeli.shift()}.`)
 }
}

function currentLine (name) {
  var newName = [];
  var i = 0;
  while (i < name.length) {
    newName.push(name[i]);
    i++;
  }
  if (i > name.length) {
    return "The line is currently empty."
  } else
  return (`${name.length}. + " " + ${name},`);
}