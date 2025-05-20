import { Github, Linkedin, Mail, Facebook } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/MedlHesedh",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/medl-hesedh-masangcap-910119304/",
    icon: Linkedin,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/maxi.schach14/",
    icon: Facebook,
  },
  {
    name: "Email",
    url: "mailto:medlmasangcapbusiness@gmail.com",
    icon: Mail,
  },
];

export default function FooterNav() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="h-6 w-6" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Medl Hesedh Masangcap. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
