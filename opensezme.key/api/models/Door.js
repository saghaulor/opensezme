/**
 * Door
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

  attributes: {
  	
  	/* e.g.
  	nickname: 'string'
  	*/
   owner_id: 'INTEGER',
   door_id: {
     type: 'STRING',
     required: true,
     uuid: true,
   },
    
  },

};
