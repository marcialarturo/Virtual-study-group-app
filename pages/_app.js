import react, { useState, useEffect } from 'react'
import '../styles/globals.css'
import '../styles//gallery.css'
import Navbar from '../components/Navbar'
import { Web3Auth } from '@web3auth/web3auth'
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from '@web3auth/base'
import RPC from '../ethersRPC'
const clientId =
  '5cf524a9082ff99b09269d94e77dab5886b9235732c6b07bd4e9ce8c347af928' // get from https://dashboard.web3auth.io

function MyApp({ Component, pageProps }) {
  const [wallet, setWallet] = useState(null)
  const [currentPost, setCurrentPost] = useState(null)
  const [contract, setContract] = useState(null)
  const [selectedPost, setSelectedPost] = useState({
    name: 'Stormlight Premium Miniatures',
    decription:
      'Official collectibles for every fan of Brandon Sandersons epic fantasy series: miniatures, figurines, and a high-end deluxe statue!',
    image:
      'https://ksr-ugc.imgix.net/assets/038/574/931/7db574cb066835762f670ffa86735467_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1663072830&auto=format&frame=1&q=92&s=c04d46525d177c85aa2e6f9461b5467e',
    targetAmount: '1000',
    totalDonations: '19',
    backers: '10',
    createdTime: 'Oct 1, 2022',
    overview:
      'This is a game for one player, designed for contemplative solo play. It’s a bubbling cauldron of simple rules and writing prompts, stirred together to produce the story of a teenage witch spending a year away from home in an unfamiliar city—Koriko. You will use this book, a deck of tarot cards and a teetering tower of dice to explore the city, work to improve your witch is fortunes and meet some of the city’s weird and wonderful residents. The game’s primary inspiration is Kiki’s Delivery Service, both the Studio Ghibli film and the Eiko Kadono novel. I’ve watched the film countless times as it’s one of my son’s favourites, and its story and themes have burrowed their way deep into my soul.',
    overviewImage:
      'https://ksr-ugc.imgix.net/assets/038/327/239/095532dc4b94dbfe6c36e881eef47a29_original.jpg?ixlib=rb-4.0.2&w=680&fit=max&v=1660896163&gif-q=50&q=92&s=3b1048597bee51aa6a7504b72ad34012',
    update:
      'Good morning everyone! I woke up today to discover that Koriko has now become my most-funded project to date, and we are not even one day in. We are also a Kickstarter Project We Love, which is a real compliment. Thanks so much to all of you, especially those leaving lovely comments—it is really nice reading through them all :)',
    updateImage:
      'https://ksr-ugc.imgix.net/assets/038/806/129/085d9545bebc26e8eae0eb3822023150_original.gif?ixlib=rb-4.0.2&w=700&fit=max&v=1664965137&gif-q=50&q=92&s=0497f497d61c6572c3f1037fb6ee11d8',
  })
  const [donateNfts, setDonateNfts] = useState(false)
  const [image, setImage] = useState('')
  const [title, setTitle] = useState('')
  const [bio, setBio] = useState('')
  const [coverPhoto, setCoverPhoto] = useState('')
  const [userUD, setUserUD] = useState('')
  const [signer, setSigner] = useState(null)
  const [provider, setProvider] = useState(null)
  const [donateStream, setDonateStream] = useState(false)
  const [web3auth, setWeb3auth] = useState(null)

  useEffect(() => {
    const init = async () => {
      try {
        const web3auth = new Web3Auth({
          clientId,
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: '0x1',
            rpcTarget: 'https://rpc.ankr.com/eth', // This is the public RPC we have added, please pass on your own endpoint while creating an app
          },
        })

        setWeb3auth(web3auth)

        await web3auth.initModal()
        if (web3auth.provider) {
          setProvider(web3auth.provider)
        }
      } catch (error) {
        console.error(error)
      }
    }

    init()
  }, [])

  useEffect(() => {
    if (provider) {
      getAccounts()
    }
  }, [provider])

  const login = async () => {
    if (!web3auth) {
      console.log('web3auth not initialized yet')
      return
    }
    const web3authProvider = await web3auth.connect()
    setProvider(web3authProvider)
    const user = await web3auth.getUserInfo()
    console.log('user', user)
    const rpc = new RPC(web3authProvider)
    const address = await rpc.getAccounts()
    console.log('🚀 ~ file: _app.js ~ line 88 ~ login ~ address', address)
    console.log('my address', address)
  }

  const getAccounts = async () => {
    if (!provider) {
      console.log('provider not initialized yet')
      return
    }
    const rpc = new RPC(provider)
    const address = await rpc.getAccounts()
    console.log('address', address)
  }

  return (
    <>
      <Navbar wallet={wallet} setWallet={setWallet} />
      <button onClick={login} className="card">
        Login
      </button>
      <Component
        wallet={wallet}
        setWallet={setWallet}
        currentPost={currentPost}
        contract={contract}
        selectedPost={selectedPost}
        setSelectedPost={setSelectedPost}
        {...pageProps}
      />
    </>
  )
}

export default MyApp
