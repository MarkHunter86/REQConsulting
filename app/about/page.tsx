import { Users, Target, Award, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-900 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About REQ-Consulting</h1>
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
                Founded in 2009, REQ-Consulting emerged from a vision to bridge the gap between strategic thinking and
                practical implementation. Our founders, seasoned executives from Fortune 500 companies, recognized the
                need for consulting services that deliver tangible results.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we've evolved into a trusted partner for businesses across various industries, helping
                them navigate complex challenges and capitalize on emerging opportunities.
              </p>
              <p className="text-gray-600">
                Today, we continue to uphold our commitment to excellence, innovation, and client success, making us a
                preferred choice for strategic business consulting.
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
                  alt="CEO"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-navy-900 mb-2">Sarah Johnson</h3>
                <p className="text-emerald-600 font-medium mb-3">Chief Executive Officer</p>
                <p className="text-gray-600 text-sm">
                  20+ years in strategic consulting with expertise in digital transformation and organizational change.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="COO"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-navy-900 mb-2">Michael Chen</h3>
                <p className="text-emerald-600 font-medium mb-3">Chief Operating Officer</p>
                <p className="text-gray-600 text-sm">
                  Former McKinsey partner with deep expertise in operations optimization and process improvement.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="CTO"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-navy-900 mb-2">Emily Rodriguez</h3>
                <p className="text-emerald-600 font-medium mb-3">Chief Technology Officer</p>
                <p className="text-gray-600 text-sm">
                  Technology strategist with 15+ years helping organizations leverage digital solutions for growth.
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
            To empower businesses with strategic insights, innovative solutions, and actionable strategies that drive
            sustainable growth and create lasting competitive advantages in an ever-evolving marketplace.
          </p>
        </div>
      </section>
    </div>
  )
}
