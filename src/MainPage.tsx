import React from 'react';
import './Styles/MainPage.css';

function MainPage (props: any) {
  return (
    <div>
      <TitleHeader></TitleHeader>
      <BodyDescription bodyData = {props.data}>
      </BodyDescription>
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
      <SimpleListContent Content={props.bodyData.TechnicalSkills} className="bullet-list"></SimpleListContent>
      <SimpleListContent Content={props.bodyData.OtherSkills} className="bullet-list"></SimpleListContent>
    </div>
  );
}

function AboutMe (props: any) {
  const contentText = props.aboutMe;
  return (
    <div className="about-me-description">
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
      <ul className={props.className}>
        {contentList}
      </ul>
    </div>
  );
}

function ContactInfo (props: any) {
  let contactInfo: any = props.Content;

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
    <div>
      <ul>
        {contentList}
      </ul>
    </div>
  );
}

export default MainPage;
