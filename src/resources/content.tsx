import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Muhamad Naufal",
  lastName: "Nur Aziz",
  name: `Muhamad Naufal`,
  role: "",
  avatar: "/images/profile2.jpg",
  email: "mnaufalna1720@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  displayLocation: "Banyumas, Jawa Tengah", // teks yang ditampilkan ke user
  languages: ["English", "Indonesian"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MNaufalNA",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/muhamad-naufal-791737386/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:mnaufalna1720@gmail.com`,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: `https://www.instagram.com/muhamadnovaal?igsh=ajhiazExZHMxaHVu`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hi! It’s awesome to see you here</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <p>
  I really appreciate you taking the time to visit my portfolio. 
  I'm <strong>Muhamad Naufal Nur Aziz</strong>, but you can call me <strong>Naufal</strong>. 
  Here, I share some of the projects I’ve built, showcasing my skills in web development, 
  design, and problem solving.
</p>

  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <p>
          Even though I don’t have formal work experience yet, I’ve worked on several projects during college 
          that helped me sharpen my technical skills. I’m always excited to learn new things and give my best 
          in everything I do.
      </p>

    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Project Experience",
    experiences: [
      {
        company: "SMAN 3 PURWOKERTO",
        timeframe: "2024 - 2025",
        role: "Research Student (IMPLEMENTASI ONE TIME PASSWORD (OTP) MENGGUNAKAN WHATSAPP API PADA SISTEM INFORMASI AKADEMIK SMAN 3 PURWOKERTO)",
        achievements: [
          <>
            Built a web-based academic information system using CodeIgniter framework.
          </>,
          <>
            Developed and integrated an OTP authentication feature using WhatsApp API to enhance login security.
          </>,
          <>
            Designed and implemented the OTP generation and verification flow within the system.
          </>,
          <>
            Improved authentication reliability and reduced unauthorized access risks.
          </>,
          <>
            Conducted testing and debugging to ensure stable API integration and optimal performance.
          </>,
          <>
            Documented the entire development and implementation process as part of the final thesis research.
          </>,
        ],
      },
      {
        company: "SDN 2 KEDUNGWRINGIN",
        timeframe: "2024 - 2024",
        role: "Internship Project (Development of School Profile Website)",
        achievements: [
          <>
            Built the website using CodeIgniter framework with HTML, CSS, and PHP.
          </>,
          <>
            Created pages to display school information, achievements, facilities, and teacher data.
          </>,
          <>
            Collaborated with school staff to gather content and ensure accurate information display.
          </>,
          <>
            Streamlined data and system management to improve administrative efficiency and data reliability.
          </>,
          <>
            Tested and deployed the website to ensure functionality and user accessibility.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Muhammadiyah University of Purwokerto",
        description: <>Informatics Engineering.</>,
      },
      {
        name: "2020 - 2025",
        description: <>GPA 3.49</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "PHP",
        description: (
          <><>Experienced in developing dynamic web applications using PHP and the CodeIgniter framework.</></>
        )
      },
      {
      title: "CodeIgniter",
      description: (
        <>Proficient in using the CodeIgniter framework to build efficient and maintainable web applications.</>
        )
      },
      {
      title: "SQL",
      description: (
        <>Proficient in managing and querying relational databases using MySQL.</>
        ),
      },
      {
      title: "CSS",
      description: (
        <>Skilled in designing modern and responsive user interfaces using CSS 3 and frameworks like Bootstrap.</>
        ),
      },
      {
      title: "Node.js",
      description: (
        <>Understanding of building simple APIs and backend services using Node.js and Express.js.</>
        ),
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
      },  
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
