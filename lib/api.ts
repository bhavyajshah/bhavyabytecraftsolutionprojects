export interface BlogPost {
  id: number;
  slug: string;
  img: string;
  title: string;
  description: string;
  categories: string[];
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  date: string;
  content: string;
  readingTime: number;
  tags: string[];
  views: number;
  likes: number;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "revolution-in-content-creation",
    img: "https://ai-tool-tailwind.preview.uideck.com/images/blog-01.png",
    title: "Revolution in Content Creation and Communication",
    description:
      "AI is transforming content creation, enabling faster and more accurate communication strategies for businesses.",
    categories: ["AI", "Content Creation"],
    author: {
      name: "Alex Demo",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      bio: "AI researcher and content strategist with 10+ years of experience in the tech industry.",
    },
    date: "25 Mar, 2025",
    content: `
      <h2 class="text-3xl font-bold">The AI Revolution in Content Creation</h2>
      <p class="mt-4 text-lg leading-relaxed">Artificial Intelligence (AI) is reshaping content creation in profound ways. Businesses are increasingly using AI-driven tools to automate tasks, streamline workflows, and reach audiences more efficiently.</p>

      <h3 class="text-2xl font-semibold mt-6">1. Automated Content Generation</h3>
      <p class="mt-2 text-lg leading-relaxed">With AI, content generation has never been easier. Tools such as OpenAI's GPT-3 allow businesses to generate high-quality articles, blog posts, and social media content at scale. These tools analyze vast datasets to create text that mimics human speech, enabling companies to produce content faster than ever before.</p>

      <h3 class="text-2xl font-semibold mt-6">2. Personalized Communication</h3>
      <p class="mt-2 text-lg leading-relaxed">AI helps businesses analyze user behavior and create hyper-personalized messages that resonate with their target audience. From email marketing to personalized landing pages, AI-driven personalization boosts customer engagement by delivering relevant, timely content.</p>

      <h3 class="text-2xl font-semibold mt-6">3. Real-Time Content Optimization</h3>
      <p class="mt-2 text-lg leading-relaxed">AI doesn't just create content; it also optimizes it in real-time. Machine learning algorithms can analyze how audiences interact with content and make adjustments to improve engagement and conversion rates. This allows for continual optimization, keeping content fresh and relevant.</p>

      <h2 class="text-3xl font-bold mt-8">Looking Ahead: AI's Role in Future Communication</h2>
      <p class="mt-4 text-lg leading-relaxed">The role of AI in content creation will only expand. As the technology becomes more sophisticated, businesses will find new ways to leverage AI for deeper audience engagement, automation, and creative storytelling.</p>
    `,
    readingTime: 8,
    tags: ["AI", "Content Creation", "Digital Marketing", "Machine Learning"],
    views: 15420,
    likes: 2301,
  },
  {
    id: 2,
    slug: "ai-writing-tools-empower-writers",
    img: "https://ai-tool-tailwind.preview.uideck.com/images/blog-02.png",
    title: "How AI Writing Tools Empower Writers to Speed Up Their Writing",
    description:
      "Discover how AI writing tools are helping content creators accelerate their work while maintaining quality.",
    categories: ["Development", "Content Writing"],
    author: {
      name: "Hendary Jonson",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      bio: "Tech writer and developer advocate specializing in AI and productivity tools.",
    },
    date: "12 Feb, 2025",
    content: `
      <h2 class="text-3xl font-bold">The Power of AI Writing Tools</h2>
      <p class="mt-4 text-lg leading-relaxed">Writers today face an increasingly fast-paced content landscape. AI writing tools have emerged to help writers keep up with demand without sacrificing quality. These tools, like Grammarly and GPT-based platforms, assist in generating ideas, improving grammar, and even creating entire drafts.</p>

      <h3 class="text-2xl font-semibold mt-6">1. Enhancing Productivity</h3>
      <p class="mt-2 text-lg leading-relaxed">By automating repetitive tasks such as proofreading and formatting, AI tools free up time for writers to focus on creativity. For instance, AI-powered suggestions can improve sentence structure and vocabulary in real-time, boosting efficiency and reducing time spent on revisions.</p>

      <h3 class="text-2xl font-semibold mt-6">2. Improving Content Quality</h3>
      <p class="mt-2 text-lg leading-relaxed">These tools don't just make writing faster; they make it better. AI writing assistants can detect inconsistencies in tone, suggest stylistic changes, and even ensure that the content aligns with brand guidelines.</p>

      <h3 class="text-2xl font-semibold mt-6">3. Overcoming Writer's Block</h3>
      <p class="mt-2 text-lg leading-relaxed">AI tools can also help overcome writer's block by suggesting new ideas or providing outlines. Writers can input a topic and let the AI generate a detailed structure or first draft, allowing them to refine and personalize the content.</p>
    `,
    readingTime: 6,
    tags: ["AI", "Writing", "Productivity"],
    views: 10200,
    likes: 1450,
  },
  {
    id: 3,
    slug: "ai-developer-tools",
    img: "https://ai-tool-tailwind.preview.uideck.com/images/blog-03.png",
    title: "Innovative Solutions in AI for Developers",
    description:
      "Learn about the latest AI-driven tools that are revolutionizing software development practices.",
    categories: ["Development", "AI"],
    author: {
      name: "Jane Doe",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      bio: "Software engineer and AI researcher with a focus on developer productivity tools.",
    },
    date: "5 Jan, 2025",
    content: `
      <h2 class="text-3xl font-bold">AI's Impact on Software Development</h2>
      <p class="mt-4 text-lg leading-relaxed">The rise of AI has introduced a new era in software development. AI-powered tools are now automating many of the tasks that once required manual coding and testing. This allows developers to focus on more complex, high-level aspects of the development process.</p>

      <h3 class="text-2xl font-semibold mt-6">1. Code Generation and Completion</h3>
      <p class="mt-2 text-lg leading-relaxed">AI-driven code completion tools, such as GitHub Copilot, use machine learning to suggest entire blocks of code as developers type. This significantly speeds up the coding process while reducing errors.</p>

      <h3 class="text-2xl font-semibold mt-6">2. Automated Testing</h3>
      <p class="mt-2 text-lg leading-relaxed">Testing is another area where AI shines. Automated testing frameworks powered by AI can run hundreds of test cases in a fraction of the time it would take a human tester. They can also predict potential bugs before they become issues in the codebase.</p>
    `,
    readingTime: 7,
    tags: ["AI", "Software Development", "Tools"],
    views: 8800,
    likes: 1200,
  },
  {
    id: 4,
    slug: "ai-business-automation",
    img: "https://ai-tool-tailwind.preview.uideck.com/images/blog-04.png",
    title: "The Future of AI in Business Automation",
    description:
      "AI is reshaping business automation, from streamlining operations to optimizing customer experiences.",
    categories: ["Business", "AI", "Automation"],
    author: {
      name: "John Smith",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
      bio: "Business analyst with a focus on AI-driven business solutions.",
    },
    date: "18 Apr, 2025",
    content: `
      <h2 class="text-3xl font-bold">Business Automation Powered by AI</h2>
      <p class="mt-4 text-lg leading-relaxed">AI is fundamentally changing the way businesses operate by automating routine tasks and improving efficiency. From customer service chatbots to complex data analytics, AI is driving business growth through automation.</p>

      <h3 class="text-2xl font-semibold mt-6">1. Automating Customer Interactions</h3>
      <p class="mt-2 text-lg leading-relaxed">AI chatbots and virtual assistants are now capable of handling customer queries, providing real-time assistance, and even managing transactions. These tools not only reduce workload but also improve customer satisfaction by offering 24/7 support.</p>

      <h3 class="text-2xl font-semibold mt-6">2. Streamlining Operations</h3>
      <p class="mt-2 text-lg leading-relaxed">In operations, AI is automating processes like inventory management, order tracking, and financial reporting, allowing businesses to operate more efficiently and reduce human error.</p>
    `,
    readingTime: 9,
    tags: ["AI", "Business", "Automation"],
    views: 13400,
    likes: 1850,
  },
  {
    id: 5,
    slug: "ai-cybersecurity-solutions",
    img: "https://ai-tool-tailwind.preview.uideck.com/images/blog-05.png",
    title: "Enhancing Cybersecurity with AI-Powered Solutions",
    description:
      "Explore how AI is strengthening cybersecurity measures by predicting and preventing threats.",
    categories: ["Cybersecurity", "AI"],
    author: {
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
      bio: "Cybersecurity expert specializing in AI-based threat detection systems.",
    },
    date: "9 May, 2025",
    content: `
      <h2 class="text-3xl font-bold">AI-Powered Cybersecurity</h2>
      <p class="mt-4 text-lg leading-relaxed">Cybersecurity is becoming increasingly important in today's digital world. AI is playing a crucial role in defending against cyberattacks by using predictive analytics to identify vulnerabilities and block potential threats before they cause damage.</p>

      <h3 class="text-2xl font-semibold mt-6">1. Threat Detection</h3>
      <p class="mt-2 text-lg leading-relaxed">AI algorithms can analyze vast amounts of data to detect unusual patterns and flag potential security breaches. This real-time threat detection allows businesses to respond to threats faster than traditional methods.</p>

      <h3 class="text-2xl font-semibold mt-6">2. Automated Response Systems</h3>
      <p class="mt-2 text-lg leading-relaxed">AI can also automate responses to security threats. For instance, AI systems can lock down vulnerable areas of the network, notify security teams, and even roll back affected systems to a safe state—all without human intervention.</p>
    `,
    readingTime: 8,
    tags: ["AI", "Cybersecurity", "Threat Detection"],
    views: 9600,
    likes: 2100,
  },
];

export async function getBlogPosts(): Promise<BlogPost[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return blogPosts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return blogPosts.find((post) => post.slug === slug);
}

export async function getRelatedPosts(currentSlug: string, categories: string[]): Promise<BlogPost[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return blogPosts
    .filter((post) => post.slug !== currentSlug && post.categories.some((category) => categories.includes(category)))
    .slice(0, 3);
}