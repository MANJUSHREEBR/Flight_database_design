import {flightsMapper} from '../index.js';



export const getFlights = async (req, res) => {
    let { carrier, dayofmonth, dayofweek, origin_city, destination_city} = req.query;
     dayofmonth = dayofmonth ? dayofmonth: 19;
     dayofweek = dayofweek ? dayofweek: 5;
     carrier = carrier ? carrier: 'DL';
     origin_city = origin_city ? origin_city:'Detroit';
     destination_city = destination_city ? destination_city:'Miami';
    try{
        const query = 'SELECT * FROM flightnewtable WHERE carrier = ? and dayofmonth = ? and dayofweek = ? and origin_city = ? and destination_city = ? ALLOW FILTERING';
        flightsMapper.getFlights = flightsMapper.mapWithQuery(query,flight => [ flight.carrier, flight.dayofmonth,flight.dayofweek,flight.origin_city,flight.destination_city]);

        const flightsData = await flightsMapper.getFlights({carrier,dayofmonth,dayofweek,origin_city,destination_city});
        
        res.status(200).json(flightsData);
    } catch(error){
        res.status(404).json({message: error.message});
    }
}