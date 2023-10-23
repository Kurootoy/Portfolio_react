/* eslint-disable react/no-unescaped-entities */
const ContactDetails = () => (
  <div className="" data-aos="fade-up" data-aos-duration="2000">
    <div className="text-2xl font-bold "style={headerStyles }>Contact Details</div>
    <p className="address pt-3  leading-relaxed text-lg">
      <span>Sattawut Jirakannukun</span>
      <br />
      <span>Chiang Rai, Thailand</span>
      <br />
      <span>092-239-9154</span>
      <br />
      <span>Email: settawut.jirakannukun@gmail.com</span>

      <br />
    </p>
    <button
      className="mt-5 flex items-center bg-[#121212] text-red-400 h-16 rounded-xl mx-8 p-5 text-lg font-semibold   border-red-200 border-2 border-solid
         hover:text-[#121212] hover:bg-red-200 "
      onClick={() => window.open("../Resume/CV_Settawut.pdf", "_blank")}
    >
      <box-icon
        name="download"
        type="solid"
        animation="tada"
        color="#F98080"
        
      ></box-icon>
      Download Resume
    </button>
  </div>
);
const headerStyle = {
  borderBottom: "3px solid #E2FF32",
  padding: "40px",
  height: "35px",
  width:"200px",
};
const headerStyles= {
  borderBottom: "3px solid #E2FF32",
  padding: "40px",
  height: "35px",
  width:"260px",
};
const About = () => (
  <div
    id="about"
    className="flex flex-row items-center justify-center h-auto gap-28 pb-12 bg-[#18181b] text-white"
  >
    <img
      src="../img/2.jfif"
      className="w-1/6 h-80% rounded-full"
      alt="Profile"
      data-aos="fade-right"
      data-aos-duration="2000"
      data-aos-anchor-placement="top-bottom"
    />
    <div className="w-[45%]" data-aos="fade-up" data-aos-duration="2000">
      <div className="text-2xl font-bold pt-3 border-b-4  pb-3 " style={headerStyle}>About Me</div>
      <p className="pt-3 pb-3 text-lg leading-relaxed">
        I used to be part of the JSD Generation Thailand program, where I
        expressed a keen interest in engaging in software development for the
        organization.
        <br />I have experience in building web apps using HTML, CSS, and Javascript, and I was enthusiastic about learning and developing skills
        that would contribute to the organization's goals.
      </p>
      <ContactDetails />
    </div>
  </div>
);

export default About;
