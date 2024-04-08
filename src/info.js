const getYearsOfExperience = () => {
  const startDate = new Date("2023-02-01");
  const currentDate = new Date();
  const years = currentDate.getFullYear() - startDate.getFullYear();
  return years;
};

export const info = {
  name: "Mariano Arias",
  title: `Web Full Stack +${getYearsOfExperience()} years experience`,
  email: "marianoariasdev@gmail.com",
  social: [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/mariano-arias-066989176/",
      userName: "marianoariasdev"
    },
    {
      name: "Github",
      url: "https://github.com/marianoariasdev",
      userName: "marianoariasdev"
    },
  ],
  description:
    "I'm a software engineer with experience in web development, I'm passionate about technology and I love to learn new things. I'm always looking for new challenges and opportunities to grow as a professional.",
  skills: [
    {
      name: "HTML5",
      percentage: 80,
    },
    {
      name: "CSS3",
      percentage: 80,
    },
    {
      name: "JavaScript",
      percentage: 60,
    },
    {
      name: "React",
      percentage: 30,
    },
    {
      name: "Vue",
      percentage: 60,
    },
    {
      name: "PHP",
      percentage: 50,
    },
    {
      name: "Laravel",
      percentage: 70,
    },
    {
      name: "MySQL",
      percentage: 70,
    },
  ],
  education: [
    {
      degree: "Computer Ingeniering",
      institution: "Universidad Catolica de Santiago del Estero",
      observation: "Up to the 4th year",
    },
  ],
  projects: [
    {
      name: "E-commerce",
      description: "E-commerce website with Laravel and Vue",
      url: "https://google.com",
    },
    {
      name: "Blog",
      description: "Blog website with Laravel and Vue",
      url: "https://google.com",
    },
    {
      name: "Portfolio",
      description: "Portfolio website with React",
      url: "https://google.com",
    },
    {
      name: "Social Network",
      description: "Social network with Laravel and Vue",
      url: "https://google.com",
    }
  ],
  experience: [
    {
      title: "Full Stack Developer",
      company: "Freelancer",
      startDate: "2020-01-01",
      endDate: "2021-01-01",
      description: "Web development with Laravel and Vue",
    },
    {
      title: "Full Stack Developer",
      company: "Freelancer",
      startDate: "2021-01-01",
      endDate: "2022-01-01",
      description: "Web development with Laravel and Vue",
    }
  ]
};
