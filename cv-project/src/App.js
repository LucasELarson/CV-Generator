import React, { useState } from "react";
import uniqid from 'uniqid'
import GeneralSection from "./components/General";
import ExperienceSection from "./components/Experience";
import EducationSection from "./components/Education";
import './styling/app.css'
import './styling/forms.css'

function App() {
  const [educationIds, setEducationIds] = useState([]);
  const [experienceIds, setExperienceIds] = useState([]);

  const handleClick = (type) => {
    if(type === 'experienceIds') {
      setExperienceIds((prevExIds) => [...prevExIds, uniqid()]);
    } else {
      setEducationIds((preEdIds) => [...preEdIds, uniqid()]);
    }
  }

  const handleDelete = (type, id) => {
    if(type === "experienceIds") {
      setExperienceIds((prevExIds) => {
        let newList = prevExIds.filter((key) => key !== id);
        return newList;
      })
    } else {
      setEducationIds((preEdIds) => {
        let newList = preEdIds.filter((key) => key !== id);
        return newList;
      })
    }
  }

  const edComponents = educationIds.map((id) => (
    <EducationSection key={id} id={id} handleDelete={handleDelete}/>
  ));

  const exComponents = experienceIds.map((id) => (
    <ExperienceSection key={id} id={id} handleDelete={handleDelete}/>
  ))

  return (
    <div>
      <main>
        <h1 className="title">Resume Builder</h1>
        <h2 className="subTitle">General Information</h2>
        <GeneralSection/>
        <div>
          <h2 className="subTitle" >Education</h2>
          {edComponents}
          <button className="addBtn" onClick={() => handleClick('educationIds')} >Add</button>
        </div>
        <div>
          <h2 className="subTitle" >Experience</h2>
          {exComponents}
          <button className="addBtn" onClick={() => handleClick('educationIds')} >Add</button>
        </div>
        <button onClick={() => {
          window.print();
        }}
        className="addBtn">
          Print
        </button>
      </main>
    </div>
  );
}

export default App;
