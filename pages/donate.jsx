import React, { useState, useEffect } from 'react'
// import web3 from '../coinbase'
import Web3 from 'web3'

function Donate({}) {
  const web3 = new Web3(ethereum)
  const getESNResolve = () => {
    // Getting contenthash
    // ethereum.eth is the parameter
    web3.eth.ens.getContenthash('ethereum.eth').then(function (result) {
      console.log('result', result)
    })
    // Setting contenthash
    web3.eth.ens.setContenthash('ethereum.eth', hash)
  }

  useEffect(() => {
    getESNResolve()
  }, [])
  return (
    <div>
      <h1>here is my donation page</h1>
    </div>
  )
}

export default Donate
