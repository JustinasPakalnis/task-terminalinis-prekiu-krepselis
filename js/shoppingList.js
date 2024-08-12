export function shoppingList(object) {
    let count = ''; //Dėžutė kuri pildysis for cikle einant per prekes ir bus išspausdinama
    let index = 1; //Eilės tvarka prasideda nuo 1
    const msg = object.length === 1 ? ' prekė: ' 
    : object.length >=  10 ? ' prekių: '
    : ' prekės: ' ; //Formuojamas daugiskaita/vienaskaita žodis pranešimui
    const annotation = 'Jūsų prekių krepšelyje yra ' + object.length + msg + '\n' + '-'.repeat(66) + '\n' + 'Pavadinimas\t | ' +  'Kiekis\t | '  +  'Vieneto Kaina | ' +  'Viso mokėti'  + '\n'  + '-'.repeat(66) + '\n';//Formuojamas pirmas pranešimas
    if (object.length === 0) { 
        return 'Šiuo metu, jūsų prekių krepšelis yra tuščias.';//Jeigu krepšelis tuščias
    } 
    for (const list of object) { //Einame per objektus masyve
        const msgName = list.amount === 1 ? list.name //Jei prekių kiekis 1, duodame žodi vienaskaitos forma 1 agurkas
        : list.name === '' || typeof(list.name) !== 'string' ? 'Name error' //Jei nera prekes pavadinimo arba pavadinimas yra ne  string tipo isvedama klaida.
        : list.amount > 1 && list.name.endsWith('i') ? list.name + 'ai' //Jei prekių kiekis baigiasi skaičiumi didesniu negu 1 ir jo pavadinime paskutnė raidė i, formuojama daugiskaita specifiniam zodziui Kivi > Kiviai
        : list.name.slice(0, -2) + 'ai'; //Formuojama daugiskaita likusiems pavadinimams
        const msgAmount = list.amount <= 0 ? 'errNegAmount ' //Jeigu prekiu kiekis neigiamas formuojama klaida
        : list.amount + ' vnt \t';
        const msgPay = list.amount <= 0 ? 'errNegAmount '//Jeigu prekiu kiekis neigiamas formuojama klaida viso moketi sklityje taip pat
        : (list.amount*list.unitPrice/100) < 0 ? 'errNegPrc' //Jei paskaiciuota kaina zemiau 0 gauname klaida
        : (list.amount*list.unitPrice/100).toFixed(2) + ' eur';//Likusiu atveju isvedame kaina
        const msgPrice = list.unitPrice <= 0 ? 'errNegPrc' //Jei vieneto kaina mazesne negu 0 isvedame klaida
        :(list.unitPrice/100).toFixed(2)+ ' eur';

        count += (index + '. ' + msgName.padEnd(13) + ' | '+ msgAmount + ' | ' + msgPrice +'\t | ' + msgPay + '\n' );//Auginame eilutes su kiekviena skirtinga preke
        index++;//eiles tvarka 
    }
    return annotation + count + '-'.repeat(66) + '\n';//galutinis pranešimas
    
}

