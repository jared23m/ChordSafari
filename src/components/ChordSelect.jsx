import { chordRelativeRoots } from "../musicTheory";

export default function ChordSelect(props){

    function positionList(numberOfPositions){
        const positionList = [];
        for (let i = 0; i <= numberOfPositions; i++){
            positionList.push(i);
        }

        return positionList;
    }

    function renderRelativeRootFormSection(relativeRootSymbol, index){
        return (
            <div key={index}>
            <p>{relativeRootSymbol}</p>
                <label className='chordSelectLabel'>
                        <input type="checkbox" value={relativeRootSymbol} checked={props.chords[relativeRootSymbol].include} onChange={()=>{
                            const currentChords = props.chords;
                            const currentSingleChord = currentChords[relativeRootSymbol];
                            const currentInclude = currentSingleChord.include;
                            props.setChords({...currentChords, [relativeRootSymbol]: {...currentSingleChord, include: !currentInclude}});
                        }}/>
                        Include
                </label>
                <label className='chordSelectLabel'>
                        <input type="checkbox" value={relativeRootSymbol} checked={props.chords[relativeRootSymbol].mustInclude} onChange={()=>{
                            const currentChords = props.chords;
                            const currentSingleChord = currentChords[relativeRootSymbol];
                            const currentMustInclude = currentSingleChord.mustInclude;
                            props.setChords({...currentChords, [relativeRootSymbol]: {...currentSingleChord, mustInclude: !currentMustInclude}});
                        }}/>
                        Must Include
                </label>
                <label>
                Position
                        <select className='positionSelect' value={props.chords[relativeRootSymbol].position} onChange={(e) => {
                           const currentChords = props.chords;
                           const currentSingleChord = currentChords[relativeRootSymbol];
                           props.setChords({...currentChords, [relativeRootSymbol]: {...currentSingleChord, position: e.target.value}});
                            }}>
                            {positionList(props.numberOfChords).map((positionNumber) => {
                                return (
                                    <option key={positionNumber} value={positionNumber}>
                                        {!positionNumber ? 'None' : positionNumber}
                                    </option>
                                )
                            })}
                        </select>
                </label>
            </div>
        )
    }

    return (
        <div className="chordSelect">
            <form className="chordSelectForm">
                {chordRelativeRoots.map((relativeRootSymbol, index) => (
                renderRelativeRootFormSection(relativeRootSymbol, index)
                ))}
        </form>
    </div>
    )
}
