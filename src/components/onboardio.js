import React, { useState } from 'react';
import './onboardio.css'
import { useAuth } from '../contexts/authContext';
//import sende from '../images/paper-plane.png'
const Onboardioo = () => {
    const { currentUser } = useAuth();
    const [selectedEmail, setSelectedEmail] = useState(null);
    const [selectedText, setSelectedText] = useState('');
    const [selectedMail, setSelectedMail] = useState('');
    const [emailContent, setEmailContent] = useState('');
    const [filterTerm, setFilterTerm] = useState('');
    const [filteredEmails, setFilteredEmails] = useState([
   
      { id: 1, mail: "omar@gmail.com" },
      { id: 2, mail: "eya@gamil.com" },
      { id: 3, mail: "ela.pro@gmail.com" },
    

    ]);
  
    const handleTextSelection = (text) => {
      setSelectedText(text);
    };
    const handleTextSelectione = (text) => {
        setSelectedMail(text);
      };
      const handleSendEmail = () => {
        if (selectedEmail) {
          // Implement your logic to send the email
          console.log('Sending email...', { selectedEmail, emailContent });
          // Here you can use selectedEmail and emailContent for sending the email
        } else {
          console.warn('No email selected for sending.');
        }
      };
    
      const handleEditEmail = () => {
        if (selectedEmail) {
          // Implement your logic to edit the email
          console.log('Editing email...', { selectedEmail, emailContent });
          // Here you can use selectedEmail and emailContent for editing the email
        } else {
          console.warn('No email selected for editing.');
        }
      };
  
    const handleFilterChange = (e) => {
      const searchTerm = e.target.value;
      setFilterTerm(searchTerm);
  
      // Use the filterTerm to filter the list of emails
      const filteredList = filteredEmails.filter((email) =>
        email.mail.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredEmails(filteredList);
    };
  
    return (
      <div className="NewPage">
        <div className="header">
          <div className="left-section">ONBOARDIO</div>
          <div className="right-section">  Hello, {" "}
          {currentUser.displayName
            ? currentUser.displayName
            : currentUser.email}</div>
        </div>
  
        <div className="title">
          <h1>Boss, No Time Today? 💃</h1>
        </div>
  
        <div className="content">
          <div className="email-filter">
            <input
          type="text"
          placeholder="Enter Candidate mail"
          value={filterTerm}
          onChange={handleFilterChange}
          id='in'
        />
        <ul>
          {filteredEmails.map((email) => (
              <li key={email.id} onClick={() => handleTextSelectione(email.mail)}>
              {email.mail}
            </li>
          ))}
          
        </ul>
          
          </div>
  
          <div className="text-section">
            <div className="text" onClick={() => handleTextSelection(<h4>Hello hello ! Welcome to <br/> the Tea</h4>)}>
              <h5>Hello hello ! Welcome to the Tea</h5>
            </div>
            <br/>
            <div className="text" onClick={() => handleTextSelection(<h4>Please Prepare  <br/>These Document</h4>)}>
              <h5>Please Prepare These Document</h5>
            </div>
            <br/>
            <div className="text" onClick={() => handleTextSelection(<h4>We Can’t Wait <br/> To See You!</h4>)}>
              <h5>We Can’t Wait To See You!</h5>
            </div>
            <br/>
            <div className="text" onClick={() => handleTextSelection(<h4>Onboarding Starts <br/>Tomorrow !</h4>)}>
              <h5>Onboarding Starts Tomorrow !</h5>
            </div>
          </div>
  
          <div className="email-box">
            {/* Add your email box component */}
            <div className="mail">
              <h4>{selectedText}</h4>
              <p> TO: {selectedMail}</p>
            </div>
            <textarea
              placeholder="Write your email content here..."
              value={emailContent}
              onChange={(e) => setEmailContent(e.target.value)}
              aria-required
            />
            <div className="buttons">
              <button id='edit' onClick={handleEditEmail}>Edit</button>
              <button id='send' onClick={handleSendEmail}>Send Email</button>
            </div>
          </div>
        </div>
      </div>
    );
  };


export default Onboardioo;
