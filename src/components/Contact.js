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

export default function Contact() {
  const contact = {
    title: "Contact",
    sections: {
      getInTouch: {
        title: "Get In Touch",
        status: "Available for freelance projects",
        contactInfo: [
          {
            label: "Location",
            value: "Oslo, Norway",
          },
          {
            label: "Phone",
            value: "+47 40 18 91 11",
          },
          {
            label: "Email",
            value: "majid@sitedesign.no",
          },
        ],
      },
      about: {
        title: "About",
        personalInfo: [
          { label: "Name", value: "Majid Farsangi" },
          { label: "Experience", value: "8+ Years" },
          { label: "Specialization", value: "Full Stack Development" },
          { label: "Languages", value: "English, Norwegian, Persian" },
        ],
      },
      resources: {
        title: "Resources",
        downloadCV: "Download CV",
        viewLicences: "View Certificates",
      },
      connect: {
        title: "Connect With Me",
        socialLinks: [
          { name: "LinkedIn" },
          { name: "GitHub" },
          { name: "Call Me" },
          { name: "WhatsApp" },
        ],
      },
      meeting: {
        title: "Schedule a Meeting",
        calendarTitle: "Book an appointment",
      },
    },
  };

  const contactInfo = [
    {
      label: contact.sections.getInTouch.contactInfo[0].label,
      value: contact.sections.getInTouch.contactInfo[0].value,
      icon: MapPin,
    },
    {
      label: contact.sections.getInTouch.contactInfo[1].label,
      value: contact.sections.getInTouch.contactInfo[1].value,
      icon: Phone,
      link: "tel:+4740189111",
    },
    {
      label: contact.sections.getInTouch.contactInfo[2].label,
      value: contact.sections.getInTouch.contactInfo[2].value,
      icon: Mail,
      link: "mailto:majid@sitedesign.no",
    },
  ];

  const personalInfo = contact.sections.about.personalInfo;

  const socialLinks = [
    {
      name: contact.sections.connect.socialLinks[0].name,
      icon: Linkedin,
      url: "https://www.linkedin.com/in/farsangi",
    },
    {
      name: contact.sections.connect.socialLinks[1].name,
      icon: Github,
      url: "https://github.com/maf256",
    },
    {
      name: contact.sections.connect.socialLinks[2].name,
      icon: Phone,
      url: "tel:+4740189111",
    },
    {
      name: contact.sections.connect.socialLinks[3].name,
      icon: MessageCircle,
      url: "https://api.whatsapp.com/send/?phone=%2B4740189111&text&type=phone_number&app_absent=0",
    },
  ];

  return (
    <section className="py-12 mt-20" id="contact">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="font-serif text-5xl font-bold pt-9 -ml-1 mb-9">
          {contact.title}
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-9 mt-9">
          <div className="w-full">
            <h3 className="font-serif text-4xl font-semibold mb-4 pb-4 border-b border-gray-300">
              {contact.sections.getInTouch.title}
            </h3>
            <div className="flex flex-col gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 py-4 border-b border-gray-300/30 last:border-b-0"
                >
                  <item.icon className="w-[18px] h-[18px] mt-0.5 opacity-70 flex-shrink-0" />
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
              ))}
            </div>

            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-300">
              <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
              <p className="!text-sm m-0">
                {contact.sections.getInTouch.status}
              </p>
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
              <div className="flex items-center gap-4 py-4 px-6 border border-gray-300 text-black text-sm opacity-80">
                <ScrollText className="w-[18px] h-[18px]" />
                <span>{contact.sections.resources.viewLicences}</span>
              </div>
            </div>
          </div>

          <div className="w-full">
            <h3 className="font-serif text-4xl font-semibold mb-4">
              {contact.sections.connect.title}
            </h3>
            <div className="border-t border-gray-300 pt-6 grid gap-4 grid-cols-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2 px-4 border border-gray-300 text-black no-underline text-sm transition-all duration-200 h-12 hover:border-blue-600 hover:text-blue-600"
                >
                  <social.icon className="w-[14px] h-[14px] flex-shrink-0" />
                  <span className="text-sm">{social.name}</span>
                </a>
              ))}
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
      </div>
    </section>
  );
}
