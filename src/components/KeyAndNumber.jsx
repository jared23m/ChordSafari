import { keySigNames } from "../musicTheory";

export default function KeyAndNumber(props){
    return (
        <div className='keyAndNumber'>
        <form className="keyAndNumberForm">
            <label>
                Key Signature:
                        <select className='keySigSelect' value={props.keySig} onChange={(e) => {
                            props.setKeySig(e.target.value);
                            }}>
                                {keySigNames.map((name) => {
                                    return <option key={name} value={name}>{name}</option>
                                })}
                        </select>
            </label>
            <label>
                Number of Chords
                        <select className='numberOfChordsSelect' value={props.numberOfChords} onChange={(e) => {
                            props.setNumberOfChords(parseInt(e.target.value));
                            }}>
                            <option value={1}>{1}</option>
                            <option value={2}>{2}</option>
                            <option value={3}>{3}</option>
                            <option value={4}>{4}</option>
                        </select>
            </label>
        </form>
        </div>
    )
}