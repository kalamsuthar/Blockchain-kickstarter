import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x009ed9A8ca2C9fbC68c50234068bd60116e88d3F'
);

export default instance;