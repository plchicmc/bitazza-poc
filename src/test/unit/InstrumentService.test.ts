import axios from "axios";
var MockAdapter = require("axios-mock-adapter");
import InstrumentService from "../../services/InstrumentService";

var mock = new MockAdapter(axios);

var instrumentData = [
    { Symbol: "BTCTHB" },
    { Symbol: "BTCETH" }
]

mock.onGet(`${process.env.INSTRUMENT_API_URL}/AP/GetInstruments?OMSId=1`).reply(200, instrumentData);

describe("GetAllInstruments Function", () => {
    let id = 1;
    test('Should return a list of instruments', async () => {
        let result = await InstrumentService.getAllInstrumentsByOSMId(id);
        expect(result.length).toBe(2);
        expect(result[0].symbol).toBe("BTCTHB");
    });
});

