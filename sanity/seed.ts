import { createClient } from '@sanity/client'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { homedir } from 'node:os'

const projectId = 'g5g7vown'
const dataset = 'production'
const apiVersion = '2026-11-07'

function getToken(): string {
  if (process.env.SANITY_AUTH_TOKEN) return process.env.SANITY_AUTH_TOKEN
  try {
    const config = JSON.parse(
      readFileSync(join(homedir(), '.config/sanity/config.json'), 'utf8'),
    )
    if (config.authToken) return config.authToken
  } catch {}
  throw new Error(
    'No auth token found. Run `npx sanity login` or set SANITY_AUTH_TOKEN.',
  )
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: getToken(),
  useCdn: false,
})

const teamMembers = [
  {
    id: 1,
    name: 'Isaac Adejo Onekutu',
    role: 'Founder & CEO',
    image: '/images/ceo1.png',
    order: 1,
    description: `Isaac A. Onekutu is a skilled DevOps Engineer with a strong background in automating CI/CD pipelines, containerization, and Infrastructure as Code (IaC) across cloud environments. He is proficient in scripting, Linux administration, and using monitoring tools to enhance system reliability.
Isaac has held key roles at Enterprise Application Tech LLC, Harmonia Holdings Group LLC (IRS project), and Dominion System Inc., where he led critical infrastructure projects, including cloud migrations and AWS automation that significantly reduced deployment failures.
He holds a Master of Science in Applied Artificial Intelligence from Lipscomb University, a Graduate Certificate in DevOps & Cloud Engineering from Purdue University, Master of Science in Human Resources Leadership from Middle Tennessee State University, and an MBA from the University of Calabar—combining technical expertise with strong leadership and strategic insight.`,
  },
  {
    id: 2,
    name: 'Mrs. Grace Unekwu Onekutu',
    role: 'Vice President Operations',
    image: '/images/image.png',
    order: 2,
    description: `Grace Unekwu Onekutu brings extensive operational excellence and strategic leadership to her role as Vice President of Operations. With a background in business administration and process optimization, she oversees the company's day-to-day operations, ensuring seamless project delivery and client satisfaction.
Her expertise includes resource management, operational efficiency, and quality assurance processes. Grace plays a pivotal role in scaling operations while maintaining the high standards of service delivery that Enterprise Application Tech LLC is known for.
She holds advanced degrees in Business Administration and has over a decade of experience in operational leadership across various industries, making her instrumental in driving the company's growth and maintaining operational excellence.`,
  },
  {
    id: 3,
    name: 'Barrister Maji',
    role: 'Legal Adviser',
    image: '/images/image.png',
    order: 3,
    description: `Barrister Maji serves as the primary legal counsel for Enterprise Application Tech LLC, providing comprehensive legal guidance on corporate matters, intellectual property, contracts, and regulatory compliance. With extensive experience in technology law and corporate governance, he ensures the company operates within legal frameworks while protecting its intellectual assets.
His expertise spans software licensing agreements, data protection regulations, corporate structuring, and compliance standards across multiple jurisdictions. Barrister Maji's strategic legal counsel has been instrumental in navigating complex contractual agreements and mitigating legal risks.
He holds a Law degree from a prestigious Nigerian university and is called to the Nigerian Bar, with additional certifications in Intellectual Property Law and Technology Contracts.`,
  },
  {
    id: 4,
    name: 'Joshua Obaje',
    role: 'Sr. Full Stack Developer - (Remote)',
    image: '/images/image.png',
    order: 4,
    description: `Joshua Obaje is a seasoned Full Stack Developer with expertise in building scalable web applications using modern technologies. His proficiency spans both frontend and backend development, with strong skills in React, Node.js, Python, and cloud platforms.
Joshua has contributed to numerous enterprise-level projects, developing robust APIs, implementing responsive user interfaces, and optimizing database performance. His remote work expertise demonstrates exceptional communication skills and self-discipline, making him a valuable asset to distributed teams.
He holds a Bachelor's degree in Computer Science and has completed multiple certifications in cloud technologies and full-stack development. Joshua's ability to understand client requirements and translate them into technical solutions makes him an integral part of our development team.`,
  },
  {
    id: 5,
    name: 'Emmanuel Kachikwu',
    role: 'UX Engineer',
    image: '/images/image.png',
    order: 5,
    description: `Emmanuel Kachikwu specializes in creating intuitive and engaging user experiences that bridge the gap between design and development. As a UX Engineer, he combines user research, interaction design, and frontend development skills to build products that are both beautiful and functional.
His expertise includes user interface design, prototyping, usability testing, and implementing design systems. Emmanuel has worked on various projects ranging from enterprise applications to consumer-facing mobile apps, always focusing on user-centered design principles.
He holds a degree in Human-Computer Interaction and has completed professional certifications in UX Design and Frontend Development. Emmanuel's unique ability to understand user needs and translate them into seamless digital experiences significantly enhances our product quality.`,
  },
  {
    id: 6,
    name: 'Virtue',
    role: 'Backend Developer',
    image: '/images/image.png',
    order: 6,
    description: `Virtue is a dedicated Backend Developer with strong expertise in server-side development, database design, and API architecture. Specializing in building scalable and secure backend systems, he ensures our applications perform reliably under various load conditions.
His technical skills include proficiency in Node.js, Python, SQL and NoSQL databases, RESTful API design, and cloud infrastructure. Virtue has experience implementing authentication systems, optimizing database queries, and integrating third-party services.
With a Bachelor's degree in Software Engineering and multiple backend development certifications, Virtue brings robust problem-solving skills and attention to detail to every project. His commitment to writing clean, maintainable code makes him an essential member of our technical team.`,
  },
]

async function uploadImage(filename: string) {
  const path = join(process.cwd(), 'public', filename)
  const buffer = readFileSync(path)
  return client.assets.upload('image', buffer, {
    filename: filename.split('/').pop(),
  })
}

async function seedContactInfo() {
  await client.createOrReplace({
    _id: 'contactInfo',
    _type: 'contactInfo',
    address: '2805 Foster Avenue, Suite 204',
    city: 'Nashville',
    state: 'TN',
    zipCode: '37210',
    googleMapsUrl:
      'https://maps.google.com/?q=2805+Foster+Avenue+Suite+204+Nashville+TN+37210',
    phone: '+1 (615) 524-2890',
    email: 'support@entapptech.com',
  })
  console.log('Seeded contactInfo')
}

async function seedTeamMembers() {
  for (const member of teamMembers) {
    const asset = await uploadImage(member.image)
    await client.createOrReplace({
      _id: `teamMember-${member.id}`,
      _type: 'teamMember',
      name: member.name,
      role: member.role,
      image: {
        _type: 'image',
        asset: { _type: 'reference', _ref: asset._id },
      },
      description: member.description,
      order: member.order,
    })
    console.log(`Seeded teamMember: ${member.name}`)
  }
}

await seedContactInfo()
await seedTeamMembers()
console.log('Done.')
