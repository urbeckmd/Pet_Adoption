import React from 'react';
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <>
        <div className="subfooter">
            <h1 className="subfooter_header">Stay Up to Date with Five Acres</h1>
            <div className="socialMedia_iconsContainer">
                <FacebookIcon className="socialMedia_icon" />
                <InstagramIcon className="socialMedia_icon" />
                <YouTubeIcon className="socialMedia_icon" />
                <TwitterIcon className="socialMedia_icon" />
            </div>
        </div>
        <div className="footer"></div>
    </>
  )
}

export default Footer