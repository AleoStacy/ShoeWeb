import React from 'react';

const links = [
  { name: 'Email Us', href: '#' },
  { name: 'WhatsApp', href: '#' },
  { name: 'Instagram', href: '#' },
  { name: 'Phone', href: '#' },
];

const stats = [
  { 
    name: '', 
    value: '', 
    image: 'https://images.seeklogo.com/logo-png/16/2/adidas-logo-png_seeklogo-168370.png?v=638653746710000000'
  },
  { 
    name: '', 
    value: '', 
    image: 'https://images.seeklogo.com/logo-png/9/2/nike-logo-png_seeklogo-99478.png?v=638653746480000000'
  },
  { 
    name: '', 
    value: '',
    image: 'https://images.seeklogo.com/logo-png/25/2/vans-logo-png_seeklogo-257446.png?v=638658857610000000' 
  },
  { 
    name: '', 
    value: '', 
    image: 'https://seeklogo.com/images/P/puma-logo-9869295F1B-seeklogo.com.png'
  }
];

const features = [
  {
    title: 'Free returns',
    description: 'Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.',
  },
  {
    title: 'Same day delivery',
    description: 'We offer a delivery service that has never been done before. Checkout today and receive your products within hours.',
  },
  {
    title: 'All year discount',
    description: 'Looking for a deal? You can use the code "SHOENIE" at checkout and get money off all year round.',
  },
  {
    title: 'For the planet',
    description: 'We’ve pledged 1% of sales to the preservation and restoration of the natural environment.',
  },
];

// Add customer reviews 
const reviews = [
  { name: 'Stacy', rating: 5, feedback: 'Excellent quality and fast delivery!' },
  { name: 'Emmanuel', rating: 4, feedback: 'Good service, but the packaging could be better.' },
  { name: 'Maxwell', rating: 3, feedback: 'Decent product, but not as expected.' },
  { name: 'Briana', rating: 5, feedback: 'Perfect! I absolutely love these shoes!' },
];

//render stars based on rating
const renderStars = (rating) => {
  return (
    <>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < rating ? "text-yellow-400" : "text-gray-500"}>
          ★
        </span>
      ))}
    </>
  );
};

function About() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        alt=""
        src="https://media.istockphoto.com/id/1382165882/photo/white-sport-sneaker-on-a-gray-gradient-background-woman-and-mens-fashion-sport-shoe-sneakers.jpg?s=612x612&w=0&k=20&c=EId0TBin1-dEKKqZrFCJ-maKMbdOaFIwh3fQPh-CFaQ="
        className="absolute inset-0 -z-20 h-full w-full object-cover object-right md:object-center"
      />
      {/* Translucent Overlay */}
      <div className="absolute inset-0 -z-10 #0f172a opacity-50"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Shop from Us</h2>
          <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl/8">
            Welcome to ShoeNiverse – your ultimate destination for quality footwear! We specialize in offering a curated selection of stylish, comfortable, and affordable shoes for every occasion. Whether you're looking for trendy sneakers, classic dress shoes, or everyday wear, our collection has something for everyone. Discover top-notch designs, fast delivery, and a seamless shopping experience at ShoeNiverse, where your perfect pair awaits!
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1 items-center">
                <img 
                  src={stat.image} 
                  alt={stat.name} 
                  className="w-20 h-20 object-contain rounded-lg mb-4"
                />
                <dt className="text-base text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>

          {/* New feature section */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Customer Reviews Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-semibold text-white">Customer Reviews</h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-8">
              {reviews.map((review, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-white">{review.name}</h4>
                  <p className="mt-2 text-gray-300">{review.feedback}</p>
                  <div className="mt-2">{renderStars(review.rating)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;