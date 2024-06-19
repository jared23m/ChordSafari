import KeyAndNumber from './components/KeyAndNumber'
import ChordSelect from './components/ChordSelect'
import ComboSelect from './components/ComboSelect'
import ProgressionList from './components/ProgressionList'
import { useState, useEffect} from 'react'
import { chordRelativeRoots, comboCheckCreator } from './musicTheory'

function App() {

  // initialization of all states
  const [keySig, setKeySig] = useState("Cmaj/Amin");
  const [numberOfChords, setNumberOfChords] = useState(4);
  const [chords, setChords] = useState({
    I: {include: true, mustInclude: false, position: 0},
    ii: {include: true, mustInclude: false, position: 0},
    iii: {include: true, mustInclude: false, position: 0},
    IV: {include: true, mustInclude: false, position: 0},
    V: {include: true, mustInclude: false, position: 0},
    vi: {include: true, mustInclude: false, position: 0},
    viidim: {include: true, mustInclude: false, position: 0}
  });
  const [combos, setCombos] = useState(comboCheckCreator(4));

  // when the number of chords changes, the combo checklist changes, and also the chord position values reset to 'none'
  useEffect(()=>{
    setCombos(comboCheckCreator(numberOfChords));
    let newChords = chords;
    chordRelativeRoots.forEach((relativeRootSymbol) => {
        const currentChords = newChords;
        const currentSingleChord = currentChords[relativeRootSymbol];
        newChords = ({...currentChords, [relativeRootSymbol]: {...currentSingleChord, position: 0}});
    });
    setChords(newChords);
  }, [numberOfChords])

  return (
    <div className='App'>
       <KeyAndNumber keySig={keySig} setKeySig={setKeySig} numberOfChords={numberOfChords} setNumberOfChords={setNumberOfChords}/>
      <ChordSelect chords={chords} setChords={setChords} numberOfChords={numberOfChords}/>
      <ComboSelect combos={combos} setCombos={setCombos}/>
      <ProgressionList/>
    </div>
  )
}

export default App
