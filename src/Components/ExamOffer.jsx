import React from 'react'
import "./ExamOffer.css"
function ExamOffer() {
  return (
    <div  style={{padding:"2rem"}}>
        <div>
            <h1 style={{color:'white'}}>What’s special about our NEET Programs?</h1>
        </div>
        <div className='offer' style={{display:"flex"}}>
            <div className='divImg'>
                <img  src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1712231009/widget/stream_selection/live_intractive_classes_rryjiy.webp" alt="" />
                <h1>Daily Live Interactive Classes</h1>
            </div>
            <div className='divImg'>
                <img   src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1712300211/widget/stream_selection/personalised_study_tool_dt952h.webp" alt="" />
                <h1>Personalised Study Tools</h1>
            </div>
            <div className='divImg'>
                <img   src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1712231009/widget/stream_selection/weekly_self_study_plan_p7xw68.webp" alt="" />
                <h1>Weekly Self-study Plan</h1>
            </div>
            <div className='divImg'>
                <img   src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1712231009/widget/stream_selection/score_improvement_strategy_h9mzhl.webp" alt="" />
                <h1>Score Improvement Strategy</h1>
            </div>
        </div>
    </div>
  )
}

export default ExamOffer