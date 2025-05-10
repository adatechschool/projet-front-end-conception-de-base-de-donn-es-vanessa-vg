const animaux = [
    {type: 'chien', 
     image: './img/alan-king-KZv7w34tluA-unsplash.jpg',
     name: 'Seb',
     age: '2 ans',
     sexe: 'Mâle',
     race: 'Chow-Chow',
     localisation: 'IDF',
     description: 'Affectueux, joueur et protecteur'
    },

    {type: 'chien',
     image: './img/alin-luna-8LfPXM6abRk-unsplash.jpg', 
     name: 'Oréo', 
     age: '1 an',
     sexe: 'Mâle',
     race: 'Jacques Russel',
     localisation: 'Hauts-de-France',
     description: 'Un peu craintif mais très affectueux une fois en confiance'
    },

    {type: 'chien',
     image: './img/background.jpg', 
     name: 'Bella', 
     age: '3 ans',
     sexe: 'Femelle',
     race: 'Berger Australien',
     localisation: 'Bretagne',
     description: `Dynamique et sportif. Il aura besoin d'un grand espace pour se dépenser.`
    },

    {type: 'chat',
     image: './img/jae-park-7GX5aICb5i4-unsplash.jpg',
     name: 'Minette',
     age: '4 ans',
     sexe: 'Femelle',
     race: 'Inconnu',
     localisation: 'IDF',
     description: `Douce et très caline. Elle saura vous remplir de bonheur. Pas d'enfants si possible.`
    },

    {type: 'chat',
     image: './img/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg', 
     name: 'Pépite',
     age: '6 ans',
     sexe: 'Femelle',
     race: 'Européen',
     localisation: 'Nouvelle Aquitaine',
     description: 'Une vraie crème. Pépite est arrivé au refuge avec deux de ses frères et soeurs pour cause du syndrome de Diogène chez ses anciens maîtres.' 
    },

    {type: `cochon d'inde`,
        image: './img/chan-swan-NKyl19P5IHg-unsplash.jpg', 
        name: 'Bulle',
        age: '1 an',
        sexe: 'Femelle',
        race: ``,
        localisation: 'Centre-Val De Loire',
        description: `Une vrai petite farceuse mais vous allez m'adorer`
       },

       {type: 'chien',
        image: './img/florencia-potter-yxmNWxi3wCo-unsplash.jpg', 
        name: 'Luna',
        age: '5 ans',
        sexe: 'Femelle',
        race: '',
        localisation: 'Occitanie',
        description: `Très joueuse et pleine d'énergie ! J'ai besoin de maîtres qui aiment sortir au parc régulièrement car me dépenser tous les jours est indispensable.`
       },

       {type: 'lapin',
        image: './img/melanie-kreutz-IFnknR2Mv5o-unsplash.jpg', 
        name: 'Enzo',
        age: '2 ans',
        sexe: 'Mâle',
        race: '',
        localisation: 'Bretagne',
        description: 'Calme et discret. Vous ne vous apercevrez même pas de ma présence.' 
       },

       {type: 'chien',
        image: './img/nygi-yVdW4kfPY48-unsplash.jpg', 
        name: 'Popy',
        age: '4 mois',
        sexe: 'Mâle',
        race: '',
        localisation: 'Grand Est',
        description: `Du fait de mon très jeune âge, j'ai besoin de maîtres très présent et patients car toute mon éducation est à faire. Sinon je suis une vaie bouille d'amour. `
       },

       {type: `cochon d'inde`,
        image: './img/yosei-g-OVgE3m4MHKM-unsplash.jpg', 
        name: 'Esteban',
        age: '2 ans',
        sexe: 'Mâle',
        race: '',
        localisation: 'IDF',
        description: 'Je suis un peu craintif au départ, mais après quelques heures passées ensemble, je deviens très sociable et joueur.' 
       }
    
];

// Je crée la variable lié à mon bouton Rechercher
const searchAnimalButton = document.getElementById('searchAnimalButton');
// Je crée la variable pour afficher le nombre de résultats
const resultCount = document.getElementById('resultCount');
// Pareil pour le reste (type d'animal et div d'affichage des résultats)
const animalType = document.getElementById('animalType');
const resultsDiv = document.getElementById('results');

// J'ajoute un écouteur d'événement sur le bouton "Rechercher"
searchAnimalButton.addEventListener('click', () => {
 // Je récupère l'animal selectionné dans la liste déroulante
const animalSelected = animalType.value;
// Je vide le contenu précédent de la div pour ne pas empiler les anciennes recherches
resultsDiv.innerHTML = '';
// Je filtre les animaux: on garde seulement ceux dont le type correspond à la sélection
let filteredAnimals;
 if(animalSelected === 'tous') {
    filteredAnimals = animaux;
 } else {
    filteredAnimals = animaux.filter(animal => animal.type === animalSelected);
 }

// Je vérifie s'il y a des animaux correspondant à ma recherche
if (filteredAnimals.length > 0) {
    filteredAnimals.forEach(animal => {
        // Créer une carte duiv pour chaque animal
        const card = document.createElement('div');
        card.style.border = '1px solid #ccc';
        card.style.borderRadius = '10px'
        card.style.padding = '15px';
        card.style.margin = '10px';
        card.style.width = '300px';
    
        card.style.textAlign = 'center';
        card.style.boxShadow = '2px 2px 10px rgba(0,0,0,0.1)';
        card.style.display = 'flex';
        card.style.flexDirection = 'column',
        card.style.justifyContent = 'space-between';
        card.style.gap = '20px';
        // Pour chaque animal trouvé, créer une balise <img> et l'ajouter à la div
        const img = document.createElement('img'); // Créer une image
        img.src = animal.image; // Définir la source de l'image
        img.alt = animal.type; // Définir un texte alternatif (pour l'accessibilité)
        img.style.width = '100%'; // Définir la largeur de l'image
        img.style.height = '150px'; // Hauteur fixe pour toutes les images
        img.style.objectFit = 'cover';
        img.style.borderRadius = '10px';
        card.appendChild(img);

        // Ajouter le nom
        const name = document.createElement('p');
        name.textContent = animal.name;
        card.appendChild(name);

        // Age, Sexe,Race et Localisation
        const details = document.createElement('p');
        details.innerHTML = `
        <strong>Âge :</strong> ${animal.age}<br>
        <strong>Sexe :</strong> ${animal.sexe}<br>
        <strong>Race :</strong> ${animal.race}<br>
        <strong>Localisation :</strong> ${animal.localisation}<br>
        `;
        card.appendChild(details);

        // Description courte
        const desc = document.createElement('p');
        desc.textContent = animal.description;
        card.appendChild(desc);

        // Bouton voir
        const voirButton = document.createElement('a');
        voirButton.textContent = 'Rencontrer';
        voirButton.href = '#';
        voirButton.style.display = 'inline-block';
        voirButton.style.marginTop = '10px';
        voirButton.style.padding = '8px 15px';
        voirButton.style.backgroundColor = '#ff6d38';
        voirButton.style.color = 'white';
        voirButton.style.borderRadius = '5px';
        voirButton.style.decoration = 'none';
        voirButton.style.transition = 'background-color 0.3s';
        voirButton.addEventListener('mouseover', () => {
            voirButton.style.backgroundColor = '#ff7f57';
        });
        voirButton.addEventListener('mouseout', () => {
            voirButton.style.backgroundColor = '#ff5d28'
        });
        card.appendChild(voirButton);

        // Ajouter la carte au conteneur principal
        resultsDiv.appendChild(card);
    });

    resultCount.textContent = `${filteredAnimals.length} résultat${filteredAnimals.length > 1 ? 's' : ''} trouvé${filteredAnimals.length > 1 ? 's' : ''}.`;
    
} else {
    // Si aucun animal n'est trouvé, afficher un message
    resultsDiv.textContent = 'Aucun animal trouvé.';
}
});