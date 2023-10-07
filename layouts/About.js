import Cta from "./components/Cta";
import Image from "next/image";

import { motion } from "framer-motion";

function About({ data }) {
  const {
    frontmatter: { title, call_to_action },
  } = data;

  const teamMembers = [
    {
      name: "Robe Mălina Elena",
      position: "Președinte",
      image: "/images/birou-conducere/Robe Mălina Elena-DG.jpg",
      row: 1,
    },
    {
      name: "Jipa",
      position: "Vicepreședinte",
      image: "/images/jipa.jpg",
      row: 2,
    },
    {
      name: "Păștinaru Iulia",
      position: "Secretar General",
      image: "/images/birou-conducere/Păștinaru Iulia-SG.jpg",
      row: 2,
    },
    {
      name: "Neagu Maria Mihaela",
      position: "Director Marketing",
      image: "/images/birou-conducere/Neagu Maria Mihaela-MKT.jpg",
      row: 3,
    },
    {
      name: "Dobre Cătălina",
      position: "Director Resurse Umane",
      image: "/images/birou-conducere/Dobre Cătălina-HR.jpg",
      row: 3,
    },
    {
      name: "Ciumărnean Radu",
      position: "Director Financiar",
      image: "/images/birou-conducere/Ciumărnean Radu-FR.jpg",
      row: 3,
    },
    {
      name: "Miclea Mihai",
      position: "Director Relații Externe",
      image: "/images/birou-conducere/Miclea Mihai-RE.jpg",
      row: 3,
    },
    {
      name: "Catalano Andreea Maria",
      position: "Director Activități Academice",
      image: "/images/birou-conducere/Catalano Andreea Maria-AC.jpg",
      row: 3,
    },
    {
      name: "Nicorici Iulia",
      position: "Student Senator",
      image: "/images/birou-conducere/Nicorici Iulia-STUDENT SENATOR.jpg",
      row: 3,
    },
    {
      name: "Corcoz Bianca",
      position: "Student Senator",
      image: "/images/birou-conducere/Corcoz Bianca-STUDENT CONSILIER.jpg",
      row: 3,
    },
    {
      name: "Dobai Horea",
      position: "Student Senator",
      image: "/images/birou-conducere/Dobai Horea-STUDENT CONSILIER.jpg",
      row: 3,
    },
    {
      name: "Iacob Paul",
      position: "Student Senator",
      image: "/images/birou-conducere/Iacob Paul-STUDENT CONSILIER.jpg",
      row: 3,
    },
  ];

  const renderTeamMembers = () => {
    const rows = {};

    teamMembers.forEach((member) => {
      if (!rows[member.row]) {
        rows[member.row] = [];
      }
      rows[member.row].push(member);
    });

    return Object.values(rows).map((row, rowIndex) => (
      <div key={rowIndex} className="mb-8 flex flex-wrap justify-center">
        {row.map((member) => (
          <div
            key={member.name}
            className="flex w-full flex-col items-center p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
          >
            <div className="h-full rounded bg-white p-4 shadow-md">
              <div className="relative mb-4 h-[150px] w-[150px] rounded-full">
                <Image
                  src={member.image}
                  alt={`${member.name}'s profile image`}
                  fill
                  className="rounded-full"
                />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -200 }}
      transition={{ duration: 0.5 }}
    >
      <section className="section pb-0">
        <div className="container">
          <h1 className="text-center font-normal">{title}</h1>
          <div className="section row -mt-10 justify-center md:mt-0">
            <div className="container mx-auto px-4">
              <div className="team-grid">{renderTeamMembers()}</div>
            </div>
          </div>
        </div>
      </section>
      <Cta cta={call_to_action} />
    </motion.div>
  );
}

export default About;
