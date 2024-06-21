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
            let returnArrr = [];
            const combos = getCombinations(arr, chordAmount - 1);
            arr.forEach((symbol)=>{
                combos.forEach((combo)=>{
                    let newCombo = [symbol, ...combo];
                    returnArrr.push(newCombo);
                })
            })
            return returnArrr;
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
        console.log(combinations);
     }, [props.chords, props.numberOfChords, props.keySig, props.combos])

    return (
        <p>ProgressionList</p>
    )
}