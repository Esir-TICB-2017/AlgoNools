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
vm.runInThisContext(fs.readFileSync(__dirname + "/Functions.js"))

// Correspondance entre nools et ce fichier JS
var nools           = require ('nools');
var ruleFilePath    = __dirname + '/rules.nools';
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
session.assert(chauffageSdb           = new Chauffage (20, 'id', 'sdb'));
session.assert(chauffageSalle         = new Chauffage (20, 'id', 'salle'));
session.assert(chauffageChambre       = new Chauffage (20, 'id', 'chambre'));

var Lumiere                           = flow.getDefined('lumiere');
session.assert(lumiereSalle           = new Lumiere ('down', 'id', 'salle'));
session.assert(lumiereChambre         = new Lumiere ('down', 'id', 'chambre'));

var CaptTemperature                   = flow.getDefined('captTemperature');
session.assert(captTemperatureSdb     = new CaptTemperature(20, 'sdb'));
session.assert(captTemperatureSalle   = new CaptTemperature(20, 'salle'));
session.assert(captTemperatureChambre = new CaptTemperature(20, 'chambre'));
session.assert(captTemperatureExt     = new CaptTemperature(20, 'exterieur'));

var CaptLuminosite                    = flow.getDefined('captLuminosite');
session.assert(captLuminositeExt      = new CaptLuminosite(500, 'exterieur'));
session.assert(captLuminositeSalle    = new CaptLuminosite(500, 'salle'));
session.assert(captLuminositeChambre  = new CaptLuminosite(500, 'chambre'));

var Volet                             = flow.getDefined('volet');
session.assert(voletSalle             = new Volet('up', 'id', 'salle'));
session.assert(voletChambre           = new Volet('up', 'id', 'chambre'));

var Consigne                          = flow.getDefined('consigne');
session.assert(consigneTemp           = new Consigne(20, 20, 20, 'temperature'));
session.assert(consigneLum            = new Consigne(500, 500, 500, 'luminosite'));
session.assert(consigneCo2            = new Consigne(200, 200, 200, 'co2'));

var VMC                               = flow.getDefined('VMC');
session.assert(vmc                    = new VMC(1));

var CaptCO2                           = flow.getDefined('captCO2');
session.assert(captCO2                = new CaptCO2(400));

var Moment							  = flow.getDefined('moment');
session.assert(moment 				  = new Moment('matin'));


// Démarrage du raisonneur
session.matchUntilHalt().then(function(){});