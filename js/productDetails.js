import { fixedPrice } from "./helpers.js";

export function productDetails(object, id) {
  if (object.length === 0) {
    return "Prekė, su ID: " + id + " neegzistuoja, nes krepšelis yra tuščias."; //Jei krepšelis tuščias
  }
  if (!Number.isInteger(id)) {
    return "Reikia įvesti prekės ID kuris yra sveikasis skaičius";
  }

  const splitter = " | ";
  const lineName = "Prekės informacija";
  const objID = "ID";
  const objID1 = "Pavadinimas";
  const objID2 = "Kiekis";
  const objID3 = "Vieneto Kaina";
  console.log(objID3.length);

  const objID4 = "Viso mokėti";
  const lineBreak = "-".repeat(25);
  let array = [];
  array.push(objID, objID1, objID2, objID3, objID4);
  console.log(array);

  const maxLength = array.reduce((a, b) =>
    a.length > b.length ? a : b
  ).length;
  console.log(maxLength);

  for (const idCheck of object) {
    if (idCheck.id === id) {
      return `${lineBreak}
${lineName}
${lineBreak.padEnd(maxLength)}
${objID.padEnd(maxLength)} | ${idCheck.id}
${objID1.padEnd(maxLength)} | ${idCheck.name}
${objID2.padEnd(maxLength)} | ${idCheck.amount} vnt
${objID3.padEnd(maxLength)} | ${idCheck.unitPrice} Eur
${objID4.padEnd(maxLength)} | ${fixedPrice(
        idCheck.amount * idCheck.unitPrice
      )} Eur
${lineBreak}`;
    }
  }
  return "Prekė, su ID: " + id + " neegzistuoja.";
}
