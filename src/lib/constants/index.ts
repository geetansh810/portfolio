import LinkedinIcon from '@/components/ui/icons/linkedin.astro'
import XIcon from '@/components/ui/icons/x.astro'
import GithubIcon from '@/components/ui/icons/github.astro'

export const NAV_LINKS = [
  {
    label: "Home",
    href: "portfolio/",
  },
  {
    label: "Projects",
    href: "portfolio/projects",
  },
  {
    label: "Articles",
    href: "portfolio/articles",
  },
] as const;

export const SOCIAL_LINKS = [
  {
    name: 'Github',
    icon: GithubIcon,
    url: "https://github.com/geetansh810",
  },
  {
    name: 'Linkedin',
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/geetansh810/",
  },
  {
    name: 'X',
    icon: XIcon,
    url: "https://x.com/geetansh810",
  },
];