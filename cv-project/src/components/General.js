import React, { useState } from "react";
import TextSection from "./TextArea";

const GeneralSection = () => {
   const [personalInfo, setPersonalInfo] = useState({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
   });
   const [editMode, setEditMode] = useState(true);

   const handleChange = (e) => {
      const {name, value} = e.target;
      setPersonalInfo((prevInfo) => {
         let newInfo = { ...prevInfo, [name]: value};
         return newInfo
      })
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setEditMode((prevMode) => !prevMode);
   };

   const { firstName, lastName, email, phone} = personalInfo;

   if(!editMode){
      return (
         <TextSection
            firstName={firstName}
            lastName={lastName}
            email={email}
            phone={phone}
            handleEdit={handleSubmit}
         />
      );
   }

   return (
      <section className="generalSection">
         <form className="section" action="" onSubmit={handleSubmit}>
            <label>
               <p>First Name</p>
               <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={handleChange}
                  value={firstName}
               />
            </label>
            <label>
               <p>Last Name</p>
               <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={handleChange}
                  value={lastName}
               />
            </label>
            <label>
               <p>Email</p>
               <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={email}
               />
            </label>
            <label>
               <p>Phone</p>
               <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  onChange={handleChange}
                  value={phone}
               />
            </label>
            <button className="formBtn generalBtn" type="submit">
               Save
            </button>
         </form>
      </section>
   )
}

export default GeneralSection