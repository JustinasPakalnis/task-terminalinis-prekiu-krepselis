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
        const msg = list.amount % 10 === 1 ? list.name //Jei prekių kiekis baigiasi skaičiumi 1, duodame žodi vienaskaitos forma
        : list.amount > 1 && list.name.endsWith('i') ? list.name + 'ai' //Jei prekių kiekis baigiasi skaičiumi didesniu negu 1 ir jo pavadinime paskutnė raidė i, formuojama daugiskaita
        : list.name.slice(0, -2) + 'ai'; //Formuojama daugiskaita likusiems pavadinimams
        count += (index + '. ' + msg.padEnd(13) + ' | '+ list.amount + ' vnt \t | ' + (list.unitPrice/100).toFixed(2) + ' eur\t | ' + (list.amount*list.unitPrice/100).toFixed(2) + ' eur\n' );//Auginame eilutes su kiekviena skirtinga preke
        index++;//eiles tvarka 
    }
    return annotation + count + '-'.repeat(66) + '\n';//galutinis pranešimas
    
}