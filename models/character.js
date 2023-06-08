const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    name: { type: String, maxlength: 75,
      required: true,},
    dateCreated: { type: Number,
        default: function() {
        return new Date().getFullYear();
        },
        min: 1927,
      required: true,
      },
    activeCharacter: { type: Boolean, default: true},
    rpgRace: [{ type: String, ref: 'Human?', maxlength: 25,
      required: true,
      }],
    description: [{ type: String, ref: 'Who is your character?',
      required: true
      }],
    hpInitSpeed: [{ type: String, ref: 'HP? Initiative? Speed?',
      required: true,
      }],
    traits: [{ type: String, ref: 'Unique traits about your character.'
      }],
    skills: [{ type: String, ref: 'What are your skills?'
      }],
    classAbilities: [{ type: String, ref: 'What are your class special abilities?'
      }],
    featsMagicSpecials: [{ type: String, ref: 'Feats? Magic? Special abilities?'
      }],
    armorWeaponsItems: [{ type: String, ref: 'Any armor? Weapons? Items?'
      }], 
    diceStat: { type: String, enum: ['d4', 'd6', 'd8', 'd10', 'd12', 'd20']
      },
    modifiers: [{ type: String, ref: '+0 or -0'
    }],

  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Character', characterSchema);