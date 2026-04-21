import NewsContent from "@/sections/NewsContent";
import NewsBanner from "@/sections/NewsBanner";

const page = () => {
  return (
    <section id="newsPage" className="mt-20 mb-40">
      <NewsBanner />
      <main className="px-6 md:px-20 lg:px-25 max-w-360 mx-auto">
        <NewsContent />
      </main>
    </section>
  );
};

export default page;
