/* JS data types: undefined, boolean, object */


/*let matn = "JavaScript";   */         /* string */
/*let raqam = 45 ;   */                 /* number */
/*let soz;  */                          /* undefined */
/*let rost = 45==45?true:false  ;*/     /* boolean */
/*let arrayObject = [45,12,"text","matn",true,false];*/
/*let oddiyObject = {ismi:"Natasha",familiyasi:"Koroleva",yoshi:17}   */

/*console.log(oddiyObject.ismi);*/

/* functions in JS */
/* let savatcha = [];   */           /* "length" - malumotlar sonini ko`rsatib beradi*/

/*function savatchaniTekshir(uzatilganMalumot=[12,"text",true]){

    if (uzatilganMalumot.length == 0) {
        document.write("savatchaning ichida " + uzatilganMalumot.length + "ta malumot bor");
    }
    else{
        document.write("savatchaning ichida "+ uzatilganMalumot.length +"dona malumot bor")
    }
}
let container = [12,"text",true];
savatchaniTekshir();*/

/* data in JS*/

let sana = new Date();
sana.setFullYear(year)
let yil = sana.getFullYear();
let oy= sana.getMonth();
let kun = sana.getDate();
let haftaKuni = sana.getDay();
let oylar = ["yanvar","fevral","mart","aprel","may","iyun","uyul","avgust","sentabr","oktabr","nayabr","dekabr"];
let kunlar = ["Dushanba","Sekshanba","chorshanba","Payshanba","Juma","Shanba","Yakshanba"]

document.write("Bugun " + yil + "-yil" + kun + "-" +  oylar[oy] +
               ", haftaning " + kunlar[haftaKuni] + "kuni.");