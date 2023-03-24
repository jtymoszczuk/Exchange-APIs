# Exchange-APIs

Work-in-process 👷‍♂️

Just playing with the kraken api to allow for faster deposit/withdrawals while also learning my way around github. I will be adding more exchanges and interactive commands to allow easier 1-click sweeping of funds from exchanges. 😄

## Setup
```
git clone https://github.com/jtymoszczuk/Exchange-APIs.git
cd kraken-api-test
cp sample-.env .env
# Edit your .env file with your api keys
npm i
```

In the .env add your Kraken api key and secret to interact with your kraken account remotely.

## To Run
``
node index.js
``

Right now it jsut prints your bitcoin balance and bitcoin price.
