import React, { useState } from "react";
import TextSection from "./TextArea";

const ExperienceSection = (props) => {
   const [experienceInfo, setExperienceInfo] = useState({
      companyName: '',
      position: '',
      from: '',
      to: '',
      tasks: '',
   })
   const [editMode, setEditMode] = useState(true);

   const handleChange = (e) => {
      const {name, value} = e.target;
      setExperienceInfo((prevInfo) => {
         let newInfo = { ...prevInfo, [name]: value};
         return newInfo
      })
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setEditMode((prevMode) => !prevMode);
   };

   const { companyName, position, from, to, tasks} = experienceInfo;
   const { id, handleDelete} = props;

   if(!editMode){
      return(
         <TextSection
            companyName={companyName}
            position={position}
            from={from}
            to={to}
            tasks={tasks}
            handleEdit={handleSubmit}
         />
      );
   }

   return (
      <section>
         <form action="" className="section exSection" onSubmit={handleSubmit} >
            <label>
               <p>Company Name:</p>
               <input
                  type='text'
                  placeholder="Company Name"
                  name='companyName'
                  onChange={handleChange}
                  value={companyName}
               />
            </label>
            <label>
               <p>Position:</p>
               <input
                  type='text'
                  placeholder='Position'
                  name='position'
                  onChange={handleChange}
                  value={position}
               />
            </label>
            <label>
               <p>Start Date</p>
               <input
                  type="date"
                  name="from"
                  placeholder="Start Date"
                  onChange={handleChange}
                  value={from}
               />
            </label>
            <label>
               <p>End Date</p>
               <input
                  type="date"
                  name="to"
                  placeholder="End Date"
                  onChange={handleChange}
                  value={to}
               />
            </label>
            <textarea
               name="tasks"
               className="tasks"
               placeholder="Describe your primary responsibilities here"
               onChange={handleChange}
               value={tasks}
            />
            <button className="formBtn" >Save</button>
            <button className="formBtn" type="button" onClick={() => handleDelete('experienceIds', id) } >Delete</button>
         </form>
      </section>
   )

}  

export default ExperienceSection