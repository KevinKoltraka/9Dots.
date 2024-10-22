export const HeroData = [
    {
      src: "hero/person1.jpg",
      bg: "#0be4d1",
      delay: 0.1,
    },
    {
      src: "hero/person2.jpg",
      bg: "#fde490",
      delay: 0.3,
    },
    {
      src: "hero/person3.jpg",
      bg: "#00c9f7",
      delay: 0.2,
    },
    {
      src: "hero/person4.jpg",
      bg: "#83cfdf",
      delay: 0.2,
    },
    {
      src: "hero/person5.jpg",
      bg: "#fe8856",
      delay: 0.3,
    },
    {
      src: "hero/person6.jpg",
      bg: "#0be4d1",
      delay: 0.25,
    },
  ];
  
  export const features = [
    {
      icon: "/features/content-marketing.gif",
      title: "Digital Marketing",
    },
    {
      icon: "/features/seo.gif",
      title: "SEO (Search Engine Optimization)",
    },
    {
      icon: "/features/content-marketing1.gif",
      title: "Content Marketing",
    },
    {
      icon: "/features/executive.png",
      title: "Executive Search",
    },
    {
      icon: "/features/talent.png",
      title: "Talent Acquisition",
    },
    {
      icon: "/features/rating.gif",
      title: "Candidate Evaluation",
    },
  ];
  
  export const ourDiffFeatures = [
    {
      icon: "/OurDiff/job-search.gif",
      title: "Job Seekers",
      des: "Our mission is to empower job seekers by connecting them with fulfilling career opportunities that align with their skills and aspirations.",
    },
    {
      icon: "/OurDiff/career-advancement.gif",
      title: "Career Matchmaking",
      des: "Career Matchmaking: Uniting Job Seekers and Employers for Mutual Success.",
    },
    {
      icon: "/OurDiff/employment.gif",
      title: "Employers",
      des: "Empowering employers to find and connect with top talent, ensuring their teams are built for success and growth.",
    },
  ];
  
  export const hitFeatures = [
    { 
      icon: "/howItWorks/message.gif",
      title: "Identify Your Need 💡",  
      des: "Choose Your Focus: Marketing or Recruitment? Tell us what service you need through the form available on every page. Select the sector that matches your challenge, and we’ll take it from there.",
    },
    {
      icon: "/howItWorks/rfp.gif",
      title: "Fill Out the Form 📝",
      des: "Let’s Get to Know You: Describe your business with a noun and adjective (e.g., “Innovative Startup”), provide your business name, and briefly explain the issue you want to solve. This helps us tailor the best solution.",
    },
    {
      icon: "/howItWorks/solution.gif",
      title: "We’ll Craft Your Solution 🚀",
      des: "Actionable Strategy: Once you submit the form, our experts review your input and get in touch quickly. Whether you need marketing strategies or talent acquisition, we provide a plan designed to address your needs directly.",
    },
  ];

  const FeatureList = () => {
    return (
        <div>
            {hitFeatures.map((feature, index) => (
                <div key={index} className="feature">
                    <img src={feature.icon} alt={feature.title} />
                    <h3 style={{ color: 'white' }}>{feature.title}</h3>
                    <p>{feature.des}</p>
                </div>
            ))}
        </div>
    );
};

export default FeatureList;
  
  export const whoWeInvest = [
    {
      title: "Industries We Support",
      des: "At 9Dots Agency, we specialize in tailored marketing and recruitment solutions for industries like technology, healthcare, finance, and retail.",
    },
    {
      title: "Sectors We Empower",
      des: "We unlock potential and foster growth for startups and established enterprises across sectors such as e-commerce, hospitality, education, and manufacturing.",
    },
    {
      title: "Our Focus Areas",
      des: "Our commitment to impactful solutions is reflected in our focus on digital marketing, talent acquisition, non-profit organizations, and professional services.",
    },
    {
      title: "Who We Partner With",
      des: "We build strong partnerships with diverse organizations, including tech innovators, creative agencies, healthcare providers, and educational institutions, to enhance brand presence and attract top talent.",
    },
  ];
  
  export const testimonialsData = [
    {
      comment:
        "Working with 9Dots Agency was a game changer for us. Their tailored strategies significantly boosted our recruitment efforts and helped us find the right talent quickly!",
      name: "Anonymus",
      profession: "QA specialist, Matrix architect",
    },
    {
      comment:
        "The marketing solutions provided by 9Dots Agency transformed our brand presence. Their expertise and dedication made all the difference in our outreach!",
      name: "Anonymus",
      profession: "Founder, Dubrow Cafeteria",
    },
    {
      comment:
        "Thanks to 9Dots, our hiring process is now streamlined and efficient. Their insights and support have been invaluable in attracting top candidates.",
      name: "Anonymus",
      profession: "Directork, Lafayette Radio",
    },
    {
      comment:
        "The team at 9Dots Agency understands our unique challenges and delivers results that exceed our expectations. We're thrilled with the partnership!",
      name: "Anonymus",
      profession: "Manager, China Coast",
    },
  ];