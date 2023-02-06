import React from 'react';
import './Styles/MainPage.css';

function MainPage (props: any) {
  return (
    <div>
      <header id='MainHeader'>
        <TitleHeader></TitleHeader>
      </header>
      <section id='MainContent'>
        <BodyDescription bodyData = {props.data}>
        </BodyDescription>
      </section>
    </div>
  );
}

function TitleHeader (props: any) {
  return (
    <div className="title-header-container">
      <p className="title-name">Tobias Fuentebuena Guardon</p>
      <p className="title-description">Fullstack Developer - Accesibility Enthusiast</p>
    </div>
  );
}

function BodyDescription (props: any) {
  return (
    <div className="body-description-container">
      <ContactInfo Content={props.bodyData.Contact}></ContactInfo>
      <AboutMe aboutMe ={props.bodyData.AboutMe}></AboutMe>
      <SimpleListContent Content={props.bodyData.TechnicalSkills} ClassName="bullet-list" Title='Technical Skills'></SimpleListContent>
      <SimpleListContent Content={props.bodyData.OtherSkills} ClassName="bullet-list" Title='Other Skills'></SimpleListContent>
      <ExperienceSector Content={props.bodyData.Experience}></ExperienceSector>
    </div>
  );
}

function AboutMe (props: any) {
  const contentText = props.aboutMe;
  return (
    <div className="about-me-description-container">
      <h3>About Me</h3>
      <hr />
      <p>{contentText}</p>
    </div>
  );
}

function SimpleListContent (props: any) {
  const contentList = props.Content.map((x: any) => {
    return <li key={x.id}>{x}</li>;
  });

  return (
    <div>
      <h3>{props.Title}</h3>
      <hr />
      <ul className={props.ClassName}>
        {contentList}
      </ul>
    </div>
  );
}

function ContactInfo (props: any) {
  const contactInfo: any = props.Content;

  const contentList: any = Object.keys(contactInfo).map((key: string, index: number) => {
    if (key === 'Email') {
      let emailTo: string = 'mailto:' + (contactInfo[key] as string);
      return <li className={key.toLowerCase().concat('-list-item')} key={key}>
          <a href={emailTo}>{contactInfo[key]}</a>
        </li>;
    }

    if (key === 'Phone') {
      return <li className={key.toLowerCase().concat('-list-item')} key={key}>{contactInfo[key]}</li>;
    }

    if (key === 'LinkedIn') {
      return <li className={key.toLowerCase().concat('-list-item')} key={key}>
      <a href={contactInfo[key]}>{contactInfo[key]}</a>
    </li>;
    }

    return null;
  });

  return (
    <div className='contact-info-container'>
      <h3>Contact Info</h3>
      <hr />
      <ul>
        {contentList}
      </ul>
    </div>
  );
}

function ExperienceSector (props: any) {
  const contentList = props.Content.map((x: any) => {
    // TODO: Refactor the content of the DIV into smaller components
    return <div className='experience-sector' key={x.id}>
      <h4 className='experience-title' key={x.Position.id}>{x.Company} | {x.Position}</h4>
      <p className='experience-period' key={x.Period.id}>{x.Period}</p>
      <p className='experience-desc' key={x.Description.id}>{x.Description}</p>
      </div>;
  });

  return (
    <div className='experience-container'>
      <hr />
      <h3>Experience</h3>
        {contentList}
    </div>
  );
}

export default MainPage;
