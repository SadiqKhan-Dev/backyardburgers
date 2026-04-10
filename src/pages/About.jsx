import { Link } from 'react-router-dom';
import {
  ChefHat, User, Beef, Flame, Heart, Zap,
  PartyPopper, Users, ClipboardList, Laptop,
  Trophy, Star, Rocket, Gem, Calendar, Target,
  CircleUser
} from 'lucide-react';
import Footer from '../components/Footer';

function About() {
  const team = [
    {
      name: 'Chef Marcus Williams',
      role: 'Head Chef & Founder',
      icon: ChefHat,
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop&crop=face',
      bio: '20+ years of culinary experience specializing in flame-grilled perfection. Previously worked at Michelin-star restaurants across the country.',
      specialties: ['Grill Master', 'Recipe Development', 'Menu Innovation'],
    },
    {
      name: 'Sarah Chen',
      role: 'Operations Manager',
      icon: User,
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      bio: 'MBA graduate with 12 years in restaurant management. Ensuring every order is prepared with precision and delivered fresh to our customers.',
      specialties: ['Quality Control', 'Team Leadership', 'Customer Experience'],
    },
    {
      name: 'David Rodriguez',
      role: 'Master Grill Chef',
      icon: ChefHat,
      image: 'https://images.unsplash.com/photo-1583394293214-28ded15f546?w=400&h=400&fit=crop&crop=face',
      bio: 'The burger whisperer - crafting perfect patties since day one. Expert in temperature control and achieving that signature backyard flavor.',
      specialties: ['Perfect Burgers', 'Meat Selection', 'Flavor Profiles'],
    },
    {
      name: 'Emily Thompson',
      role: 'Customer Experience Lead',
      icon: User,
      image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=400&fit=crop&crop=face',
      bio: 'Making sure every customer leaves with a smile. Emily handles feedback, loyalty programs, and ensures our service exceeds expectations.',
      specialties: ['Customer Relations', 'Feedback Management', 'Loyalty Programs'],
    },
    {
      name: 'James Park',
      role: 'Pastry & Desserts Chef',
      icon: ChefHat,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Award-winning pastry chef with a passion for creating decadent desserts that perfectly complement our burger menu.',
      specialties: ['Desserts', 'Baking', 'Creative Plating'],
    },
    {
      name: 'Maria Santos',
      role: 'Kitchen Supervisor',
      icon: User,
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=face',
      bio: '15 years of kitchen management experience. Maria coordinates the kitchen team and ensures smooth operations during peak hours.',
      specialties: ['Kitchen Management', 'Food Safety', 'Team Coordination'],
    },
    {
      name: 'Alex Johnson',
      role: 'Sous Chef',
      icon: ChefHat,
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
      bio: 'Rising culinary talent with expertise in both traditional and modern cooking techniques. Alex brings creativity and precision to every dish.',
      specialties: ['Sides & Salads', 'Sauce Creation', 'Food Styling'],
    },
    {
      name: 'Lisa Chang',
      role: 'Marketing & Social Media',
      icon: User,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
      bio: 'Digital marketing expert who shares our backyard burger story with the world. Lisa manages our online presence and community engagement.',
      specialties: ['Social Media', 'Content Creation', 'Brand Management'],
    },
  ];

  const values = [
    {
      icon: Beef,
      title: 'Quality First',
      description: 'We source only the freshest, premium ingredients from local suppliers',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Flame,
      title: 'Flame-Grilled',
      description: 'Every burger is flame-grilled to order for that authentic backyard taste',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Each dish is crafted with passion and attention to detail',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Zap,
      title: 'Fast Service',
      description: 'Quick preparation without compromising on quality',
      color: 'from-yellow-500 to-yellow-600',
    },
  ];

  const milestones = [
    { year: '2020', event: 'Backyard Burgers founded', icon: PartyPopper },
    { year: '2021', event: 'Reached 1,000 happy customers', icon: Users },
    { year: '2022', event: 'Expanded menu to 40+ items', icon: ClipboardList },
    { year: '2023', event: 'Launched online ordering system', icon: Laptop },
    { year: '2024', event: '10,000+ orders completed', icon: Trophy },
    { year: '2025', event: 'Voted #1 Burger Spot in the city', icon: Star },
    { year: '2026', event: 'Continuing to serve excellence', icon: Rocket },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-accent-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full">
              <Beef className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-display">
            Our Story
          </h1>
          <p className="text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            From a small backyard grill to your favorite burger destination
          </p>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed opacity-90">
            What started as a passion for flame-grilled perfection has grown into a beloved local institution.
            At Backyard Burgers, we believe every meal should be an experience worth remembering.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <Gem className="w-4 h-4" />
              <span>Our Values</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-display">
              What Makes Us Special
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our commitment to excellence in every bite
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`bg-gradient-to-br ${value.color} w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 text-center font-display">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <Calendar className="w-4 h-4" />
              <span>Our Journey</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-display">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The milestones that shaped Backyard Burgers
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-accent-600"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
                        <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-2xl font-bold text-primary-600 dark:text-primary-500 mb-2 font-display">
                          {milestone.year}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 font-semibold">
                          {milestone.event}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="relative z-10 w-2/12 flex justify-center">
                      <div className="w-6 h-6 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                    </div>

                    <div className="w-5/12"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <ChefHat className="w-4 h-4" />
              <span>Our Team</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-display">
              Meet The Team
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The passionate people behind your favorite meals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => {
              const Icon = member.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  {/* Team Member Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-2">
                        <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-2 rounded-lg">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                            {member.name}
                          </h3>
                          <p className="text-xs text-primary-600 dark:text-primary-400 font-semibold">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Team Member Info */}
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    
                    {/* Specialties */}
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <p className="text-xs font-semibold text-gray-700 dark:text-gray-400 mb-2">
                        Specialties:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full font-medium"
                          >
                            {specialty}
                          </span>
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

      {/* Fun Facts */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <Target className="w-4 h-4" />
              <span>Fun Facts</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 font-display">
              Numbers That Tell Our Story
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Our impact in numbers
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-6xl font-bold mb-4">50K+</p>
              <p className="text-lg opacity-90">Burgers Served</p>
            </div>
            <div className="text-center">
              <p className="text-6xl font-bold mb-4">1,200+</p>
              <p className="text-lg opacity-90">Lbs of Beef Weekly</p>
            </div>
            <div className="text-center">
              <p className="text-6xl font-bold mb-4">98%</p>
              <p className="text-lg opacity-90">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-6xl font-bold mb-4">15 min</p>
              <p className="text-lg opacity-90">Average Prep Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-primary-500 to-accent-500 p-4 rounded-full">
              <Rocket className="w-12 h-12 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 font-display">
            Ready to Experience the Best?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Join thousands of happy customers who've made us their favorite burger spot
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/menu"
              className="btn-primary text-lg px-12 py-4"
            >
              Order Now
            </Link>
            <Link
              to="/orders"
              className="btn-outline text-lg px-12 py-4"
            >
              Track Your Order
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
