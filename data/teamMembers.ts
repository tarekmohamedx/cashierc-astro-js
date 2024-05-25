import { v4 as uuidV4 } from "uuid";
import member from "@/assests/members/member.webp";
import member2 from "@/assests/members/member2.webp";
import member3 from "@/assests/members/member3.webp";
import member4 from "@/assests/members/member4.webp";
import member5 from "@/assests/members/member5.webp";


type MemberType = {
  id: string;
  name: string;
  image: string;
  role: string;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
    youtube?: string;
  };
};

export const teamMembers: MemberType[] = [
  {
    id: uuidV4(),
    name: "Ahmed Arafat",
    role: "Flutter Developer",
    image: member.src,
    socials: {
      facebook: "https://www.facebook.com/mahmoud.elmorsy.7",
      instagram: "https://www.instagram.com/mahmoud.elmorsy.7",
      twitter: "https://twitter.com/mahmoud_elmorsy",
    },
  },
  {
    id: uuidV4(),
    name: "Mahmoud Elmorsy",
    role: "Computer Vision Engineer",
    image: member2.src,
    socials: {
      facebook: "https://www.facebook.com/mahmoud.elmorsy.7",
      instagram: "https://www.instagram.com/mahmoud.elmorsy.7",
      twitter: "https://twitter.com/mahmoud_elmorsy",
    },
  },
  {
    id: uuidV4(),
    name: "Mohsen Essam",
    role: "Data Engineer",
    image: member3.src,
    socials: {
      facebook: "https://www.facebook.com/mahmoud.elmorsy.7",
      instagram: "https://www.instagram.com/mahmoud.elmorsy.7",
      twitter: "https://twitter.com/mahmoud_elmorsy",
    },
  },
  {
    id: uuidV4(),
    name: "Hazem Elkhamisi",
    role: "...",
    image: member4.src,
    socials: {
      facebook: "https://www.facebook.com/mahmoud.elmorsy.7",
      instagram: "https://www.instagram.com/mahmoud.elmorsy.7",
      twitter: "https://twitter.com/mahmoud_elmorsy",
    },
  },
  {
    id: uuidV4(),
    name: "Mahmoud Abdo",
    role: "Backend",
    image: member5.src,
    socials: {
      facebook: "https://www.facebook.com/mahmoud.elmorsy.7",
      instagram: "https://www.instagram.com/mahmoud.elmorsy.7",
      twitter: "https://twitter.com/mahmoud_elmorsy",
    },
  },
  {
    id: uuidV4(),
    name: "Mahmoud Elsaeed",
    role: "...",
    image: member.src,
    socials: {
      facebook: "https://www.facebook.com/mahmoud.elmorsy.7",
      instagram: "https://www.instagram.com/mahmoud.elmorsy.7",
      twitter: "https://twitter.com/mahmoud_elmorsy",
    },
  },
  {
    id: uuidV4(),
    name: "Ahmed Foaad",
    role: "...",
    image: member.src,
    socials: {
      facebook: "https://www.facebook.com/mahmoud.elmorsy.7",
      instagram: "https://www.instagram.com/mahmoud.elmorsy.7",
      twitter: "https://twitter.com/mahmoud_elmorsy",
    },
  },
  {
    id: uuidV4(),
    name: "Tareq Mohamed",
    role: "Junior ...",
    image: member.src,
    socials: {
      facebook: "https://www.facebook.com/mahmoud.elmorsy.7",
      instagram: "https://www.instagram.com/mahmoud.elmorsy.7",
      twitter: "https://twitter.com/mahmoud_elmorsy",
    },
  },
];
