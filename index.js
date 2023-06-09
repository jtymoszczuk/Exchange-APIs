// require('dotenv').config()
// instead of sending HTTP requests to a specific URL, 
// this code uses a JavaScript library to create a WebSocket connection to the Kraken API server, 
// and then sends API requests to that server through that connection.
//declares apikey and api secret variables and pulls api key and secret form .env.
require('dotenv').config();
const apiKey = process.env.API_KEY;
const apiSecret = process.env.API_SECRET;

//declares kraken variable.
const KrakenClient = require('kraken-api');
const kraken = new KrakenClient(apiKey, apiSecret);

async function getBitcoinBalance() {
    try {
        const balanceInfo = await kraken.api('Balance');
        const bitcoinBalance = Math.floor(balanceInfo.result.XXBT * 100000000); //displays in satoshis
        console.log('Bitcoin balance:', bitcoinBalance);
    } catch (err) {
        console.error(err);
    }
}

async function getBitcoinPrice() {
    try {

        // Get Ticker Info
        const tickerInfo = await kraken.api('Ticker', { pair: 'XXBTZUSD' });
        const lastTradePrice = parseFloat(tickerInfo.result.XXBTZUSD.a[0]).toFixed(0); // toFixed shows how many decimals
        console.log('Last trade price $', lastTradePrice);

    } catch (err) {
        console.error(err);
    }
}
// Kraken doesnt have lightning api
// async function createLightningInvoice() {
//     try {
//       // Generate Lightning invoice
//       const invoice = await kraken.api('CreateInvoice', { 
//         amount: '0.0001', // amount of Bitcoin to receive
//         currency: 'XXBT',
//         expiry: '1800', // expiry time in seconds
//         description: 'Payment for service' // description of the payment
//       });
//       console.log('Lightning invoice:', invoice.result.invoice);
//     } catch (err) {
//       console.error(err);
//     }
//   }
// createLightningInvoice()

getBitcoinBalance()
getBitcoinPrice()

