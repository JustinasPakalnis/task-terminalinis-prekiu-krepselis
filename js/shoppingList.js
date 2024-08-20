import { fixedPrice } from "./helpers.js";

export function shoppingList(object) {
  if (object.length === 0) {
    return "Šiuo metu, jūsų prekių krepšelis yra tuščias.";
  }
  const rowIndexLenImitation = object.length.toString().length + ". ".length;

  let count = "";
  let counter = 1;
  let index = 1;

  const splitter = " | ";
  const listID1 = "Pavadinimas";
  const listID2 = "Kiekis";
  const listID3 = "Vieneto Kaina";
  const listID4 = "Viso mokėti";
  const unitName = " vnt";
  const currency = " Eur";
  const ListIDLenSum =
    listID1.length +
    listID2.length +
    listID3.length +
    listID4.length +
    splitter.length * 3;

  const len1st = Math.max(...object.map((o) => o.name.length));
  const len1stPick = len1st < listID1.length ? listID1.length : len1st;

  const len2nd = Math.max(...object.map((o) => o.amount)).toString().length;
  const len2ndPick =
    len2nd + unitName.length < listID2.length
      ? listID2.length
      : len2nd + unitName.length;

  const len3rd = (Math.max(...object.map((o) => o.unitPrice)) / 100).toString()
    .length;
  const len3rdPick =
    len3rd + currency.length < listID3.length
      ? listID3.length
      : len3rd + currency.length;

  const len4th = (Math.max(...object.map((o) => o.amount * o.unitPrice)) / 100)
    .toFixed(2)
    .toString().length;
  const len4thPick =
    len4th + currency.length < listID4.length
      ? listID4.length
      : len4th + currency.length;

  const len4Total =
    len1stPick + len2ndPick + len3rdPick + len4thPick + splitter.length * 3;

  const lenTotalPick = len4Total < ListIDLenSum ? ListIDLenSum : len4Total;

  const lineBreak = "-".repeat(lenTotalPick + rowIndexLenImitation);

  const msg =
    object.length === 1
      ? " prekė: "
      : object.length % 10 === 0
      ? " prekių: "
      : object.length >= 10 && object.length < 20
      ? " prekių: "
      : object.length > 20 && object.length % 10 === 1
      ? " prekė: "
      : " prekės: ";
  const annotationDeclare = "Jūsų prekių krepšelyje yra " + object.length + msg;
  const annotationAdd =
    listID1.padEnd(len1stPick + rowIndexLenImitation) +
    splitter +
    listID2.padEnd(len2ndPick) +
    splitter +
    listID3.padEnd(len3rdPick) +
    splitter +
    listID4;

  for (const list of object) {
    const Error = "Error";
    const msgName =
      list.amount === 1
        ? list.name
        : list.name === "" || typeof list.name !== "string"
        ? Error
        : list.amount > 1 && list.name.endsWith("i")
        ? list.name + "ai"
        : list.name.slice(0, -2) + "ai";

    const msgAmount = list.amount <= 0 ? Error : list.amount + unitName;

    const msgPrice =
      list.unitPrice <= 0 ? Error : fixedPrice(list.unitPrice) + currency;

    const msgPay =
      list.amount <= 0
        ? Error
        : fixedPrice(list.amount * list.unitPrice) < 0
        ? Error
        : fixedPrice(list.amount * list.unitPrice) + currency;

    const rowIndex = `${index}. `;
    if (counter !== object.length) {
      count += `${rowIndex.padEnd(rowIndexLenImitation)}${msgName.padEnd(
        len1stPick
      )}${splitter}${msgAmount.padEnd(len2ndPick)}${splitter}${msgPrice.padEnd(
        len3rdPick
      )}${splitter}${msgPay}\n`;
      counter++;
    } else {
      count += `${rowIndex.padEnd(rowIndexLenImitation)}${msgName.padEnd(
        len1stPick
      )}${splitter}${msgAmount.padEnd(len2ndPick)}${splitter}${msgPrice.padEnd(
        len3rdPick
      )}${splitter}${msgPay}`;
      counter++;
    }
    index++;
  }
  return `${annotationDeclare}
${lineBreak}
${annotationAdd}
${lineBreak}
${count}
${lineBreak}`;
}
