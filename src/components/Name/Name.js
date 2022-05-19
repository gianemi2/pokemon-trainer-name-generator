import './Name.css'

const Name = ({ name, selectedType }) => {
    return (
        <div className={`NameWrapper box-${selectedType}`}>
            <span className='typeBackground'>{selectedType}</span>
            <h2 className='name'>{name}</h2>
        </div>
    )
}

export default Name