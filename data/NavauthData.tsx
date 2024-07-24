// data/navData.ts

export interface Navauth {
  description: string;
}

export interface AuthLink {
  href: string;
  label: string;
  className: string;
}

const NavauthData: Navauth[] = [
  {
    description: 'Home',
  },
  {
    description: 'About Us',
  },
  {
    description: 'Pricing',
  },
  {
    description: 'Support',
  },
  {
    description: 'Policy',
  },
  {
    description: 'FAQs',
  },
  // Add more amenities as needed
];

const authLinksData = (isSignedIn: boolean, isAdmin: boolean, userName?: string): AuthLink[] => {
  const links: AuthLink[] = [];

  if (isSignedIn) {
    links.push(
      {
        href: "/Account",
        label: userName || "User",
        className: "text-gray-700 hover:text-gray-900",
      },
      // {
      //   href: "/socials",
      //   label: "Socials",
      //   className: "text-gray-700 hover:text-gray-900 md:hidden",
      // },
      // {
      //   href: "/contact-support",
      //   label: "Contact Support",
      //   className: "text-gray-700 hover:text-gray-900 md:hidden",
      // }
    );

    if (isAdmin) {
      links.push(
        {
          href: "/admin",
          label: "Admin Panel",
          className: "text-gray-700 hover:text-gray-900",
        }
      );
    }
  } else {
    links.push(
      {
        href: "/login",
        label: "Sign In",
        className: "text-gray-700 hover:text-gray-900",
      },
      {
        href: "/register",
        label: "Try Free",
        className: "bg-green-500 text-white items-end   w-[50%] text-center py-2 px-4 rounded-lg hover:bg-green-600",
      }
    );
  }

  return links;
};

export { NavauthData, authLinksData };
