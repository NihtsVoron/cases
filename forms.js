function myFunction() {
    const text = document.getElementById('text-enter').value;
    if (!text) return;
    let func = new RussianName(text);
    const objCases = {
        nominative:  func.fullName(func.gcaseIm),
        genitive: func.fullName(func.gcaseRod),
        dative:  func.fullName(func.gcaseDat),
        accusative:  func.fullName(func.gcaseVin),
        instrumentative:  func.fullName(func.gcaseTvor),
        prepositional: func.fullName(func.gcasePred),
    }

    document.getElementById('nominative').value = objCases.nominative;
    document.getElementById('genitive').value = objCases.genitive;
    document.getElementById('dative').value = objCases.dative;
    document.getElementById('accusative').value = objCases.accusative;
    document.getElementById('instrumentative').value = objCases.instrumentative;
    document.getElementById('prepositional').value = objCases.prepositional;

    return console.log(objCases);
};