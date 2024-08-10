import acmeLogo from "@/assets/images/acme.png";
import quantumLogo from "@/assets/images/quantum.png";
import echoLogo from "@/assets/images/echo.png";
import celestialLogo from "@/assets/images/celestial.png";
import pulseLogo from "@/assets/images/pulse.png";
import apexLogo from "@/assets/images/apex.png";
export const navbar = [
  "about",
  "features",
  "updates",
  "help",
  "customers",
] as const;

export const logos = [
  { alt: "acme", src: acmeLogo },
  { alt: "quantum", src: quantumLogo },
  { alt: "echo", src: echoLogo },
  { alt: "celestial", src: celestialLogo },
  { alt: "pulse", src: pulseLogo },
  { alt: "apex", src: apexLogo },
] as const;

export const features = [
  {
    title: "Integration ecosystem",
    desc: "Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.",
  },
  {
    title: "Goal setting and tracking",
    desc: "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure data encryption",
    desc: "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
] as const;

import InstaIcon from "@/assets/icons/insta.svg";
import XIcon from "@/assets/icons/x-social.svg";
import TikTokIcon from "@/assets/icons/tiktok.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";
export const footer = [InstaIcon, XIcon, TikTokIcon, YoutubeIcon] as const;
