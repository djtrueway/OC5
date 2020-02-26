$(function () {
    wordEnglish = false
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

    /**
     *  citation en anglais
     *  add a list of suject */
    const list4 = ["Someone’s sitting in the shade today", "Never give up . Today is hard",
        "Your time is limited", "Nothing will work",
        "What would you do", "It’s not about ideas", "It is hard to fail",
        "It is our choices", "If you want to live a happy life", "You’re not obligated to win", "Move fast and break things"];

    /** add a list of verb */
    const list5 = ["because someone planted a tree ", "tomorrow will be worse ", "so don’t waste it",
        "unless ", "if ", "who ",
        "but it is worse ", "that show what we truly are ", "tie it to a goal ",
        "You’re obligated to keep trying", 'Unless you are breaking stuff'];

    /** add a list of complement */
    const list6 = ["a long time ago", "but the day after tomorrow will be sunshine", "living someone else’s life", "you do", "you were not afraid",
        "It’s about making ideas happen", "never to have tried to succeed", "far more than our abilities", " not to people or things", "To the best you can do everyday"
        ,"you are not moving fast enough"];

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
                    // citation en français
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
                    //citation en anglais
                    case 2:
                        target.innerText = ""
                        for (let i = 0; i < counter; i++) {
                            var mot1 = random(list4);
                            var mot2 = random(list5);
                            var mot3 = random(list6);

                            let phrase =  (i+1) + ' ' + mot1 + ' ' + mot2 + ' ' + mot3 + ' .'

                            console.log(phrase)
                            console.log(target)
                            target.innerHTML += "<br>" + phrase
                        }
                        break;

                    default :
                        alert("s'il vous plait tapez 1 pour le francais et 2 pour l'anglais")
                        break;   
                }

            }
            else {
                alert('tapez un nombre entre 1 à 5 !')
            }

            //console.log("counter",counter);
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

