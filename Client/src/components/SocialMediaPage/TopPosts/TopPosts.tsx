import { useTranslation } from "react-i18next";
import { FaHeart, FaShare } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function TopPosts({ FetchPostsTEData }) {
  const { t } = useTranslation();

  return (
    <div className=" rounded-xl shadow-sm">
      <h1 className="text-lg lg:text-2xl font-bold my-4 text-[--text-color]">
        {t("topPerformingPosts")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {FetchPostsTEData?.map((post, i) => (
          <Link
            key={i}
            className="relative group"
            target="_blank"
            to={`${post.account_url}`}
          >
            <img
              src={post.screenshot}
              alt={`Top post ${post.id}`}
              loading="lazy"
              className="w-full h-72 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center">
              <div className="text-white space-y-2">
                <div className="flex items-center gap-2">
                  <FaHeart size={16} /> <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMessage size={16} /> <span>{post.comments}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaShare size={16} /> <span>{post.shares}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IoPersonSharp size={16} /> <span>{post.username}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
