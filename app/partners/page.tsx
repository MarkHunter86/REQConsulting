import { Handshake, Globe, Award, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-900 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Partners</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building strong partnerships to deliver exceptional value and comprehensive solutions
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Partnership Philosophy</h2>
              <p className="text-gray-600 mb-4">
                At REQ Consulting, we believe that strategic partnerships are essential to delivering comprehensive
                solutions that meet our clients' diverse needs. Our carefully selected partners share our commitment to
                excellence, innovation, and client success.
              </p>
              <p className="text-gray-600 mb-4">
                Through these collaborations, we extend our capabilities and provide access to specialized expertise,
                cutting-edge technologies, and global resources that enhance the value we deliver to our clients.
              </p>
              <p className="text-gray-600">
                Each partnership is built on mutual trust, shared values, and a common goal of driving business
                transformation and sustainable growth for our clients.
              </p>
            </div>
            <div>
              <img
                src="/images/partnership-key.png"
                alt="Hand offering golden key - symbolizing valuable partnerships and collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Partner Categories</h2>
            <p className="text-xl text-gray-600">Diverse partnerships across multiple domains</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Globe className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Technology Partners</h3>
                <p className="text-gray-600">
                  Leading technology providers offering cutting-edge solutions and platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Strategic Alliances</h3>
                <p className="text-gray-600">Consulting firms and service providers with complementary expertise.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Industry Specialists</h3>
                <p className="text-gray-600">Domain experts providing specialized knowledge and industry insights.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Handshake className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Implementation Partners</h3>
                <p className="text-gray-600">Trusted partners for solution deployment and ongoing support services.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Featured Partner</h2>
            <p className="text-xl text-gray-600">Trusted collaborator in delivering excellence</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="mb-6">
                <img
                  src="/images/patrice-associates-logo.png"
                  alt="Patrice & Associates"
                  className="h-24 mx-auto mb-4"
                />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Patrice & Associates</h3>
              <p className="text-lg text-gray-600 mb-6">
                Leading recruiting specialists based in East Boston, providing comprehensive talent acquisition
                solutions and workforce consulting services. Our partnership with Patrice & Associates enables us to
                deliver exceptional human capital strategies that align with our clients' organizational goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.patriceandassociates.com/east-boston-02141/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Visit Partner Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Partnership Benefits</h2>
            <p className="text-xl text-gray-600">How our partnerships create value for clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Enhanced Capabilities</h3>
                <p className="text-gray-600">
                  Access to specialized skills, technologies, and resources that complement our core consulting
                  services.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Accelerated Implementation</h3>
                <p className="text-gray-600">
                  Faster project delivery through proven methodologies and pre-integrated solutions from our partners.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Cost Optimization</h3>
                <p className="text-gray-600">
                  Competitive pricing and bundled solutions that provide better value for comprehensive projects.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Global Reach</h3>
                <p className="text-gray-600">
                  International presence and local expertise through our global partner network.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Innovation Access</h3>
                <p className="text-gray-600">
                  Early access to emerging technologies and innovative solutions from industry leaders.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Ongoing Support</h3>
                <p className="text-gray-600">
                  Comprehensive support ecosystem ensuring long-term success of implemented solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Become a Partner</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join our partner ecosystem and collaborate with us to deliver exceptional value to clients worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Partner Inquiry
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition-colors">
              Download Partner Guide
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
