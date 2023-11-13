function create_list(){

    var list = document.getElementById('création-list');
    var nom = list.elements['nom'].value;
    var todo = [];
    todo.push(nom);
    
    var nom_list = document.getElementById('nom_list');
    nom_list.innerHTML = 'Le nom de votre premiere liste est  ' + nom;
    return todo;
}
function ajouter_list(liste,elements){

}