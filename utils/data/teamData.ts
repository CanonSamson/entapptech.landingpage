export interface TeamMemberData {
  _id: string;
  name: string;
  role: string;
  image: string;
  description: string;
}

// Temporary: team data hardcoded here while Sanity is disabled.
export const teamMembersData: TeamMemberData[] = [
  {
    _id: "teamMember-1",
    name: "Isaac Adejo Onekutu",
    role: "Founder & CEO",
    image:
      "https://cdn.sanity.io/images/g5g7vown/production/add41fd7e0e8fcb36f751ed9881f7f515f8dddc8-330x322.png",
    description:
      "Leads Enterprise Application Tech with deep expertise in DevOps, cloud engineering, and strategic leadership.",
  },
  {
    _id: "teamMember-2",
    name: "Mrs. Grace Unekwu Onekutu",
    role: "Vice President Operations",
    image:
      "https://cdn.sanity.io/images/g5g7vown/production/eaae1196cab39700b906f4947e2e6423e0d296f2-408x323.png",
    description:
      "Oversees day-to-day operations, driving efficiency, quality, and client satisfaction.",
  },
  {
    _id: "teamMember-3",
    name: "Barrister Maji",
    role: "Legal Adviser",
    image:
      "https://cdn.sanity.io/images/g5g7vown/production/eaae1196cab39700b906f4947e2e6423e0d296f2-408x323.png",
    description:
      "Provides corporate, intellectual property, and compliance counsel to protect the company and its clients.",
  },
  {
    _id: "teamMember-4",
    name: "Joshua Obaje",
    role: "Sr. Full Stack Developer - (Remote)",
    image:
      "https://cdn.sanity.io/images/g5g7vown/production/eaae1196cab39700b906f4947e2e6423e0d296f2-408x323.png",
    description:
      "Builds scalable web applications with React, Node.js, Python, and cloud platforms.",
  },
  {
    _id: "teamMember-5",
    name: "Emmanuel Kachikwu",
    role: "UX Engineer",
    image:
      "https://cdn.sanity.io/images/g5g7vown/production/eaae1196cab39700b906f4947e2e6423e0d296f2-408x323.png",
    description:
      "Designs intuitive, user-centered experiences that bridge design and development.",
  },
  {
    _id: "teamMember-6",
    name: "Virtue",
    role: "Backend Developer",
    image:
      "https://cdn.sanity.io/images/g5g7vown/production/eaae1196cab39700b906f4947e2e6423e0d296f2-408x323.png",
    description:
      "Builds secure, scalable backend systems, APIs, and databases.",
  },
];
