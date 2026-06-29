import React from "react";
 
function SupportBox() {
  return (
    <div className="support-box">
      <h3>Need Help?</h3>
      <p>Our support team is here to assist you.</p>

      <a href="mailto:support@example.com" className="btn">
        Email Support
      </a>

      <a
        href="https://wa.me/911234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="btn whatsapp"
      >
        Chat on WhatsApp
      </a>
    </div>
  );
}


const Support=()=>{
    return(
        <>
        <h1>For any kind of support we are always available here</h1>
        </>
    )
}
 // export default Support;
 export default SupportBox;