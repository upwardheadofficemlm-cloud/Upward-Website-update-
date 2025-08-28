import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EditableText from '../../components/cms/EditableText';
import EditableImage from '../../components/cms/EditableImage';
import { MapPin, Eye, ArrowLeft, Calendar, Users, Target, TrendingUp, Phone, Mail, ExternalLink } from 'lucide-react';

const BillboardDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Billboard data - in a real app, this would come from an API or CMS
  const billboardData = {
    'BB001': {
      id: 'BB001',
      name: 'Strand Road Junction',
      traffic: '50,000+',
      type: 'Premium Billboard',
      size: '20ft x 10ft',
      description: 'High-traffic intersection with maximum visibility',
      longDescription: 'Located at the strategic intersection of Strand Road and Main Street, this premium billboard offers unparalleled visibility to thousands of commuters daily. Perfect for brands looking to make a strong impact in Mawlamyine\'s busiest commercial district.',
      image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Strand Road & Main Street Intersection',
      coordinates: '16.4904° N, 97.6283° E',
      demographics: 'Business professionals, shoppers, tourists',
      availability: 'Available for booking',
      price: '800,000 MMK/month',
      features: [
        'LED lighting for night visibility',
        'Weather-resistant construction',
        'Professional maintenance included',
        'Traffic analytics provided',
        'Design consultation available'
      ],
      specifications: {
        height: '20 feet',
        width: '10 feet',
        totalArea: '200 sq ft',
        viewingDistance: 'Up to 500 meters',
        illumination: 'LED backlighting',
        material: 'Premium vinyl with UV protection'
      }
    },
    'BB002': {
      id: 'BB002',
      name: 'Mawlamyine University Area',
      traffic: '30,000+',
      type: 'Student Zone Billboard',
      size: '15ft x 8ft',
      description: 'Perfect for targeting young demographics and families',
      longDescription: 'Strategically positioned near Mawlamyine University, this billboard targets students, faculty, and families in the educational district. Ideal for educational services, youth-oriented brands, and family-friendly products.',
      image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'University Road, Near Campus Entrance',
      coordinates: '16.4852° N, 97.6251° E',
      demographics: 'Students, faculty, families, young professionals',
      availability: 'Available for booking',
      price: '500,000 MMK/month',
      features: [
        'Student demographic targeting',
        'Educational district placement',
        'Family-friendly location',
        'Regular maintenance schedule',
        'Performance tracking'
      ],
      specifications: {
        height: '15 feet',
        width: '8 feet',
        totalArea: '120 sq ft',
        viewingDistance: 'Up to 300 meters',
        illumination: 'Natural lighting',
        material: 'High-quality vinyl'
      }
    },
    'BB003': {
      id: 'BB003',
      name: 'Central Market District',
      traffic: '40,000+',
      type: 'Commercial Billboard',
      size: '18ft x 9ft',
      description: 'Busy commercial area with diverse audience',
      longDescription: 'Located in the heart of Mawlamyine\'s commercial district, this billboard reaches a diverse audience of shoppers, business owners, and local residents. Perfect for retail brands and local businesses.',
      image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Central Market Square',
      coordinates: '16.4876° N, 97.6298° E',
      demographics: 'Shoppers, business owners, local residents',
      availability: 'Available for booking',
      price: '600,000 MMK/month',
      features: [
        'High foot traffic location',
        'Commercial district placement',
        'Diverse audience reach',
        'Local business friendly',
        'Shopping district visibility'
      ],
      specifications: {
        height: '18 feet',
        width: '9 feet',
        totalArea: '162 sq ft',
        viewingDistance: 'Up to 400 meters',
        illumination: 'LED spotlights',
        material: 'Commercial-grade vinyl'
      }
    },
    'BB004': {
      id: 'BB004',
      name: 'Thanlwin Bridge Approach',
      traffic: '60,000+',
      type: 'Highway Billboard',
      size: '25ft x 12ft',
      description: 'Major gateway to Mawlamyine with interstate traffic',
      longDescription: 'Positioned at the main gateway to Mawlamyine, this large-format billboard captures the attention of travelers entering the city. Perfect for regional brands and tourism-related advertising.',
      image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&w=600',
      location: 'Thanlwin Bridge Approach Road',
      coordinates: '16.4921° N, 97.6312° E',
      demographics: 'Travelers, tourists, regional commuters',
      availability: 'Available for booking',
      price: '1,200,000 MMK/month',
      features: [
        'Gateway location visibility',
        'Large format display',
        'Regional audience reach',
        'Tourism-focused placement',
        'High-speed traffic exposure'
      ],
      specifications: {
        height: '25 feet',
        width: '12 feet',
        totalArea: '300 sq ft',
        viewingDistance: 'Up to 800 meters',
        illumination: 'High-intensity LED lighting',
        material: 'Heavy-duty vinyl with weather protection'
      }
    }
  };

  const billboard = billboardData[id as keyof typeof billboardData];

  if (!billboard) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Billboard Not Found</h1>
          <p className="text-gray-600 mb-8">The billboard you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/billboards')}
            className="bg-[#004FED] text-white px-6 py-3 rounded-lg hover:bg-[#003dcc] transition-colors"
          >
            Back to Billboards
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate('/billboards')}
          className="flex items-center space-x-2 text-[#004FED] hover:text-[#003dcc] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to All Billboards</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#004FED]/5 via-white to-[#004FED]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-[#004FED]/10 text-[#004FED] rounded-full text-sm font-semibold mb-6">
                Billboard ID: {billboard.id}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
                {billboard.name}
              </h1>
              
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-[#004FED]" />
                  <span className="text-xl font-bold text-gray-900">{billboard.traffic} daily views</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-[#004FED]" />
                  <span className="text-lg text-gray-600">{billboard.type}</span>
                </div>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {billboard.longDescription}
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="bg-gradient-to-r from-[#004FED] to-[#0066FF] text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl hover:shadow-[#004FED]/30 transform hover:-translate-y-1 transition-all duration-300">
                  Book This Billboard
                </button>
                <button className="border-2 border-[#004FED] text-[#004FED] px-8 py-4 rounded-xl font-bold hover:bg-[#004FED] hover:text-white transition-all duration-300">
                  Get Quote
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={billboard.image}
                  alt={billboard.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full">
                <span className="text-[#004FED] font-bold">{billboard.size}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Details */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Billboard Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Location Information</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-600">Address:</span>
                      <p className="font-semibold">{billboard.location}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Coordinates:</span>
                      <p className="font-semibold">{billboard.coordinates}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Demographics:</span>
                      <p className="font-semibold">{billboard.demographics}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Specifications</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-600">Height:</span>
                      <p className="font-semibold">{billboard.specifications.height}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Width:</span>
                      <p className="font-semibold">{billboard.specifications.width}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Total Area:</span>
                      <p className="font-semibold">{billboard.specifications.totalArea}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Viewing Distance:</span>
                      <p className="font-semibold">{billboard.specifications.viewingDistance}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Features & Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {billboard.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#004FED] rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#004FED] to-[#0066FF] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Pricing</h3>
                <div className="text-4xl font-black mb-2">{billboard.price}</div>
                <p className="text-blue-100 mb-6">Professional design and installation included</p>
                <button className="w-full bg-white text-[#004FED] py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                  Book Now
                </button>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Availability</h3>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-600 font-semibold">{billboard.availability}</span>
                </div>
                <button className="w-full bg-[#004FED] text-white py-3 rounded-xl font-bold hover:bg-[#003dcc] transition-colors">
                  Check Availability
                </button>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Sales</h3>
                <div className="space-y-3">
                  <a href="tel:09740977946" className="flex items-center space-x-3 text-gray-600 hover:text-[#004FED] transition-colors">
                    <Phone className="w-5 h-5" />
                    <span>09740977946</span>
                  </a>
                  <a href="mailto:contact@upwardmm.com" className="flex items-center space-x-3 text-gray-600 hover:text-[#004FED] transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>contact@upwardmm.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BillboardDetailPage;
