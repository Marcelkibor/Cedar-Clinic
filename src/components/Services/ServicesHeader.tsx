import { BsArrowRightCircleFill } from "react-icons/bs"
const ServicesHeader = (pathname:any) => {
    const path = pathname.pathname
  return (
    <div style={{ color:'white',display: 'flex', minWidth: '100vw', height: '20vh', background: '#00b894', position: 'relative', top: '70px' }}>
    {path && <h2 style={{marginTop:'10px',marginLeft:'30px'}}>{path}</h2>}
    <div style={{ position: 'absolute', display: 'flex', top: '40%', left: '2%' }}>
      <BsArrowRightCircleFill color='white' size={30} />
      <div style={{ outline: 'no-outline' }}>
        <a style={{ color: "white", marginLeft: '10px' }} href='/'>Home</a>
        {path && <a style={{ color: 'white', marginLeft: '10px' }} href={`${path}`}> {`${path}`}</a>}
      </div>
    </div>
  </div>
  )
}

export default ServicesHeader
