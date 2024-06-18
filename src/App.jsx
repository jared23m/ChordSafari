import KeyAndNumber from './components/KeyAndNumber'
import ChordSelect from './components/ChordSelect'
import ComboSelect from './components/ComboSelect'
import ProgressionList from './components/ProgressionList'
import { useState, useEffect} from 'react'

function App() {
  const [keySig, setKeySig] = useState("Cmaj/Amin");
  const [numberOfChords, setNumberOfChords] = useState(4);

  useEffect(()=>{
    console.log('keySig:', keySig);
  }, [keySig])

  useEffect(()=>{
    console.log('numberOfChords:', numberOfChords);
  }, [numberOfChords])

  return (
    <div className='App'>
       <KeyAndNumber keySig={keySig} setKeySig={setKeySig} numberOfChords={numberOfChords} setNumberOfChords={setNumberOfChords}/>
      <ChordSelect/>
      <ComboSelect/>
      <ProgressionList/>
    </div>
  )
}

export default App
