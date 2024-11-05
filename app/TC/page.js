// pages/TermsAndConditions.jsx

import Head from 'next/head';
import Navbar from '@/src/components/Navbar/Navbar';
import Footer from '@/src/components/Footer/Footer';

const TermsAndConditions = () => {
    return (
        <>
            <Navbar />
            <Head>
                <title>Terms & Conditions / Privacy Policy</title>
                <meta name="description" content="Terms and Conditions, Return & Cancellation, and Privacy Policy" />
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            </Head>

            <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241259.jpg?ga=GA1.1.932687991.1719332392&semt=ais_hybrid")' }}>
                <div className="absolute inset-0 bg-black opacity-40"></div> Dark overlay for contrast
                <div className="max-w-7xl mx-auto p-6 relative z-10 text-white">
                    <header className="mb-10 text-center">
                        <h1 className="text-5xl mt-20 font-extrabold mb-4 animate__animated animate__fadeInDown">Terms & Conditions </h1>
                        <p className="text-lg">Last updated on 31-03-2024 04:40:35</p>
                    </header>


                    <section className="mb-10 backdrop-blur-md bg-white bg-opacity-20 rounded-xl shadow-lg p-8 animate__animated animate__fadeInUp">
                        <p className="mb-4">Welcome to our services! Before using our services, please read these terms carefully.</p>
                        <ol className="list-decimal list-inside mb-4">
                            <li className="mb-2"><strong>Services Offered:</strong> We offer web services for bulk text and WhatsApp messages, which often involve APIs for sending and managing messages at scale. Additionally, our services may include online storefronts, payment gateways, order processing systems, troubleshooting, remote assistance, and IT solutions tailored to specific domains.</li>
                            <li className="mb-2"><strong>Cancellation Policy:</strong> If you wish to cancel your subscription, please notify us at least 30 days prior to the renewal date. Cancellations made after this period will not be eligible for a refund of the annual security charge. To initiate a cancellation, please contact our customer support team.</li>
                            <li className="mb-2"><strong>Annual Security Charge:</strong> Our annual security charge is $1999.99, payable upon subscription to our services. Engineering visit charges are $195.99.</li>
                            <li className="mb-2"><strong>Refunds:</strong>  Refunds for the annual security charge will only be provided if the cancellation request is made within the specified period and meets the terms outlined in this policy.</li>
                            <li className="mb-2"><strong>Usage of Services:</strong>  By using our services, you agree to comply with all applicable laws and regulations. You also agree not to use our services for any illegal or unauthorized purpose.</li>
                            <li className="mb-2"><strong>Data Privacy:</strong> We are committed to protecting your privacy and personal information. Please refer to our Privacy Policy for details on how we collect, use, and protect your data.</li>
                            <li className="mb-2"><strong>Changes to Terms:</strong>  We reserve the right to update or modify these terms and conditions at any time without prior notice. It is your responsibility to review these terms periodically for any changes.</li>
                            <li className="mb-2"><strong>Contact Us:</strong> If you have any questions or concerns about these terms and conditions, please contact us at [contact email or phone number].</li>

                            <p className='mb-4'>By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions :</p>
                            <li className="mb-2"><strong>Security Services:</strong>The security charge for availing the services of 24 Global Solution is $999.99. This charge covers the deployment and maintenance of security measures as per the agreed terms.</li>
                            <li className="mb-2"><strong>IT Guy Home Visit:</strong>  In case of on-site technical assistance, an additional charge of $195 will be applicable for each home visit by our IT personnel.</li>
                        </ol>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default TermsAndConditions;
