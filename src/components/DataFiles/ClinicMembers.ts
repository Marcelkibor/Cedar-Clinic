import Doc from '../../assets/doc.png'
type clinicMember = {
    id:number,
    name:string,
    src:string,
    title:string
    divColor:string
}
const clinicMembers:clinicMember[] = [
{id:1,name:'Dr. Jakait',src:Doc,title:'Head Doctor',divColor:'#55efc4'},
{id:2,name:'Dr. Linda',src:Doc,title:'Doctor',divColor:'#55efc4'},
{id:3,name:'Mr. Allan Waswa',src:Doc,title:'Lab Technician',divColor:'#55efc4'},
{id:4,name:'Mr. Brian Chumba',src:Doc,title:'Accountant',divColor:'#ffeaa7'},
{id:5,name:'Ms. Lilian Wanjiku',src:Doc,title:'Accountant',divColor:'#ffeaa7'},
{id:6,name:'Mr. Cleophas Onyango',src:Doc,title:'Pharmacist',divColor:'#ffeaa7'},
{id:7,name:'Mr. John Doe',src:Doc,title:'Head Nurse',divColor:'#74b9ff'},
{id:8,name:'Mr. Eliazar Magut',src:Doc,title:'Nurse',divColor:'#74b9ff'},
{id:9,name:'Mrs. Jenna Hassan',src:Doc,title:'Nurse',divColor:'#74b9ff'}
]

export default clinicMembers;
