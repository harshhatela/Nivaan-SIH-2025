// app/page.js
import Image from 'next/image';
import Footer from './components/Footer';
import Header from './components/Header';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="flex items-center justify-between px-[5%] py-16 bg-gray-100 min-h-screen">
          <div className="max-w-[50%]">
            <h1 className="text-6xl font-bold mb-4 leading-tight text-[#1565C0]">
              Nivaan
            </h1>
            <h1 className="text-[#4B5563] text-xl font-bold mb-4 leading-tight">
              Every Mind Deserves a New Dawn.
            </h1>
            <p className="text-[#4B5563] text-lg mb-8">
              A comprehensive mental health platform designed specifically for
              students, offering culturally-adapted support in your preferred
              language.
            </p>
            <a
              href="#"
              className="inline-block bg-[#1565C0] text-white py-3 px-7 rounded-3xl font-semibold hover:bg-blue-700 transition-colors">
              Get Started Free
            </a>
            <a
              href="#"
              className="inline-block border-2 border-[#1565C0] text-[#1565C0] py-3 px-7 rounded-3xl font-semibold transition-colors ml-3">
              Learn More
            </a>
          </div>
          <div className="hero-image">
            <Image
              src="/img1.png"
              alt="Mental Health Illustration"
              width={700}
              height={550}
              className="rounded-lg"
            />
          </div>
        </section>

        {/* Crisis Section */}
        <section id='sec2' className="py-16 px-[5%] text-center">
          <h2 className="text-4xl font-bold mb-4">
            The Mental Health Crisis in Education
          </h2>
          <p className="max-w-3xl mx-auto text-center text-[#4B5563] text-lg mb-12">
            Student mental health challenges are rising globally. From academic
            pressure to social anxiety, young minds need accessible,
            culturally-sensitive support that understands their unique journey.
          </p>
          <div className="flex justify-center gap-8">
            <div className="bg-[#F5F5F5] p-8 rounded-lg shadow-lg w-64">
              <div className="w-12 h-12 bg-blue-500 rounded-md mx-auto mb-4">
                <div className="flex justify-center items-center">
                  <Image
                    src="/icon1.png"
                    alt="Rising Graph"
                    width={30}
                    height={30}
                    className="mt-2.5"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Rising Stress</h3>
              <p className="text-sm text-[#4B5563]">
                Academic pressure and life transitions create unprecedented
                stress levels among students
              </p>
            </div>
            <div className="bg-[#F5F5F5] p-8 rounded-lg shadow-lg w-64">
              <div className="w-12 h-12 bg-green-600 rounded-md mx-auto mb-4">
                <div className="flex justify-center items-center">
                  <Image
                    src="/icon2.png"
                    alt="Eyecross"
                    width={30}
                    height={30}
                    className="mt-2.5"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Hidden Struggles</h3>
              <p className="text-sm text-[#4B5563]">
                Many students suffer in silence due to stigma and lack of
                accessible mental health resources.
              </p>
            </div>
            <div className="bg-[#F5F5F5] p-8 rounded-lg shadow-lg w-64">
              <div className="w-12 h-12 bg-yellow-300 rounded-md mx-auto mb-4">
                <div className="flex justify-center items-center">
                  <Image
                    src="/icon3.png"
                    alt="Heart"
                    width={30}
                    height={30}
                    className="mt-2.5"
                  />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Need for Support</h3>
              <p className="text-sm text-[#4B5563]">
                Students need culturally-adapted, stigma-free platforms for
                mental health support.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id='sec3' className="py-16 px-[5%] bg-gray-100 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Comprehensive Mental Health Solutions
          </h2>
          <p className="max-w-3xl mx-auto text-center text-[#4B5563] text-lg mb-12">
            Nivaan offers a complete ecosystem of mental health tools designed
            specifically for the student experience.
          </p>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg text-left shadow-md">
              <div className="w-12 h-12 bg-blue-500 rounded-md mb-4">
                <div className="flex justify-center items-center">
                  <Image
                    src="/icon4.png"
                    alt="Rising Graph"
                    width={30}
                    height={30}
                    className="mt-2.5"
                  />
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-2">AI Chat Support</h4>
              <p className="text-[#4B5563]">
                24/7 intelligent chatbot providing immediate emotional support
                and guidance when you need it most
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg text-left shadow-md">
              <div className="w-12 h-12 bg-green-600 rounded-md mb-4">
                <div className="flex justify-center items-center">
                  <Image
                    src="/icon5.png"
                    alt="Rising Graph"
                    width={30}
                    height={30}
                    className="mt-2.5"
                  />
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Counsellor Chat & Therapists
              </h4>
              <p className="text-[#4B5563]">
                Secure, private appointment scheduling with licensed mental
                health professionals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg text-left shadow-md">
              <div className="w-12 h-12 bg-yellow-300 rounded-md mb-4">
                <div className="flex justify-center items-center">
                  <Image
                    src="/icon6.png"
                    alt="Rising Graph"
                    width={30}
                    height={30}
                    className="mt-2.5"
                  />
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-2">Resource Hub</h4>
              <p className="text-[#4B5563]">
                Curated library of mental health resources, self-help tools, and
                educational content.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg text-left shadow-md">
              <div className="w-12 h-12 bg-blue-500 rounded-md mb-4">
                <div className="flex justify-center items-center">
                  <Image
                    src="/icon7.png"
                    alt="Rising Graph"
                    width={30}
                    height={30}
                    className="mt-2.5"
                  />
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-2">Peer Support</h4>
              <p className="text-[#4B5563]">
                Connect with fellow students in moderated support groups and
                community discussions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg text-left shadow-md">
              <div className="w-12 h-12 bg-green-600 rounded-md mb-4">
                <div className="flex justify-center items-center">
                  <Image
                    src="/icon8.png"
                    alt="Rising Graph"
                    width={30}
                    height={30}
                    className="mt-2.5"
                  />
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-2">Gamification</h4>
              <p className="text-[#4B5563]">
                Incorporate rewards, challenges, leaderboards, and progress
                tracking to encourage consistent use of mental health tools
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg text-left shadow-md">
              <div className="w-12 h-12 bg-yellow-300 rounded-md mb-4">
                <div className="flex justify-center items-center">
                  <Image
                    src="/icon9.png"
                    alt="Rising Graph"
                    width={30}
                    height={30}
                    className="mt-2.5"
                  />
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-2">Privacy First</h4>
              <p className="text-[#4B5563]">
                End-to-end encryption and strict privacy protocols ensure your
                mental health journey remains confidential.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section id='sec4' className="py-16 px-[5%] gap-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Why Choose Nivaan?</h2>
            <p className="max-w-3xl mx-auto text-[#4B5563] text-lg mb-12">
              Built specifically for the diverse needs of students across
              different cultures and regions.
            </p>
          </div>
          <div className="flex items-center">
            <div className="flex-1">
              <ul className="space-y-6">
                <li className="text-lg">
                  <div className="flex gap-7">
                    <div>
                      <div className="w-12 h-12 bg-blue-500 rounded-md mb-4">
                        <div className="flex justify-center items-center">
                          <Image
                            src="/icon10.png"
                            alt="Rising Graph"
                            width={30}
                            height={30}
                            className="mt-2.5"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        Cultural Adaption
                      </h4>
                      <p className="text-[#4B5563]">
                        Mental health support that understands and respects
                        diverse cultural backgrounds and values.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="text-lg">
                  <div className="flex gap-7">
                    <div>
                      <div className="w-12 h-12 bg-green-600 rounded-md mb-4">
                        <div className="flex justify-center items-center">
                          <Image
                            src="/icon11.png"
                            alt="Rising Graph"
                            width={30}
                            height={30}
                            className="mt-2.5"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        Regional Languages
                      </h4>
                      <p className="text-[#4B5563]">
                        Support available in multiple regional languages to
                        ensure comfortable communication.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="text-lg">
                  <div className="flex gap-7">
                    <div>
                      <div className="w-12 h-12 bg-yellow-300 rounded-md mb-4">
                        <div className="flex justify-center items-center">
                          <Image
                            src="/icon12.png"
                            alt="Rising Graph"
                            width={30}
                            height={30}
                            className="mt-2.5"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        Stigma-Free Environment
                      </h4>
                      <p className="text-[#4B5563]">
                        Anonymous options and judgment-free spaces where
                        students can seek help without fear.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="text-lg">
                  <div className="flex gap-7">
                    <div>
                      <div className="w-12 h-12 bg-blue-500 rounded-md mb-4">
                        <div className="flex justify-center items-center">
                          <Image
                            src="/icon13.png"
                            alt="Rising Graph"
                            width={30}
                            height={30}
                            className="mt-2.5"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">
                        Institution-Specific
                      </h4>
                      <p className="text-[#4B5563]">
                        Customized solutions that integrate with your
                        institution's existing support systems.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex-1 ml-52">
              <Image
                src="/img2.png"
                alt="Diverse group of students"
                width={450}
                height={300}
                className="rounded-lg h-96 w-96"
              />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id='sec5' className="py-16 px-[5%] text-center bg-gray-100">
          <h2 className="text-4xl font-bold mb-4">Experience Nivaan</h2>
          <p className="text-lg mb-8 text-[#4B5563]">
            Simple, intuitive design that makes mental health support accessible
            to everyone.
          </p>
          <div className="mb-12">
            <div className="relative flex items-center justify-center min-h-[500px] w-full">
              {/* Decorative background blobs */}
              <div className="absolute top-0 right-1/4 w-48 h-48 bg-yellow-200 rounded-full opacity-50 blur-2xl z-0"></div>
              <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-green-200 rounded-full opacity-50 blur-2xl z-0"></div>

              {/* Container for the three mockups */}
              <div className="relative w-full flex justify-center items-center">
                {/* Left Mockup (Behind) */}
                <div className="absolute w-60 sm:w-64 h-[450px] sm:h-[480px] bg-white p-3 rounded-3xl shadow-2xl transform -rotate-6 -translate-x-16 sm:-translate-x-24 transition-transform duration-300 hover:scale-105 hover:-rotate-3 z-10">
                  <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center">
                    <Image
                      src="/image1.png"
                      alt="Diverse group of students"
                      width={100}
                      height={100}
                      className="w-full rounded-lg m-7"
                    />
                  </div>
                </div>

                {/* Right Mockup (Behind) */}
                <div className="absolute w-60 sm:w-64 h-[450px] sm:h-[480px] bg-white p-3 rounded-3xl shadow-2xl transform rotate-6 translate-x-16 sm:translate-x-24 transition-transform duration-300 hover:scale-105 hover:rotate-3 z-10">
                  <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center">
                    <Image
                      src="/image2.png"
                      alt="Diverse group of students"
                      width={100}
                      height={100}
                      className="w-full rounded-lg m-7"
                    />
                  </div>
                </div>

                {/* Center Mockup (Front) */}
                <div className="relative w-64 sm:w-72 h-[480px] sm:h-[520px] bg-white p-4 rounded-3xl shadow-2xl transform transition-transform duration-300 hover:scale-105 z-20">
                  <div className="w-full h-full bg-gray-100 rounded-2xl flex items-center justify-center">
                    <Image
                      src="/image3.png"
                      alt="Diverse group of students"
                      width={100}
                      height={100}
                      className="w-full rounded-lg m-7"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto mb-12 text-left">
            <div className="p-4 bg-white rounded-lg">
              <div className="flex gap-7">
                <div>
                  <div className="w-12 h-12 bg-blue-500 rounded-md mb-4 mt-4">
                    <div className="flex justify-center items-center">
                      <Image
                        src="/icon14.png"
                        alt="Rising Graph"
                        width={30}
                        height={30}
                        className="mt-2.5"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">
                    AI Chat Support
                  </h4>
                  <p className="text-[#4B5563]">
                    Get instant support and guidance 24/7
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <div className="flex gap-7">
                <div>
                  <div className="w-12 h-12 bg-yellow-300 rounded-md mb-4 mt-4">
                    <div className="flex justify-center items-center">
                      <Image
                        src="/icon15.png"
                        alt="Rising Graph"
                        width={30}
                        height={30}
                        className="mt-2.5"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">
                    Peer Support Forum
                  </h4>
                  <p className="text-[#4B5563]">
                    Connect with others on similar journeys
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <div className="flex gap-7">
                <div>
                  <div className="w-12 h-12 bg-green-500 rounded-md mb-4 mt-4">
                    <div className="flex justify-center items-center">
                      <Image
                        src="/icon16.png"
                        alt="Rising Graph"
                        width={30}
                        height={30}
                        className="mt-2.5"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">
                    Confidential Booking
                  </h4>
                  <p className="text-[#4B5563]">
                    Schedule sessions with certified counsellors
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <div className="flex gap-7">
                <div>
                  <div className="w-12 h-12 bg-red-600 rounded-md mb-4 mt-4">
                    <div className="flex justify-center items-center">
                      <Image
                        src="/icon17.png"
                        alt="Rising Graph"
                        width={30}
                        height={30}
                        className="mt-2.5"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">
                    Progress Tracking
                  </h4>
                  <p className="text-[#4B5563]">
                    Monitor your wellness journey over time
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <div className="flex gap-7">
                <div>
                  <div className="w-12 h-12 bg-purple-500 rounded-md mb-4 mt-4">
                    <div className="flex justify-center items-center">
                      <Image
                        src="/icon18.png"
                        alt="Rising Graph"
                        width={30}
                        height={30}
                        className="mt-2.5"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">
                    Relaxation Sessions
                  </h4>
                  <p className="text-[#4B5563]">
                    Music, meditation & guided breathing
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <div className="flex gap-7">
                <div>
                  <div className="w-12 h-12 bg-amber-500 rounded-md mb-4 mt-4">
                    <div className="flex justify-center items-center">
                      <Image
                        src="/icon9.png"
                        alt="Rising Graph"
                        width={30}
                        height={30}
                        className="mt-2.5"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">
                    Security & Privacy
                  </h4>
                  <p className="text-[#4B5563]">
                    Your data remains safe with your organisation
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            href="#"
            className="inline-block bg-[#1565C0] text-white py-3 px-7 rounded-md font-semibold hover:bg-blue-700 transition-colors min-w-xl">
            <div className="flex gap-7 items-center justify-center">
              <div>
                <Image
                  src="/btn-img-1.png"
                  alt="Rising Graph"
                  width={20}
                  height={20}
                  className=""
                />
              </div>
              <div>Explore The App</div>
            </div>
          </a>
        </section>

        {/* ready to begin your journey section */}
        <section>
          <div className="bg-[#1565C0] py-16 px-[5%] text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-md mb-8 text-white">
              Join thousands of students who have found support, understanding,
              and hope through Nivaan.
            </p>
            <a
              href="#"
              className="inline-block bg-white text-[#1565C0] py-3 px-7 rounded-3xl font-semibold mr-4 hover:bg-gray-100 transition-colors">
              Start Free Today
            </a>
            <a
              href="#"
              className="inline-block border border-white py-3 px-7 rounded-3xl hover:bg-white hover:text-[#1565C0] transition-colors text-white">
              Schedule a Demo
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
