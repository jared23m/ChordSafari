export const keySigNames = ["Cmaj/Amin", 
"Dbmaj/Bbmin", 
"Dmaj/Bmin", 
"Ebmaj/Cmin", 
"Emaj/C#min", 
"Fmaj/Dmin", 
"Gbmaj/Ebmin", 
"Gmaj/Emin",
"Abmaj/Fmin",
"Amaj/F#min",
"Bbmaj/Gmin",
"Bmaj/G#min"];

export const chordRelativeRoots = [
    "I",
    "ii",
    "iii",
    "IV",
    "V",
    "vi",
    "viidim"
]

export const comboList = [
    ['1'],
    ['11','12'],
    ['111', '112', '121', '122', '123'],
    ['1111', '1112', '1121', '1122', '1211', '1212', '1221', '1222', '1123', '1213',  '1223', '1231', '1232', '1233']
]

export function comboCheckCreator(chordAmount){
    const correctComboSection = comboList[chordAmount - 1];
    const comboCheckObject = [];
    correctComboSection.forEach((combo) =>{
        comboCheckObject[combo] = false;
    })

    return comboCheckObject;
}
