import { Clock, Server, Users } from "lucide-react";

export const Data = {
    title: "Ensuring Operational Continuity",
    subTitle: "Reliable IT Support & Maintenance Services",
    description:
        "Our IT support and maintenance services are designed to keep your systems running smoothly and minimize downtime. We provide proactive monitoring, rapid issue resolution, and continuous system optimization to support your business goals.",
    image:
        "https://lottie.host/embed/52816c35-ec55-4d90-a853-821a49808186/T8bmQQVV55.json",
    headline: "#1 IT Support & Maintenance Service Provider",
    primaryButton: {
        text: "Get Started with IT Support",
        link: "/services",
    },
    valuePropositions: [
        "24/7 System Monitoring and Support",
        "Proactive Issue Resolution",
        "Regular Maintenance and Updates",
        "Customized IT Solutions",
    ],
};

export const stats = [
    { value: 17, label: 'years of IT support expertise', icon: <Clock className="w-8 h-8 text-[#6430c2]" /> },
    { value: 1500, label: 'systems maintained', icon: <Server className="w-8 h-8 text-[#6430c2]" /> },
    { value: 300, label: 'ongoing support clients', icon: <Users className="w-8 h-8 text-[#6430c2]" /> },
];

export const Expertises = {
    expertiseTitle: "Areas of Expertise",
}
