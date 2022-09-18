import React from 'react'
import Footer from '../layouts/Footer'
import Header from '../layouts/Header'

function About() {
    return (
        <div>
            <Header />

            <div className='mx-10 p-10 rounded-lg bg-white'>
                <p class="text-gray-700">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
                <div class="inline-flex justify-center items-center w-full">
                    <hr class="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10" />
                </div>
                <p class="text-gray-700">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil.</p>
            </div>

            <Footer />
        </div>
    )
}

export default About