import Cta from "./components/Cta";
import Image from "next/image";

import { motion } from "framer-motion";

function About({ data }) {
  const {
    frontmatter: { title, call_to_action },
  } = data;

  const teamMembers = [
    {
      name: "John Doe",
      position: "Presedinte",
      image: "/images/jipa.jpg",
      row: 1,
    },
    {
      name: "Jane Smith",
      position: "Vicepresedinte",
      image: "/images/jipa.jpg",
      row: 2,
    },
    {
      name: "Sam Brown",
      position: "Secretar General",
      image: "/images/jipa.jpg",
      row: 2,
    },
    {
      name: "Sara White",
      position: "Director MKT",
      image: "/images/jipa.jpg",
      row: 3,
    },
    {
      name: "Tom Black",
      position: "Director RU",
      image: "/images/jipa.jpg",
      row: 3,
    },
    {
      name: "Tom Black",
      position: "Director Financiar",
      image: "/images/jipa.jpg",
      row: 3,
    },
    {
      name: "Tom Black",
      position: "Director Manele",
      image: "/images/jipa.jpg",
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
            className="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
          >
            <div className="h-full rounded bg-white p-4 shadow-md">
              <div className="mb-4">
                <Image
                  src={member.image}
                  alt={`${member.name}'s profile image`}
                  width={150}
                  height={150}
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
