import React from "react";
import { aboutData } from "../../data/data";

const AboutUs = () => {
  const { title, description, mission, vision, stats, team } = aboutData;

  return (
    <div className="p-6 lg:p-16">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
        <p className="mt-4 text-gray-600 text-lg">{description}</p>
      </section>

      {/* Mission and Vision Section */}
      <section className="flex flex-col lg:flex-row justify-between mb-12 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800">{mission.title}</h2>
          <p className="mt-4 text-gray-600">{mission.text}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800">{vision.title}</h2>
          <p className="mt-4 text-gray-600">{vision.text}</p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Achievements</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold text-indigo-600">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.position}</p>
              <p className="mt-2 text-gray-500 text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default AboutUs;
