import {flightsMapper} from '../index.js';



// export const getFlights = async (req, res) => {
    
//      carrier = carrier ? carrier: 'DL';
//     try{
//         const query = 'SELECT * FROM flightnewtable WHERE carrier = ?';
//         flightsMapper.getFlights = flightsMapper.mapWithQuery(query,flight => [ flight.carrier]);

//         const flightsData = await flightsMapper.getFlights({carrier: 'DL'});
        
//         res.status(200).json(flightsData);
//     } catch(error){
//         res.status(404).json({message: error.message});
//     }
// }

export const getFlights = async (req, res) => {
    try{
        const songsData = await flightsMapper.find({carrier: req.params.flight});
        
        res.status(200).json(songsData);
    } catch(error){
        res.status(404).json({message: error.message});
        console.log(error);
    }
};