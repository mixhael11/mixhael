import profileImage from '../assets/profile.jpg';

export default function Home() {
    return (
        <div style={{padding: '20px'}}>
            <h1>Welcome to My Portfolio</h1>
            <p>Hello! I'm Michael Angelo Masangkay, a passionate web developer. 
            </p>
            <img src={profileImage} alt="Profile" style={{width: '200px', borderRadius: '50%'}} />
            </div>
    )
  
}