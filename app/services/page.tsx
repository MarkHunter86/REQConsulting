import { TrendingUp, Users, Cog, BarChart3, Lightbulb, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-900 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive consulting solutions designed to transform your business and drive sustainable growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle className="text-navy-900">Strategy Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Develop comprehensive business strategies that align with your vision and market opportunities.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Market Analysis & Competitive Intelligence</li>
                  <li>• Strategic Planning & Roadmapping</li>
                  <li>• Growth Strategy Development</li>
                  <li>• Merger & Acquisition Support</li>
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle className="text-navy-900">Organizational Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Transform your organization's culture, structure, and capabilities for peak performance.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Change Management</li>
                  <li>• Leadership Development</li>
                  <li>• Team Building & Culture</li>
                  <li>• Performance Management</li>
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Cog className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle className="text-navy-900">Process Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Streamline operations and eliminate inefficiencies to maximize productivity and ROI.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Business Process Reengineering</li>
                  <li>• Lean Six Sigma Implementation</li>
                  <li>• Workflow Automation</li>
                  <li>• Quality Management Systems</li>
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle className="text-navy-900">Data Analytics & Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Leverage data-driven insights to make informed decisions and identify growth opportunities.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Business Intelligence Solutions</li>
                  <li>• Predictive Analytics</li>
                  <li>• Performance Dashboards</li>
                  <li>• Data Strategy & Governance</li>
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle className="text-navy-900">Digital Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Navigate the digital landscape with comprehensive transformation strategies and implementation.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Technology Strategy & Planning</li>
                  <li>• Digital Platform Implementation</li>
                  <li>• Automation & AI Integration</li>
                  <li>• Digital Culture Development</li>
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Shield className="h-12 w-12 text-emerald-600 mb-4" />
                <CardTitle className="text-navy-900">Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Identify, assess, and mitigate business risks to protect your organization's future.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Risk Assessment & Analysis</li>
                  <li>• Compliance & Regulatory Support</li>
                  <li>• Business Continuity Planning</li>
                  <li>• Crisis Management</li>
                </ul>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600">A systematic approach to delivering exceptional results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">Discovery</h3>
              <p className="text-gray-600">
                We begin by understanding your business, challenges, and objectives through comprehensive analysis.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">Strategy</h3>
              <p className="text-gray-600">
                Develop tailored strategies and solutions based on industry best practices and your unique needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">Implementation</h3>
              <p className="text-gray-600">
                Execute the strategy with your team, providing guidance and support throughout the process.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">Optimization</h3>
              <p className="text-gray-600">
                Monitor results, measure performance, and continuously optimize for sustained success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business and drive growth.
          </p>
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}
