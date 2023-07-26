import {FaWalking,FaCheck, FaComment, FaFileMedical } from 'react-icons/fa';

import { IconType } from "react-icons"
type Process = {
    id:number,
    name:string,
    description:string
}
const clinicalProcess:Process[]=[
    {id:1,name:'Check-In', description:'Walk into the clinic'},
    {id:2,name:'Vital Assesment', description:'Checking vitals: Pulse,Weight e.t.c'},
    {id:3,name:'Consultation', description:'Explain your health issue to the doctor'},
    {id:4,name:'Treatment', description:'Recieve treatment and prescription(s)'},
    {id:5,name:'Discharge', description:'Leave the clinic'},
]
const processIcons:{[key:number]:IconType} = {
    1:FaWalking,
    2:FaCheck,
    3:FaComment,
    4:FaFileMedical,
    5:FaWalking
};
export {clinicalProcess,processIcons}
