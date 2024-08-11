export function shoppingList(object) {
    let count = '';
    let index = 1;
    const annotation = 'Jūsų prekių krepšelyje yra ' + object.length + ' prekės\n' + '-'.repeat(66) + '\n' + 'Pavadinimas\t | ' +  'Kiekis\t | '  +  'Vieneto Kaina | ' +  'Viso mokėti'  + '\n'  + '-'.repeat(66) + '\n';
    if (object.length === 0) {
        return 'Šiuo metu, jūsų prekių krepšelis yra tuščias.';
    }
    for (const list of object) {

        count += (index + '. ' + list.name.padEnd(13) + ' | '+ list.amount + ' vnt \t | ' + (list.unitPrice/100).toFixed(2) + ' eur\t | ' + (list.amount*list.unitPrice/100).toFixed(2) + ' eur\n' );
        index++;
    }
    return annotation + count + '-'.repeat(66) + '\n';
    
}