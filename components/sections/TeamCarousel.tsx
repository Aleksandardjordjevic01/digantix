'use client';

import Image from 'next/image';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Stefan Mijajlović",
    role: "CEO",
    image: "/team/stefan-mijajlovic.png"
  },
  {
    id: 2,
    name: "Aleksandar Đorđević",
    role: "Co-founder",
    image: "/team/aleksandar-djordjevic.png"
  },
  {
    id: 3,
    name: "Luka Nešić",
    role: "Co-founder & Mobile Developer",
    image: "/team/nesic-luka.png"
  },
  {
    id: 4,
    name: "Branimir Đorđević",
    role: "Frontend Developer",
    image: "/team/branimir-djordjevic.png"
  },
  {
    id: 5,
    name: "Emir Lemeš",
    role: "Backend Developer",
    image: "/team/emir-lemes.png"
  },
  {
    id: 6,
    name: "Nikola Nikolić",
    role: "Backend Developer",
    image: "/team/nikola-nikolic.png"
  },
  {
    id: 7,
    name: "Aleksandar Veljković",
    role: "Branding & UI/UX Designer",
    image: "/team/aleksandar-veljkovic.png"
  },
  {
    id: 8,
    name: "Aleksandar Stojanović",
    role: "Sales Manager",
    image: "/team/aleksandar-stojanovic.png"
  }
];

export default function TeamCarousel() {
  return (
    <section id="team-section" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="mx-auto w-full px-0 sm:px-6 lg:w-[85%]" style={{ maxWidth: '1500px' }}>
        <div className="flex flex-col gap-3 sm:gap-4 mb-12 sm:mb-16 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-regular text-black">
            Our team
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-black max-w-2xl font-light">
            Meet the talented people behind our success
          </p>
        </div>

        {/* Grid Layout - 4 po redu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="cursor-pointer group"
            >
              {/* Avatar Image Container */}
              <div className="relative w-full aspect-[390/480] rounded-[5px] overflow-hidden mb-3 sm:mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-white/60 opacity-0 group-hover:opacity-0 transition-opacity duration-300" />
              </div>

              {/* Content Below Image */}
              <div className="px-1 sm:px-2">
                <p className="text-sm sm:text-base text-black">
                  <span className="font-semibold">{member.name}</span>
                  <span className="mx-2 text-gray-400">|</span>
                  <span className="font-light text-gray-600">{member.role}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
