import {
  MapPin,
  Phone,
  Mail,
  Download,
  Linkedin,
  Github,
  ScrollText,
  MessageCircle,
} from "lucide-react";
import { translations } from "@/lang/translations";

// Icon mapping for dynamic icons
const iconMap = {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Github,
  MessageCircle,
};

export default function Contact() {
  const { contact } = translations;
  const { contactInfo } = contact.sections.getInTouch;
  const { personalInfo } = contact.sections.about;
  const { socialLinks } = contact.sections.connect;

  return (
    <section id="contact" className="mb-20">
      <h2 className="font-serif text-5xl font-bold -ml-1 mb-9">
        {contact.title}
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-9 mt-9">
        <div className="w-full">
          <h3 className="font-serif text-4xl font-semibold mb-4 pb-4 border-b border-gray-300">
            {contact.sections.getInTouch.title}
          </h3>
          <div className="flex flex-col gap-6">
            {contactInfo.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 py-4 border-b border-gray-300/30 last:border-b-0"
                >
                  <IconComponent className="w-[18px] h-[18px] mt-0.5 opacity-70 flex-shrink-0" />
                  <div className="flex-1">
                    <span className="block text-sm opacity-60 mb-0.5 uppercase tracking-wider">
                      {item.label}
                    </span>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-lg text-blue-600 no-underline transition-opacity duration-200 hover:opacity-80"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg m-0">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-300">
            <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
            <p className="!text-sm m-0">{contact.sections.getInTouch.status}</p>
          </div>
        </div>

        <div className="w-full">
          <h3 className="font-serif text-4xl font-semibold mb-4 pb-4 border-b border-gray-300">
            {contact.sections.about.title}
          </h3>
          <div className="border border-gray-300">
            {personalInfo.map((item, index) => (
              <div
                key={index}
                className="flex border-b border-gray-300/30 last:border-b-0"
              >
                <span className="flex-1 p-4 bg-gray-100/10 border-r border-gray-300/30 text-sm opacity-80">
                  {item.label}
                </span>
                <span className="flex-[2] p-4 text-sm m-0">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-serif text-4xl font-semibold mb-4 pb-4 border-b border-gray-300">
            {contact.sections.resources.title}
          </h3>
          <div className="flex flex-col gap-4">
            <a
              href="https://drive.google.com/file/d/1-WdloD7z_Y7TRNyC0zWIMPefDYLFt2Ki/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 py-4 px-6 border border-gray-300 text-gray-700 no-underline text-sm transition-all duration-200 hover:bg-blue-600/5"
            >
              <Download className="w-[18px] h-[18px]" />
              {contact.sections.resources.downloadCV}
            </a>
            <a
              href="https://drive.google.com/file/d/1ik8Ajr50lamXsje0qRqjnsmJIjM2e9Xd/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 py-4 px-6 border border-gray-300 text-black text-sm opacity-80"
            >
              <ScrollText className="w-[18px] h-[18px]" />
              <span>{contact.sections.resources.viewLicences}</span>
            </a>
          </div>
        </div>

        <div className="w-full">
          <h3 className="font-serif text-4xl font-semibold mb-4">
            {contact.sections.connect.title}
          </h3>
          <div className="border-t border-gray-300 pt-6 grid gap-4 grid-cols-2">
            {socialLinks.map((social, index) => {
              const IconComponent = iconMap[social.icon];
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2 px-4 border border-gray-300 text-black no-underline text-sm transition-all duration-200 h-12 hover:border-blue-600 hover:text-blue-600"
                >
                  <IconComponent className="w-[14px] h-[14px] flex-shrink-0" />
                  <span className="text-sm">{social.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        <div className="col-span-full">
          <h3 className="font-serif text-4xl font-semibold mb-4 pb-4 border-b border-gray-300">
            {contact.sections.meeting.title}
          </h3>
          <div className="border border-gray-300 overflow-hidden">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ08q78jfdTSAvdjzrYsZzvFRPIxbVtTln79uu3M9ITm3VITP81IoKX-YurFrpjs3PoE-IG9z8je?gv=true"
              width="100%"
              height="400"
              className="block w-full h-96 border-0"
              title={contact.sections.meeting.calendarTitle}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
