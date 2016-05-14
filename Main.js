//	*******************************************************************
//
//	Fichier principal : Démarrage du programme
//			->	Initialisation du programme
//			->	Lancement de nools
//			->	Création des équipements
//
//	*******************************************************************
var fs = require("fs")
var vm = require('vm')

global.consigne_temperature = 19;
global.consigne_luminosite = 500;
global.consigne_co2 = 300;
global.retour = "";



react = function(obj){

		consigneTemp.setValue(obj.consigneTemp);
		consigneLum.setValue(obj.consigneLum);
		consigneCo2.setValue(obj.consigneCo2);

		captTemperatureExt.setValue(obj.captTemperatureExt);
		captTemperatureIntSalle.setValue(obj.captTemperatureIntSalle);
		captTemperatureIntChambre.setValue(obj.captTemperatureIntChambre);
		captTemperatureIntSdb.setValue(obj.captTemperatureIntSdb);

		captLuminositeIntSalle.setValue(obj.captLuminositeIntSalle);
		captLuminositeIntChambre.setValue(obj.captLuminositeIntChambre);
		captLuminositeExt.setValue(obj.captLuminositeExt);

		captCO2.setValue(obj.captCO2);

		moment.setValue(obj.moment);

		session.modify(consigneTemp);
		session.modify(consigneLum);
		session.modify(consigneCo2);
		session.modify(captTemperatureExt);
		session.modify(captTemperatureIntSalle);
		session.modify(captTemperatureIntChambre);
		session.modify(captTemperatureIntSdb);
		session.modify(captLuminositeIntSalle);
		session.modify(captLuminositeIntChambre);
		session.modify(captLuminositeExt);
		session.modify(captCO2);
		session.modify(moment);

	/*	function retour(){
			return "{'chauffageSdb':"+chauffageSdb.getValue()+", 'chauffageChambre':"+chauffageChambre.getValue()+", 'chauffageSalle':"+chauffageSalle.getValue()+", 'lumiereChambre':"+lumiereChambre.getValue()+", 'lumiereSalle':"+lumiereSalle.getValue()+", 'voletSalle':"+"voletSalle.getValue()"+", 'voletChambre':"+"voletChambre.getValue()"+", 'vmc':"+vmc.getValue()+"}";
		}

		setTimeout(retour, 1000);*/
		var promise=new Promise(function(resolve,reject){
			window.setTimeout(function(){
				resolve("{'chauffageSdb':"+chauffageSdb.getValue()+", 'chauffageChambre':"+chauffageChambre.getValue()+", 'chauffageSalle':"+chauffageSalle.getValue()+", 'lumiereChambre':"+lumiereChambre.getValue()+", 'lumiereSalle':"+lumiereSalle.getValue()+", 'voletSalle':"+"voletSalle.getValue()"+", 'voletChambre':"+"voletChambre.getValue()"+", 'vmc':"+vmc.getValue()+"}");
			},3000);
		});
	}





// Correspondance entre nools et ce fichier JS
var nools           = require ('nools');
var ruleFilePath    = __dirname + '/test.nools';
var flow            = nools.compile(ruleFilePath);
var session         = flow.getSession();

/*
 *	Création des objets
 *		-> Chauffage   (x3) : SdB, Salle, Chambre 
 *		-> Lumière     (x2)	: 	   Salle, Chambre
 *		-> Température (x4)	: SdB, Salle, Chambre, Extérieur
 *		-> Luminosité  (x3) : 	   Salle, Chambre, Extérieur
 *		-> Volet 	   (x2) : 	   Salle, Chambre
 *		-> CO2         (x1) : 	   Salle
 *		-> VMC 		   (x1) : 	   Salle
 *		-> moment 	   (x1)
 *		-> Consigne    (x3) : Température, Luminosité, CO2
 */

 /* ==> Changer les id des objets <== */
var Chauffage                         = flow.getDefined('chauffage');
session.assert(chauffageSdb           = new Chauffage (consigne_temperature, 'id', 'sdb'));
session.assert(chauffageSalle         = new Chauffage (consigne_temperature, 'id', 'salle'));
session.assert(chauffageChambre       = new Chauffage (consigne_temperature, 'id', 'chambre'));

var Lumiere                           = flow.getDefined('lumiere');
session.assert(lumiereSalle           = new Lumiere ('down', 'id', 'salle'));
session.assert(lumiereChambre         = new Lumiere ('down', 'id', 'chambre'));

var CaptTemperature                   = flow.getDefined('captTemperature');
session.assert(captTemperatureIntSdb     = new CaptTemperature(consigne_temperature, 'sdb'));
session.assert(captTemperatureIntSalle   = new CaptTemperature(consigne_temperature, 'salle'));
session.assert(captTemperatureIntChambre = new CaptTemperature(consigne_temperature, 'chambre'));
session.assert(captTemperatureExt     = new CaptTemperature(consigne_temperature, 'exterieur'));

var CaptLuminosite                    = flow.getDefined('captLuminosite');
session.assert(captLuminositeExt      = new CaptLuminosite(consigne_luminosite, 'exterieur'));
session.assert(captLuminositeIntSalle    = new CaptLuminosite(consigne_luminosite, 'salle'));
session.assert(captLuminositeIntChambre  = new CaptLuminosite(consigne_luminosite, 'chambre'));

var Volet                             = flow.getDefined('volet');
session.assert(voletSalle             = new Volet('up', 'id', 'salle'));
session.assert(voletChambre           = new Volet('up', 'id', 'chambre'));

var Consigne                          = flow.getDefined('consigne');
session.assert(consigneTemp           = new Consigne(consigne_temperature, consigne_temperature, consigne_temperature, 'temperature'));
session.assert(consigneLum            = new Consigne(consigne_luminosite, consigne_luminosite, consigne_luminosite, 'luminosite'));
session.assert(consigneCo2            = new Consigne(consigne_co2, consigne_co2, consigne_co2, 'co2'));

var VMC                               = flow.getDefined('VMC');
session.assert(vmc                    = new VMC(1));

var CaptCO2                           = flow.getDefined('captCO2');
session.assert(captCO2                = new CaptCO2(400));

var Moment							  = flow.getDefined('moment');
session.assert(moment 				  = new Moment('jour'));


function afficherData() {
	/*
	console.log("--------- Salle ---------");
	console.log("Chauffage   => "+chauffageSalle.getValue());
	console.log("            => "+chauffageSalle.getEtat());
	console.log("Lumiere     => "+ lumiereSalle.getValue());
	console.log("Température => "+ captTemperatureSalle.getValue());
	console.log("Luminosité  => "+captLuminositeSalle.getValue());
	console.log("Volet       => "+voletSalle.getValue());
	console.log("Moment      => "+ moment.getValue());
	*/
	console.log("Consigne Température  => "+consigneTemp.getValue('sdb'));
	console.log("Consigne Luminosité => "+consigneLum.getValue('chambre'));
}


var obj = "{'consigneTemp':30,'consigneLum':40,'consigneCo2';41,'captLuminositeExt':32,'captTemperatureIntSalle':11,'captTemperatureIntChambre':14,'captTemperatureIntSdb':5,'captLuminositeIntSalle':11,'captTemperatureIntChambre':12,'captLuminositeExt':121,'captCO2':12,'moment':'soir'}";




// Démarrage du raisonneur
session.matchUntilHalt().then(function(){});

//setTimeout(afficherData, 1000);

react(obj).then(function(valeur){
	console.log(valeur)
});