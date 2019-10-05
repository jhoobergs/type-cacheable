import * as Redis from 'redis'
import { useRedisAdapter } from '../lib'
import { Handler } from './handler'

const client = Redis.createClient({
  url: process.env.REDIS_URL,
  no_ready_check: true,
})
useRedisAdapter(client)

const h = new Handler()
h.cachedIdentityMethod('s').then(s => {
  console.log(s)
  process.exit(0)
}  
).catch(e => {
  console.error(e)
  process.exit(1)
})

//export function identity(s: string){
//return h.cachedIdentityMethod(s)
//}