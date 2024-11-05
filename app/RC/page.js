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
                <div className="max-w-7xl mx-auto p-6 relative z-10 text-white mt-20">
                    <header className="mb-10 text-center">
                        <h1 className="text-5xl font-extrabold mb-4 animate__animated animate__fadeInDown"> Return & Cancellation</h1>
                        <p className="text-lg">Last updated on 31-03-2024 04:40:35</p>
                    </header>


                    <section className="mb-10 backdrop-blur-md bg-white bg-opacity-20 rounded-xl shadow-lg p-8 animate__animated animate__fadeInUp">
                        <h3 className="text-4xl font-bold mb-6 text-blue-100">Return & Cancellation Policy</h3>
                        <ul className="list-disc list-inside mb-4">
                            <li>Returns: If for any reason you are not satisfied with our services, you are eligible for a refund within 7 days from the date of service initiation, subject to the guidelines of the company.</li>
                            <li>Cancellation: Cancellation requests must be made in writing within the specified time frame mentioned in the service agreement. Cancellations beyond this period may be subject to penalties or fees as outlined in the agreement.</li>
                            <li>Refund Procedure: Refunds will be processed within a reasonable time frame after the cancellation request has been approved by 24 Global Solution. The refunded amount will be credited using the original method of payment, unless otherwise agreed upon.</li>
                            <li>Modification of Services: 24 Global Solution reserves the right to modify or discontinue any part of the services provided, including pricing, at its sole discretion. Any such changes will be communicated to the clients in advance.</li>
                            <li>Liability: While we strive to provide the best possible service, 24 Global Solution shall not be held liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use our services.</li>
                            <li>Governing Law: These terms and conditions shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law provisions.</li>
                            <li>Acceptance of Terms: By availing the services of 24 Global Solution, you acknowledge that you have read, understood, and agree to abide by these terms and conditions.</li>
                        </ul>
                    </section>

                    <section className="mb-10 backdrop-blur-md bg-white bg-opacity-20 rounded-xl shadow-lg p-8 animate__animated animate__fadeInUp">
                        <h3 className="text-4xl font-bold mb-6 text-blue-100">Shipping & Delivery Policy </h3>
                        <ul className="list-disc list-inside mb-4">
                            <p>Last updated on May 1st 2024 <br />
                                For International buyers, orders are shipped and delivered through registered
                                international courier companies and/or International speed post only.
                                For domestic buyers, orders are shipped through registered domestic courier
                                companies and /or speed post only. Orders are shipped within 0-7 days or as
                                per the delivery date agreed at the time of order confirmation and delivering
                                of the shipment subject to Courier Company / post office norms. 24GlobalSolution
                                is not liable for any delay in delivery by the courier company /
                                postal authorities and only guarantees to hand over the consignment to the courier
                                company or postal authorities within 0-7 days rom the date of the order and
                                payment or as per the delivery date agreed at the time of order confirmation.
                                Delivery of all orders will be to the address provided by the buyer.
                                Delivery of our services will be confirmed on your mail ID as specified
                                during registration. For any issues in utilizing our services you may
                                contact our helpdesk.</p>
                        </ul>
                    </section>




                </div>
            </div>
            <Footer />
        </>
    );
};

export default TermsAndConditions;
