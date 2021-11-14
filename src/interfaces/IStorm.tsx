import { ILocation } from './ILocation'

export interface IStorm{
    "id" : number
    "name": string, 
    "level": number, 
    "dateFrom": string,
    "dateTo": string,
    "location": ILocation
}