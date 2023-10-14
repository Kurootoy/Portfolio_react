const ContactDetails = () => (
  <div>
    <div className="text-2xl font-bold pb-3">Contact Details</div>
    <p className="address">
      <span>Sattawut Jirakannukun</span>
      <br />
      <span>Chiang Rai, Thailand</span>
      <br />
      <span>0922399154</span>
      <br />
      <span>Email: settawut.jirakannukun@gmail.com</span>
      <button className="bg-[#121212] text-[#E2FF32] h-16 rounded-xl mx-8 p-5 hover:bg-[#E2FF32] hover:text-[#121212] text-lg font-semibold" onClick={() => window.location.href = "#"}>
        Download Resume
      </button>
      <br />
    </p>
  </div>
);

const About = () => (
  <div
    data-aos="fade-up"
    data-aos-duration="2000"
    id="about"
    className="flex flex-row items-center justify-center h-auto gap-28 pb-12"
  >
    <img src="../img/2.jfif" className="w-1/6 h-80% rounded-full" alt="Profile" />
    <div className="w-2/5">
      <div className="text-2xl font-bold pt-3">About Me</div>
      <p className="pt-3 pb-3">
        I used to be part of the JSD Generation Thailand program, where I expressed a keen interest in engaging in software development for the organization.
        <br />
        I have experience in building web apps using HTML, CSS, and other languages. I was enthusiastic about learning and developing skills that would contribute to the organization's goals.
      </p>
      <ContactDetails />
    </div>
  </div>
);

export default About;
