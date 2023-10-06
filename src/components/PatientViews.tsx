import Patient from '../assets/doc.png'
const PatientViews = () => {
  return (
    <div className="review-main">
        <div className="review-img">
            <img src={Patient} style={{margin:'5% 0% 0% -5%',width:'110%',height:'70%',justifyContent:'center',display:'flex',alignItems:'center'}}/>
        </div>
        <div style={{maxWidth:'500px',margin:'6% 0% 0% 40%',textAlign:'center',color:'white'}}>
                <p>
                "I stayed in the hospital for 3 days and I felt at home. I was anxious before the surgery mostly because of the fear of the unknown, but I have had a smooth recovery post-surgery with no major complications.
                 The nurses, doctors and the entire team at the hospital were very friendly and highly professional."
                </p>
                <p style={{fontWeight:'bold',fontStyle:'italic'}}>~ Allan Waswa</p>
            </div>
    </div>
  )
}

export default PatientViews
