import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Typography,
  Button,
  IconButton,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from '@mui/material'
import CircularStatic from './CircularProgressWithLabel'
function PostList({ account, contractData, setSelectedPost, data }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {}, [])

  const details = (fundraiser) => {
    setSelectedPost(fundraiser)
    router.push('/post')
  }

  return (
    <div style={{ minHeight: '60vh', borderRadius: '24px' }}>
      {loading ? (
        <CircularStatic />
      ) : (
        <div>
          <Grid spacing={40} style={{ display: 'flex', flexWrap: 'wrap' }}>
            {data.length ? (
              data.map((fundraiser, index) => (
                <Grid item md={3} spacing={1} className="swap-card" key={index}>
                  <Card
                    sx={{ maxWidth: 240 }}
                    onClick={() => details(fundraiser)}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={fundraiser.avatar || fundraiser.image}
                      alt="Profile"
                    />
                    <CardContent>
                      <Typography fontSize="12px" className="card-header-swap">
                        {fundraiser.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <h2>No Profiles Yet...</h2>
            )}
          </Grid>
        </div>
      )}
    </div>
  )
}

export default PostList
