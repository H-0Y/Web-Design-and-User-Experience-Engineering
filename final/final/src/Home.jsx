import logo from "./images/logo.jpg"
import './Home.css'
function Home({showModal, setShowModal}) {
    return (
        <div className='home'>
            <h2>Introdution to My Travel Stories</h2>
            <div className='home-panel'>
                <img
                    src={logo}
                    className="home-images"
                    alt="My animated portrait"
                />
                <div className='home-text'>
                    <p>
                        Hello, everyone! I'm Lingyun. I am a travel lover and this is a web about my travel stories.
                    </p>
                    <p>
                        My stories started from early 2019. At that time, I was a freshman in college, who felt confused about the future.
                        By chance, I came into cantact with the travel club in the university, where there were full of interesting people. And I started my travel from then.  
                    </p>
                    <p>
                        If you are interested about my travel stories, you could click the "Cards" and "Gallery" options in the navigation menu.
                        And you could also contact me by clicking <a className='home-link' href='/' onClick={(e) => { e.preventDefault();
                setShowModal(!showModal);}}>here </a>
                        to send me your e-mail address. I will contact you soon.
                    </p>
                    <p>
                        Thank you for visiting!!!
                    </p>
                </div>
           

            </div>
             
        </div>
    );
}

export default Home;