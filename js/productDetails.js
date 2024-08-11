export function productDetails(object, id) {
    if (object.length === 0) {
    return 'Prekė, su ID: ' + id + ' neegzistuoja.';
    }
    for (const idCheck of object) {
        // console.log(idCheck['id']);
        if (idCheck.id === id) {
            return '-'.repeat(35) + '\nPrekės informacija\n' + '-'.repeat(35) + '\n' + 'ID\t\t| ' + idCheck.id + '\nPavadinimas\t| ' + idCheck.name + '\nKiekis\t\t| ' + idCheck.amount + ' vnt' + '\nVieneto kaina\t| ' + (idCheck.unitPrice/100).toFixed(2) + ' eur' + '\nViso mokėti\t| ' + (idCheck.amount*idCheck.unitPrice/100).toFixed(2)+ ' eur\n' + '-'.repeat(35) ;                    
        }           
    }
    return 'Prekė, su ID: ' + id + ' neegzistuoja.';
}







