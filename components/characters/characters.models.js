const { text } = require('express')
const mongoose = require('mongoose')
const textSearch = require('mongoose-partial-full-search')

const CharacterSchema = new mongoose.Schema({
   id: {
      type: String,
      required: true,
   },
   name: {
      type: String,
      required: true,
   },
   side: {
      type: String,
      required: true,
   },
   profession: {
      type: String,
      required: true,
   },
   active: {
      type: Boolean,
      default: true,
   },
   imageUrl: { type: String },
   gender: {
      type: String,
      required: true,
   },
   homePlanet: String,
})

CharacterSchema.index({ name: 1, side: 1 }, { unique: true })
CharacterSchema.index({ name: text, side: text })
CharacterSchema.plugin(textSearch)
const Characters = mongoose.model('Character', CharacterSchema)

module.exports = Characters
