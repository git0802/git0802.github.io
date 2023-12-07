import { SocialLinks } from "@/data";

const Contact = () => {
  return (
    <div id="contact" className="pt-[60px]">
      <div className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
      <div>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Get In Touch
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Contact.
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {SocialLinks.map((social, index) => (
          <div key={index}>
            <div>
              {social.name} : <a href={social.link} >{social.display}</a>
            </div>
          </div>
        ))}
      </div>

      <form action="https://formsubmit.co/dilkhush_raj@outlook.com"  method="POST" className="flex flex-col mb-4 mt-10 gap-2 max-w-2xl ">
        <input type="hidden" name="_next" value="https://dilkhush.vercel.app" />
        <input type="hidden" name="_captcha" value="false" />
        {/* <input type="hidden" name="_autoresponse" value="Thank you for contacting me. I will reach you soon" /> */}
        <label htmlFor="name" >Name</label>
        <input type="text" name="name"  className="p-2 bg-[#222] " placeholder="Your Name" required />
        <label htmlFor="email">Email</label>
        <input type="email" name="email"  className="p-2 bg-[#222] " placeholder="Email Address" required />
        <label htmlFor="message">Message</label>
        <textarea name="message"  id="message" cols="30" rows="10" className="p-2 bg-[#222] " placeholder="I'm currently looking for new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I'll try my best to
        get back to you!"></textarea>
        <button className=" p-2 bg-[#222] ">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
