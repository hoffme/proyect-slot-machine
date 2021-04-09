import symbol1 from '../assets/symbol-1.png';
import symbol2 from '../assets/symbol-2.png';
import symbol3 from '../assets/symbol-3.png';
import symbol4 from '../assets/symbol-4.png';
import symbol5 from '../assets/symbol-5.png';
import symbol6 from '../assets/symbol-6.png';
import symbol7 from '../assets/symbol-7.png';
import symbol8 from '../assets/symbol-8.png';
import symbol9 from '../assets/symbol-9.png';

const symbols = [
    { id: '1', icon: { src: symbol1, alt: '' }, point: 2, frequency: 3 },
    { id: '2', icon: { src: symbol2, alt: '' }, point: 15, frequency: 1, bonus: true }, // bonuses can be used with any group of symbols
    { id: '3', icon: { src: symbol3, alt: '' }, point: 1, frequency: 5 },
    { id: '4', icon: { src: symbol4, alt: '' }, point: 5, frequency: 4 },
    { id: '5', icon: { src: symbol5, alt: '' }, point: 7, frequency: 5 },
    { id: '6', icon: { src: symbol6, alt: '' }, point: 6, frequency: 2 },
    { id: '7', icon: { src: symbol7, alt: '' }, point: 3, frequency: 4 },
    { id: '8', icon: { src: symbol8, alt: '' }, point: 8, frequency: 3 },
    { id: '9', icon: { src: symbol9, alt: '' }, point: 3, frequency: 2 },
]

const getSymbol = (mode) => {
    const symbolsFreq = mode === 'eco' ? 
        symbols :
        symbols.reduce((result, symbol) => {
            for (let i = 0; i < symbol.frequency; i++) result.push(symbol);        
            return result;
        }, []);

    return symbolsFreq[Math.floor(Math.random() * symbolsFreq.length)];
}

export default getSymbol;