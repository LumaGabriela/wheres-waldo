import { CreditsStyle } from "./CreditsStyle"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
const Credits:React.FC<any> = () => {
    return(
        <CreditsStyle>
            <div id="credits">
                <h2>All art by Pierre Roussel <a 
                target='_blank' 
                rel="noreferrer"
                href='https://www.instagram.com/_itspear/'>
                <FontAwesomeIcon icon={faInstagram} /></a></h2>

        	    <h3>Check his console art collection <a 
                target='_blank' 
                rel="noreferrer"
                href='https://www.artstation.com/artwork/oOVVlJ' >here</a>.
                </h3>
                <h3>Buy his prints <a 
                target='_blank'  rel="noreferrer"
                href='https://www.etsy.com/shop/angerinet'>here</a>.</h3>
                <br/>
                <h2>Thank you for playing!</h2>             

            </div>
        </CreditsStyle>
    )
}

export default Credits