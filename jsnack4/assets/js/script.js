/*
Esercizio (oggetti, array, forEach con splice oppure filter)
Un oggetto rappresenta una finestra di un browser e contiene due campi: 
un array di tab aperte
un numero che indica l’indice della tab aperta nell’array:
{
    “tab”: [“Facebook”, “GitHub”, “Gmail”],
    “activeTab”: 0
}
Il software deve guardare se c’è un social aperto ed eliminarlo dalle tab.
Nel caso la tab fosse attiva, deve attivare la successiva.
*/

$(document).ready(function() {

   const browser = {
      site: ['twitter', 'github', 'calendar', 'gmail', 'instagram', 'reddit'],
      activetab: 3
   }

   const newBrowser = closeSocial(browser);

});

function closeSocial(tabs) {

    const socials = ['facebook', 'twitter', 'instagram', 'reddit', 'messenger', 'whatsapp', 'telegram']

    const newTabs = tabs.map((tab) => {
        tab.site.forEach((site) => {
            if(socials.)
        });
    })
}