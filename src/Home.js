
import Bloglist from "./bloglist";
import useFetch from "./usefetch"

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:7000/blogs')
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <Bloglist blogs={blogs} title="All Blogs!"/>}
        </div>
     );
}
 
export default Home;