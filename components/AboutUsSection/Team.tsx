
import React from "react";

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  socialIcons: string[];
}

const TeamMember: React.FC<TeamMemberProps> = ({
  image,
  name,
  role,
  socialIcons,
}) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex flex-col items-center w-full max-md:mt-10">
      <img
        loading="lazy"
        src={image}
        alt={`${name}, ${role}`}
        className="object-contain self-stretch w-full rounded-3xl shadow-sm bg-blend-normal aspect-square"
      />
      <h3 className="mt-4 text-xl font-semibold leading-none text-white">
        {name}
      </h3>
      <p className="text-lg font-medium leading-loose text-gray-400">{role}</p>
      <div className="flex gap-2 items-start mt-2 max-w-full bg-blend-normal min-h-[40px] w-[136px]">
        {socialIcons.map((icon, index) => (
          <img
            key={index}
            loading="lazy"
            src={icon}
            alt="Social media icon"
            className="object-contain shrink-0 w-10 rounded-full bg-blend-normal aspect-square"
          />
        ))}
      </div>
    </div>
  </div>
);

const Team: React.FC = () => {
  const teamMembers = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2a7996b45a8e159622c9572b10e9f5b85262b37b1e93dad427fdf54ae47b2293?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
      name: "Kaylen Meyer",
      role: "CEO",
      socialIcons: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/845fc5473539ed114e6aa0d63effec289f805822c68001066ba21d11bb2d02b1?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6f3ae9f54dfd75c2182ece3d322909e00b3b8107f8f7a8c95782c65465febd46?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c4980896699d6b258421c9f6d18d72db6d28c5a72b06e0f02bbb29d560870875?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
      ],
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c3b81bcd3027e5ee456f32121e0155cbb2103d90bc8d0d5fb240c762e82ab726?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
      name: "Coriss Ambady",
      role: "Lead Developer",
      socialIcons: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2dc03052e4d8936c1da11465ed68bdb159c4a036e0c8b5d69ef23b9ca3e3e025?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b28fd61328871c77fa0af8df54ad0724592b849e1556ec811421b65ca2ddf2a9?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f4d35221bcf3733c93bfb80d582077bc2f732fb4badb25ebbc5baca469200856?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
      ],
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/4cb38712ddbb2e6a9415b4c13a56161641260252334f51614027409b416fe465?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
      name: "Lester Mccall",
      role: "Senior Designer",
      socialIcons: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/898bf7297031ad4175ef0a8e1baa545436adc7732bbc49115b3f7571ae960a40?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d947284f49d2f7fe028d3078bb7e265cfede9ccd9ade2f7919acb146f8295a15?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/748775c8f8194077834d9a7f2ad106b06f7d88e13be31a14ab29ae6243024004?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
      ],
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bd7163b18b01b5eb6a790a0b28fcb8d15016c4aa6357d9e123e8591d1dde2dcd?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
      name: "Misha Mustafa",
      role: "Studio Artist",
      socialIcons: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d5deb85a43c3b52b8c7f21bbee7d35abf7cbde6342c89151e65d794a86fef763?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/880d901a1ea1e248af4ed0aaba8ce8f45979b8a64c725c00b27aa28c2ac5c44d?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e5dbd4ed2b3c5e9153ff6fb9748f026743a6afde0a6a7ec0d1e39f15f50729fd?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
      ],
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6e1d848fc9b1b5a015826c001495b0844fe48b4924de6e2c9596790f37753a52?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
      name: "Stefan Stefancik",
      role: "Designer",
      socialIcons: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1687df269aad39b8215f5fbb461c83c66d59cf28aa08c8cedae791bab2a5b8fa?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7e97ab470311380bea5e614cc1d15480abdd42016dff3ab4dbc02fb024303310?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/30194978690f6646ac203f84ef3c72e3ec77b135c10514b4ceef1a2c17191858?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
      ],
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fc2d267a627867bc72e92211415d8cfeece8ec65ced9ca643a17dc0a6577e5ea?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
      name: "Vivien Smith",
      role: "Developer",
      socialIcons: [
        "https://cdn.builder.io/api/v1/image/assets/TEMP/841d0b2c18e90615b2fffada501b2a304e75f075cd2269582b194f3b04b761a9?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c00f02c06898d103891ba343b2107fce1dd5f0736366c7e9460c5ac1136e2301?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/df9053dd96f7ec5f539a2e12d0898ccd489a3e141c1c204b380ab72500f7ff48?placeholderIfAbsent=true&apiKey=f728a3c9ac5f453984800130362dac4e",
      ],
    },
  ];

  return (
    <section className="flex flex-col items-center mt-32 max-md:mt-10">
      <span className="px-6 py-2 mt-32 max-w-full text-sm font-medium tracking-wide leading-none text-white bg-blend-normal rounded-[9999px_9999px_9999px_0px] w-[113px] max-md:px-5 max-md:mt-10">
        The team
      </span>
      <h2 className="mt-6 text-5xl font-extrabold leading-none text-white max-md:max-w-full max-md:text-4xl">
        Decades of experience in design and development
      </h2>
      <p className="mt-6 text-xl leading-none text-slate-300 max-md:max-w-full">
        Our diverse team unites industry veterans and innovative minds, all
        committed to delivering transformative digital experiences.
      </p>
      <div className="mt-16 w-full max-w-[1056px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 max-md:flex-col">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
