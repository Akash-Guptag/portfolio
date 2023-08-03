import { Col } from "react-bootstrap";
import resumeImage from "../assets/img/Akash_CV_Page1_merged.pdf";

export const Newsletter = () => {

  const handleResumeClick = () => {
    window.open(resumeImage, '_blank');
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <div className="new-email-bx">
          <button type="button" onClick={handleResumeClick}>Resume</button>
        </div>  
      </div>
    </Col>
  )
}
