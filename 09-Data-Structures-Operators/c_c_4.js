document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const textArea = document.querySelector("textarea");
const button = document.querySelector("button");

// button.addEventListener("click", function () {
//   const text = textArea.value;

//   const varLower = text.toLowerCase();
//   const varTrim = varLower.trim(" ");
//   const [varSplit1, varSplit2] = varTrim.split("_");
//   const varSplit2C = varSplit2[0].toUpperCase() + varSplit2.slice(1);
//   const varNew = varSplit1 + varSplit2C;
//   console.log(varNew);
// });

button.addEventListener("click", function () {
  const text = textArea.value;
  const rows = text.split("\n");

  for (const row of rows) {
    const [first, second] = row.toLowerCase().trim().split("_");

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(output);
  }
});

button.addEventListener("click", function () {
  const text = textArea.value;
  const rows = text.split("\n");

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});
// underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure
