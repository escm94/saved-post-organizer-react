import Navbar from "./components/Layout/Navbar";
import Folders from "./components/Folders/Folders";
import FoldersHeader from "./components/Folders/FoldersHeader";
import Posts from "./components/Posts/Posts";
import PostsHeader from "./components/Posts/PostsHeader";
import PostsFooter from "./components/Posts/PostsFooter";

function App() {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <main>
            <FoldersHeader />
            <Folders />
            <PostsHeader />
            <Posts />
            <PostsFooter />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
