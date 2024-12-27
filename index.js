calcSPD();

function calcSPD() {
    let submitBtn = document.getElementById(`submitBtn`);
    let result = document.getElementById(`result`);

    submitBtn.onclick = function() {
        let baseSPD = Number(document.getElementById(`baseSPD`).value);
        let percSPD = Number(document.getElementById(`percSPD`).value);
        let flatSPD = Number(document.getElementById(`flatSPD`).value);

        let finalSPD;

        let superimpositionDDD = Number(document.getElementById(`forDDDS`).value);
            if (superimpositionDDD == 0) {
                superimpositionDDD = 0;
            } else {
                superimpositionDDD = (superimpositionDDD * 2) + 14;
            };
        let bronyaSundaySkill = Number(document.getElementById(`BronyaSunday`).value);
        let sparkleSkill = Number(document.getElementById(`Sparkle`).value);
        let AATotal = Number(document.getElementById(`otherAA`).value);
        
        console.log('baseSPD, percSPD, flatSPD, superimpositionDDD, bronyaSundaySkill, sparkleSkill, AATotal: ', baseSPD, percSPD, flatSPD, superimpositionDDD, bronyaSundaySkill, sparkleSkill, AATotal);

        let eagleChecked = document.getElementById(`isEagle`).checked;
        let vonwacqChecked = document.getElementById(`isVonwacq`).checked;
        let robinChecked = document.getElementById(`RobinUlt`).checked;
        let eagle, vonwacq, robin;
        
        console.log('eagleChecked, vonwacqChecked, robinChecked: ', eagleChecked, vonwacqChecked, robinChecked);

        if (eagleChecked == true) {
            eagle = 25;
        } else {
            eagle = 0;
        };
        if (vonwacqChecked == true) {
            vonwacq = 40;
        } else {
            vonwacq = 0;
        };
        if (robinChecked == true) {
            robin = 100;
        } else {
            robin = 0;
        };
        
        let finalAA;

        console.log('eagle, vonwacq, robin: ', eagle, vonwacq, robin);

        finalSPD = (baseSPD * (1 + (percSPD/100)) + flatSPD);
        finalAA = ((finalSPD * (3/200)) * 10000) + ((eagle + vonwacq + superimpositionDDD + robin + AATotal) * 100) + ((bronyaSundaySkill + sparkleSkill) * 10000);

        console.log(`SPD: ${finalSPD}, ACTION: ${finalAA}.`);

        finalResult = Math.floor(finalAA/10000);

        console.log('Total actions: ' + finalResult);

        result.textContent = `Total actions: ${finalResult}`;

        let effSPD = finalAA/150;
        
        console.log(`Effective SPD: ${effSPD}`);
    };
};