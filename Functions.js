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

// Fonction pour mettre à jour à intervalle régulier, les actionneurs
function updateActionneurs() {
	afficher("Volet = "+volet.getValue());
	afficher("Lumiere = "+lumiere.getValue());
	afficher("-----------------------");
}

// Fonction pour mettre à jour à intervalle régulier les capteurs
function updateCapteurs() {
	updateCapteurTemperature();
	updateCapteurLuminosite();
	updateCapteurCo2();
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
	afficher("CAPTEURS DE TEMPERATURE : \n");
	afficher("Etat capteur de température intérieur = "+captTemperatureInt.getEtat());
	afficher("Etat capteur de température extérieur = "+captTemperatureExt.getEtat());
	afficher("Valeur capteur de température intérieur = "+captTemperatureInt.getValue());
	afficher("Valeur capteur de température extérieur = "+captTemperatureExt.getValue());
	afficher("\n");
}

function updateCapteurLuminosite(){
	captLuminositeExt.setValue(getRandomInt(0,2000));
	captLuminositeExt.setEtat(getRandomBoolean());
	captLuminositeInt.setValue(getRandomInt(200,800));
	captLuminositeInt.setEtat(getRandomBoolean());
	afficher("CAPTEURS DE LUMINOSITE : \n");
	afficher("Etat capteur de luminosité intérieur = "+captLuminositeInt.getEtat());
	afficher("Etat capteur de luminosité extérieur = "+captLuminositeExt.getEtat());
	afficher("Valeur capteur de luminosite intérieur = " + captLuminositeInt.getValue());
	afficher("Valeur capteur de luminosité extérieur = "+captLuminositeExt.getValue());
	afficher("\n");
}


function updateCons() {
	consigne.setLum(getRandomInt(0,1000));
	consigne.setTemp(getRandomInt(0,30));
	consigne.setNuit(getRandomInt(0,1000));
	consigne.setJourSuf(getRandomInt(0,1000));
	consigne.setTempSuf(getRandomInt(0,30));
	consigne.setLumSuf(getRandomInt(0,1000));
	consigne.setCo2(getRandomInt(0,1000));
	consigne.setLumFort(getRandomInt(0,1000));

	afficher("Consigne = ConsigneLum : " +consigne.getLum()+ "\nConsigneTemp : " +consigne.getTemp() + 
	"\nConsigneNuit : " + consigne.getNuit()+ " \nConsigneJourSuf : " + consigne.getJourSuf() + 
	"\nConsigneTempSuf : "+ consigne.getTempSuf() + " \nConsigneLumSuf : " + consigne.getLumSuf() + 
	"\nConsigneCo2 : " + consigne.getCo2()  + "\nConsigneLumFort : " + consigne.getLumFort());
}

function updateCapteurCo2(){
	captCO2.setValue(getRandomInt(0,1000));
	afficher("CaptCO2 : " + captCO2.getValue());
}