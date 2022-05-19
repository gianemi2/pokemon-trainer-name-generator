import { useState, useMemo, useEffect } from 'react';
import './App.css';
import TypeSelector from './components/TypeSelector/TypeSelector';
import trainersName from './trainersName';
import Name from './components/Name/Name';

function App() {
    const [name, setName] = useState('');
    const [selectedType, setSelectedType] = useState('')
    const queryParameters = window.location.search
    const trainersType = useMemo(() => Object.keys(trainersName), [])

    useEffect(() => {
        if (!queryParameters) return;

        const type = (new URLSearchParams(queryParameters)).get('type');
        if (trainersType.includes(type)) {
            getRandomPlayerName(type)
        }
    }, [queryParameters, trainersType])

    const getRandomPlayerName = (selectedType) => {
        setSelectedType(selectedType)
        setName(trainersName[selectedType][Math.floor(Math.random() * trainersName[selectedType].length)])
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Pokémon Trainers Name Generator</h1>
            <TypeSelector types={trainersType} onTypeSelect={getRandomPlayerName} selectedElem={selectedType}></TypeSelector>
            <Name selectedType={selectedType} name={name}></Name>
        </div>
    );
}

export default App;
