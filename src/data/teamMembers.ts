import { v4 as uuidV4 } from "uuid";
import member from "@/assests/members/member.webp";

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
    name: "Mahmoud Elmorsy",
    role: "Computer Vision-Ai",
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
    role: "Computer Vision-Ai",
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
    role: "Computer Vision-Ai",
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
    role: "Computer Vision-Ai",
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
    role: "Computer Vision-Ai",
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
    role: "Computer Vision-Ai",
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
    role: "Computer Vision-Ai",
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
    role: "Computer Vision-Ai",
    image: member.src,
    socials: {
      facebook: "https://www.facebook.com/mahmoud.elmorsy.7",
      instagram: "https://www.instagram.com/mahmoud.elmorsy.7",
      twitter: "https://twitter.com/mahmoud_elmorsy",
    },
  },
];
