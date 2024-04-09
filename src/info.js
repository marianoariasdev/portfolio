const getYearsOfExperience = () => {
  const startDate = new Date("2023-02-01");
  const currentDate = new Date();
  const years = currentDate.getFullYear() - startDate.getFullYear();
  return years == 1 ? `${years} year` : `${years} years`;
};

export const info = {
  name: "Mariano Arias",
  title: `Web Full Stack +${getYearsOfExperience()} experience`,
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
    "Argentine-born web developer crafting captivating digital experiences. I bring websites to life with seamless functionality and stunning design.",
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
      name: "Astro",
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
  ],
  experience: [
    {
      title: "Full Stack Developer",
      company: "SAED: Sede Administrativa de Escuelas Diosesanas",
      startDate: "2022-02-01",
      endDate: "Actual",
      description: "I specialized in web development at SAED, focusing on accounting tasks like managing payment records from private schools and supporting HR with income and teacher incentives data. Utilized Laravel, jQuery, JavaScript, MySQL and others technologies for system development, alongside maintenance of various IT systems within the administration.",
    },
  ]
};
