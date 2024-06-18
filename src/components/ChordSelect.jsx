export default function ChordSelect(props){

    function positionList(numberOfPositions){
        const positionList = [];
        for (let i = 0; i <= numberOfPositions; i++){
            positionList.push(i);
        }

        return positionList;
    }

    return (
        <div className="chordSelect">
            <form className="chordSelectForm">
                <label className='chordSelectLabel'>
                        <input type="checkbox" value="I" checked={props.chords["I"].include} onChange={()=>{
                            const currentChords = props.chords;
                            const currentSingleChord = currentChords["I"];
                            const currentInclude = currentSingleChord.include;
                            props.setChords({...currentChords, "I": {...currentSingleChord, include: !currentInclude}});
                        }}/>
                        Include
                </label>
                <label className='chordSelectLabel'>
                        <input type="checkbox" value="I" checked={props.chords["I"].mustInclude} onChange={()=>{
                            const currentChords = props.chords;
                            const currentSingleChord = currentChords["I"];
                            const currentMustInclude = currentSingleChord.mustInclude;
                            props.setChords({...currentChords, "I": {...currentSingleChord, mustInclude: !currentMustInclude}});
                        }}/>
                        Must Include
                </label>
                <label>
                Position
                        <select className='positionSelect' value={props.chords["I"].position} onChange={(e) => {
                           const currentChords = props.chords;
                           const currentSingleChord = currentChords["I"];
                           props.setChords({...currentChords, "I": {...currentSingleChord, position: e.target.value}});
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
            </form>
        </div>
    )
}