import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mayank Raj",
  title: "Hi all, I'm Mayank",
  subTitle: emoji(
    "A passionate Data Science enthusiast skilled in Python, machine learning, and data visualization, driven to turn data into actionable insights."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/xenon110",
  linkedin: "hhttps://www.linkedin.com/in/mayank-raj-b8b312272/",
  gmail: "mayankrajdto@gmail.com",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CRAZY DATA SCIENCE ENTHUSIAST WHO TURNS RAW DATA INTO MEANINGFUL INSIGHTS WITH ML AND STATISTICS",
  skills: [
    emoji(
      "⚡ Transform raw data into powerful insights using machine learning, statistics, and visualization tools."
    ),
    emoji("⚡ Build smart data-driven solutions using Python, R, and ML tools.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "r",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "postgresql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "postman",
      fontAwesomeClassname: "fas fa-envelope"
    },
    {
      skillName: "machine learning",
      fontAwesomeClassname: "fas fa-robot"
    }
  ],
  display: true
  // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "VIT AP",
      logo: require("./assets/images/vitap.jpg"),
      subHeader: "Computer Science Engineering",
      duration: "September 2022 - June 2026",
      desc: "Consistently ranked in the top 5% of the student cohort."
    },
    {
      schoolName: "Jawahar Navodaya Vidyalaya",
      logo: require("./assets/images/jnv.jpg"),
      subHeader: "Completed education from Grade 6 to 12 ",
      duration: "August 2015 - April 2022",
      desc: "Ranked in the top 3% of the class."
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python/R",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Self-Learner - Data Science",
      company: "Independent",
      companylogo: require("./assets/images/DataScience.png"), // replace with your own logo or a generic icon
      date: "Jan 2023 – Present",
      desc: "Proactively learning data science concepts and tools including Python, pandas, NumPy, and machine learning algorithms. Completed multiple projects involving data analysis, visualization, and predictive modeling to build practical skills."
    },

    {
      role: "AWS Cloud Architecting Graduate",
      company: "Amazon",
      companylogo: require("./assets/images/Amazon.png"),
      date: "June 2024 – Nov 2024",
      desc: "Experienced in designing and deploying scalable cloud solutions with AWS, focusing on architecture best practices and security."
    },

    {
      role: "Cybersecurity",
      company: "Cisco",
      companylogo: require("./assets/images/Cisco.jpg"),
      date: "Nov 2023 – April 2024",
      desc: "Secured networks and analyzed threats as part of Cisco's cybersecurity team, gaining hands-on experience in real-world environments.",
      descBullets: [
        "Monitored network traffic and identified suspicious activity using SIEM tools",
        "Assisted in vulnerability assessments and security audits across Cisco systems"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Ongoing Projects",
  subtitle: "Currently Building & Innovating",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Zuply",
      projectDesc: "From your Gully Your Door"
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Lumora",
      projectDesc: "From Confusion to Clarity — Start Here."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Project 🏆 "),
  subtitle: "Achievements, Project Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "DSA Safari",
      subtitle:
        "DSA Hub: Practice and Master All Types of Data Structures and Algorithms in One Place",
      image: require("./assets/images/Neo.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Visit the Site",
          url: "https://neon-dsa.vercel.app/"
        },
        {
          name: "Github",
          url: "https://github.com/xenon110/Neon_Dsa"
        }
      ]
    },
    {
      title: "Kaggle project/dataset",
      subtitle:
        "Showcasing a collection of real-world data science problems solved on Kaggle with code, insights, and results.",
      image: require("./assets/images/kaggle.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "ALL Kaggle Project",
          url: "https://www.kaggle.com/raj110"
        }
      ]
    },

    {
      title: "MediDerm",
      subtitle: "Skin Disease Detection and Classification with Deep CNNs",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Visit to Code",
          url: "https://github.com/xenon110/Skin-Disease-Classification/blob/main/skin-disease-classification%20(2).ipynb"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section / my coading section

const blogSection = {
  title: "My Coding Space",
  subtitle:
    "With a passion for coding and building innovative projects, I love sharing my knowledge and growing as a developer every day.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://leetcode.com/u/mayank103/",
      title: "Explore My LeetCode Journey",
      description:
        "Check out my LeetCode profile where I solve algorithm and coding challenges to sharpen my problem-solving skills."
    },
    {
      url: "https://www.geeksforgeeks.org/user/rmayan29z6/",
      title: "Mastering DSA",
      description:
        "Solving a wide range of data structures and algorithms problems on GeeksforGeeks to strengthen problem-solving skills."
    },
    {
      url: "https://drive.google.com/file/d/1aB7LanDMZWTaj7G2U1jxpdzEDACQwiMg/view?usp=drivesdk",
      title: "My Learning Milestones",
      description:
        "Proof of continuous learning, professional growth, and certified expertise"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Google WOW Speaker",
      subtitle:
        "Honored to share my tech journey and inspire others on the Google WOW."
      // slides_url: "https://bit.ly/saadpasta-slides"
      // event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("My Passion for Data Science "),
  subtitle:
    "I’m deeply passionate about Data Science and Machine Learning because they allow me to turn raw data into meaningful insights and impactful solutions. The idea of using algorithms to solve real-world problems, predict outcomes, and uncover hidden patterns truly excites me. Every dataset feels like a puzzle waiting to be solved, and the continuous learning in this field keeps me motivated and curious every day.",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    //"https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Please feel free to reach out if you have any questions or need further information.",
  number: "+91-9508303814",
  email_address: "mayankrajdto@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
