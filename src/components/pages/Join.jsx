import './Join.css'; // link to your CSS file


export const Join = () => {

  const isRecruitmentOpen = true;

  const jobOpenings = [
    {
      team: 'Team Alpha',
      description: 'Frontend Developer',
      details: ['React, CSS, Tailwind', '2+ years experience'],
      link: 'https://docs.google.com/forms/d/e/1FAIpQLSdJQDNr5RE_KOnGWs9i5jlOdAj_UiSTDjWVVS9GtrpZhL83mA/viewform?usp=dialog',
    },
    {
      team: 'Team Beta',
      description: 'Marketing Intern',
      details: ['Social Media, Content Creation', 'Remote option'],
      link: 'https://docs.google.com/forms/d/e/1FAIpQLScIcvUJr-Fq4Rw2EFBwt2ftOvRiRkv_8FkQyOCqzvYrlJM9kA/viewform?usp=dialog',
    },
    {
      team: 'Team Beta',
      description: 'Marketing Intern',
      details: ['Social Media, Content Creation', 'Remote option'],
      link: 'https://docs.google.com/forms/d/e/1FAIpQLScIcvUJr-Fq4Rw2EFBwt2ftOvRiRkv_8FkQyOCqzvYrlJM9kA/viewform?usp=dialog',
    },
    {
      team: 'Team Beta',
      description: 'Marketing Intern',
      details: ['Social Media, Content Creation', 'Remote option'],
      link: 'https://docs.google.com/forms/d/e/1FAIpQLScIcvUJr-Fq4Rw2EFBwt2ftOvRiRkv_8FkQyOCqzvYrlJM9kA/viewform?usp=dialog',
    },
  ];

  return (
    <><section id="hero" className="section hero" style={{ backgroundImage: `url("https://t3.ftcdn.net/jpg/10/02/64/12/360_F_1002641250_JQ7PT0x14ZpsIaJjk3lROYKSou20YcPH.jpg")` }}>
      <div className="hero-text">
        <h1>Join ForeSee!</h1>
      </div>
    </section>

<section id="member" className="section member">
      <div className="member-container">
        <div className="top-tab-bar">
          <div>Join ForeSee</div>
          <div>|</div>
          <a className="top-link" href="#member">Join us as a member</a>
          <a className="top-link" href="#partner">Join us as a partner</a>
        </div>
        <hr />
        <h2>Become a ForeSee Member</h2>

        {isRecruitmentOpen ? (
          <>
            <h4>Current Openings</h4>
            <div className="job-list">
              {jobOpenings.map((job, index) => (
                <div key={index} className="job-card">
                  <strong>{job.team}</strong>
                  <p>{job.description}</p>
                  {job.details.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="apply-link"
                    >
                      Click Here to Apply
                    </a>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="closed-msg">
            Our recruitment application is currently closed. Please stay tuned for more updates!
          </p>
        )}
      </div>
</section>
      
      <section id="partner" className="partner">
        <div>
          <h2>Become a ForeSee Partner</h2>
          <p>
          ForeSee has been partnering with NGOs, optometrists, and community centres in organizing events. We welcome any interesting collaboration ideas you may have. Please feel free to contact us through sightforesee@ust.hk
          </p>
          <button className="button-contact">Contact ForeSee</button>
        </div>
      </section>


      <footer className="footer">
      <div className="footer-top">
        <img src="./src/assets/logo.png" alt="ForeSee logo" className="footer-logo" />
        <span className="footer-brand">ForeSee</span>
      </div>

      <div className="footer-bottom">
        <div className="footer-center">
          <a href="mailto:sightforesee@ust.hk" className="footer-button">Email Us</a>
          <div className="social-icons">
            <a href="https://www.facebook.com/foreseehkust/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.google.com/url?q=https://www.instagram.com/foresee_hk/&sa=D&source=editors&ust=1743220365234337&usg=AOvVaw3Pph2fan0YRoRmqJvJ87Z0" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/foreseehk/?originalSubdomain=hk" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://www.google.com/url?q=https://www.youtube.com/channel/UCXjkhENQuYXNIqz9AdKVZBw&sa=D&source=editors&ust=1743220365234452&usg=AOvVaw1JYaM2pyFUSxWjYqodnRdi" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-copy">
        Copyright ©2023 ForeSee HK. All rights reserved.
      </div>
      </div>
    </footer>
      </>
  );
};
