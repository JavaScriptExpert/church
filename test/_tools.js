import {foldl} from '../src'

const append = xs => x => xs.concat([x])

export const decodeBoolean = a => a(true)(false)
export const decodeList = foldl(append)([])
export const decodeNumber = a => a(b => b + 1)(0)
