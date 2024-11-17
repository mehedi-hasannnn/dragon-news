
import { AiFillStar } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";

const NewsCard = ({ news }) => {
  const {
    
    rating,
    total_view,
    title,
    author,
    thumbnail_url,
    details,
  } = news;

  return (
    <div className="card w-full bg-base-100 shadow-xl mb-5">
      <figure className="w-full h-56 overflow-hidden">
        <img src={news.image_url} alt="News Thumbnail" className="h-60 w-full object-cover object-center" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">{title}</h2>
        <div className="flex items-center gap-2 text-gray-500">
          <img
            src={author.img}
            alt="Author"
            className="w-8 h-8 rounded-full object-cover"
          />
          <p className="text-sm">
            {author.name} - {new Date(author.published_date).toLocaleDateString()}
          </p>
        </div>
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">{details}</p>
        <div className="card-actions justify-between items-center mt-4">
          <div className="flex items-center gap-1 text-yellow-500">
            <AiFillStar className="text-lg" />
            <span className="font-semibold">{rating.number}</span>
            <span className="text-xs text-gray-400">{rating.badge}</span>
          </div>
          <div className="flex items-center gap-2">
            <BsFillEyeFill className="text-gray-400 text-lg" />
            <span className="text-sm text-gray-500">{total_view} views</span>
          </div>
        </div>
        <button className="btn btn-sm btn-primary mt-3">Read More</button>
      </div>
    </div>
  );
};

export default NewsCard;
