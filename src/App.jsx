import './App.css'
import '../public/style.css'

function App() {

    const convertisseurDevises = () => {


        const devises = {
            USD: {EUR: 0.85, DIR: 8.5, LIV: 0.8},
            EUR: {USD: 1.18, DIR: 11.23, LIV: 0.9},
            DIR: {EUR: 0.11, USD: 0.13, LIV: 0.09},
            LIV: {EUR: 1.1, USD: 1.3, DIR: 13}

        };
        const num = parseFloat(document.getElementById('number').value);
        const fromCurrency = document.getElementById('From').value;
        const toCurrency = document.getElementById('To').value;

        if (num <= 0 || isNaN(num)) {
            return document.getElementById('result').innerText = `Aucune valeur saisie !`
        }
        if (fromCurrency == toCurrency) {
            return document.getElementById('result').innerText = `Attention meme devise !`
        }
        const result = num * devises[fromCurrency][toCurrency];

        document.getElementById('result').innerText = `Conversion devise: ${result.toFixed(2)} ${toCurrency}`;

    };
    const monComposantDevise = (
        <div id="convertisseurDevise" style={{margin: "50px", textAlign: "center"}}>
            <input type="number" id="number" placeholder="Enter number"/>
            <select id="From">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="DIR">DIRHAM</option>
                <option value="LIV">LIVRE</option>
            </select>
            <select id="To">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="DIR">DIRHAM</option>
                <option value="LIV">LIVRE</option>
            </select>
            <button onClick={convertisseurDevises}>Calculate</button>
            <div id="result" style={{color: "black"}}></div>
        </div>);

    return (monComposantDevise
    );
}

export default App
