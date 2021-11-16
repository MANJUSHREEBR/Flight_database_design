import express from 'express';
import bodyParser from 'body-parser';
import cassandra from 'cassandra-driver';
import cors from 'cors';

import flightRoutes from './routes/flight.js';


const app = express();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(cors());

app.use('/api', flightRoutes);
const PORT = 5000;

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'flightsnew'
});

client.connect()
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

    const Mapper = cassandra.mapping.Mapper;

const mapper = new Mapper(client, {
    models: {'flightsnew': {
      tables: ['flightnewtable'],
      columns: {
        'DayofMonth': 'DayofMonth',
        'DayOfWeek': 'DayOfWeek',
        'Carrier': 'Carrier',
        'Origin_Airport_Name': 'Origin_Airport_Name',
        'Destination_Airport_Name': 'Destination_Airport_Name',
        'ID': 'ID',
        'Origin_City':'Origin_City',
        'Origin_State':'Origin_State',
        'Destination_City':'Destination_City',
        'Destination_State':'Destination_State'
      }
    }}
  })

const flightsMapper = mapper.forModel('flightnewtable');

export {
    flightsMapper 
};
