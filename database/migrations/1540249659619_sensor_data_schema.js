'use strict'

const Schema = use('Schema')

class SensorDataSchema extends Schema {
  up () {
    this.create('sensor_data', (table) => {
      table.increments()
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id')
      table.json('data')
      table.timestamps()
    })
  }
  down () {
    this.drop('sensor_data')
  }
}

module.exports = SensorDataSchema

//Numero de lista 10 daniel, 11 yo
