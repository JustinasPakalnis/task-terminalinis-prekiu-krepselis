export function productDetails(object, id) {
    if (object.length === 0) {
    return 'Prekė, su ID: ' + id + ' neegzistuoja. Krepšelis yra tuščias'; //Jei krepšelis tuščias
    } else if (!Number.isInteger(id)){ //Tikrinam ar ivestas id yra skaičius
        return 'Reikia įvesti prekės ID kuris yra sveikasis skaičius';
    }
    for (const idCheck of object) {
        if (idCheck.id === id) {
            return '-'.repeat(35) + '\nPrekės informacija\n' + '-'.repeat(35) + '\n' + 'ID\t\t| ' + idCheck.id + '\nPavadinimas\t| ' + idCheck.name + '\nKiekis\t\t| ' + idCheck.amount + ' vnt' + '\nVieneto kaina\t| ' + (idCheck.unitPrice/100).toFixed(2) + ' eur' + '\nViso mokėti\t| ' + (idCheck.amount*idCheck.unitPrice/100).toFixed(2)+ ' eur\n' + '-'.repeat(35) ; //Jei randama prekė, išvedama jos informacija                   
        }           
    }
    return 'Prekė, su ID: ' + id + ' neegzistuoja.'; //Jei krepšelis netuščias bet ID neegzistuoja
}







