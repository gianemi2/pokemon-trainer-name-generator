import './TypeSelector.css'

const TypeSelector = ({ types, onTypeSelect, selectedElem }) => {
    return (
        <div className='TypeSelectorWrapper'>
            {types.map((elem) => <button onClick={() => onTypeSelect(elem)} key={elem} className={`box-${elem} ${selectedElem === elem ? 'active' : ''}`}>{elem}</button>)}
        </div>
    )
}

export default TypeSelector