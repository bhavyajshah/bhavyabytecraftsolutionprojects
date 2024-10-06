import { PinContainer } from "./ui/3d-pin";

const WebDevelopmentWork = ({ works, sectionTitle, sectionSubtitle }) => {
  return (
    <div className="pt-32">
      {/* Section Title and Subtitle */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-100 mb-2">{sectionTitle}</h1>
        <p className="text-lg text-slate-300">{sectionSubtitle}</p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-y-28 gap-x-16 py-10 px-10">
        {works.map((work, index) => (
          <PinContainer key={index} title={work.title} href={work.href}>
            <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-full h-full">
              <h3 className="font-bold text-lg text-slate-100 mb-1">{work.title}</h3>
              <h4 className="font-semibold text-sm text-slate-300 mb-2">
                {work.subTitle}
              </h4>
              <div className="text-base font-normal text-slate-500 mb-4">
                {work.description}
              </div>
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-auto mb-4 rounded-lg object-cover"
              />
              {/* Gradient Effect */}
              <div className="flex flex-1 w-full rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
};

export default WebDevelopmentWork;