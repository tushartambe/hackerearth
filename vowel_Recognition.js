function totalVovels(input) {
  let vovels = ['a', 'e', 'i', 'o', 'u'];
  let length = input.length;
  let total = 0;
  for (let i = 0; i < length; i++) {
    let char = input[i].toLowerCase();
    if (vovels.includes(char)) {
      total += (length - i) * (i + 1);
    }
  }
  return total;
}

// function main(input) {
//   let allStrings = input.split("\n");
//   for(let i= 0; i < allStrings[0]; i++  ){
//     con
//     process.stdout.write(totalVovels(allStrings[i+1])+"\n");       // Writing output to STDOUT
//   }
// }

console.log(totalVovels("abcde"));