

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

        </div>
    );
}

export default HomePage;