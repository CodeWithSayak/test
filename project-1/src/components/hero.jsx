
const Hero = () => {

    return <main className="container">
        <div className="hero">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>
                YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP WITH OUR 
                SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
                SHOES.
            </p>

            <div className="hero-btn">
                <button>Shop Now</button>
                <button>Category</button>
            </div>

            <div className="shopping">
                <p>
                   also available on 
                </p>


                <div className="brand-images">

                    <img src="/images/amazon.png" alt="amazon-logo"/>
                    <img src="/images/flipkart.png" alt="flipkart-logo"/>

                </div>
            </div>
        </div>
        <div className="hero-image">
            <img src="/images/shoe_image.png" alt="hero-image"/>
        </div>

    </main>

}

export default Hero;