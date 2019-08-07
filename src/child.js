console.log('child')

import {getCount, addCount} from './modules/counter'

console.log('child', getCount())
addCount()
addCount()
addCount()
console.log('child', getCount())