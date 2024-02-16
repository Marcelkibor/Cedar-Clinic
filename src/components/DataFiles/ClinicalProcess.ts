import {FaUserNurse,FaHandHoldingMedical} from 'react-icons/fa';
import { IconType } from "react-icons"
import { FaPeopleArrows,FaFileMedicalAlt } from 'react-icons/fa';
import {GiBoltDrop,GiLovers,GiHypodermicTest} from 'react-icons/gi'
import {LiaMoneyCheckAltSolid}  from 'react-icons/lia'
type Process = {
    id:number,
    cardTitle:string,
    cardSubtitle:string
};
type whychoose = {
    id:number,
    title:string

};
type clinicNumber = {
    id:number,
    number:number,
    title:string
};
const whyChoose:whychoose[]=[
    {id:1,title:'Comprehensive Care'},
    {id:2,title:'Patient-Centric Approach'},
    {id:3,title:'Expert Medical Team'},
    {id:4,title:'Seamless Operation'},
];
const clinicalProcess:Process[]=[
    {id:1,cardTitle:'Check-In', cardSubtitle:'Walk into the clinic'},
    {id:2,cardTitle:'Triage', cardSubtitle:'Check vitals: Pulse,Weight e.t.c'},
    {id:3,cardTitle:'Initial Consultation', cardSubtitle:'Explain your health issue to the doctor'},
    {id:4,cardTitle:'Investigation', cardSubtitle:'Advanced expert assessment: CT Scan, Lab Tests, Ultra Sound, X-Ray e.t.c'},
    {id:5,cardTitle:'Final Consultation',cardSubtitle:'Get treatment & feedback based on your results'},
    {id:6,cardTitle:'Pharmacy',cardSubtitle:'Get prescription services for optimal treatment'},
    {id:7,cardTitle:'Billing',cardSubtitle:'Make payment for drugs/services given'},
    {id:8,cardTitle:'Discharge', cardSubtitle:'Leave the clinic'},
];
const clinicalNumbers:clinicNumber[]=[
    {id:1,number:30,title:'Specialized services'},
    {id:2,number:15,title:'Insurance Providers'},
    {id:3,number:100,title:'Lab Services'},
    {id:4,number:1000,title:'Monthly Patients'},

];
const numberIcons:{[key:number]:IconType} = {
    1:FaFileMedicalAlt,
    2:LiaMoneyCheckAltSolid,
    3:GiHypodermicTest,
    4:FaPeopleArrows,
};
const whyChooseIcons:{[key:number]:IconType} = {
    1:FaHandHoldingMedical,
    2:GiLovers,
    3:FaUserNurse,
    4:GiBoltDrop
};


export {clinicalProcess,whyChoose,whyChooseIcons,clinicalNumbers,numberIcons}
