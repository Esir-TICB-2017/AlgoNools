//	*******************************************************************
//
//	Fonctions externes pour travailler via les API nécessaires
//
//	*******************************************************************
	react = function(obj, session){

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

		var promise=new Promise(function(resolve,reject){
			window.setTimeout(function(){
				resolve("{'chauffageSdb':"+chauffageSdb.getValue()+", 'chauffageChambre':"+chauffageChambre.getValue()+", 'chauffageSalle':"+chauffageSalle.getValue()+", 'lumiereChambre':"+lumiereChambre.getValue()+", 'lumiereSalle':"+lumiereSalle.getValue()+", 'voletSalle':"+"voletSalle.getValue()"+", 'voletChambre':"+"voletChambre.getValue()"+", 'vmc':"+vmc.getValue()+"}");
			});
		});
		 return promise;
	}

//exports.react = react;