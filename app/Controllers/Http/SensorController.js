'use strict'

const Sensor = use('App/Models/SensorDatum')

class SensorController {
    async index({response}) {
        let sensors = await Sensor.all();
        return response.json(sensors);
    }

    async store({request, response }) {
        const sensorInfo = request.only(['user_id', 'data'])

        const sensor = new Sensor();
        sensor.user_id = sensorInfo.user_id;
        sensor.data = sensorInfo.data;

        await sensor.save()

        return response.status(201).json(sensor);
    }

    async show({params, response}) {
        
        const sensor = await Sensor
            .query()
            .where('user_id', params.id)
            .fetch()
        return response.json(sensor);
    }
}

module.exports = SensorController
