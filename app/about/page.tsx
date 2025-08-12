import { Users, Target, Award, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-900 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About REQ Consulting</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Empowering businesses with strategic insights and innovative solutions for over 15 years
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                REQ Consulting was founded with a simple yet powerful mission: to help businesses unlock their full
                potential through strategic consulting and innovative solutions. Our team of experienced professionals
                brings together decades of expertise across various industries, enabling us to provide comprehensive
                guidance that drives real results.
              </p>
              <p className="text-gray-600 mb-4">
                We understand that every business faces unique challenges, which is why we take a personalized approach
                to consulting. From strategic planning and operational optimization to digital transformation and
                organizational development, we work closely with our clients to identify opportunities, overcome
                obstacles, and achieve sustainable growth.
              </p>
              <p className="text-gray-600">
                At REQ Consulting, we believe that success is not just about implementing solutions—it's about building
                lasting partnerships that evolve with your business needs. Our commitment to excellence, integrity, and
                innovation has made us a trusted advisor to organizations of all sizes, helping them navigate complex
                business landscapes and emerge stronger than ever.
              </p>
            </div>
            <div>
              <img src="/placeholder.svg?height=400&width=500" alt="Our team" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every project, delivering solutions that exceed expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Collaboration</h3>
                <p className="text-gray-600">
                  We believe in the power of partnership and work closely with our clients.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Integrity</h3>
                <p className="text-gray-600">
                  Honesty and transparency form the foundation of all our client relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Globe className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  We embrace new ideas and technologies to deliver cutting-edge solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the experts driving our success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Greg Ehlers"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-navy-900 mb-2">Greg Ehlers</h3>
                <p className="text-emerald-600 font-medium mb-3">Chief Executive Officer</p>
                <p className="text-gray-600 text-sm">
                  Seasoned executive with extensive experience in strategic leadership and business transformation
                  across multiple industries.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <img
                  src="/images/alex-pomponio.webp"
                  alt="Alex Pomponio"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-navy-900 mb-2">Alex Pomponio</h3>
                <p className="text-emerald-600 font-medium mb-3">Managing Member</p>
                <p className="text-gray-600 text-sm">
                  Strategic operations leader with extensive experience in business transformation and process
                  optimization across multiple industries.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <img
                  src="/images/jackie-harrison.webp"
                  alt="Jackie Harrison"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-navy-900 mb-2">Jackie Harrison</h3>
                <p className="text-emerald-600 font-medium mb-3">Chief Technology Officer</p>
                <p className="text-gray-600 text-sm">
                  Technology strategist and innovation leader with deep expertise in digital transformation and emerging
                  technologies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-emerald-100 max-w-4xl mx-auto">
            To empower businesses with strategic insights, innovative solutions, and expert guidance that drive
            sustainable growth, operational excellence, and competitive advantage in today's dynamic marketplace.
          </p>
        </div>
      </section>
    </div>
  )
}
