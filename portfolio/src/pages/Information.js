import React, { useState, useEffect } from "react";
import waste1 from "../assets/waste1.png"
import waste3 from "../assets/waste3.png"
import waste4 from "../assets/waste4.png"
import waste5 from "../assets/waste5.png"

function Information() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
        {showModal ? (
        <div className="modal-container">
          <div className="modal-content">
            <h2>Welcome to Waste Management, proud owner of WasteAway!</h2>
            <p>We appreciate you visiting our website. WasteAway is the ultimate study tool for environmental science! Download our app on the App Store to access study sets, games, and flashcards that will help you learn about waste management, sustainability, and more. Let's work together to create a more sustainable future!</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      ) : null}
    <div className="landing-content-area">
      <div className="landing-top-container">
        <div className="landing-left">
          <div className="landing-left-container">
            <div className="landing-top-content">
              <div className="landing-top-title">Waste Management</div>
              <div className="landing-top-text">The goal of this project is to educate people of all backgrounds about general waste management practices, including the proper handling of recycled, compostable, and landfill waste. Through a series of educational materials and outreach efforts, we aim to increase awareness of the environmental impact of different waste types and encourage people to make more informed decisions about their waste disposal habits. Specific topics that will be covered in our educational materials include: what items can and cannot be recycled, how to properly sort and prepare recyclables for pickup, the benefits and methods of composting organic waste, the dangers of improper disposal of hazardous materials, and the impact of waste on the environment and human health.</div>
            </div>
            <div className="landing-middle-content">
              <div className="landing-top-title">Our Target Users</div>
              <div className="landing-top-text">Our primary user category will be in the 13+ age group. The target audience for this project will be those living in the United States of America.</div>
            </div>
            <div className="landing-bottom-content">
              <div className="landing-top-title">Available Sources</div>
              <div className="landing-top-text"> 
                <a href="https://www.in.gov/idem/waste/environmental-benefits-and-impacts/#:~:text=Reducing%20waste%20will%20not%20only,lowers%20the%20potential%20for%20contamination">Resource 1 - IDEM</a> <br></br>
                <a href="https://www.epa.gov/homeland-security-waste/waste-management-benefits-planning-and-mitigation-activities-homeland">Resource 2 - EPA</a> <br></br>
                <a href="https://safetyculture.com/topics/waste-management-system/">Resource 3 - Safety Culture</a> 
              </div>
            </div>
          </div>
        </div>
        <div className="landing-right">
          <img src={waste3} className="landing-top-image-container" alt="waste graphic 3" />
        </div>
      </div>
      <div className="landing-tiles-container">
        <div className="landing-tile">
            <img src={waste1} className="landing-tiles-image-container" alt="waste graphic 1" />
        </div>
        <div className="landing-tile">
            <img src={waste5} className="landing-tiles-image-container" alt="waste graphic 2" />
        </div>
        <div className="landing-tile">
            <img src={waste4} className="landing-tiles-image-container" alt="waste graphic 3" />
        </div>
      </div>
      <div className="landing-top-container">
        <div className="landing-top-content">
          <div className="landing-bottom-text">If you would like to learn more about waste management and keep up to date with this project, feel free to contact us directly or continue to check this site.</div>
        </div>
      </div>
    </div>
    </div>
  );
};
  
export default Information;