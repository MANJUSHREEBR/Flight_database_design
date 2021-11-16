import {flightsMapper} from '../index.js';



export const getFlights = async (req, res) => {
    try{
        const query = 'SELECT * FROM flightnewtable WHERE carrier = ?';
        flightsMapper.getFlights = flightsMapper.mapWithQuery(query,flight => [ flight.carrier ]);

        const flightsData = await flightsMapper.getFlights({carrier: 'DL'});
        
        res.status(200).json(flightsData);
    } catch(error){
        res.status(404).json({message: error.message});
    }
}