$(function () {

    /** add a list of suject */
    const list1 = ["Quoi qu'on dise concernant", "Tant que durera ",
        "Dans le cas particulier de", "En ce qui concerne",
        "Quelle que soit", "Du fait de", "Si vous voulez mon avis concernant",
        "Afin de circonvenir à ", "Compte tenu de", "Pour réagir face à", "Malgré"];

    /** add a list of verb */
    const list2 = ["la crise ", "l'inertie ", "l'austérité ",
        "la degradation ", "cette rigueur ", "la dualité ",
        "la baisse ", "cette infletion ", "complexité de ",
        "l'ambiance actuelle", 'cette rigueur actuelle'];

    /** add a list of complement */
    const list3 = ["général", "conjoncturelle", "induite", "contextuelle", "observéé", "de la situation",
        "de confiance", "que nous constatons", "ces dernier temps", " avec beaucoup de recul", "conjoncturelle"];

    /** fuction for return a word  */
    function random(list) {
        var index = Math.ceil(Math.random() * 10);
        var mot = list[index];
        return mot;
    }
    function afficheCitation() {
        const target =   document.querySelector('#citation');

        var counter = parseInt(prompt("le nombre de citations générées"))

            if (!isNaN(counter)) {

                var typeDeCitation = parseInt(prompt("choisir le type de citation 1 pour le francais 2 pour l'anglais."))

                switch (typeDeCitation) {

                    case 1:
                        target.innerText = ""
                        for (let i = 0; i < counter; i++) {
                            var mot1 = random(list1);
                            var mot2 = random(list2);
                            var mot3 = random(list3);

                            let phrase =  (i+1) + ' ' + mot1 + ' ' + mot2 + ' ' + mot3 + ' .'

                            console.log(phrase)
                            console.log(target)
                            target.innerHTML += "<br>" + phrase
                        }
                        break;

                    case 2:
                        alert('anglais')
                        break;

                    default :
                        alert("s'il vous plait tapez 1 pour le francais et 2 pour l'anglais")
                        break;   
                }

            }
            else {
                alert('tapez un nombre entre 1 à 5 !')
            }

            console.log("counter",counter);
            setTimeout(afficheQuitter, 100);

    }

    function afficheQuitter(){

        var answer;
        answer = prompt("voulez vous quitter le jeu ?");
        if (answer !== 'oui') afficheCitation();

    }
    document.querySelector('#submit').onclick = () => {
       afficheCitation()
    };
})

