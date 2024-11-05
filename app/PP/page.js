// pages/TermsAndConditions.jsx

import Head from 'next/head';
import Navbar from '@/src/components/Navbar/Navbar';
import Footer from '@/src/components/Footer/Footer';

const TermsAndConditions = () => {
    return (
        <>
        <Navbar/>
            <Head>
                <title> Privacy Policy</title>
                <meta name="description" content="Terms and Conditions, Return & Cancellation, and Privacy Policy" />
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            </Head>

            <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241259.jpg?ga=GA1.1.932687991.1719332392&semt=ais_hybrid")' }}>
                <div className="absolute inset-0 bg-black opacity-40"></div> Dark overlay for contrast
                <div className="max-w-7xl mx-auto p-6 relative z-10 text-white mt-20">
                    <header className="mb-10 text-center">
                        <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeInDown"> Privacy Policy</h1>
                        <p className="text-lg">Last updated on 31-03-2024 04:40:35</p>
                    </header>


                    <section className="mb-10 backdrop-blur-md bg-white bg-opacity-20 rounded-xl shadow-lg p-8 animate__animated animate__fadeInUp">
                        <p className="mb-4">This privacy policy (“Policy”) relates to the manner 24GLOBAL SOLUTION (“we”, “us”, “our”) in which we use, handle and process the data that you provide us in connection with using the products or services we offer. By using this website or by availing goods or services offered by us, you agree to the terms and conditions of this Policy, and consent to our use, storage, disclosure, and transfer of your information or data in the manner described in this Policy.</p>
                        <p className="mb-4">We are committed to ensuring that your privacy is protected in accordance with applicable laws and regulations. We urge you to acquaint yourself with this Policy to familiarize yourself with the manner in which your data is being handled by us.</p>
                        <p className="mb-4">24Global Solution may change this Policy periodically and we urge you to check this page for the latest version of the Policy in order to keep yourself updated.</p>

                        <h4 className="text-2xl font-semibold mt-6 mb-4 text-blue-100">What data is being collected?</h4>
                        <ul className="list-disc list-inside mb-4">
                            <li>Name</li>
                            <li>Contact information including address and email address</li>
                            <li>Demographic information or preferences or interests</li>
                            <li>Personal Data or Other information relevant/required for providing the goods or services to you</li>
                            <li>Note:<br/>
                            To be storing any credit card, debit card or any other similar card data of yours. Please also note that all data or information collected from you will be strictly in accordance with applicable laws and guidelines.</li>
                        </ul>

                        <h4 className="text-2xl font-semibold mb-4 text-blue-100">What we do with the data we gather?</h4>
                        <ul className="list-disc list-inside mb-4">
                            <li>Internal record keeping.</li>
                            <li>For improving our products or services.</li>
                            <li>For providing updates to you regarding our products or services including any special offers.</li>
                            <li>To communicate information to you.</li>
                            <li>For internal training and quality assurance purposes.</li>
                        </ul>

                        <h4 className="text-2xl font-semibold mb-4 text-blue-100">Who do we share your data with?</h4>
                        <ul className="list-disc list-inside mb-4">
                            <li> Third parties including our service providers in order to facilitate the provisions of goods or services to you, carry out your requests, respond to your queries, fulfil your orders or for other operational and business reasons.</li>
                            <li>Notwithstanding anything under this Policy as required under applicable Indian laws.</li>
                            <li> Our auditors or advisors to the extent required by them for performing their services</li>
                            <li>Governmental bodies, regulatory authorities, law enforcement authorities pursuant to our legal obligations or compliance requirements.</li>
                        </ul>

                        <h4 className="text-2xl font-semibold mb-4 text-blue-100">How we use cookies?</h4>
                        <p className="mb-4">We use “cookies” to collect information and to better understand customer behaviour. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to avail our goods or services to the full extent. We do not control the use of cookies by third parties. The third party service providers have their own privacy policies addressing how they use such information.</p>

                        <h4 className="text-2xl font-semibold mb-4 text-blue-100">Your rights relating to your data?</h4>
                        <ul className="list-disc list-inside mb-4">
                            <li>Right to Review –  You can review the data provided by you and can request us to correct or amend such data (to the extent feasible, as determined by us). That said, we will not be responsible for the authenticity of the data or information provided by you.</li>
                            <li>Withdrawal of your Consent – You can choose not to provide your data, at any time while availing our goods or services or otherwise withdraw your consent provided to us earlier, in writing to our email ID: Info@24globalsolution.comIn the event you choose to not provide or later withdraw your consent, we may not be able to provide you our services or goods. Please note that these rights are subject to our compliance with applicable laws.</li>
                        </ul>

                        <h4 className="text-2xl font-semibold mb-4 text-blue-100">How long will we retain your information or data?</h4>
                        <p className="mb-4">We may retain your information or data (i) for as long as we are providing goods and services to you; and (ii) as permitted under applicable law, we may also retain your data or information even after you terminate the business relationship with us. However, we will process such information or data in accordance with applicable laws and this Policy.</p>

                        <h4 className="text-2xl font-semibold mb-4 text-blue-100">Data Security</h4>
                        <p className="mb-4">We will use commercially reasonable precautions to preserve the integrity and security of your information and data.</p>

                        <h4 className="text-2xl font-semibold mb-4 text-blue-100">Queries/ Grievance Officer</h4>
                        <p className="mb-4">For any queries, questions or grievances about this Policy, please contact us using the contact information provided on this website.</p>
                    </section>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default TermsAndConditions;
