import React from 'react'
import { Card } from '../../components/ui/card'
import Image from "next/image"
import { Badge } from '../../components/ui/badge'

const ProjectMore = () => {
    const projects = [
        {
            title: "SINUJI: Sistem Ngaji Daring Aswaja",
            description: "SINUJI is a web-based application that provides a platform for students to learn Islamic studies online. It offers a variety of courses, quizzes, and interactive learning materials to help students understand the teachings of Islam.",
            image: "/sinuji.png",
            link: "https://sinuji.com",
            skills: ["Laravel", "PHP", "CSS", "Javascript", "MySql", "Git"],
        },
        {
            title: "PastiJadi Accounting-App",
            description: "PastiJadi Accounting-App is a cloud-based accounting software designed to help businesses manage their financial transactions. It provides features such as invoicing, expense tracking, and financial reporting to help business owners keep track of their finances.",
            image: "/accounting.png",
            link: "https://pastijadi.co.id/accounting-app/",
            skills: ["Laravel", "PHP", "CSS", "JavaScript", "MySql", "Git"],
        },
        {
            title: "Isna Collection",
            description: "Isna Collection is an e-commerce website that sells a variety of Muslim clothing and accessories. It offers a wide range of products, including hijabs, abayas, and prayer rugs, to cater to the needs",
            image: "/isna-collection.png",
            link: "https://isnacollection.com/",
            skills: ["Laravel", "PHP", "CSS", "JavaScript", "Midtrans", "Git"],
        },
        {
            title: "Parkirin",
            description: "Parkirin is a web-based parking management system that allows users to book parking spaces online. It provides real-time availability updates and allows users to pay for parking using various payment methods.",
            image: "/parkirin.png",
            link: "https://parkirin.sinuji.com/",
            skills: ["Next.JS", "Typescript", "PostgreSQL", "Git"],
        },
    ]    
        return (
        <>
        <div className='px-8 pb-20'>
            <div className='flex flex-col md:flex-row gap-8'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                <Card key={index} className="p-6 flex flex-col gap-4">
                    <div className="relative w-full h-80">
                    <Image
                        src={project.image || '/default-image.png'}
                        alt={project.title}
                        // layout="fill"
                        // objectFit="cover"
                        className="rounded-lg"
                        height={400}
                        width={400}
                    />
                    </div>
                    <div className='flex flex-col gap-2'>
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.skills && project.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary">
                            {skill}
                        </Badge>
                        ))}
                    </div>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        View Project
                    </a>
                    </div>
                </Card>
                ))}
            </div>
            </div>
            </div>
        </>
    )
}

export default ProjectMore