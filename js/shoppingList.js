export function shoppingList(object) {

    if (object.length === 0) {
        return 'Šiuo metu, jūsų prekių krepšelis yra tuščias.';
    }
    return 'Jūsų prekių krepšelyje yra ' + object.length + ' prekės\n' + '-'.repeat(35) + '\n';

    
    
}