import { TextInput } from "@mantine/core";
import { AiOutlineSearch } from "react-icons/ai";
import BlogCard from "../../components/Blog/BlogCard";
// import BlogCard from "../../components/Blog/BlogCard";
import CategoryCard from "../../components/Blog/CategoryCard";
import { blogPost, comingSoon, tags, topPost } from "../../data/data";

const Tags = ({ item }) => {
  return (
    <button className="mt-3 px-7 py-1 border border-primary-green-50 rounded-[30px] hover:scale-105 transition-all duration-300">
      {item}
    </button>
  );
};

const Blog = () => {
  return (
    <div className="min-h-screen flex items-center">
      <div className="max-w-[1440px] mx-auto mt-40 p-4">
        <div className="my-6">
          <h1 className="text-primary-green-50 text-xl font-semibold">
            DAKEB FARMS
          </h1>
        </div>
        <div className="flex gap-20">
          <div className="max-w-[315px] w-full hidden md:block">
            <TextInput
              icon={<AiOutlineSearch />}
              placeholder="Search"
              radius="md"
            />
            <div className="mt-5 bg-primary-green-50/5 p-5 rounded-xl">
              <span className="text-primary-green-50 block font-semibold mb-5">
                Top Post
              </span>
              <div className="grid gap-6">
                {topPost.map((item, idx) => (
                  <CategoryCard {...{ item, idx }} key={idx} />
                ))}
              </div>
            </div>
            <div className="mt-10 bg-primary-green-50/5 p-5">
              <span className="text-primary-green-50 block font-semibold mb-5">
                Coming soon
              </span>
              <div className=" rounded-xl grid gap-6">
                {comingSoon.map((item, idx) => (
                  <CategoryCard {...{ item, idx }} key={idx} />
                ))}
              </div>
            </div>
            <div className="mt-10 bg-primary-green-50/5 p-5 rounded-xl">
              <span className="text-primary-green-50 block font-semibold mb-5">
                Tags
              </span>
              <div className=" flex flex-wrap gap-2">
                {tags.map((item, idx) => (
                  <Tags {...{ item }} key={idx} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap lg:grid grid-cols-2 gap-20 justify-center md:justify-between">
              {blogPost.map((item, idx) => (
                <BlogCard {...{ item }} key={idx} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-3 my-10">
          <span className="text-primary-dark-50">Prev</span>
          <span className="text-sm text-white bg-primary-green-50 h-[23px] w-[23px] rounded-full flex justify-center items-center">1</span>
          <span className="text-sm text-primary-dark-50">2</span>
          <span className="text-sm text-primary-dark-50">3</span>
          <span className="text-sm text-primary-dark-50">4</span>
          <span className="text-sm text-primary-dark-50">.</span>
          <span className="text-sm text-primary-dark-50">.</span>
          <span className="text-sm text-primary-dark-50">.</span>
          <span className="text-primary-green-50 font-medium">Next</span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
