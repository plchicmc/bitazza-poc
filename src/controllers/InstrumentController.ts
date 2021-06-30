import {  Request, Response } from "express";
import InstrumentService from "../services/InstrumentService";

export class InstrumentController {
    static getAllInstrumentsByOSMId = async(req: Request, res: Response) => {
        
        const id: number = req.query.OSMId;     
        
        let data = await InstrumentService.getAllInstrumentsByOSMId(id);        
      
        res.send(data);
    };
}