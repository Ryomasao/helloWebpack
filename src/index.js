console.log('index')

import {getCount, addCount} from './modules/counter'
import './child'

console.log('index', getCount())
addCount()
addCount()
addCount()
console.log('index', getCount())