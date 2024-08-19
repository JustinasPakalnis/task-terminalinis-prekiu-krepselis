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
  const objID4 = "Viso mokėti";

  let array = [objID, objID1, objID2, objID3, objID4];

  //   const len2nd = Math.max(...object.map((o) => o)); //.toString().length + 4
  //   console.log(len2nd);

  const maxLength = array.reduce((a, b) =>
    a.length > b.length ? a : b
  ).length;
  console.log(maxLength);

  const maxKey = [];
  for (const idCheck of object) {
    if (idCheck.id === id) {
      maxKey.push(idCheck.id.toString().length);
      maxKey.push(idCheck.name.length);
      maxKey.push(idCheck.amount.toString().length + " vnt".length);
      maxKey.push(fixedPrice(idCheck.unitPrice).length + " Eur".length);
      maxKey.push(
        fixedPrice(idCheck.amount * idCheck.unitPrice).length + " Eur".length
      );
    }
  }

  let maxValueCalculated = 0;
  for (const counting of maxKey) {
    maxValueCalculated =
      counting > maxValueCalculated ? counting : maxValueCalculated;
  }
  const totalLine = maxLength + splitter.length + maxValueCalculated;
  const lineBreakChoice =
    totalLine > lineName.length ? totalLine : lineName.length;

  const lineBreak = "-".repeat(lineBreakChoice);

  for (const idCheck of object) {
    if (idCheck.id === id) {
      return `${lineBreak}
${lineName}
${lineBreak.padEnd(maxLength)}
${objID.padEnd(maxLength)} | ${idCheck.id}
${objID1.padEnd(maxLength)} | ${idCheck.name}
${objID2.padEnd(maxLength)} | ${idCheck.amount} vnt
${objID3.padEnd(maxLength)} | ${fixedPrice(idCheck.unitPrice)} Eur
${objID4.padEnd(maxLength)} | ${fixedPrice(
        idCheck.amount * idCheck.unitPrice
      )} Eur
${lineBreak}`;
    }
  }
  return "Prekė, su ID: " + id + " neegzistuoja.";
}
