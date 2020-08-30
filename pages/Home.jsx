
export function Home(){

    const path = "../assets/img/homePic.jpg"

    return <div className="home-page flex column align-center">
        <img src= {path} />
        <h1>Welcome to App<span>S</span>us</h1>
        <div className="subtitle-home flex"><p>Your Keep-Notes<span> & </span>Email Platform</p></div>
    </div>
}