import { PureComponent } from 'react';
import logo from './logo.svg';
import './MainPage.css';

function MainPage(props) {
  return (
    <div>
      <TitleHeader></TitleHeader>
      <BodyDescription bodyData = {props.data}>
      </BodyDescription>  
    </div>
  );
}

function TitleHeader(props) {
  return (
    <div class="title-header-container">
      <p class="title-name">Tobias Fuentebuena Guardon</p>
      <p class="title-description">Fullstack Developer - Accesibility Enthusiast</p>
    </div>
  );
}

function BodyDescription(props) {
  return (
    <div class="body-description-container">
      <AboutMe aboutMe ={props.bodyData.AboutMe}></AboutMe>
      <SectionContent Content={props.bodyData.OtherSkills}></SectionContent>
    </div>
  );
}

function AboutMe(props) {
  const contentText = props.aboutMe;
  return (
    <div class="about-me-description">
      <p>{contentText}</p>
    </div>
  )
}

function SectionContent(props) {

  const contentList = props.Content.map((x) => {
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