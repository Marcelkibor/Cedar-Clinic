import aar from '../../assets/aar.avif';
import minet from '../../assets/minet.avif';
import apa from '../../assets/apa.avif';
import britam from '../../assets/britam.avif';
import cic from '../../assets/cic.avif';
import firstassure from '../../assets/firstassurance.avif';
import ga from '../../assets/GA.avif';
import kcb from '../../assets/kcb.avif';
import kealliance from '../../assets/kealliance.avif';
import mua from '../../assets/mua.avif';
import oldmutual from '../../assets/oldmutual.avif';
import sanlam from '../../assets/sanlam.avif';
import almasi from '../../assets/almasi.avif';
import jubilee from '../../assets/jubilee.avif';
import madison from '../../assets/madison.avif';
import nhif from '../../assets/nhif.avif';
type Provider = {
    id:number,
    src:string,
    name:string
}
const Iproviders:Provider[]=[
    { id: 1, src: aar,name:'AAR Insurance' },
    { id: 2, src: minet,name:'Minet Corporate'},
    { id: 3, src: apa,name:'APA' },
    { id: 4, src: britam,name:'Britam'},
    { id: 5, src: cic,name:'CIC'},
    { id: 6, src: firstassure,name:'First Assurance'},
    { id: 7, src: ga,name:'G.A' },
    { id: 8, src: jubilee,name:'Jubilee'},
    { id: 9, src: kcb,name:'KCB'},
    { id: 10, src: kealliance,name:'Kenyan Alliance'},
    { id: 11, src: madison,name:'Madison'},
    { id: 12, src: mua,name:'MUA'},
    { id: 13, src: nhif,name:'NHIF'},
    { id: 14, src: oldmutual,name:'Old Mutual' },
    { id: 15, src: sanlam,name:'Sanlam'},
    { id: 16, src: almasi,name:'Almasi'},
]
export default Iproviders;
