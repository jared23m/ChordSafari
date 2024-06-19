import KeyAndNumber from './components/KeyAndNumber'
import ChordSelect from './components/ChordSelect'
import ComboSelect from './components/ComboSelect'
import ProgressionList from './components/ProgressionList'
import { useState, useEffect} from 'react'
import { comboCheckCreator } from './musicTheory'

function App() {
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

  useEffect(()=>{
    setCombos(comboCheckCreator(numberOfChords));
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
