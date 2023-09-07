import {FaClinicMedical,FaWalking,FaCheck, FaComment, FaFileMedical,FaBroadcastTower,FaAccessibleIcon } from 'react-icons/fa';

import { IconType } from "react-icons"
type Process = {
    id:number,
    title:string,
    content:string
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
    {id:1,title:'Check-In', content:'Walk into the clinic'},
    {id:2,title:'Vital Assesment', content:'Checking vitals: Pulse,Weight e.t.c'},
    {id:3,title:'Consultation', content:'Explain your health issue to the doctor'},
    {id:4,title:'Treatment', content:'Recieve treatment and prescription(s)'},
    {id:5,title:'Discharge', content:'Leave the clinic'},
];
const clinicalNumbers:clinicNumber[]=[
    {id:1,number:30,title:'Specialized services'},
    {id:2,number:15,title:'Insurance Providers'},
    {id:3,number:100,title:'Lab Services'},
    {id:4,number:1000,title:'Monthly Patients'},

];
const processIcons:{[key:number]:IconType} = {
    1:FaWalking,
    2:FaCheck,
    3:FaComment,
    4:FaFileMedical,
    5:FaWalking
};
const whyChooseIcons:{[key:number]:IconType} = {
    1:FaBroadcastTower,
    2:FaBroadcastTower,
    3:FaAccessibleIcon,
    4:FaAccessibleIcon
};
const numberIcons:{[key:number]:IconType} = {
    1:FaClinicMedical,
    2:FaClinicMedical,
    3:FaClinicMedical,
    4:FaClinicMedical,
};

export {clinicalProcess,processIcons,whyChoose,whyChooseIcons,clinicalNumbers, numberIcons}
