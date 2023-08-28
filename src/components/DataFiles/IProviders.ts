import apa from '../../assets/apa.png';
import britam from '../../assets/britam.png';
import cic from '../../assets/cic.png';
import jubilee from '../../assets/jubilee.png';
import madison from '../../assets/madison.png';
import nhif from '../../assets/nhif.png';
type Provider = {
    id:number,
    src:string
}
const Iproviders:Provider[]=[
    { id: 1, src: apa },
    { id: 2, src: britam },
    { id: 3, src: cic },
    { id: 4, src: jubilee },
    { id: 5, src: madison },
    { id: 6, src: nhif },
]
export default Iproviders;
