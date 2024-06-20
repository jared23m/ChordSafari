import { useState, useEffect } from "react";
import { chordRelativeRoots } from "../musicTheory";

export default function ProgressionList(props){

     // initializes states
     const [everyCombination, setEveryCombination] = useState([]);

     function getCombinations(arr, chordAmount) {
        let result = [];
    
        function helper(start, combo) {
            if (combo.length === chordAmount) {
                result.push([...combo]);
                return;
            }
    
            for (let i = start; i < arr.length; i++) {
                combo.push(arr[i]);
                helper(i, combo);
                combo.pop();
            }
        }
    
        helper(0, []);
        return result;
    }

     useEffect(()=>{
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