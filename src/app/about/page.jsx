import Swipe from "@/components/Swipe";

export default function About() {
  return (
    <Swipe prev={"/"} next={"/work"}>
      <main className="min-h-screen flex flex-col max-w-3xl p-4 gap-10 justify-center">
        <h1 className="text-4xl font-bold mt-20">Namaste 🙏</h1>
        <p>
          Hi there! I'm Dilkhush Raj, a full stack web developer from India with
          expertise in HTML, CSS, JavaScript, React, Next.js and MongoDB. I'm
          currently pursuing a Bachelor of Computer Applications (BCA) degree.
        </p>

        <p>
          As a freelancer, I understand the importance of delivering
          high-quality work on time and on budget. I'm passionate about creating
          beautiful and functional websites that provide an exceptional user
          experience. With my skills and experience, I can help bring your
          vision to life.
        </p>

        <p>
          Whether you're looking to create a new website from scratch or revamp
          an existing one, I'm here to help. I'll work closely with you to
          understand your needs and goals, and together we'll create a website
          that not only looks great but also delivers results.
        </p>

        <p>
          So why choose me as your web developer? For starters, I have a strong
          track record of delivering high-quality work on time and on budget.
          I'm also committed to providing excellent customer service and keeping
          you informed every step of the way.
        </p>

        <p>
          In short, when you work with me, you can expect top-notch web
          development services delivered with professionalism and care. Let's
          work together to create something amazing!
        </p>
      </main>
    </Swipe>
  );
}
