export default function ComboSelect(props){
    function renderComboFormSection(combo, index){
        return (
            <div key={index}>
                <label className='comboSelectLabel'>
                        <input type="checkbox" value={combo} checked={props.combos[combo]} onChange={()=>{
                            const currentCombos = props.combos;
                            const currentSingleCombo = currentCombos[combo];
                            props.setCombos({...currentCombos, [combo]: !currentSingleCombo});
                        }}/>
                        {combo}
                </label>
            </div>
            )
    }

    return (
        <div className="comboelect">
            <form className="comboSelectForm">
                {Object.keys(props.combos).map((combo, index) => (
                renderComboFormSection(combo, index)
                ))}
            </form>
    </div>
    )

}