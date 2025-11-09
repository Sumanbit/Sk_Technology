import { Users, Target, Award, Heart, MapPin, Clock } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const values = [
    {
      icon: Award,
      title: 'Quality Service',
      description: 'We are committed to delivering the highest quality of service using genuine parts and professional techniques.',
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We treat every customer like family and every device with care.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We understand how important your devices are. Fast turnaround times without compromising quality.',
    },
    {
      icon: Target,
      title: 'Expert Solutions',
      description: 'Years of experience and continuous learning keep us at the forefront of technology solutions.',
    },
  ];

  const stats = [
    { number: '1000+', label: 'Happy Customers' },
    { number: '5+', label: 'Years Experience' },
    { number: '10+', label: 'Service Areas' },
    { number: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-orange-600 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About SK TECHNOLOGY</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your trusted tech brother's - providing reliable technology solutions since day one
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Users className="text-white" size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
                  <p className="text-orange-600 font-medium">Your tech brother's</p>
                </div>
              </div>
              <div className="space-y-4 text-gray-700 text-lg">
                <p>
                  SK TECHNOLOGY was founded with a simple mission: to provide reliable, affordable, and professional technology solutions to our local community in Domjur, Howrah, and surrounding areas.
                </p>
                <p>
                  What started as a small repair shop has grown into a trusted name in computer hardware repair, CCTV installation, networking solutions, and printer services. We take pride in treating every customer like family and every device with the care it deserves.
                </p>
                <p>
                  Our team of experienced technicians stays updated with the latest technology trends and repair techniques to ensure we can handle any challenge that comes our way. Whether it's a simple laptop repair or a complex CCTV installation, we approach every job with the same level of dedication and professionalism.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Local & Trusted</h4>
                    <p className="text-gray-600">Serving Parbatipur, Domjur, Howrah and nearby areas with dedication</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Experienced Team</h4>
                    <p className="text-gray-600">Certified technicians with years of hands-on experience</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Affordable Rates</h4>
                    <p className="text-gray-600">Quality service at competitive prices with transparent billing</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">On-Site Support</h4>
                    <p className="text-gray-600">We come to you for installations and major repairs</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Genuine Parts</h4>
                    <p className="text-gray-600">Only authentic components for lasting repairs</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-900 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="text-orange-600" size={32} />
                  <h2 className="text-3xl font-bold text-gray-900">Service Area</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Based in Parbatipur, Domjur, Howrah, West Bengal, we proudly serve customers across Howrah district and neighboring areas. Our commitment to the local community drives us to provide the best possible service at your doorstep.
                </p>
                <p className="text-gray-700">
                  We offer on-site support for installations and major repairs, ensuring convenience and minimal disruption to your daily routine.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Coverage Areas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span>Parbatipur, Domjur</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span>Howrah District</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span>Surrounding Areas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span>On-Site Support Available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-orange-600 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Quality Service?
          </h2>
          <p className="text-xl mb-8">
            Join hundreds of satisfied customers who trust SK TECHNOLOGY for all their tech needs
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
