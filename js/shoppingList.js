export function shoppingList(object) {
    let count = '';
    let index = 1;
    const msg = object.length === 1 ? ' prekė: ' 
    : object.length >=  10 ? ' prekių: '
    : ' prekės: ' ;
    const annotation = 'Jūsų prekių krepšelyje yra ' + object.length + msg + '\n' + '-'.repeat(66) + '\n' + 'Pavadinimas\t | ' +  'Kiekis\t | '  +  'Vieneto Kaina | ' +  'Viso mokėti'  + '\n'  + '-'.repeat(66) + '\n';
    if (object.length === 0) {
        return 'Šiuo metu, jūsų prekių krepšelis yra tuščias.';
    }
    for (const list of object) {
        const msg = list.amount === 1 ? list.name
        : list.amount < 10 ? list.name.slice(0, -2) + 'ai'
        : list.name.slice(0, -2) + 'ų'
        count += (index + '. ' + msg.padEnd(13) + ' | '+ list.amount + ' vnt \t | ' + (list.unitPrice/100).toFixed(2) + ' eur\t | ' + (list.amount*list.unitPrice/100).toFixed(2) + ' eur\n' );
        index++;
    }
    return annotation + count + '-'.repeat(66) + '\n';
    
}