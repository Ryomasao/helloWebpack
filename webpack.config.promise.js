
const selectEntry = require('./bin/selectEntry')


module.exports = async () => {
  const entry = await selectEntry()
  console.log(entry)
  return {
    //mode: 'development',
    entry
  }
}

