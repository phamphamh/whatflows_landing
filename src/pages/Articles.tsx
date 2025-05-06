import * as React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

const Articles = () => {
  // Keep only the featured article
  const featuredArticle = {
    id: 1,
    title: "How to Automate Your E-commerce Customer Support (Without Sacrificing the Customer Experience)",
    excerpt: "Discover the most effective ways to automate your customer support process while maintaining excellent service quality.",
    date: "May 5, 2025",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1470&auto=format&fit=crop",
    slug: "automate-ecommerce-customer-support",
    readTime: "8 min read",
    author: "Whatflows Team"
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>Articles | Whatflows - Customer Support Automation Blog</title>
        <meta name="description" content="Explore insightful articles about customer support automation, AI in e-commerce support, and best practices for improving customer service." />
        <meta name="keywords" content="customer support blog, AI support, e-commerce service, whatflows articles, support automation" />
        <meta property="og:title" content="Customer Support Automation Blog | Whatflows" />
        <meta property="og:description" content="Discover the latest trends and best practices in customer support automation and e-commerce optimization." />
        <meta property="og:image" content={featuredArticle.image} />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="max-w-screen-xl mx-auto px-6 py-8 w-full">
        <Navbar />
        
        <div className="mt-16 mb-20">
          <h1 className="text-4xl font-bold mb-8 text-center">
            <span className="text-emerald-500">Insights</span> & Articles
          </h1>
          <p className="text-lg text-center text-zinc-700 max-w-2xl mx-auto mb-16">
            Discover the latest trends, tips and best practices in customer support automation and e-commerce optimization.
          </p>
          
          {/* Featured Article */}
          <div className="mb-16">
            <div className="flex flex-col lg:flex-row gap-8 bg-zinc-50 rounded-2xl overflow-hidden">
              <div className="lg:w-1/2 h-[300px] lg:h-auto relative">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title} 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <span className="text-emerald-500 font-medium mb-3">Featured Article</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-800">
                  {featuredArticle.title}
                </h2>
                <p className="text-zinc-600 mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-zinc-500 mb-6">
                  <span>{featuredArticle.date}</span>
                  <span>•</span>
                  <span>{featuredArticle.readTime}</span>
                </div>
                <Button 
                  className="w-fit bg-emerald-500 hover:bg-emerald-600"
                  onClick={() => window.location.href = `/articles/${featuredArticle.slug}`}
                >
                  Read Full Article
                </Button>
              </div>
            </div>
          </div>
          
          {/* Removed "Recent Articles" section and grid display of other articles */}
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Articles;
