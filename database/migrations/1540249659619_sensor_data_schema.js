'use strict'

const Schema = use('Schema')

class SensorDataSchema extends Schema {
  up () {
    this.create('sensors', (table) => {
      table.increments()
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id')
      table.text('data')
    })
  }

  down () {
    this.drop('sensors')
  }
}

module.exports = SensorDataSchema

//Numero de lista 10 daniel, 11 yo
