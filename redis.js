const redis=require('redis')
const bluebird=require( 'bluebird')

bluebird.promisifyAll(redis)
const port=process.env.REDIS_PORT || 6379


const client=redis.createClient(port)

module.exports=client;