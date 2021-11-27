import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import "./style.css";
const Footer = () => {
    return (
        <div className="footer">
           <FacebookIcon  sx={{ fontSize: 30 }}/> 
           <TwitterIcon className="footerIcon" sx={{ fontSize: 30 }}/> 
           <GitHubIcon sx={{ fontSize: 30 }}/> 
        </div>
    )
}

export default Footer
