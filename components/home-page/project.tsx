import React from 'react'
import { Card } from '../ui/card'
import Image from "next/image"
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

export const Project = () => {
  return (
    <>
    <section id="project">
    <div className='px-14 text-center'>
        <h1 className='text-xl md:text-2xl font-bold mb-4'>Project</h1>
        <div className='flex flex-col md:flex-row gap-8'>
            <Card className='pt-5 px-5'>
                <h1 className='text-m md:text-l font-bold mb-3'>SINUJI: Sistem Ngaji Daring Aswaja</h1>
                <Image
                    src="/sinuji.png"
                    width={300}
                    height={300}
                    alt="Project"
		        />
                <p className='text-l text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nostrum asperiores laboriosam nobis recusandae.</p>
                <p className='m-3'>
                    {["Laravel", "PHP", "Javascript", "MySql", "Git"].map(
                        (skill, index) => (
                        <Badge key={index} variant="secondary">
                            {skill}
                        </Badge>
                        ),
                    )}
                </p>
            </Card>
            <Card className='pt-5 px-5'>
            <h1 className='text-m md:text-l font-bold mb-3'>PastiJadi Accounting-App</h1>
                <Image
                    src="/accounting.png"
                    width={300}
                    height={300}
                    alt="Project"
		        />
                <p className='text-l text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae nostrum asperiores laboriosam nobis recusandae.</p>
                <p className='m-3'>
                    {["Laravel", "PHP", "JavaScript", "MySql", "Git"].map(
                        (skill, index) => (
                        <Badge key={index} variant="secondary">
                            {skill}
                        </Badge>
                        ),
                    )}
                </p>
            </Card>
            {/* <Card className='pt-5 px-5'>
            <h1 className='text-m md:text-l font-bold mb-3'>Judul</h1>
                <Image
                    src="/hero1.jpg"
                    width={300}
                    height={300}
                    alt="Background"
		        />
                <p className='text-l text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, a. Magni laboriosam ab cumque eius ipsam beatae vero quibusdam pariatur iste, soluta amet maiores? Molestiae nostrum asperiores laboriosam nobis recusandae.</p>
                <p className='m-3'>
                    {["Python", "JavaScript", "React", "Node.js", "Java", "SQL", "Git", "Machine Learning"].map(
                        (skill, index) => (
                        <Badge key={index} variant="secondary">
                            {skill}
                        </Badge>
                        ),
                    )}
                </p>
            </Card> */}
        </div>
        <a href="/project-more">
        <Button className='bg-gray-600 hover:bg-gray-800 mt-4 mb-4'>MORE</Button>
        </a>
    </div>
    </section>
    </>
  )
}

export default Project
