import { Monitor, Camera, Printer, Network, Droplet, ArrowRight, CheckCircle } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const services = [
    {
      icon: Monitor,
      title: 'Desktop & Laptop Repair',
      description: 'Expert repair services for all brands of computers and laptops',
    },
    {
      icon: Camera,
      title: 'CCTV Installation',
      description: 'Professional CCTV setup and maintenance for homes and businesses',
    },
    {
      icon: Printer,
      title: 'Printer Repair',
      description: 'Fast and reliable printer repair and maintenance services',
    },
    {
      icon: Network,
      title: 'Networking Solutions',
      description: 'Complete networking setup and troubleshooting services',
    },
    {
      icon: Droplet,
      title: 'Cartridge Refilling',
      description: 'Quality cartridge refilling services for all printer models',
    },
  ];

  const brands = [
    'Dell', 'HP', 'ASUS', 'Acer', 'Lenovo', 'Gigabyte',
    'Dahua', 'Hikvision', 'LG', 'AMD', 'Intel', 'Canon'
  ];

  const features = [
    'Experienced Technicians',
    'Quick Turnaround Time',
    'Affordable Pricing',
    'Quality Service Guarantee',
    'On-Site Support Available',
    'Genuine Parts & Components',
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-orange-50 via-cream-50 to-blue-50 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-900 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-orange-600">SK TECHNOLOGY</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-4">
              Your tech brother's
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Professional computer hardware repair, CCTV installation, and networking solutions in Domjur, Howrah
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="bg-white text-orange-600 border-2 border-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition-all duration-200 shadow-lg"
              >
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600">
              Your trusted local service provider for all tech needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-gradient-to-r from-orange-50 to-blue-50 p-4 rounded-lg"
              >
                <CheckCircle className="text-orange-600 flex-shrink-0" size={24} />
                <span className="text-gray-800 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive tech solutions for all your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-orange-600 font-semibold hover:text-orange-700 flex items-center space-x-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Brands We Support
            </h2>
            <p className="text-lg text-gray-600">
              Working with all major brands to serve you better
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-lg p-6 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <span className="text-lg font-bold text-gray-700">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-orange-600 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for expert tech solutions and friendly service
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
}
