
import * as React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Calendar, MessageSquare, Link as LinkIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

const ArticleDetail = () => {
  const { slug } = useParams();
  
  // Article content
  const article = {
    title: "How to Automate Your E-commerce Customer Support (Without Sacrificing the Customer Experience)",
    date: "May 5, 2025",
    author: "Whatflows Team",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1470&auto=format&fit=crop",
    readTime: "8 min read",
    content: [
      {
        type: "paragraph",
        text: "Customer support is often one of the most time-consuming aspects of running an online store. Replying to emails, tracking orders, handling returns, and calming down frustrated customers—these tasks can quickly take over your day, especially as your business grows."
      },
      {
        type: "paragraph",
        text: "Fortunately, there are now several ways to automate or delegate this part of your business without hurting your customer experience. Whether you're just starting out or already hitting six figures in sales, here's an overview of the most effective options."
      },
      {
        type: "heading",
        text: "1. Delegate to a friend or family member"
      },
      {
        type: "paragraph",
        text: "This is often the first step: you ask a sibling, partner, or parent to help out. They check your inbox, look up orders on Shopify, and answer basic inquiries."
      },
      {
        type: "list",
        items: [
          { title: "✅ Pros:", items: ["Maximum trust", "Little to no cost"] },
          { title: "❌ Cons:", items: ["Requires some training", "Not always available", "Doesn't scale well as your business grows"] }
        ]
      },
      {
        type: "heading",
        text: "2. Hire a freelancer (Fiverr, Upwork…)"
      },
      {
        type: "paragraph",
        text: "On platforms like Fiverr or Upwork, you'll find freelancers who specialize in e-commerce customer service. Many are multilingual, know their way around Shopify or WooCommerce, and can respond to your customers as if they were part of your team."
      },
      {
        type: "list",
        items: [
          { title: "✅ Pros:", items: ["Flexible and on-demand", "No long-term contracts", "Wide variety of profiles (English, French, Spanish…)"] },
          { title: "❌ Cons:", items: ["Quality can vary", "You need to invest time onboarding them", "Hard to manage with 100+ emails a day"] }
        ]
      },
      {
        type: "heading",
        text: "3. Work with an agency specialized in e-commerce support"
      },
      {
        type: "paragraph",
        text: "If your store is growing fast, there are agencies that can handle 100% of your customer support. They create workflows, knowledge bases, train agents, and manage your emails, chats, and even phone calls."
      },
      {
        type: "list",
        items: [
          { title: "✅ Pros:", items: ["Fully outsourced", "Professional follow-up, reporting, SLA", "Multilingual agents"] },
          { title: "❌ Cons:", items: ["Higher cost (often starting from €800–1500/month)", "Less control over message tone and quality"] }
        ]
      },
      {
        type: "heading",
        text: "4. Automate with an AI tool like Whatflows"
      },
      {
        type: "paragraph",
        text: "If you're looking for a fast, scalable, and affordable solution, AI is now the most efficient way to automate your customer support without compromising the experience."
      },
      {
        type: "paragraph",
        text: "🚀 That's exactly what Whatflows offers: An AI that connects to your Gmail and Shopify store, analyzes each incoming email, and generates a personalized response in seconds."
      },
      {
        type: "paragraph",
        text: "Here are typical examples of requests handled automatically:"
      },
      {
        type: "list",
        items: [
          { title: "", items: [
            "\"Where is my order?\"",
            "\"I'd like a refund\"",
            "\"My package arrived damaged\"",
            "\"I want to change my shipping address\""
          ]}
        ]
      },
      {
        type: "paragraph",
        text: "Whatflows retrieves real-time order information, and crafts a reply using the customer's name, product details, and a natural tone — ready to send or review with one click."
      },
      {
        type: "list",
        items: [
          { title: "✅ Pros:", items: ["Handles up to 90% of customer emails automatically", "Saves you 3 to 5 hours per day", "Keeps a great customer experience", "14-day free trial, no credit card required"] },
          { title: "❌ Cons:", items: ["Requires a short initial setup (guided)", "Best suited for stores with daily support volume"] }
        ]
      },
      {
        type: "heading",
        text: "Conclusion: Choose the solution that fits your stage of growth"
      },
      {
        type: "paragraph",
        text: "Automating or outsourcing your customer support doesn't mean abandoning your customers — it means serving them faster, better, and more consistently."
      },
      {
        type: "list",
        items: [
          { title: "", items: [
            "If you're just starting: a family member can help.",
            "If you have a little budget: try a freelancer.",
            "If you're getting dozens of tickets per day: think about hiring an agency or using Whatflows."
          ]}
        ]
      },
      {
        type: "paragraph",
        text: "🎯 Our recommendation: if your customers mostly contact you by email (Gmail) with questions related to their Shopify orders, try Whatflows free for 14 days and see the difference in just a few hours."
      }
    ],
    tags: ["e-commerce", "customer support", "automation", "AI", "whatflows"],
    relatedArticles: [
      {
        title: "5 Ways to Reduce Support Tickets by 80%",
        slug: "reduce-support-tickets"
      },
      {
        title: "Multichannel Support: Best Practices for E-Commerce",
        slug: "multichannel-support-best-practices"
      }
    ]
  };

  // Render the article content
  const renderContent = (content: any[]) => {
    return content.map((item, index) => {
      switch (item.type) {
        case "heading":
          return <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-zinc-800">{item.text}</h2>;
        case "paragraph":
          return <p key={index} className="mb-6 text-zinc-700 leading-relaxed">{item.text}</p>;
        case "list":
          return (
            <div key={index} className="mb-6">
              {item.items.map((listItem: any, listIndex: number) => (
                <div key={listIndex} className="mb-4">
                  {listItem.title && <p className="font-semibold mb-2">{listItem.title}</p>}
                  <ul className="list-disc pl-6 space-y-2">
                    {listItem.items.map((point: string, pointIndex: number) => (
                      <li key={pointIndex} className="text-zinc-700">{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>{article.title} | Whatflows</title>
        <meta name="description" content="Learn about various methods to automate your e-commerce customer support without sacrificing the quality of customer experience. From family help to AI solutions." />
        <meta name="keywords" content="e-commerce, customer support, automation, AI support, Whatflows, Shopify support" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content="Learn about various methods to automate your e-commerce customer support without sacrificing the quality of customer experience." />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content="Learn about various methods to automate your e-commerce customer support without sacrificing the quality of customer experience." />
        <meta name="twitter:image" content={article.image} />
      </Helmet>
      
      <div className="max-w-screen-xl mx-auto px-6 py-8 w-full">
        <Navbar />
        
        <div className="mt-8 mb-20 max-w-4xl mx-auto">
          <Link to="/articles" className="flex items-center gap-2 text-emerald-500 mb-8 hover:text-emerald-600 transition-colors">
            <ArrowLeft size={16} />
            <span>Back to Articles</span>
          </Link>
          
          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-800 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap gap-4 items-center text-sm text-zinc-500 mb-8">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare size={16} />
                <span>{article.readTime}</span>
              </div>
            </div>
          </header>
          
          {/* Featured Image */}
          <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-xl mb-10">
            <img 
              src={article.image} 
              alt={article.title} 
              className="h-full w-full object-cover"
            />
          </div>
          
          {/* Article Content */}
          <div className="prose max-w-none">
            {renderContent(article.content)}
          </div>
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-zinc-100">
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-zinc-100 text-zinc-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-12 mb-16 p-8 bg-emerald-50 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-zinc-800">Ready to automate your customer support?</h3>
            <p className="mb-6 text-zinc-700">
              Start saving hours every day with Whatflows' AI-powered customer support automation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-emerald-500 hover:bg-emerald-600">
                Try Whatflows Free
              </Button>
              <Button variant="outline" className="border-emerald-500 text-emerald-500 hover:bg-emerald-50">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-zinc-100">
            <h3 className="text-xl font-bold mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {article.relatedArticles.map((relatedArticle, index) => (
                <div key={index} className="p-6 border border-zinc-100 rounded-xl hover:shadow-md transition-all">
                  <h4 className="text-lg font-semibold mb-4">{relatedArticle.title}</h4>
                  <Link 
                    to={`/articles/${relatedArticle.slug}`}
                    className="flex items-center gap-1 text-emerald-500 hover:text-emerald-600 transition-colors"
                  >
                    Read article
                    <ArrowLeft size={16} className="rotate-180" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default ArticleDetail;
