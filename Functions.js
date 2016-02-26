//	*******************************************************************
//
//	Fonctions externes pour travailler via les API nécessaires
//
//	*******************************************************************


// Fonction d'affichage'
function afficher(valeur){
	console.log(valeur);
}

// Fonction pour renvoyer un entier aléatoire
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

// Fonction de mise à jour de la mesure de la luminosité + affichage
function updateConsLum() {
	captLuminositeInt.setValue(getRandomInt(250,750));
}

// Fonction pour mettre à jour à intervalle régulier, les actionneurs
function updateActionneur() {
	updateCapteurTemperature();
	updateCapteurLuminosite();
	afficher("Volet = "+volet.getValue());
	afficher("Lumiere = "+lumiere.getValue());
	afficher("-----------------------");
}


function getRandomBoolean(){
	var valeur = getRandomInt(0,2);
	if(valeur == 0){
		return false;
	}
	return true;
}

function updateCapteurTemperature(){
	captTemperatureExt.setValue(getRandomInt(0,40));
	captTemperatureExt.setEtat(getRandomBoolean());
	captTemperatureInt.setValue(getRandomInt(0,40));
	captTemperatureInt.setEtat(getRandomBoolean());
	afficher("Etat capteur de température intérieur = "+captTemperatureInt.getEtat());
	afficher("Etat capteur de température extérieur = "+captTemperatureExt.getEtat());
	afficher("Valeur capteur de température intérieur = "+captTemperatureInt.getValue());
	afficher("Valeur capteur de température extérieur = "+captTemperatureExt.getValue());
}

function updateCapteurLuminosite(){
	captLuminositeExt.setValue(getRandomInt(0,40));
	captLuminositeExt.setEtat(getRandomBoolean());
	captLuminositeInt.setValue(getRandomInt(0,40));
	captLuminositeInt.setEtat(getRandomBoolean());
	afficher("Etat capteur de luminosité intérieur = "+captLuminositeInt.getEtat());
	afficher("Etat capteur de luminosité extérieur = "+captLuminositeExt.getEtat());
	afficher("Valeur capteur de luminosité intérieur = "+captLuminositeInt.getValue());
	afficher("Valeur capteur de luminosité extérieur = "+captLuminositeExt.getValue());
}


function updateCons() {
	consigne.setLum(getRandomInt(0,1000));
	consigne.setTemp(getRandomInt(0,30));
	consigne.setNuit(getRandomInt(0,1000));
	consigne.setJourSuf(getRandomInt(0,1000));
	consigne.setTempSuf(getRandomInt(0,30));
	consigne.setLumSuf()(getRandomInt(0,1000));
	consigne.setCo2(getRandomInt(0,1000));
	consigne.setLumFort(getRandomInt(0,1000));

	afficher("Consigne = ConsigneLum : " +consigne.getLum()+ " ConsigneTemp : " +consigne.getTemp() + 
	" ConsigneNuit : " + consigne.getNuit()+ " ConsigneJourSuf : " + consigne.getJourSuf() + 
	" ConsigneTempSuf : "+ consigne.getTempSuf() + " ConsigneLumSuf : " + consigne.getLumSuf() + 
	" ConsigneCo2 : " + consigne.getCo2()  + " ConsigneLumFort : " + consigne.getLumFort());	// lux
}

function updateCapteurCo2(){
	captCO2.setValue(getRandomInt(0,1000));
	afficher("CaptCO2 : " + captCO2.getValue());
}