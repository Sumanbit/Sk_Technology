import { Monitor, Camera, Printer, Network, Droplet, Wrench, Shield, Clock, Award } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Monitor,
      title: 'Desktop & Laptop Repair',
      description: 'Complete repair and maintenance services for all brands of computers and laptops. We handle hardware issues, software troubleshooting, upgrades, and performance optimization.',
      features: [
        'Hardware diagnostics and repair',
        'Software installation and troubleshooting',
        'Data recovery services',
        'Performance upgrades (RAM, SSD, etc.)',
        'Virus and malware removal',
        'Screen replacement',
      ],
    },
    {
      icon: Camera,
      title: 'CCTV Repair & Installation',
      description: 'Professional CCTV camera installation and maintenance for residential and commercial properties. Ensure your property is secure with our expert surveillance solutions.',
      features: [
        'Complete CCTV system design',
        'HD and IP camera installation',
        'DVR/NVR setup and configuration',
        'Remote viewing setup',
        'System maintenance and repair',
        'Camera repositioning and upgrades',
      ],
    },
    {
      icon: Printer,
      title: 'Printer Repair',
      description: 'Fast and reliable printer repair services for all major brands. From paper jams to connectivity issues, we fix it all to keep your printing smooth.',
      features: [
        'All printer brands supported',
        'Ink system repair',
        'Paper feed mechanism fix',
        'Connection troubleshooting',
        'Print quality improvement',
        'Maintenance and cleaning',
      ],
    },
    {
      icon: Network,
      title: 'Networking Solutions',
      description: 'Complete networking setup and troubleshooting for homes and offices. Get reliable, fast internet connectivity throughout your space.',
      features: [
        'Router and switch installation',
        'WiFi network setup',
        'LAN cable wiring',
        'Network security configuration',
        'Speed optimization',
        'Troubleshooting and repairs',
      ],
    },
    {
      icon: Droplet,
      title: 'Cartridge Refilling',
      description: 'Quality ink cartridge refilling services for all printer models. Save money while maintaining excellent print quality with our refilling solutions.',
      features: [
        'All cartridge types supported',
        'Quality ink materials',
        'Quick turnaround time',
        'Cost-effective solution',
        'Print quality guaranteed',
        'Eco-friendly option',
      ],
    },
  ];

  const benefits = [
    {
      icon: Wrench,
      title: 'Expert Technicians',
      description: 'Certified professionals with years of experience',
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'All repairs backed by our service warranty',
    },
    {
      icon: Clock,
      title: 'Quick Service',
      description: 'Fast turnaround time on most repairs',
    },
    {
      icon: Award,
      title: 'Best Prices',
      description: 'Competitive rates with no hidden charges',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-orange-600 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive technology solutions for all your hardware, networking, and surveillance needs
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                    index % 2 === 0 ? '' : ''
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                    <div className="lg:col-span-1">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4">
                        <Icon className="text-white" size={40} />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h2>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <button
                        onClick={() => onNavigate('contact')}
                        className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200"
                      >
                        Book Service
                      </button>
                    </div>
                    <div className="lg:col-span-2">
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        What We Offer:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-start space-x-2"
                          >
                            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-900 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Any of These Services?
          </h2>
          <p className="text-xl mb-8">
            Get in touch with us today for a free consultation and quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Us
            </button>
            <a
              href="https://wa.me/916291235368"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors duration-200"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
