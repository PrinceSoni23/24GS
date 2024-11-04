// pages/TermsAndConditions.jsx

import Head from 'next/head';

const TermsAndConditions = () => {
    return (
        <>
            <Head>
                <title>Terms & Conditions / Privacy Policy</title>
                <meta name="description" content="Terms and Conditions, Return & Cancellation, and Privacy Policy" />
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            </Head>

            <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241259.jpg?ga=GA1.1.932687991.1719332392&semt=ais_hybrid")' }}>
                <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay for contrast */}
                <div className="max-w-7xl mx-auto p-6 relative z-10 text-white">
                    <header className="mb-10 text-center">
                        <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeInDown">Terms & Conditions / Return & Cancellation</h1>
                        <h2 className="text-3xl font-semibold mb-2 animate__animated animate__fadeInDown">Privacy Policy</h2>
                        <p className="text-lg">Last updated on 31-03-2024 04:40:35</p>
                    </header>

                    <section className="mb-10 backdrop-blur-md bg-white bg-opacity-20 rounded-xl shadow-lg p-8 animate__animated animate__fadeInUp">
                        <h3 className="text-4xl font-bold mb-6 text-blue-100">Privacy Policy</h3>
                        <p className="mb-4">This privacy policy (“Policy”) relates to the manner 24GLOBAL SOLUTION (“we”, “us”, “our”) in which we use, handle and process the data that you provide us in connection with using the products or services we offer. By using this website or by availing goods or services offered by us, you agree to the terms and conditions of this Policy, and consent to our use, storage, disclosure, and transfer of your information or data in the manner described in this Policy.</p>
                        <p className="mb-4">We are committed to ensuring that your privacy is protected in accordance with applicable laws and regulations. We urge you to acquaint yourself with this Policy to familiarize yourself with the manner in which your data is being handled by us.</p>
                        <p className="mb-4">24Global Solution may change this Policy periodically and we urge you to check this page for the latest version of the Policy in order to keep yourself updated.</p>

                        <h4 className="text-2xl font-semibold mt-6 mb-4 text-blue-100">What data is being collected?</h4>
                        <ul className="list-disc list-inside mb-4">
                            <li>Name</li>
                            <li>Contact information including address and email address</li>
                            <li>Demographic information or preferences or interests</li>
                            <li>Personal Data or Other information relevant/required for providing the goods or services to you</li>
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
                            <li>Third parties including our service providers.</li>
                            <li>With our group companies (to the extent relevant).</li>
                            <li>Our auditors or advisors as required.</li>
                            <li>Governmental bodies, regulatory authorities, law enforcement authorities as required.</li>
                        </ul>

                        <h4 className="text-2xl font-semibold mb-4 text-blue-100">How we use cookies?</h4>
                        <p className="mb-4">We use “cookies” to collect information and to better understand customer behavior. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>

                        <h4 className="text-2xl font-semibold mb-4 text-blue-100">Your rights relating to your data?</h4>
                        <ul className="list-disc list-inside mb-4">
                            <li>Right to Review – You can review the data provided by you and can request us to correct or amend such data.</li>
                            <li>Withdrawal of your Consent – You can choose not to provide your data.</li>
                        </ul>

                        <h4 className="text-2xl font-semibold mb-4 text-blue-100">How long will we retain your information or data?</h4>
                        <p className="mb-4">We may retain your information for as long as we are providing goods and services to you.</p>

                        <h4 className="text-2xl font-semibold mb-4 text-blue-100">Data Security</h4>
                        <p className="mb-4">We will use commercially reasonable precautions to preserve the integrity and security of your information and data.</p>

                        <h4 className="text-2xl font-semibold mb-4 text-blue-100">Queries/ Grievance Officer</h4>
                        <p className="mb-4">For any queries, questions or grievances about this Policy, please contact us using the contact information provided on this website.</p>
                    </section>

                    <section className="mb-10 backdrop-blur-md bg-white bg-opacity-20 rounded-xl shadow-lg p-8 animate__animated animate__fadeInUp">
                        <h3 className="text-4xl font-bold mb-6 text-blue-100">Terms And Conditions</h3>
                        <p className="mb-4">Welcome to our services! Before using our services, please read these terms carefully.</p>
                        <ol className="list-decimal list-inside mb-4">
                            <li className="mb-2"><strong>Services Offered:</strong> We offer web services for bulk text and WhatsApp messages, which often involve APIs for sending and managing messages at scale.</li>
                            <li className="mb-2"><strong>Cancellation Policy:</strong> If you wish to cancel your subscription, please notify us at least 30 days prior to the renewal date.</li>
                            <li className="mb-2"><strong>Annual Security Charge:</strong> Our annual security charge is $1999.99, payable upon subscription to our services.</li>
                            <li className="mb-2"><strong>Refunds:</strong> Refunds for the annual security charge will only be provided if the cancellation request is made within the specified period.</li>
                            <li className="mb-2"><strong>Usage of Services:</strong> By using our services, you agree to comply with all applicable laws and regulations.</li>
                            <li className="mb-2"><strong>Data Privacy:</strong> We are committed to protecting your privacy and personal information.</li>
                            <li className="mb-2"><strong>Changes to Terms:</strong> We reserve the right to update or modify these terms and conditions at any time.</li>
                            <li className="mb-2"><strong>Contact Us:</strong> If you have any questions or concerns about these terms and conditions, please contact us.</li>
                        </ol>
                    </section>

                    <section className="mb-10 backdrop-blur-md bg-white bg-opacity-20 rounded-xl shadow-lg p-8 animate__animated animate__fadeInUp">
                        <h3 className="text-4xl font-bold mb-6 text-blue-100">Return & Cancellation Policy</h3>
                        <ul className="list-disc list-inside mb-4">
                            <li>Returns: If for any reason you are not satisfied with our services, you are eligible for a refund within 7 days from the date of service initiation.</li>
                            <li>Cancellation: Cancellation requests must be made in writing within the specified time frame mentioned in the service agreement.</li>
                            <li>Refund Procedure: Refunds will be processed within a reasonable time frame after the cancellation request has been approved.</li>
                            <li>Modification of Services: 24 Global Solution reserves the right to modify or change services at any time without prior notice.</li>
                        </ul>
                    </section>

                    <section className="text-center mb-6">
                        <h3 className="text-3xl font-semibold mb-4 animate__animated animate__fadeInUp">Get in Touch!</h3>
                        <p className="mb-4">If you have any questions or would like to learn more about our terms and conditions, please reach out.</p>
                        <a href="/contact" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg transition-transform transform hover:scale-105 hover:bg-blue-700 animate__animated animate__pulse">
                            Contact Us
                        </a>
                    </section>
                </div>
            </div>
        </>
    );
};

export default TermsAndConditions;
