import { ChevronDown } from "lucide-react"

export default function Component() {
    const techStack = [
        {
            category: "Database Management Tools",
            tools: ["Oracle", "PostgreSQL", "MySQL", "Clickhouse", "Tarantool", "MongoDB", "DynamoDB"],
        },
        {
            category: "Continuous Integration (Delivery)",
            tools: ["Jenkins", "GitLab CI", "AWS Code Pipeline", "Azure DevOps", "Nexus", "Docker"],
        },
        {
            category: "Monitoring, Metrics, and Logging",
            tools: ["Nagios", "Zabbix", "Prometheus", "Grafana", "Elastic Stack", "Telegraf"],
        },
        {
            category: "Configuration Management",
            tools: ["GIT SCM", "Terraform", "Ansible", "Packer"],
        },
        {
            category: "Orchestration and Service Discovery",
            tools: ["Kubernetes", "Docker Swarm", "Consul"],
        },
        {
            category: "Cloud Providers",
            tools: ["AWS", "GCP", "Azure", "Oracle Cloud"],
        },
        {
            category: "Processes",
            tools: ["Azure DevOps", "GitDocs", "Jira"],
        },
        {
            category: "Code Analysis",
            tools: ["SonarQube", "WhiteSource", "Dependency-Track", "Trivy"],
        },
    ]

    return (
        <div className="min-h-screen text-gray-800 dark:bg-transparent dark:text-white mb-12 p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl text-gray-900 dark:text-white text-center font-bold mb-8">DevOps tech stack</h1>
                <p className="mb-8 text-xl max-w-4xl mx-auto text-gray-700 dark:text-gray-300">
                    In order to implement the IT initiatives of our customers, we use the following set of tools and frameworks
                    capable of resolving any IT task.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {techStack.map((category, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{category.category}</h2>
                            <ul className="space-y-2">
                                {category.tools.map((tool, toolIndex) => (
                                    <li key={toolIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                                        <span className="w-2 h-2 bg-black dark:bg-[#6430c2] rounded-full mr-2" />
                                        {tool}
                                    </li>
                                ))}
                            </ul>
                            {category.tools.length > 3 && (
                                <button className="mt-4 text-black dark:text-[#6430c2] flex items-center hover:underline">
                                    View all
                                    <ChevronDown className="ml-1 w-4 h-4" />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}