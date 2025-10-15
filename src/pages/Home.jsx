import React from 'react';
import user from '../data/Users'
import ImageCard from '../components/organisms/ImageCard';
import ContentHero from '../components/templates/ContentHero';
import '../styles/pages/Home.css'
import '../styles/organisms/ImageCard.css'
import '../styles/molecules/TextContent.css'
import '../styles/molecules/SkillSection.css'
import '../styles/molecules/SocialButton.css'
import '../styles/templates/ContentHero.css'

function Home() {
  const { personalInfo, skills, socialLinks } = user;

  const skillsComponent = (
    <div className="mb-4">
      <h6 className="home-skills-title">Tecnologías:</h6>
      <div className="d-flex flex-wrap gap-2 justify-content-center">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="home-skill-badge badge text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

const socialComponent = (
    <div className="home-social-buttons">
        {socialLinks.map((social, index) => (
            <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm me-2"
            >
                <i className={social.icon}></i> {social.name}
            </a>
        ))}
    </div>
);
  return (
      <ContentHero
        imageComponent={<ImageCard src={personalInfo.avatar} alt={personalInfo.name} />}
        title={personalInfo.name}
        subtitle={personalInfo.title}
        description={personalInfo.about}
        skillsComponent={skillsComponent}
        socialComponent={socialComponent}
        centered={true}
      />
  );
}

export default Home;