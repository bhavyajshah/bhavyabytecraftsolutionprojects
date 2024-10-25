"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

type Certificate = {
    id: string
    name: string
    image: string
    description: string
}

const certificates: Certificate[] = [
    {
        id: "ccna",
        name: "Cisco Certified Network Associate (CCNA)",
        image: "https://images.credly.com/images/493768bd-37c5-4f51-9a59-21743e59ca93/image.png",
        description: "CCNA certification validates the ability to install, configure, operate, and troubleshoot medium-size routed and switched networks, including implementation and verification of connections to remote sites in a WAN."
    },
    {
        id: "ccnp",
        name: "Cisco Certified Network Professional (CCNP)",
        image: "https://images.credly.com/images/d9d0aef1-07e0-481a-9921-691f81fe1fe6/image.png",
        description: "CCNP certification validates the ability to plan, implement, verify and troubleshoot local and wide-area enterprise networks and work collaboratively with specialists on advanced security, voice, wireless and video solutions."
    },
    {
        id: "aws-sa",
        name: "AWS Certified Solutions Architect - Associate",
        image: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-DevOps-Engineer-Professional_badge.7492bf660b5351e51f3f8015e4818924294a7e8c.png",
        description: "This certification validates the ability to design and deploy scalable, highly available, and fault-tolerant systems on AWS. It covers topics such as designing multi-tier architectures, designing for elasticity and scalability, and selecting appropriate AWS services based on requirements."
    },
    {
        id: "azure-devops",
        name: "Microsoft Certified: Azure DevOps Engineer Expert",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNatTwtaZ_f1OTy-HBwJd1ySYfWTUnaTyOlA&s",
        description: "This certification validates the ability to design and implement strategies for collaboration, code, infrastructure, source control, security, compliance, continuous integration, testing, delivery, monitoring, and feedback in Azure."
    },
    {
        id: "cka",
        name: "Certified Kubernetes Administrator",
        image: "https://media.licdn.com/dms/image/C4D12AQH0-GW9NhmXsA/article-cover_image-shrink_600_2000/0/1650910340524?e=2147483647&v=beta&t=3QH3ACm7gQV2acO5827bHNpPWbqK67NycX4ou3UlOBY",
        description: "The CKA certification validates the ability to perform the responsibilities of a Kubernetes administrator, including designing, installing, configuring, and managing a Kubernetes cluster production environment."
    },

]

export default function Certificates() {
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null)

    return (
        <div className="min-h-screen text-white mt-20 sm:p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl sm:text-4xl md:text-5xl font-bold mb-4 text-center text-white">
                    Expert-level company in DevOps
                </h1>
                <p className="mb-8 text-xl max-w-4xl mx-auto text-center text-gray-300">
                    In order to prove their knowledge and confirm their qualifications and professional skills, the experts from our
                    DevOps development company have received the following certificates in their core fields.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {certificates.map((cert) => (
                        <Card key={cert.id} className="bg-transparent hover:bg-transparent border-none">
                            <CardContent className="p-4">
                                <Button
                                    variant="ghost"
                                    className="w-full h-full flex flex-col items-center justify-center space-y-4"
                                    onClick={() => setSelectedCertificate(cert)}
                                >
                                    <Image src={cert.image} alt={cert.name} width={80} height={80} className="mb-2" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
                <DialogContent className="bg-gray-800 text-white">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold mb-2">{selectedCertificate?.name}</DialogTitle>
                        <DialogDescription className="text-gray-300">
                            {selectedCertificate?.description}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4">
                        <h3 className="text-lg font-semibold mb-2 text-blue-400">DevOps Relevance:</h3>
                        <p className="text-gray-300">
                            This certification is crucial in the DevOps field as it enables professionals to streamline the software
                            development lifecycle, improve collaboration between development and operations teams, and implement
                            continuous integration and delivery practices. It contributes to faster, more reliable software releases
                            and improved system stability.
                        </p>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}