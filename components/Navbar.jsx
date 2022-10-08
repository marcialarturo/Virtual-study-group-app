import React, { useState, useEffect } from 'react'
// import { ethereum } from '../coinbase' // you need to commented out cause it is already saved on the localStorage

// grocery true theory silly crouch beach dizzy collect pencil walk stereo warm
function Navbar({ wallet, setWallet }) {
  const login = () => {
    if (typeof window !== 'undefined') {
      // const token = localStorage.getItem('token')
      // const userInfo = localStorage.getItem('userInfo')
      // const expiresAt = localStorage.getItem('expiresAt')
      console.log('🚀 ~ file: Navbar.jsx ~ line 16 ~ login ~ login')
      // Use eth_requestAccounts
      ethereum.request({ method: 'eth_requestAccounts' }).then((response) => {
        const accounts = response
        setWallet(accounts[0])
        console.log(`User's address is ${accounts[0]}`)

        // Optionally, have the default account set for web3.js
        // web3.eth.defaultAccount = accounts[0]
      })
    }
    // console.log('🚀 ~ file: Navbar.jsx ~ line 16 ~ login ~ login')
    // // Use eth_requestAccounts
    // ethereum.request({ method: 'eth_requestAccounts' }).then((response) => {
    //   const accounts = response
    //   setWallet(accounts[0])
    //   console.log(`User's address is ${accounts[0]}`)

    //   // Optionally, have the default account set for web3.js
    //   // web3.eth.defaultAccount = accounts[0]
    // })
  }

  return (
    <div>
      {wallet && <p>Welcome {wallet}</p>}
      <button onClick={login}>Connect to coinbase</button>
    </div>
  )
}

export default Navbar
