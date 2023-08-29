import Doc from '../../assets/doc.png';
import Box from '../../assets/box.jpg'
import Wall from '../../assets/wall.jpg'
type ImageProfile = {
    id:number,
    text:string,
    src:string,
    animation:string,
    color:string
}
const BgLanding:ImageProfile[] = [
    {id:1,text:'Your Health Is Our Priority',src:Doc,animation:'slide-in',color:'black'},
    {id:2,text:'Comprehensive Care',src:Box,animation:'zoom-out', color:'white'},
    {id:3,text:'Insurance Payment Options',src:Wall,animation:'fade-in',color:'white'},
]
export default BgLanding;
