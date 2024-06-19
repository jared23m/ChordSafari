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

export const keySigIndex = [
    ["Cmaj", "Dmin", 'Emin', 'Fmaj', 'Gmaj', 'Amin', 'Bdim'],
    ['Dbmaj','Ebmin', 'Fmin', 'Gbmaj', 'Abmaj', "Bbmin", 'Cdim'],
    ['Dmaj', 'Emin', 'F#min', 'Gmaj', 'Amaj', 'Bmin', 'C#dim'],
    ['Ebmaj', 'Fmin', 'Gmin', 'Abmaj', 'Bbmaj', 'Cmin', 'Ddim'],
    ['Emaj', 'F#min', 'G#min', 'Amaj', 'Bmaj', 'C#min', 'D#dim'],
    ['Fmaj', 'Gmin', 'Amin', 'Bbmaj', 'Cmaj', 'Dmin', 'Edim'],
    ['Gbmaj', 'Abmin', 'Bbmin', 'Cbmaj', 'Dbmaj', 'Ebmin', 'Fdim'],
    ['Gmaj', 'Amin', 'Bmin', 'Cmaj', 'Dmaj', 'Emin', 'F#dim'],
    ['Abmaj', 'Bbmin', 'Cmin', 'Dbmaj', 'Ebmaj', 'Fmin', 'Gdim'],
    ['Amaj', 'Bmin', 'C#min', 'Dmaj', 'Emaj', 'F#min', 'G#dim'],
    ['Bbmaj', 'Cmin', 'Dmin', 'Ebmaj', 'Fmaj', 'Gmin', 'Adim'],
    ['Bmaj', 'C#min', 'D#min', 'Emaj', 'F#maj', 'G#min', 'A#dim'],
    
]

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
