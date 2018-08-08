import Web3 from 'web3';

let web3 ;

if(typeof window !=='undefined' && typeof window.web3 !=='undefined'){
    //We are in browser and metamask is running    
    web3 = new Web3(window.web3.currentProvider);
}else{
    //We are on the server *OR* the user is not running metamask

    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/dc3260b14e884ca884c0df65e3479831'
    );
    web3 = new Web3(provider);
}

export default web3;
