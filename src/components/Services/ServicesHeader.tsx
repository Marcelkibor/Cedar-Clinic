import { BsArrowRightCircleFill } from "react-icons/bs"
const ServicesHeader = () => {
  return (
    <div style={{ display: 'flex', minWidth: '100vw', height: '20vh', background: '#00b894', position: 'relative', top: '70px' }}>
    <div style={{ position: 'absolute', display: 'flex', top: '30%', left: '2%' }}>
      <BsArrowRightCircleFill color='white' size={30} />
      <div style={{ outline: 'no-outline' }}>
        <a style={{ color: "white", marginLeft: '10px' }} href='/'>Home</a>
        <a style={{ color: 'white', marginLeft: '10px' }} href='/services'>All Services</a>
      </div>
    </div>
  </div>
  )
}

export default ServicesHeader
