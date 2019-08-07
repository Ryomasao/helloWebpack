console.log('other')

import {getCount, addCount} from './modules/counter'

console.log('other', getCount())
addCount()
addCount()
addCount()
console.log('other', getCount())