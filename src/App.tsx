import React, { useState, useEffect } from 'react';
import { SwCharName } from './sw_char_name';
import SwCharContainer from './components/SwCharContainer';
import './App.css';
const App: React.FC = () => {
    const [charNumber, setCharNumber] = useState<number>(1);
    const [swChar, setSwChar] = useState<string>('');
    useEffect(() => {
        const getName = async (dataItem: number) => {
            const apiResponse = await fetch(`https://swapi.dev/api/people/${dataItem}/`);
            const json = await apiResponse.json();
            setSwChar(json.name);
            console.log(json);
        }
        getName(charNumber);
    }, [charNumber]);
    return (
        <div className="App-header">
            
            <SwCharContainer name={swChar} />
        </div>

        );
    };

export default App;
