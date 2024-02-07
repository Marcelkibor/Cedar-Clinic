import apa from '../../assets/apa.avif';
import britam from '../../assets/britam.avif';
import cic from '../../assets/cic.avif';
import jubilee from '../../assets/jubilee.avif';
import madison from '../../assets/madison.avif';
import nhif from '../../assets/nhif.avif';
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
