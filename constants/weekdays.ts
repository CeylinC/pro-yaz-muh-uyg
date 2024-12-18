import { TrafikVerisi } from "@/models/TrafikVerisi";

export const weekdays: IWeekday[] = [
    {text: 'PZT', value: 'pazartesi'},
    {text: 'SL', value: 'sali'},
    {text: 'ÇRŞ', value: 'carsamba'},
    {text: 'PRŞ', value: 'persembe'},
    {text: 'CM', value: 'cuma'},
    {text: 'CMT', value: 'cumartesi'},
    {text: 'PZ', value: 'pazar'},
];

interface IWeekday {text: string, value: keyof TrafikVerisi}