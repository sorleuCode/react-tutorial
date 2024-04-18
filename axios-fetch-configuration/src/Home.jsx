import Feed from './Feed';
import { useContext } from 'react';
import DataContext from "./contexts/DataContext";



const Home = () => {

    const {searchResults ,isLoading, fetcherror } = useContext(DataContext)
    return (
        <main className="Home">
            {isLoading && <p className ="statusMsg">Loading Posts...</p>}
            {!isLoading && fetcherror && <p className='statusMsg' style={{color: "red"}}>{fetcherror}</p>}
            {!isLoading && !fetcherror && (searchResults.length ? <Feed posts={searchResults}/> : <p className='statusMsg'>No posts to display</p>)}
        </main>
    )
}

export default Home