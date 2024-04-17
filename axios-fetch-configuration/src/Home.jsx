import Feed from './Feed';
import { useContext } from 'react';
import DataContext from "./contexts/DataContext";



const Home = ({posts ,isLoading, fetcherror }) => {

    const {searchResult, } = (useContext);
    return (
        <main className="Home">
            {isLoading && <p className ="statusMsg">Loading Posts...</p>}
            {!isLoading && fetcherror && <p className='statusMsg' style={{color: "red"}}>{fetcherror}</p>}
            {!isLoading && !fetcherror && (posts.length ? <Feed posts={posts}/> : <p className='statusMsg'>No posts to</p>)}
        </main>
    )
}

export default Home