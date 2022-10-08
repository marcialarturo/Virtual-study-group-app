import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Container,
  Box,
  Grid,
  Typography,
  Button,
  Card,
  Chip,
} from '@mui/material'
import LinearProgress from '@mui/material/LinearProgress'
// import './Profile.css'

import profileIcon from '../public/images/profile-icon.png'
import donation from '../public/images/donation.png'
import Image from 'next/Image'
import { useRouter } from 'next/router'
// import TableUpdates from './TableUpdates'

const dataUpdates = [
  {
    created: 'August 23, 2022',
    author: 'Annie Loizzi',
    update:
      'Cooper is making some positive progress this week. Following is an update from the Roberts family:  This week, we are happy to report that Cooper IV and PICC lines have been removed. He no longer requires IV pain medicine and antibiotics.',
  },
  {
    created: 'August 23, 2022',
    author: 'Annie Loizzi',
    update:
      'Cooper is making some positive progress this week. Following is an update from the Roberts family:  This week, we are happy to report that Cooper IV and PICC lines have been removed. He no longer requires IV pain medicine and antibiotics.',
  },
  {
    created: 'August 23, 2022',
    author: 'Annie Loizzi',
    update:
      'Cooper is making some positive progress this week. Following is an update from the Roberts family:  This week, we are happy to report that Cooper IV and PICC lines have been removed. He no longer requires IV pain medicine and antibiotics.',
  },
]

function Post({
  account,
  currentAccount,
  selectedPost,
  setDonateNfts,
  setDonateStream,
}) {
  console.log('selectedPost', selectedPost)
  const [showProfile, setShowProfile] = useState(false)
  const router = useRouter()
  const [section, setSection] = useState('Overview')

  useEffect(() => {}, [])

  useEffect(() => {
    // getProfile(userAddress)
  }, [])

  const myLoader = ({ src, width, quality }) => {
    return 'https://ksr-ugc.imgix.net/assets/038/574/931/7db574cb066835762f670ffa86735467_original.png?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1663072830&auto=format&frame=1&q=92&s=c04d46525d177c85aa2e6f9461b5467e'
    // return `https://example.com/${src}?w=${width}&q=${quality || 75}`
  }
  const donate = async (e) => {
    setDonateStream(false)
    router.push(`/donate`)
  }
  const donateStream = async (e) => {
    setDonateStream(true)
    history.push(`/donate`)
  }

  const donateNFTs = async (e) => {
    setDonateNfts(true)
    history.push(`/donate`)
  }

  const requestFollow = async () => {
    // const follower = currentAccount
    // const isFollower = await follow(follower, selectedPost.address)
    // await isFollower.wait()
    // setShowProfile(true)
  }

  const visitSite = (site) => {
    const link = site.value
    if (link) {
      window.open(link, '_blank')
    } else {
      window.open(site, '_blank')
    }
  }

  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Container
      className="page-community"
      style={{ minHeight: '70vh', paddingBottom: '1rem' }}
    >
      <div>
        {selectedPost ? (
          <Box sx={{ width: '100%' }}>
            <br />
            <br />
            <br />
            <p className="text-green-700 text-3xl"> {selectedPost.name}</p>
            <br />

            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={8}>
                <img src={selectedPost.image} alt="Picture of the author" />
                <br />
                <br />

                <div className="outer">
                  <Image
                    src={profileIcon}
                    alt="profileIcon"
                    width="60px"
                    height="60px"
                    style={{ borderRadius: '50%' }}
                  />
                  <p>
                    <strong>
                      {/* {`${selectedPost.organizer.substring(32)}...`}{' '} */}
                      0x11Afb45678CbF03C3508378E41d4C5b7e2C90b233{' '}
                    </strong>
                    is organizing this kickstarter
                  </p>
                </div>

                <br />
                <hr style={{ border: '1px solid #c8c8c8' }} />
                {/*  */}
                <Button onClick={() => setSection('Overview')}>Overview</Button>
                <Button onClick={() => setSection('Updates')}>Updates</Button>
                <Button onClick={() => setSection('Contact')}>Contact</Button>

                {section === 'Overview' && (
                  <section>
                    <h2>Overview</h2>
                    <p>
                      A tarot-driven story game of novice witches, urban
                      exploration and teenage drama for one player.
                    </p>

                    <p className="description">{selectedPost.description}</p>
                  </section>
                )}

                <Chip
                  className="profile-chip"
                  label={` Category: ${selectedPost.category}`}
                  variant="outlined"
                />
                <Chip
                  className="profile-chip"
                  label={` Created at: ${selectedPost.creationDate}`}
                  variant="outlined"
                />
                <Chip
                  className="profile-chip"
                  label={`Fundraiser id: ${selectedPost.fundraiserId}`}
                  variant="outlined"
                />
                <br />
                <br />
                <hr style={{ border: '1px solid #c8c8c8' }} />
                <br />
                <br />

                <p className="title-fundraiser"> Updates</p>
                {/* <TableUpdates /> */}
              </Grid>

              <Grid p xs={4} className="grid-rigth-side">
                <Card
                  style={{
                    width: '300px',
                    padding: '1.5rem',
                    float: 'right',
                  }}
                >
                  <div className="page-wallet-address">
                    <p
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        color: '#009E74',
                      }}
                    >
                      $
                      {selectedPost.totalDonations === '0'
                        ? '0.00'
                        : selectedPost.totalDonations}
                      <span
                        style={{
                          fontSize: '.94rem',
                          color: 'rgb(90 87 87)',
                          paddingLeft: '0.3rem',
                        }}
                      >
                        raised of $ {selectedPost.targetAmount}
                      </span>
                    </p>

                    <br />
                    <LinearProgress variant="determinate" value={50} />

                    <p style={{ fontSize: '.9rem', color: 'rgb(90 87 87)' }}>
                      30.3k Early Supporters
                    </p>
                    <br />
                    <p
                      style={{
                        fontSize: '1.6rem',
                        fontWeight: '600',
                      }}
                    >
                      {selectedPost.totalDonations === '0'
                        ? '0.00'
                        : selectedPost.totalDonations}{' '}
                      <span
                        style={{
                          fontSize: '.9rem',
                          color: 'rgb(90 87 87)',
                          paddingLeft: '0.1rem',
                        }}
                      >
                        days left to contribute
                      </span>
                    </p>
                    <br />

                    <Button
                      style={{
                        width: '100%',
                        background:
                          'linear-gradient(180deg,rgb(54 190 7) 50%,#028858)',
                        color: 'white',
                      }}
                      onClick={donate}
                    >
                      Donate Now
                    </Button>
                    <br />
                    <br />
                    <Button
                      style={{
                        width: '100%',
                        background:
                          'linear-gradient(180deg,rgb(54 190 7) 50%,#028858)',
                        color: 'white',
                      }}
                      onClick={donateStream}
                    >
                      Superfluid Stream Payment
                    </Button>
                    <br />
                    <br />
                    <Button
                      onClick={donateNFTs}
                      style={{
                        width: '100%',
                        background:
                          'linear-gradient(180deg,#fdb933 35.42%,#f58131 139.58%)',
                        color: 'black',
                      }}
                    >
                      Donate NFT By NftPort
                    </Button>
                    <br />
                    <br />

                    <Button
                      onClick={donateNFTs}
                      style={{
                        width: '100%',
                        background:
                          'linear-gradient(180deg,#310242 35.42%,#2348cb 139.58%)',
                        color: 'white',
                      }}
                    >
                      Chat powered by XMTP
                    </Button>
                    <br />
                    <br />
                    <p>
                      All or nothing. This project will only be funded if it
                      reaches its goal by Mon, November 7 2022 12:00 PM EST.
                    </p>

                    {/* <Image
                      src={donation}
                      alt="profileIcon"
                      className="donation-img"
                    /> */}
                  </div>
                </Card>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Link href="/">
            <Button variant="contained" color="primary">
              Refresh
            </Button>
          </Link>
        )}
      </div>
      <br />
      <Typography className="subtitle" color="textPrimary" gutterBottom>
        Updates comming soon...
      </Typography>
      <br /> <br />
    </Container>
  )
}

export default Post
