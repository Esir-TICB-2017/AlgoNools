//	*******************************************************************
//
//	Fichier principal : Démarrage du programme
//			->	Initialisation du programme
//			->	Lancement de nools
//			->	Création des équipements
//
//	*******************************************************************

var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();



var fs = require("fs")
var vm = require('vm')
vm.runInThisContext(fs.readFileSync(__dirname + "/Functions.js"))


// Correspondance entre nools et ce fichier JS
var nools           = require ('nools');
var ruleFilePath    = __dirname + '/Main_raisonneur.nools';
var flow            = nools.compile(ruleFilePath);
var session         = flow.getSession();



// Création d'un chauffage
var Chauffage       = flow.getDefined('chauffage');
session.assert(chauffage = new Chauffage (true, 0));
// Création d'une lumière
var Lumiere         = flow.getDefined('lumiere');
session.assert(lumiere = new Lumiere (50));
// Création d'un capteur de température extérieur et intérieur
var CaptTemperature = flow.getDefined('captTemperature');
session.assert(captTemperatureExt = new CaptTemperature('exterieur', true, 19));
session.assert(captTemperatureInt = new CaptTemperature('interieur', true, 21));
// Création d'un capteur de luminosité extérieur et intérieur
var CaptLuminosite  = flow.getDefined('captLuminosite');
session.assert(captLuminositeExt = new CaptLuminosite('exterieur', true, 50));
session.assert(captLuminositeInt = new CaptLuminosite('interieur', true, 500));
// Création d'un volet
var Volet           = flow.getDefined('volet');
session.assert(volet = new Volet(100));
// Création de l'objet de consigne
var Consigne        = flow.getDefined('consigne');
session.assert(consigne = new Consigne());
// Création de l'objet VMC
var VMC				= flow.getDefined('VMC');
session.assert(vmc = new VMC(true, 2));
// Création du capteur de CO2
var CaptCO2			= flow.getDefined('captCO2');
session.assert(captCO2 = new CaptCO2(400));


// Démarrage du raisonneur
session.matchUntilHalt()
    .then(
        function(){
        },
        function(err){
            console.log(err.stack);
        }
    );


	


