import './HomePage.css';

// Components
import ProfileCard from "../components/ProfileCard/ProfileCard";

function HomePage() {
    //state
    // const [projectList, setProjectList] = useState([]);

    // Effects
    // useEffect(() => {
    //     fetch(`${import.meta.env.VITE_API_URL}projects`)
    //         .then((results) => {
    //             return results.json();
    //         })
    //         .then((data) => {
    //             setProjectList(data);
    //         });
    // }, []);

    return (
        <div className="page-container">
            <h1>Home Page</h1>
            <p>Be the change you want to see.</p>
            <div className="hero-section">
                <p>HERO SECTION</p>
            </div>
            <div className="stats-section">
                <div className="stats">
                    <h3>Stat 1</h3>
                    <p>Interesting stat</p>
                </div>
                <div className="stats">
                    <h3>Stat 2</h3>
                    <p>Interesting different stat</p>
                </div>
                <div className="stats">
                    <h3>Stat 3</h3>
                    <p>Mindblowing stat</p>
                </div>
            </div>
            <div className="profiles-shuffle-board">
                <p>This is the profiles grid section</p>
            </div>

        </div>
    );
}

export default HomePage;