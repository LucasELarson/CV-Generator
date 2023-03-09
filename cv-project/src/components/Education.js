import React, { useState } from "react";
import TextSection from "./TextArea";

const EducationSection = (props) => {
   const [educationInfo, setEducationInfo] = useState({
      schoolName: '',
      major: '',
      from: '',
      to: '',
      });
      const [editMode, setEditMode] = useState(true);

   const handleChange = (e) => {
      const {name, value} = e.target;
      setEducationInfo((prevInfo) => {
         let newInfo = { ...prevInfo, [name]: value};
         return newInfo
      })
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setEditMode((prevMode) => !prevMode);
   };

   const { schoolName, major, from, to } = educationInfo;
   const { id, handleDelete } = props

   if(!editMode) {
      return(
         <TextSection
            schoolName={schoolName}
            major={major}
            from={from}
            to={to}
            handleEdit={handleSubmit}
         />
      );
   }
   return(
      <section>
         <form className="section" action="" onSubmit={handleSubmit} >
            <label>
               <p>School Name:</p>
               <input
                  type='text'
                  placeholder="School Name"
                  name='schoolName'
                  onChange={handleChange}
                  value={schoolName}
               />
            </label>
            <label>
               <p>Major:</p>
               <input
                  type='text'
                  placeholder="Major"
                  name='major'
                  onChange={handleChange}
                  value={major}
               />
            </label>
            <label>
               <p>Start Date:</p>
               <input
                  type='date'
                  placeholder="Start Date"
                  name='from'
                  onChange={handleChange}
                  value={from}
               />
            </label>
            <label>
               <p>End Date</p>
               <input
                  type='date'
                  placeholder="End Date"
                  name='to'
                  onChange={handleChange}
                  value={to}
               />
            </label>
            <button className="formBtn" >Save</button>
            <button className="formBtn" type="button" onClick={() => handleDelete('educationIds', id) } >Delete</button>

         </form>
      </section>
   )
}

export default EducationSection