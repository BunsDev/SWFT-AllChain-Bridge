import {
  MsgSend,
  LCDClient,
  Coin,
  Extension
} from '@terra-money/terra.js'
const TerraExchangeHandle = async function(fromAddress,platformAddr,fromNumber) {
      const platAddress = platformAddr.split('#')
      const msgs =  [new MsgSend(fromAddress, platAddress[0], [
        new Coin('uluna', fromNumber*1000000),
      ])]
      const tx = {
        msgs,
        memo:platAddress[1]
      }
      const ext = new Extension()
      const res = await ext.request('post', JSON.parse(JSON.stringify(tx)))
      console.log(res.payload)
      return res.payload
}
export default TerraExchangeHandle