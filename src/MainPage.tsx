import React from 'react';
import './Styles/MainPage.css';

function MainPage(props : any) {
  return (
    <div>
      <TitleHeader></TitleHeader>
      <BodyDescription bodyData = {props.data}>
      </BodyDescription>  
    </div>
  );
}

function TitleHeader(props : any) {
  return (
    <div className="title-header-container">
      <p className="title-name">Tobias Fuentebuena Guardon</p>
      <p className="title-description">Fullstack Developer - Accesibility Enthusiast</p>
    </div>
  );
}

function BodyDescription(props : any) {
  return (
    <div className="body-description-container">
      <AboutMe aboutMe ={props.bodyData.AboutMe}></AboutMe>
      <SectionContent Content={props.bodyData.OtherSkills}></SectionContent>
    </div>
  );
}

function AboutMe(props : any) {
  const contentText = props.aboutMe;
  return (
    <div className="about-me-description">
      <p>{contentText}</p>
    </div>
  )
}

function SectionContent(props : any) {

  const contentList = props.Content.map((x : any) => {
    return <li>{x}</li>
  })

  return (
    <div>
      <ul>
        {contentList}
      </ul>
    </div>
  )
}

export default MainPage;
