type NavigationItemType = {
  label: string;
  path: string;
  isVariant?: boolean;
};

export const NAVIGATION_LIST: NavigationItemType[] = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/#features" },
  { label: "How it works", path: "/#how-it-works" },
  { label: "Our Team", path: "/#our-team" },
  { label: "Contact Us", path: "/#contact-us" },
  { label: "Get Started", path: "/#get-started", isVariant: true },
];
