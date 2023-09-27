import Doc from '../../assets/doc.png'
type clinicMember = {
    id:number,
    name:string,
    src:string,
    title:string
    divColor:string
    description:string
}
const clinicMembers:clinicMember[] = [
{id:1,name:'Jakait',src:Doc,title:'Doctor',divColor:'#22a6b3',description:'Dr. Jakait is an exceptional and compassionate medical professional with a wealth of experience. Dedicated to the well-being of his patients, he approaches every case with unwavering commitment and a keen sense of empathy. Throughout his illustrious career, Dr. Jakait has demonstrated a remarkable ability to diagnose and treat complex medical conditions, earning the trust and admiration of his patients and colleagues alike. His unwavering passion for medicine, combined with his innate ability to connect with patients, makes him an invaluable asset to the healthcare community.'},
{id:2,name:'Linda Biwott',src:Doc,title:'Doctor',divColor:'#55efc4',description:''},
{id:3,name:'Allan Waswa',src:Doc,title:'Lab Technician',divColor:'#55efc4',description:''},
{id:4,name:'Brian Chumba',src:Doc,title:'Accountant',divColor:'#ffeaa7',description:''},
{id:5,name:'Lilian Wanjiku',src:Doc,title:'Accountant',divColor:'#ffeaa7',description:''},
{id:6,name:'Cleophas Onyango',src:Doc,title:'Pharmacist',divColor:'#ffeaa7',description:''},
{id:7,name:'John Doe',src:Doc,title:'Head Nurse',divColor:'#74b9ff',description:''},
{id:8,name:'Eliazar Magut',src:Doc,title:'Nurse',divColor:'#74b9ff',description:''},
{id:9,name:'Jenna Hassan',src:Doc,title:'Nurse',divColor:'#74b9ff',description:''}
]

export default clinicMembers;
