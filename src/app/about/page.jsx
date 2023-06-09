import Navbar from "@/Components/Navbar";


const AboutPageContent = () => {
    return (
        <div>
            <Navbar/>
      <div className="mx-4 my-14 md:mx-10 lg:mx-14">
        <h1 className="text-2xl font-bold mb-4">About Us</h1>
        <p className="mb-4">
          Welcome to our e-commerce store! We are passionate about providing high-quality products and exceptional customer service.
        </p>
        <p className="mb-4">
          Our mission is to make your online shopping experience enjoyable and convenient. We offer a wide range of products, carefully selected to meet your needs and preferences.
        </p>
        <p className="mb-4">
          At our store, we value transparency and integrity. We strive to provide accurate product descriptions, fair pricing, and secure payment options.
        </p>
        <p className="mb-4">
          Our dedicated team is always ready to assist you with any inquiries or concerns. We aim to exceed your expectations and ensure your satisfaction with every purchase.
        </p>
        <p className="mb-4">
          Thank you for choosing us as your preferred online shopping destination. We appreciate your support and look forward to serving you.
        </p>
      </div>
    </div>
    );
  };
  
  export default AboutPageContent;
  