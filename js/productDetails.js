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
  const unitName = " vnt";
  const currency = " Eur";
  const objID = "ID";
  const objID1 = "Pavadinimas";
  const objID2 = "Kiekis";
  const objID3 = "Vieneto Kaina";
  const objID4 = "Viso mokėti";

  let arrIDLength = [
    objID.length,
    objID1.length,
    objID2.length,
    objID3.length,
    objID4.length,
  ];

  const maxLength = Math.max(...arrIDLength);

  const maxKey = [];
  for (const idCheck of object) {
    if (idCheck.id === id) {
      maxKey.push(idCheck.id.toString().length);
      maxKey.push(idCheck.name.length);
      maxKey.push(idCheck.amount.toString().length + unitName.length);
      maxKey.push(fixedPrice(idCheck.unitPrice).length + currency.length);
      maxKey.push(
        fixedPrice(idCheck.amount * idCheck.unitPrice).length + currency.length
      );
    }
  }
  const maxValueLengthCalculated = Math.max(...maxKey);

  const totalLine = maxLength + splitter.length + maxValueLengthCalculated;
  const lineBreakChoice =
    totalLine > lineName.length ? totalLine : lineName.length;

  const lineBreak = "-".repeat(lineBreakChoice);

  for (const idCheck of object) {
    if (idCheck.id === id) {
      return `${lineBreak}
${lineName}
${lineBreak}
${objID.padEnd(maxLength)}${splitter}${idCheck.id}
${objID1.padEnd(maxLength)}${splitter}${idCheck.name}
${objID2.padEnd(maxLength)}${splitter}${idCheck.amount}${unitName}
${objID3.padEnd(maxLength)}${splitter}${fixedPrice(
        idCheck.unitPrice
      )}${currency}
${objID4.padEnd(maxLength)}${splitter}${fixedPrice(
        idCheck.amount * idCheck.unitPrice
      )}${currency}
${lineBreak}`;
    }
  }
  return "Prekė, su ID: " + id + " neegzistuoja.";
}
