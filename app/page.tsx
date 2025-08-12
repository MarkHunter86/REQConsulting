import Link from "next/link"
import { ArrowRight, CheckCircle, Users, TrendingUp, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-emerald-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Strategic Solutions for
                <span className="text-emerald-400"> Business Growth</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform your business with expert consulting services. We deliver results-driven strategies that
                accelerate growth and optimize performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ContactForm>
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </ContactForm>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-navy-900 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Business consulting"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">500+</div>
              <div className="text-navy-700">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">98%</div>
              <div className="text-navy-700">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">15+</div>
              <div className="text-navy-700">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">200+</div>
              <div className="text-navy-700">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive consulting solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <TrendingUp className="h-12 w-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Strategy Consulting</h3>
                <p className="text-gray-600 mb-4">
                  Develop winning strategies that drive sustainable growth and competitive advantage.
                </p>
                <Link href="/services" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Users className="h-12 w-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Organizational Development</h3>
                <p className="text-gray-600 mb-4">
                  Transform your organization's culture, structure, and capabilities for peak performance.
                </p>
                <Link href="/services" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  Learn More →
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-emerald-600 mb-4" />
                <h3 className="text-xl font-semibold text-navy-900 mb-3">Process Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Streamline operations and eliminate inefficiencies to maximize productivity and ROI.
                </p>
                <Link href="/services" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">Why Choose REQ Consulting?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy-900">Proven Expertise</h3>
                    <p className="text-gray-600">15+ years of experience across diverse industries</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy-900">Tailored Solutions</h3>
                    <p className="text-gray-600">Customized strategies that fit your unique business needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy-900">Measurable Results</h3>
                    <p className="text-gray-600">Data-driven approach with clear ROI and performance metrics</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy-900">Long-term Partnership</h3>
                    <p className="text-gray-600">Ongoing support to ensure sustainable success</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="/placeholder.svg?height=400&width=500" alt="Business growth" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our strategic consulting services can drive your business forward.
          </p>
          <ContactForm>
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              Schedule a Consultation
            </Button>
          </ContactForm>
        </div>
      </section>
    </div>
  )
}
