export function shoppingList(object) {
    if (object.length === 0) { 
        return 'Šiuo metu, jūsų prekių krepšelis yra tuščias.';//Jeigu krepšelis tuščias
    } 
    let count = ''; //Dėžutė kuri pildysis for cikle einant per prekes ir bus išspausdinama
    let index = 1; //Eilės tvarka prasideda nuo 1
    const len1st = Math.max(...object.map(o => o.name.length)) > 12 ? Math.max(...object.map(o => o.name.length)) : 8 ; //Jei ilgiausias prekės pavadinimas ilgesnis už 'Pavadinimas' pad end bus ilgiausia prekės pavadinimas, kitus atveju 'pavadinimnas' ilgio
    const len2nd = Math.max(...object.map(o => o.amount)).toString().length > 6 ? Math.max(...object.map(o => o.amount)).toString().length : 6; //Jei ilgiausias kiekio tekstas ilgesnis už 'Kiekis' pad end bus kiekio tekstas, kitus atveju 'Kiekis' ilgio
    const len3rd = Math.max(...object.map(o => o.unitPrice)).toString().length > 13 ? Math.max(...object.map(o => o.unitPrice)).toString().length : 8;//Jei ilgiausias prekės price tekstas ilgesnis už 'Vieneto Kaina' pad end bus kiekio tekstas, kitus atveju 'Vieneto kaina' ilgio
    const lenTotal = (Math.max(...object.map(o => o.name.length)) + Math.max(...object.map(o => o.amount)).toString().length + Math.max(...object.map(o => o.unitPrice)).toString().length) + 40; //Bendro simboliu kiekio eiluteje padidėjimo skaičiavimas.
    const msg = object.length === 1 ? ' prekė: ' 
    : object.length >=  10 ? ' prekių: '
    : ' prekės: ' ; //Formuojamas daugiskaita/vienaskaita žodis pranešimui
    const annotationDeclare = 'Jūsų prekių krepšelyje yra ' + object.length + msg + '\n' ;//Formuojama pranešimo pirma dalis
    const annotationAdd = 'Pavadinimas'.padEnd(len1st+4) + ' | ' +  'Kiekis'.padEnd(len2nd+4) + ' | '  +  'Vieneto Kaina'.padEnd(len3rd+5) + ' | ' +  'Viso mokėti' ;//Formuojama pranešimo antra dalis


    for (const list of object) { //Einame per objektus masyve
        const msgName = list.amount === 1 ? list.name //Jei prekių kiekis 1, duodame žodi vienaskaitos forma 1 agurkas
        : list.name === '' || typeof(list.name) !== 'string' ? 'Name err' //Jei nera prekes pavadinimo arba pavadinimas yra ne  string tipo isvedama klaida.
        : list.amount > 1 && list.name.endsWith('i') ? list.name + 'ai' //Jei prekių kiekis baigiasi skaičiumi didesniu negu 1 ir jo pavadinime paskutnė raidė i, formuojama daugiskaita specifiniam zodziui Kivi > Kiviai
        : list.name.slice(0, -2) + 'ai'; //Formuojama daugiskaita likusiems pavadinimams
        const msgAmount = list.amount <= 0 ? 'Amnt err' //Jeigu prekiu kiekis neigiamas formuojama klaida
        : list.amount + ' vnt';
        var msgPay = list.amount <= 0 ? 'Amnt err'//Jeigu prekiu kiekis neigiamas formuojama klaida viso moketi sklityje taip pat
        : (list.amount*list.unitPrice/100) < 0 ? 'errNegPrc' //Jei paskaiciuota kaina zemiau 0 gauname klaida
        : (list.amount*list.unitPrice/100).toFixed(2) + ' eur';//Likusiu atveju isvedame kaina
        const msgPrice = list.unitPrice <= 0 ? 'errNegPrc' //Jei vieneto kaina mazesne negu 0 isvedame klaida
        :(list.unitPrice/100).toFixed(2)+ ' eur';

        count += (index + '. ' + msgName.padEnd(len1st+1) + ' | ' + msgAmount.padEnd(len2nd+4) + ' | ' + msgPrice.padEnd(len3rd+5) +' | ' + msgPay + '\n' );//Auginame eilutes su kiekviena skirtinga preke
        index++;//eiles tvarka padideja
    }
    return  annotationDeclare + '-'.repeat(lenTotal+msgPay.toString().length) + '\n' + annotationAdd + '\n' + '-'.repeat(lenTotal+msgPay.toString().length) + '\n' + count + '-'.repeat(lenTotal+msgPay.toString().length) + '\n';//galutinis pranešimas
    
}

