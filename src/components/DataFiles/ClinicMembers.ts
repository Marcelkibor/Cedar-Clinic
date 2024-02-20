import jakait from '../../assets/team/jkait.avif';
import diana from '../../assets/team/diana.avif';
import bev from '../../assets/team/bev.avif';
import isaiah from '../../assets/team/isaiah.avif';
import lydia from '../../assets/team/lydia.avif';
import marg from '../../assets/team/margaret.avif';
import maur from '../../assets/team/maureen.avif';
import nancy from '../../assets/team/nancy.avif';
import phyllis from '../../assets/team/phyllis.avif';
import rael from '../../assets/team/rael.avif';
import ruth from '../../assets/team/ruth.avif';
import steve from '../../assets/team/steve.avif';
import joy from '../../assets/team/joy.avif';
import hellen from '../../assets/team/hellen.avif';
import getr from '../../assets/team/getr.avif';


type clinicMember = {
    id:number,
    name:string,
    src:string,
    title:string
    divColor:string
    description:string
}
const clinicMembers:clinicMember[] = [
{id:1,name:'Charles Jakait',src:jakait,title:'Doctor',divColor:'#22a6b3',description:'Dr. Jakait is an exceptional and compassionate medical professional with a wealth of experience. Dedicated to the well-being of his patients, he approaches every case with unwavering commitment and a keen sense of empathy. Throughout his illustrious career, Dr. Jakait has demonstrated a remarkable ability to diagnose and treat complex medical conditions, earning the trust and admiration of his patients and colleagues alike. His unwavering passion for medicine, combined with his innate ability to connect with patients, makes him an invaluable asset to the healthcare community.'},
{id:2,name:'Nancy Mbaya',src:nancy,title:'Dentist',divColor:'#22a6b3',description:'Dr. Nancy Mbaya is a compassionate dentist with a ton of experience, dedicated to providing exceptional dental care. Born and raised in Kenya, Dr. Mbaya earned her dental degree and has since become known for her personalized approach to treatment'},
{id:3,name:'Isaiah Kendagor',src:isaiah,title:'Lab Technician',divColor:'#55efc4',description:''},
{id:5,name:'Bevaline Kiprop',src:bev,title:'Accountant',divColor:'#ffeaa7',description:''},
{id:7,name:'Diana Kiptigin',src:diana,title:'Pharmacist',divColor:'#ffeaa7',description:''},
{id:10,name:'Lydia Jepkurui',src:lydia,title:'Nurse',divColor:'#74b9ff',description:''},
{id:11,name:'Phyllis Aduvukha',src:phyllis,title:'Patient Attendant',divColor:'#74b9ff',description:''},
{id:12,name:'Rael Bett',src:rael,title:'Receptionist',divColor:'#74b9ff',description:''},
{id:14,name:'Ruth Masira',src:ruth,title:'Dental Assistant',divColor:'#74b9ff',description:''},
{id:15,name:'Margaret Watah',src:marg,title:'Cashier',divColor:'#74b9ff',description:''},
{id:16,name:'Maureen Mwanguizi',src:maur,title:'Sanitation Technician',divColor:'#74b9ff',description:''},
{id:17,name:'Stephen Otieno',src:steve,title:'Sanitation Technician',divColor:'#74b9ff',description:''},
{id:6,name:'Joy Baraka',src:joy,title:'Accountant',divColor:'#ffeaa7',description:''},
{id:9,name:'Getrude Tanui',src:getr,title:'Head Nurse',divColor:'#74b9ff',description:''},
{id:13,name:'Hellen Kibas',src:hellen,title:'Receptionist',divColor:'#74b9ff',description:''},
{id:4,name:'Maureen Lugonzo',src:'ImWoman',title:'Lab Technician',divColor:'#55efc4',description:''},
{id:8,name:'Jepkurgat Barsitei',src:'ImWoman',title:'Pharmacist',divColor:'#ffeaa7',description:''},
]

export default clinicMembers;
