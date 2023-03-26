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
            <p>Breaking Industry Barriers</p>
            <div className="hero-section">
                <p>HERO SECTION</p>
            </div>
            <div className="stats-section">
                <div className="stats">
                    <h3>Did you know?</h3>
                    <p className="stat-number">24%</p>
                    <p>Computing jobs in the world held by women</p>
                </div>
                <div className="stats">
                    <h3>The Slow Rise</h3>
                    <p className="stat-number">2%</p>
                    <p>Represents the global increase of female software engineers in the past 21 years</p>
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

// website with stats - https://www.baysidegroup.com.au/employers/women-in-ict-in-statistics-how-does-your-company-stack-up#:~:text=Only%2024%25%20of%20computing%20jobs,experience%20gender%20bias%20at%20work. 