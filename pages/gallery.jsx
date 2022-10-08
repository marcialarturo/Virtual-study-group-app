import React, { useEffect, useState } from 'react'
import ProfileList from '../components/post-list'
import logo from '../public/images/logo.png'
import { Grid, Container, Card, Button, Chip, Stack } from '@mui/material'
import Image from 'next/Image'
import { useRouter } from 'next/router'

const data = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
]

function HomeGallery({
  setSelectedPost,
  contract,
  connectWallet,
  currentAccount,
}) {
  // const [data, setData] = useState([])
  const router = useRouter()

  useEffect(() => {
    if (contract) {
      getFundraisers()
    }
  }, [contract])

  const getImage = (ipfsURL) => {
    if (!ipfsURL) return
    ipfsURL = ipfsURL.split('://')
    return 'https://ipfs.io/ipfs/' + ipfsURL[1]
  }

  const getFundraisers = async () => {
    const temp = []
    const res = await contract.getAllFundraisers()

    for (let i = 0; i < res.length; i++) {
      let obj = {}
      // data from smart contract
      const organizer = res[i][4]
      const totalDonations = res[i]['totalDonations'].toString()
      const fundraiserId = res[i].id.toString()

      // fetchs data from nftStorage
      const nftStorageURL = res[i][1]
      let getNFTStorageData = await fetch(nftStorageURL)
      let fundraiserData = await getNFTStorageData.json()

      //  fundraiser data
      const img = getImage(fundraiserData.image)
      // gets data from nftStorage
      const data = JSON.parse(fundraiserData.description)
      // builds fundraiser data
      obj.fundraiserId = fundraiserId
      obj.organizer = organizer
      obj.totalDonations = totalDonations
      obj.title = fundraiserData.name
      obj.image = img
      obj.description = data.description
      obj.category = data.category
      obj.targetAmmount = data.targetAmmount
      obj.creationDate = data.creationDate
      temp.push(obj)
    }

    setData(temp)
  }

  return (
    <div
      style={{
        minHeight: '70vh',
        paddingBottom: '4rem',
        paddingTop: '.5rem',
      }}
    >
      <Container>
        <Container>
          <div className="root">
            <Grid
              container
              spacing={3}
              style={{
                paddingTop: '1rem',
                paddingBottom: '1rem',
              }}
            >
              <Grid item xs={5} className="outer">
                <Image src={logo} className="logo-hero" alt="logo-hero" />
              </Grid>
              <Grid item xs={7}>
                <p className="home-text-intro">
                  <strong>PetsFoundMe</strong> is a social app built by the
                  community for everyone who loves and supports pets.
                  PetsFoundMe is an NFT platform where pet owners and pet lovers
                  come together and help each other to solve their pet's needs
                  from expensive surgeries to food supplies or free services.
                </p>{' '}
                <br />
                <p className="home2-text-intro">
                  PetsFoundMe is the perfect pet hub for nonprofits, medical &
                  government institutions, influencers, and artists to come
                  together to solve the needs of the Community Pets. Come to ask
                  for financial support, as questions, answer questions, and
                  give or receive donations. Come join us to make this planet a
                  better world.
                </p>
              </Grid>
            </Grid>
          </div>
        </Container>

        <p className="font-bold text-2xl leading-relaxed">
          Explore 565,386 projects
        </p>

        <div className="flex">
          {/* search */}
          <form className="search-form">
            <div className="pseudo-search">
              <input
                type="text"
                placeholder="Search for people, etc"
                autoFocus
                required
              />
              <span className="search-clear">Clear</span>
              <span className="search-icon">🔍</span>
            </div>
          </form>
          <Stack direction="row" spacing={1} alignItems="center">
            <Chip label="All categories" color="primary" />
            <Chip label="Technology" />
            <Chip label="Design" />
            <Chip label="Fashion" />
            <Chip label="Food" />
            <Chip label="Games" />
            <Chip label="Music" />
            <Chip label="Film-Video" />
          </Stack>
        </div>

        <br />
        <Card
          style={{
            borderRadius: '24px',
            paddingTop: '1rem',
            paddingBottom: '1rem',
            backgroundColor: '#fff9f7',
            minHeight: '20rem',
          }}
        >
          {data.length ? (
            <ProfileList setSelectedPost={setSelectedPost} data={data} />
          ) : (
            <div style={{ textAlign: 'center', paddingTop: '3rem' }}>
              <Button
                style={{ backgroundColor: '#FF835B', color: 'white' }}
                onClick={() => connectWallet()}
              >
                Login to continue
              </Button>
            </div>
          )}
        </Card>
      </Container>
    </div>
  )
}

export default HomeGallery
