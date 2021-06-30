import axios from "axios";
import { IInstrument } from "../interfaces/instrument-interface";

export default class InstrumentService {
   
    public static  getAllInstrumentsByOSMId(id: number): Promise<IInstrument[]> {
        let result:IInstrument[] = [];
        return axios.get(`${process.env.INSTRUMENT_API_URL}/AP/GetInstruments?OMSId=${id}`)
        .then(function (response) {
            response.data.forEach(element => {
                let item = {symbol: element.Symbol}
                result.push(item);
            });

            return result;
        });
    }
}
