//	*******************************************************************
//
//	Fonctions externes pour travailler via les API nécessaires
//
//	*******************************************************************

// Fonction d'affichages
function afficher(valeur){
	console.log(valeur);
}

// Fonction pour renvoyer un entier aléatoire
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

// Fonction pour mettre à jour à intervalle régulier, les actionneurs
function updateActionneurs() {
	afficher("Volet   = "+volet.getValue());
	afficher("Lumiere = "+lumiere.getValue());
	afficher("-----------------------");
}

// Fonction pour mettre à jour à intervalle régulier les capteurs
function updateCapteurs() {
	updateCapteurTemperature();
	updateCapteurLuminosite();
	updateCapteurCo2();
}

// Générateur aléatoire de booléen
function getRandomBoolean(){
	var valeur = getRandomInt(0,2);
	if(valeur == 0){
		return false;
	}
	return true;
}

// Fonction de mise à jour des capteurs de température
function updateCapteurTemperature(){
	captTemperatureExt.setValue(getRandomInt(0,40));
	captTemperatureExt.setEtat(getRandomBoolean());
	captTemperatureInt.setValue(getRandomInt(0,40));
	captTemperatureInt.setEtat(getRandomBoolean());
	afficher("CAPTEURS DE TEMPERATURE : \n");
	afficher("Etat capteur de température intérieur   = "+captTemperatureInt.getEtat());
	afficher("Etat capteur de température extérieur   = "+captTemperatureExt.getEtat());
	afficher("Valeur capteur de température intérieur = "+captTemperatureInt.getValue());
	afficher("Valeur capteur de température extérieur = "+captTemperatureExt.getValue());
	afficher("\n");
}

// Fonction de mise à jour des capteurs de luminosité
function updateCapteurLuminosite(){
	captLuminositeExt.setValue(getRandomInt(0,2000));
	captLuminositeExt.setEtat(getRandomBoolean());
	captLuminositeInt.setValue(getRandomInt(200,800));
	captLuminositeInt.setEtat(getRandomBoolean());
	afficher("CAPTEURS DE LUMINOSITE : \n");
	afficher("Etat capteur de luminosité intérieur   = "+captLuminositeInt.getEtat());
	afficher("Etat capteur de luminosité extérieur   = "+captLuminositeExt.getEtat());
	afficher("Valeur capteur de luminosite intérieur = "+captLuminositeInt.getValue());
	afficher("Valeur capteur de luminosité extérieur = "+captLuminositeExt.getValue());
	afficher("\n");
}

// Fonction de mise à jour des constantes
function updateCons() {
	consigne.setLum(getRandomInt(0,1000));
	consigne.setTemp(getRandomInt(0,30));
	consigne.setNuit(getRandomInt(0,1000));
	consigne.setJourSuf(getRandomInt(0,1000));
	consigne.setTempSuf(getRandomInt(0,30));
	consigne.setLumSuf(getRandomInt(0,1000));
	consigne.setCo2(getRandomInt(0,1000));
	consigne.setLumFort(getRandomInt(0,1000));

	afficher("CONSIGNES : \n");
	afficher("ConsigneLum    : "+consigne.getLum());
	afficher("ConsigneTemp   : "+consigne.getTemp());
	afficher("ConsigneNuit   : "+consigne.getNuit());
	afficher("ConsigneJourSuf: "+consigne.getJourSuf());
	afficher("ConsigneTempSuf: "+consigne.getTempSuf());
	afficher("ConsigneLumSuf : "+consigne.getLumSuf());
	afficher("ConsigneLumSuf : "+consigne.getLumSuf());
	afficher("ConsigneCo2    : "+consigne.getCo2());
	afficher("ConsigneLumFort: "+consigne.getLumFort());
}

// Fonction de mise à jour du capteur de CO2
function updateCapteurCo2(){
	captCO2.setValue(getRandomInt(0,1000));
	afficher("CaptCO2 : " + captCO2.getValue());
}