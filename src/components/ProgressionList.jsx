import { useState, useEffect } from "react";
import { chordRelativeRoots } from "../musicTheory";

export default function ProgressionList(props){

     // initializes states
     const [everyCombination, setEveryCombination] = useState([]);

     function getCombinations(arr, chordAmount) {
        if (chordAmount < 1){
            console.log("ChordAmountError. Chord Amount is less than 1.");
            return
        } else if (chordAmount == 1) {
            let returnArr = [];
            arr.forEach((symbol)=>{
                returnArr.push([symbol]);
            })
            return returnArr;
        } else {
            let returnArr = [];
            const combos = getCombinations(arr, chordAmount - 1);
            arr.forEach((symbol)=>{
                combos.forEach((combo)=>{
                    let newCombo = [symbol, ...combo];
                    returnArr.push(newCombo);
                })
            })
            return returnArr;
        }
     }

     function filterByMustInclude(combinations, chords){
        let potentialMustIncludedChords = [];
        const currentChords = chords;
        chordRelativeRoots.forEach((symbol) =>{
            if (currentChords[symbol].mustInclude){
                potentialMustIncludedChords.push(symbol);
            }
        });
        let returnArr = combinations;
        potentialMustIncludedChords.forEach((symbol)=>{
            returnArr = returnArr.filter((combination) =>{
                const found = combination.find((comboSymbol)=>{
                    return symbol == comboSymbol;
                })
                return found;
            })
        })

        return returnArr;
     }

     function filterByPosition(combinations, chords){
        let potentialPositionChords = [];
        const currentChords = chords;
        chordRelativeRoots.forEach((symbol) =>{
            if (currentChords[symbol].position > 0){
                potentialPositionChords.push(symbol);
            }
        });
        let returnArr = combinations;
        potentialPositionChords.forEach((symbol)=>{
            const positionNumber = currentChords[symbol].position - 1;
            returnArr = returnArr.filter((combination) =>{
                return (combination[positionNumber] == symbol);
            })
        })

        return returnArr;
     }

     function filterByProgCombo(combinations, progCombos){
        const progComboKeys = Object.keys(progCombos);
        const selectedProgCombos = progComboKeys.filter((key)=>{
            return progCombos[key];
        })
        const splitProgCombos = selectedProgCombos.map((progCombo)=>{
            return (progCombo.split(''));
        })
        let returnArr = [];

        if (selectedProgCombos.length == 0){
            return combinations;
        } else {
            const progComboFinalIndex = selectedProgCombos[0].length - 1;

            splitProgCombos.forEach((progCombo) =>{
                let newCombinations = combinations;
                progCombo.forEach((slot, i) =>{
                    const differenceUntilFinalIndex = progComboFinalIndex - i;
                    for (let j = 1; j <= differenceUntilFinalIndex; j++){
                        if (parseInt(slot) == parseInt(progCombo[i+j])){
                            newCombinations = newCombinations.filter((progression)=>{
                                return (progression[i] == progression[i+j])
                            })
                        } else {
                            newCombinations = newCombinations.filter((progression)=>{
                                return (progression[i] != progression[i+j])
                            })
                        }
                    }
                })

                returnArr = [...newCombinations, ...returnArr];
            })

           return returnArr;
        }

     }

     useEffect(()=>{
        // creates initial combination bank, just taking into account which chords are checked
        // 'include' and how many chords there should be
        let potentialIncludedChords = [];
        const currentChords = props.chords;
        chordRelativeRoots.forEach((symbol) =>{
            if (currentChords[symbol].include){
                potentialIncludedChords.push(symbol);
            }
        });
        const combinations = getCombinations(potentialIncludedChords, props.numberOfChords);
        const mustInclude = filterByMustInclude(combinations, currentChords);
        const position = filterByPosition(mustInclude, currentChords);
        const progCombo = filterByProgCombo(position, props.combos);
        console.log('progCombo', progCombo);

     }, [props.chords, props.numberOfChords, props.keySig, props.combos])

    return (
        <p>ProgressionList</p>
    )
}