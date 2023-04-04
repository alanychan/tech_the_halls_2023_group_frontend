

function CreateHeroForm() {
    return (
        <div className="form-container">
            <form >
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        // onChange={handleChange}
                        placeholder="Enter first name and last name"
                    />
                </div>
                <div>
                    <label htmlFor="bio-pic">Email:</label>
                    <input
                        type="email"
                        id="email"
                        // onChange={handleChange}
                        placeholder="youremail@email.com"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        // onChange={handleChange}
                        placeholder="Password"
                    />
                </div>
                <button type="submit" className="btn">
                    Create Profile!
                </button>
            </form>
        </div>
    );
}

export default CreateHeroForm;