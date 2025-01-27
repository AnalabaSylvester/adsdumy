const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3000

// Enable CORS for cross-origin requests
app.use(cors())

// Sample ads data with interval (in seconds)
const ads = [
  {
    // id: 1,
    videoUrl:
      'https://videocdn.cdnpk.net/videos/7ec32d3a-7baf-5e1b-b096-98539283e277/horizontal/previews/watermarked/large.mp4',
    interval: 60 // 1 minutes in seconds
  },
  {
    // id: 2,
    videoUrl:
      'https://videocdn.cdnpk.net/videos/102bee2e-ffc2-5eb1-914f-445a73c63f28/horizontal/previews/watermarked/large.mp4',
    interval: 60 // 1 minutes in seconds
  },
  {
    // id: 3,
    videoUrl:
      'https://videocdn.cdnpk.net/videos/a5f9c60f-7cc3-417a-9bd5-c0bffd7ce210/horizontal/previews/watermarked/large.mp4',
    interval: 60 // 5 minutes in seconds
  }
]

// Endpoint to fetch ads (this returns all ads for simplicity)
app.get('/api/ads', (req, res) => {
  // You can add more complex logic here to return ads based on other parameters
  res.json({
    status: true,
    data: ads
  })
})

// Start the server
app.listen(PORT, () => {
  console.log(`Ad service running on http://localhost:${PORT}`)
})
