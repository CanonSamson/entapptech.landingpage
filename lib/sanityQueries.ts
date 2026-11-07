import { client } from './sanity'

export interface TeamMember {
  _id: string
  name: string
  role: string
  image: any
  description: string
  order: number
}

export interface ContactInfo {
  _id: string
  address: string
  city: string
  state: string
  zipCode: string
  googleMapsUrl: string
  phone: string
  email: string
  socialLinks?: Array<{
    platform: string
    url: string
  }>
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  return await client.fetch(
    `*[_type == "teamMember"] | order(order asc) {
      _id,
      name,
      role,
      image,
      description,
      order
    }`
  )
}

export async function getContactInfo(): Promise<ContactInfo | null> {
  const results = await client.fetch(
    `*[_type == "contactInfo"][0] {
      _id,
      address,
      city,
      state,
      zipCode,
      googleMapsUrl,
      phone,
      email,
      socialLinks
    }`
  )
  return results
}
