import { IconType } from 'react-icons';
import {GiMedicalPack} from 'react-icons/gi'
import {RiTeamFill} from 'react-icons/ri'
import {PiPhoneCallBold} from 'react-icons/pi';
import Doc from '../../assets/doc.png'
type BoxItem = {
    id:number,
    src:string,
    title:string,
    description:string
}
const BxIcons:{[key:number]:IconType} = {
    1:GiMedicalPack,
    2:PiPhoneCallBold,
    3:RiTeamFill,
};
const BoxResource:BoxItem[]=[
    {id:1,src:Doc,title:'Find Service',description:'Find out all medical and lab services offered by our clinic.'},
    {id:2,src:Doc,title:'Get In Touch',description:'Reach out through any of our contact lines. We are open Mon-Sat from 8:00am-5:00pm'},
    {id:3,src:Doc,title:'Find Doctor',description:'Explore out available team of experts to meet your medical needs'},
]
export {BoxResource,BxIcons}
