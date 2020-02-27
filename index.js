$(function(){

    /** add a list of suject */
    var list1 = ["Quoi qu'on dise concernant","Tant que durera ",
        "Dans le cas particulier de","En ce qui concerne",
        "Quelle que soit","Du fait de","Si vous voulez mon avis concernant",
        "Afin de circonvenir à ","Compte tenu de","Pour réagir face à","Malgré"];

    /** add a list of verb */
    var list2 = ["la crise ", "l'inertie ","l'austérité ",
        "la degradation ","cette rigueur ","la dualité ",
        "la baisse ","cette infletion ", "complexité de ",
        "l'ambiance actuelle",'cette rigueur actuelle'];

    /** add a list of complement */
    var list3 = ["général","conjoncturelle","induite","contextuelle","observéé","de la situation",
        "de confiance","que nous constatons","ces dernier temps"," avec beaucoup de recul","conjoncturelle"];

    /** fuction for return a word  */
    function random(list) {
        var index = Math.ceil( Math.random() * 10 );
        var mot = list[index];
        return mot;
    }

    /** add event on the click button  */
    $('#submit').click( function (){
        var mot1 = random(list1);
        var mot2 = random(list2);
        var mot3 = random(list3);
        
        let phrase = mot1 +' '+ mot2 + ' ' + mot3 +' .'
        /** display a sentence */
        console.log(phrase)
        $('#citation').text(phrase);

    });
})

