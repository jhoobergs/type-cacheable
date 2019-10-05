import { Cacheable } from '../lib'

export class Handler {

  @Cacheable({ ttlSeconds: 5 * 60, cacheKey: (args: any[]) => `identity_${args[0]}` })
  public cachedIdentityMethod (arg: string): Promise<string> {
    return Promise.resolve(arg)
  }

}
