import apa from '../../assets/apa.png';
import britam from '../../assets/britam.png';
import cic from '../../assets/cic.png';
import jubilee from '../../assets/jubilee.png';
import madison from '../../assets/madison.png';
import nhif from '../../assets/nhif.png';
type Provider = {
    id:number,
    src:string,
    name:string
}
const Iproviders:Provider[]=[
    { id: 1, src: apa,name:'APA' },
    { id: 2, src: britam,name:'Britam'},
    { id: 3, src: cic,name:'CIC' },
    { id: 4, src: jubilee,name:'Jubilee'},
    { id: 5, src: madison,name:'Madison'},
    { id: 6, src: nhif,name:'NHIF'},
]
export default Iproviders;
