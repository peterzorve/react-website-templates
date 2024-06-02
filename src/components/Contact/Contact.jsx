// https://web3forms.com/
import React, {useState} from 'react'
import "./Contact.css"
import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/mail-icon.png"
import phone_icon from "../../assets/phone-icon.png"
import location_icon from "../../assets/location-icon.png"
import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "cf8c6136-a1bb-49ff-9618-c99eace4e5b7");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        setResult(data.message);
        }
    };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /> </h3>
            <p>Atoms are made of three kinds of subatomic particles. These are protons, neutrons, and electrons. Protons and neutrons have much more mass. These are in the middle of the atom, called the nucleus. Lightweight electrons move quickly around them. The electromagnetic force holds the nucleus and electrons together. Atoms with the same number of protons belong to the same chemical element. Examples of elements are carbon and gold. Atoms with the same number of protons, but different numbers of neutrons, are called isotopes. Usually an atom has the same number of electrons as protons. If an atom has more or less electrons than protons, it is called an ion, and has an electric charge.</p>
            <ul>
                <li> <img src={mail_icon} alt="" /> peterzorve@gmail.com</li>
                <li> <img src={phone_icon} alt="" /> +358417289032</li>
                <li> <img src={location_icon} alt="" /> Mikkeli <br />Finland </li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone number</label>
                <input type="tel" name='phone' placeholder='Enter your phone number' required/>
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
        
    </div>
  )
}

export default Contact

