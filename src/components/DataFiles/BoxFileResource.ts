import Doc from '../../assets/doc.png'
type BoxItem = {
    id:number,
    src:string,
    title:string,
    description:string
}
const BoxResource:BoxItem[]=[
    {id:1,src:Doc,title:'Find Service',description:'Explore services'},
    {id:2,src:Doc,title:'Contact Us',description:'Reach out to us'},
    {id:3,src:Doc,title:'Find Doctor',description:'Find a doctor'},
]
export default BoxResource
