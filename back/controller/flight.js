import {flightsMapper} from '../index.js';



export const getFlights = async (req, res) => {
    try{
        const query = 'SELECT * FROM flightnewtable WHERE origin_state = ? ALLOW FILTERING';
        flightsMapper.getFlights = flightsMapper.mapWithQuery(query,flight => [ flight.origin_state ]);

        const flightsData = await flightsMapper.getFlights({origin_state: 'MO'});
        
        res.status(200).json(flightsData);
    } catch(error){
        res.status(404).json({message: error.message});
    }
}