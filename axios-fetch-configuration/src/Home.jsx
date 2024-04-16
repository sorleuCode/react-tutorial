import Feed from './Feed';
import { useContext } from 'react';
import DataContext from "./contexts/DataContext";

const Home = ({ posts, isLoading, fetcherror }) => {
    return (
        <main className="Home">
            {posts.length ? (
                <Feed posts={posts} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    No posts to display.
                </p>
            )}
        </main>
    )
}

export default Home