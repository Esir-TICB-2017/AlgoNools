//	*******************************************************************
//
//	Fonctions externes pour travailler via les API nécessaires
//
//	*******************************************************************

//import Math.Random;



// Fonction de test
function afficher(valeur){
	console.log(valeur);
}

// Fonction pour renvoyer un entier aléatoire
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

// Fonction de mise à jour de la consigne de luminosité + affichage
function updateConsLum() {
	consigne.setLum(getRandomInt(250, 750));
	afficher("Consigne = "+consigne.getLum());
}