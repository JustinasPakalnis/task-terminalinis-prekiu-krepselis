export function productDetails(object, id) {
    if (object.length === 0) {
    return 'Prekė, su ID: ' + id + ' neegzistuoja.';
    }
    for (const idCheck of object) {
        // console.log(idCheck['id']);
        if (idCheck.id === id) {
            return '-----------------------------------\nPrekės informacija\n-----------------------------------\n' + 'ID\t\t| ' + idCheck.id + '\nPavadinimas\t| ' + idCheck.name + '\nKiekis\t\t| ' + idCheck.amount + ' vnt' + '\nVieneto kaina\t| ' + idCheck.unitPrice + ' eur' + '\nViso mokėti\t| ' + (idCheck.amount*idCheck.unitPrice).toFixed(2)+ ' eur\n-----------------------------------';                     
        }           
    }
    return 'Prekė, su ID: ' + id + ' neegzistuoja.';
}







