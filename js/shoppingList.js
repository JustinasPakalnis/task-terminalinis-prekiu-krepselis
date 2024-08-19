import { fixedPrice } from "./helpers.js";

export function shoppingList(object) {
  if (object.length === 0) {
    return "Šiuo metu, jūsų prekių krepšelis yra tuščias.";
  }

  let count = "";
  let index = 1;
  const splitter = " | ";
  const listID1 = "Pavadinimas";
  const listID2 = "Kiekis";
  const listID3 = "Vieneto Kaina";
  const listID4 = "Viso mokėti";
  const sumListID =
    listID1.length + listID2.length + listID3.length + listID4.length + 9;

  const len1st = Math.max(...object.map((o) => o.name.length));
  const len1stPick = len1st < listID1.length ? listID1.length : len1st;

  const len2nd = Math.max(...object.map((o) => o.amount)).toString().length + 4;
  const len2ndPick = len2nd < listID2.length ? listID2.length : len2nd;

  const len3rd =
    (Math.max(...object.map((o) => o.unitPrice)) / 100).toString().length + 4;
  const len3rdPick = len3rd < listID3.length ? listID3.length : len3rd;

  const len4th =
    Math.max(...object.map((o) => o.amount * o.unitPrice))
      .toFixed(2)
      .toString().length + 4;

  const len4thPick = len4th < listID4.length ? listID4.length : len4th;

  const len4Total = len1stPick + len2ndPick + len3rdPick + len4thPick + 7;
  const lenTotalPick = len4Total < sumListID ? sumListID + 13 : len4Total + 13;

  //   console.log("1st pick", len1stPick);
  //   console.log("2nd pick", len2ndPick);
  //   console.log("3rd pick", len3rdPick);
  //   console.log("4rd pick", len4thPick);
  //   console.log("sum id", sumListID);
  //   console.log("sum line", len4Total);
  //   console.log("final pick", lenTotalPick);

  const lineBreak =
    "-".repeat(lenTotalPick + object.length.toString().length) + "\n";

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
  const annotationDeclare =
    "Jūsų prekių krepšelyje yra " + object.length + msg + "\n";
  const annotationAdd =
    listID1.padEnd(len1stPick + object.length.toString().length + 2) +
    splitter +
    listID2.padEnd(len2ndPick + 5) +
    splitter +
    listID3.padEnd(len3rdPick + 5) +
    splitter +
    listID4 +
    "\n";

  for (const list of object) {
    const msgName =
      list.amount === 1
        ? list.name
        : list.name === "" || typeof list.name !== "string"
        ? "Name err"
        : list.amount > 1 && list.name.endsWith("i")
        ? list.name + "ai"
        : list.name.slice(0, -2) + "ai";

    const msgAmount = list.amount <= 0 ? "Amnt err" : list.amount + " vnt";

    const msgPrice =
      list.unitPrice <= 0 ? "errNegPrc" : fixedPrice(list.unitPrice) + " Eur";

    const msgPay =
      list.amount <= 0
        ? "Amnt err"
        : (list.amount * list.unitPrice) / 100 < 0
        ? "errNegPrc"
        : fixedPrice(list.amount * list.unitPrice) + " Eur";

    const rowIndex = `${index}. `;
    count +=
      rowIndex.padEnd(object.length.toString().length + 2) +
      msgName.padEnd(len1stPick) +
      splitter +
      msgAmount.padEnd(len2ndPick + 5) +
      splitter +
      msgPrice.padEnd(len3rdPick + 5) +
      splitter +
      msgPay +
      "\n";
    index++;
  }
  return (
    annotationDeclare +
    lineBreak +
    annotationAdd +
    lineBreak +
    count +
    lineBreak
  );
}
