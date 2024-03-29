const Characters = require('./characters.models')

exports.getCharactersDal = async (filters) =>
   await Characters.find({
      ...filters,
      active: true,
   })

exports.searchCharactersDal = async (text) =>
   await Characters.search(text, (e) => {
      console.log(e)
   })

exports.createCharacterDal = async (data) => await Characters.create(data)

exports.updateCharacterDal = async (id, data) =>
   await Characters.findOneAndUpdate({ id: id }, data, {
      new: true,
   })

exports.deleteCharacterDal = async (id) =>
   await Characters.findOneAndDelete({ id: id })
