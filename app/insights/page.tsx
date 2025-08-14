import { Calendar, User, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function InsightsPage() {
  const insights = [
    {
      title: "The Future of Digital Transformation in 2024",
      excerpt:
        "Explore the latest trends and technologies shaping digital transformation strategies across industries.",
      author: "Sarah Johnson",
      date: "December 15, 2024",
      category: "Digital Strategy",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Building Resilient Organizations in Uncertain Times",
      excerpt: "Learn how to create organizational resilience and adaptability in the face of market volatility.",
      author: "Michael Chen",
      date: "December 10, 2024",
      category: "Organizational Development",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Data-Driven Decision Making: A Strategic Imperative",
      excerpt:
        "Discover how leading companies are leveraging data analytics to drive strategic decisions and competitive advantage.",
      author: "Emily Rodriguez",
      date: "December 5, 2024",
      category: "Analytics",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Sustainable Business Practices: Beyond Compliance",
      excerpt: "How sustainability initiatives can drive innovation, reduce costs, and create long-term value.",
      author: "David Park",
      date: "November 28, 2024",
      category: "Sustainability",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "The Art of Change Management in Modern Organizations",
      excerpt: "Proven strategies for leading successful organizational change and transformation initiatives.",
      author: "Lisa Thompson",
      date: "November 20, 2024",
      category: "Change Management",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "AI and Automation: Transforming Business Operations",
      excerpt:
        "Understanding the impact of artificial intelligence and automation on business processes and workforce.",
      author: "Robert Kim",
      date: "November 15, 2024",
      category: "Technology",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-900 to-emerald-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Insights & Thought Leadership</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead with our latest insights on business strategy, industry trends, and best practices
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">Featured Article</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/insights-key.png"
                alt="Hands holding golden key above digital documents with data visualizations - unlocking business insights"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <div className="mb-4">
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                  Digital Strategy
                </span>
              </div>
              <h2 className="text-3xl font-bold text-navy-900 mb-4">The Future of Digital Transformation in 2024</h2>
              <p className="text-gray-600 mb-6">
                As we move into 2024, digital transformation continues to evolve at an unprecedented pace. Organizations
                that embrace emerging technologies and adapt their strategies will gain significant competitive
                advantages. This comprehensive analysis explores the key trends, challenges, and opportunities that will
                shape digital transformation initiatives.
              </p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <User className="h-4 w-4 mr-2" />
                <span className="mr-4">Sarah Johnson</span>
                <Calendar className="h-4 w-4 mr-2" />
                <span>December 15, 2024</span>
              </div>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Latest Insights</h2>
            <p className="text-xl text-gray-600">Expert perspectives on business strategy and industry trends</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.slice(1).map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{article.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{article.date}</span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white bg-transparent"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Informed</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest insights delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-8">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
