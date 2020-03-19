import express from 'express';
import http from 'http';

const app = express()
const httpServer = http.createServer(app);
const port = process.env.PORT || 4000

httpServer.listen( 
  {
    port,
    host: '0.0.0.0'
  },    
  () => console.log(`Server is running on ${port}`)
)
    