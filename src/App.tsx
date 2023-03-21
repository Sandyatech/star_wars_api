import React, { useState, useEffect } from 'react';
import { SwCharName } from './sw_char_name';
import SwCharContainer from './components/SwCharContainer';
import './App.css';
import { FETCH_ERROR_500, FETCH_ERROR_418 } from './constants/error_type'
const App: React.FC = () => {
    const [charNumber, setCharNumber] = useState<number>(1);
    const [swChar, setSwChar] = useState<string>('');
    useEffect(() => {
        const getName = async (dataItem: number) => {
            const apiResponse = await fetch(`https://swapi.dev/api/people/${dataItem}/`);
            switch (apiResponse.status) {
                case 200: const json = await apiResponse.json();
                    setSwChar(json.name); break
                case 500: setSwChar(FETCH_ERROR_500); break
                case 418: setSwChar(FETCH_ERROR_418); break
            }


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
