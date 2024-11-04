// components/AboutSection.js
import Navbar from "@/src/components/Navbar/Navbar";
import Footer from "@/src/components/Footer/Footer";
import Abo from "@/src/components/Abo/Abo";

export default function AboutSection() {
  return (
    <>
    <Navbar/>
    <Abo/>
    <section className="bg-[#533fd7]  text-white py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-2/3 lg:pr-16">
          <h2 className="text-4xl mt-14 font-bold mb-8 text-teal-400">About</h2>
          <p className="mb-8">
            At 24Global Solution, we redefine IT management with a comprehensive approach rooted in over two decades of industry experience. Our extensive tenure empowers us to cater to all your technology requirements, ensuring seamless operations and enhanced productivity.
          </p>
          <p className="mb-8">
            In today’s technology-driven landscape, the vitality of robust IT infrastructure cannot be overstated. Businesses thrive or falter based on the reliability of their digital systems. With entire operations dependent on electronic frameworks, the repercussions of IT failures can be catastrophic. Our security-centric managed IT services offer a shield against data loss and system disruptions, freeing business owners to concentrate on their core objectives—nurturing and expanding their ventures.
          </p>
          <p className="mb-8">
            At 24Global Solution, we recognize the pivotal role of IT in business evolution. The surge in technological advancements necessitates a strategic partnership with Managed Service Providers (MSPs) like us. As the digital landscape evolves at breakneck speed, streamlined IT functions become imperative for sustained growth. Embrace the future of IT management with 24Global Solution, where your success is our foremost priority.
          </p>
        </div>

        {/* Logo Section */}
        <div className="lg:w-1/3 flex justify-center mt-12 lg:mt-0">
          <img src="/logo2.png" alt="24 Global Solution Logo" className="w-96 h-auto" />
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}
