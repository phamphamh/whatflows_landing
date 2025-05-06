
import * as React from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, excerpt, date, image, slug }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 transition-all hover:shadow-md h-full">
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy" // Améliorer les performances de page
        />
      </div>
      
      <div className="flex flex-col gap-3 p-6 flex-grow">
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <Calendar size={16} />
          <span>{date}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-zinc-800 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-zinc-600 line-clamp-3 flex-grow">
          {excerpt}
        </p>
        
        <Link 
          to={`/articles/${slug}`}
          className="mt-4 inline-flex items-center font-medium text-emerald-500 hover:text-emerald-600 transition-colors"
          aria-label={`Read more about ${title}`}
        >
          Read more
          <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
