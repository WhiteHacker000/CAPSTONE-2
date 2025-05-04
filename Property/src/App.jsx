import React from 'react'
import './App.css'

function App() {
    return (
        <div className = 'App'>
            {/*Navbar*/}
            <nav className = 'navbar'>
                {/*App Name on Top Left*/}
                <div className = 'logo'>PropConnect</div>
                <ul className = 'navLinks'>
                    <li>Home</li>
                    <li>Properties</li>
                    <li>Agents</li>
                    <li>Contact</li>
                </ul>
            </nav>


            {/*Hero Section*/}
            <section className = 'hero'>
                <h1>Smarter Real Estate Decisions With PropConnect</h1>
                <p>Ai powered insights and trusted buyers,sellers, and agents</p>
            </section>


            {/*Search Bar*/}
            <section className = 'search'>
                <input type='text' placeholder='search Properties...' className = 'searchInput'/>
                <button className = 'serachButton'>Search</button>
            </section>


            {/*Featured Properties Section*/}
            <section className = 'featured'>
                <h2>Featured Properties</h2>
                <div className = 'propertyGrid'>
                    {/*Replave with dynamic data*/}
                    <div className = 'PropertyCard'>Property 1</div>
                    <div className = 'PropertyCard'>Property 2</div>
                    <div className = 'PropertyCard'>Property 3</div>
                </div>
            </section>


            {/*Testimonials Section*/}
            <section className = 'testimonials'>
                <h2>What Our User Says</h2>
                <blockquote>'Great insights and responsive agents!'</blockquote>
            </section>


            {/*Footer section*/}
            <footer className = 'footer'>
                <p>© 2025 PropConnect. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default App