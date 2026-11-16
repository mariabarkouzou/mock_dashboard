export interface Article {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly actionLabel: string;
  readonly actionUrl: string;
  readonly publishedAt: string;
}

const articlesData: Omit<Article, 'image' | 'actionUrl' | 'publishedAt'>[] = [
  {
    id: '1',
    title: 'The Future of Artificial Intelligence',
    description:
      'Discover how artificial intelligence is transforming our everyday lives and reshaping the future of technology.',
    actionLabel: 'Start Reading',
  },
  {
    id: '2',
    title: '10 Tips for a Healthier Lifestyle',
    description:
      'Simple everyday habits that can help you improve your physical and mental well-being.',
    actionLabel: 'Explore Tips',
  },
  {
    id: '3',
    title: 'Explore the Beauty of Greece',
    description:
      'From beautiful islands to hidden mountain villages, discover the destinations that make Greece unique.',
    actionLabel: 'Discover More',
  },
  {
    id: '4',
    title: 'The Power of Personal Development',
    description:
      'Learn how small improvements and consistent habits can help you achieve your personal goals.',
    actionLabel: 'Learn More',
  },
  {
    id: '5',
    title: 'Smart Ways to Manage Your Money',
    description:
      'Practical financial tips to help you save more, spend wisely and build a secure future.',
    actionLabel: 'Read Article',
  },
  {
    id: '6',
    title: 'Digital Trends You Should Know',
    description:
      'Explore the latest digital innovations and technologies changing the way businesses operate.',
    actionLabel: 'Explore Now',
  },
  {
    id: '7',
    title: 'A Guide to Better Sleep',
    description:
      'Understand the importance of quality sleep and discover practical ways to improve your nightly routine.',
    actionLabel: 'Read More',
  },
  {
    id: '8',
    title: 'Discover the World of Photography',
    description:
      'Learn basic photography techniques and capture beautiful moments wherever you go.',
    actionLabel: 'Get Inspired',
  },
  {
    id: '9',
    title: 'The Benefits of Daily Exercise',
    description:
      'Find out how regular physical activity can boost your energy, mood and overall health.',
    actionLabel: 'Discover More',
  },
  {
    id: '10',
    title: 'Sustainable Living Starts at Home',
    description: 'Easy changes you can make at home to reduce waste and protect the environment.',
    actionLabel: 'Read More',
  },
  {
    id: '11',
    title: 'How to Build a Successful Career',
    description:
      'Explore useful strategies for professional growth, networking and career development.',
    actionLabel: 'Explore Career Tips',
  },
  {
    id: '12',
    title: 'The Art of Mindfulness',
    description:
      'Discover simple mindfulness practices that can help you stay present and reduce everyday stress.',
    actionLabel: 'Start Reading',
  },
  {
    id: '13',
    title: 'Top Travel Destinations for 2027',
    description:
      'Get inspired by exciting destinations and unforgettable experiences for your next adventure.',
    actionLabel: 'Explore Destinations',
  },
  {
    id: '14',
    title: 'Mastering Time Management',
    description:
      'Learn how to organize your schedule, prioritize tasks and make the most of your day.',
    actionLabel: 'Read More',
  },
  {
    id: '15',
    title: 'The Evolution of Mobile Technology',
    description:
      'Take a look at how smartphones and mobile applications have changed the modern world.',
    actionLabel: 'Discover More',
  },
  {
    id: '16',
    title: 'Healthy Eating Made Simple',
    description:
      'A practical guide to balanced meals, nutritious ingredients and healthier food choices.',
    actionLabel: 'Explore Guide',
  },
  {
    id: '17',
    title: 'Why Learning Never Stops',
    description:
      'Discover the benefits of lifelong learning and how developing new skills can open new opportunities.',
    actionLabel: 'Learn More',
  },
  {
    id: '18',
    title: 'The Secrets of Successful Teams',
    description:
      'Explore the communication, trust and collaboration habits that make great teams successful.',
    actionLabel: 'Read Article',
  },
  {
    id: '19',
    title: 'A Beginner’s Guide to Investing',
    description:
      'Understand the fundamentals of investing and learn about different ways to grow your savings.',
    actionLabel: 'Get Started',
  },
  {
    id: '20',
    title: 'Creative Ideas for Your Home',
    description:
      'Refresh your living space with simple decoration ideas, smart organization and creative inspiration.',
    actionLabel: 'Get Inspired',
  },
  {
    id: '21',
    title: 'Understanding Mental Well-being',
    description:
      'Explore the importance of emotional balance and practical ways to support your mental well-being.',
    actionLabel: 'Read More',
  },
  {
    id: '22',
    title: 'The Rise of Electric Vehicles',
    description:
      'Discover how electric vehicles are transforming transportation and contributing to a greener future.',
    actionLabel: 'Explore More',
  },
  {
    id: '23',
    title: 'How to Start Your Own Business',
    description:
      'From developing an idea to building a brand, discover the essential steps to starting a business.',
    actionLabel: 'Start Exploring',
  },
  {
    id: '24',
    title: 'The Benefits of Reading Every Day',
    description:
      'Find out how reading can improve concentration, creativity, vocabulary and personal growth.',
    actionLabel: 'Read More',
  },
  {
    id: '25',
    title: 'Explore the Latest Fashion Trends',
    description:
      'Discover fresh style inspiration, seasonal trends and ideas to express your personality.',
    actionLabel: 'Discover Trends',
  },
  {
    id: '26',
    title: 'Protecting Your Digital Privacy',
    description:
      'Learn essential cybersecurity practices to keep your personal information safe online.',
    actionLabel: 'Stay Protected',
  },
  {
    id: '27',
    title: 'The Science of Motivation',
    description:
      'Understand what drives motivation and discover techniques to stay focused on your goals.',
    actionLabel: 'Learn More',
  },
  {
    id: '28',
    title: 'Amazing Facts About the Ocean',
    description:
      'Dive into the fascinating underwater world and discover the mysteries of our oceans.',
    actionLabel: 'Explore Ocean',
  },
  {
    id: '29',
    title: 'Simple Ways to Reduce Stress',
    description:
      'Discover practical relaxation techniques that can help you manage stress in your daily life.',
    actionLabel: 'Read Guide',
  },
  {
    id: '30',
    title: 'The Future of Remote Work',
    description:
      'Explore how flexible working arrangements are changing workplaces and professional lifestyles.',
    actionLabel: 'Read More',
  },
  {
    id: '31',
    title: 'Discover the World of Coffee',
    description:
      'Learn about coffee origins, brewing techniques and the culture behind one of the world’s favourite drinks.',
    actionLabel: 'Explore Coffee',
  },
  {
    id: '32',
    title: 'Building Stronger Relationships',
    description:
      'Explore the importance of communication, empathy and trust in meaningful relationships.',
    actionLabel: 'Learn More',
  },
  {
    id: '33',
    title: 'A Guide to Smart Home Technology',
    description: 'Discover connected devices and smart solutions that make everyday living easier.',
    actionLabel: 'Explore Guide',
  },
  {
    id: '34',
    title: 'Why Creativity Matters',
    description:
      'Learn how creative thinking can improve problem-solving and bring fresh perspectives to everyday challenges.',
    actionLabel: 'Get Inspired',
  },
  {
    id: '35',
    title: 'Weekend Adventures to Remember',
    description:
      'Find inspiration for exciting weekend activities, outdoor adventures and memorable experiences.',
    actionLabel: 'Find Adventures',
  },
  {
    id: '36',
    title: 'Understanding the Power of Data',
    description:
      'Discover how data analytics helps organizations make smarter decisions and identify new opportunities.',
    actionLabel: 'Read Article',
  },
  {
    id: '37',
    title: 'A Beginner’s Guide to Yoga',
    description:
      'Explore the basics of yoga and discover how simple poses can support flexibility and relaxation.',
    actionLabel: 'Start Practicing',
  },
  {
    id: '38',
    title: 'How Music Influences Our Emotions',
    description:
      'Discover the fascinating connection between music, memory, emotions and human behaviour.',
    actionLabel: 'Explore More',
  },
  {
    id: '39',
    title: 'The Importance of Financial Planning',
    description:
      'Learn how setting financial goals and creating a budget can help you build long-term stability.',
    actionLabel: 'Read Guide',
  },
  {
    id: '40',
    title: 'Discover the Beauty of Minimalism',
    description:
      'Explore how simplifying your surroundings and daily routines can create more space for what matters.',
    actionLabel: 'Discover More',
  },
  {
    id: '41',
    title: 'The Future of Online Education',
    description:
      'Discover how digital learning platforms are making education more accessible and flexible.',
    actionLabel: 'Read More',
  },
  {
    id: '42',
    title: 'Essential Tips for New Parents',
    description:
      'Explore helpful advice and practical ideas for navigating the exciting journey of parenthood.',
    actionLabel: 'Explore Tips',
  },
  {
    id: '43',
    title: 'How to Improve Your Communication Skills',
    description:
      'Discover techniques for expressing ideas clearly, listening actively and building stronger connections.',
    actionLabel: 'Learn More',
  },
  {
    id: '44',
    title: 'The Wonders of Space Exploration',
    description:
      'Explore fascinating discoveries, distant planets and the latest developments in space exploration.',
    actionLabel: 'Explore Space',
  },
  {
    id: '45',
    title: 'Healthy Habits for a Productive Morning',
    description:
      'Build a morning routine that helps you feel energized, focused and ready for the day ahead.',
    actionLabel: 'Read More',
  },
  {
    id: '46',
    title: 'The Power of Digital Communities',
    description:
      'Discover how online communities connect people, encourage collaboration and create shared experiences.',
    actionLabel: 'Explore More',
  },
  {
    id: '47',
    title: 'A Journey Through Mediterranean Cuisine',
    description:
      'Discover delicious ingredients, traditional recipes and the rich culinary heritage of the Mediterranean.',
    actionLabel: 'Explore Recipes',
  },
  {
    id: '48',
    title: 'Understanding Climate Change',
    description:
      'Learn about environmental challenges and discover meaningful actions that contribute to a sustainable future.',
    actionLabel: 'Learn More',
  },
  {
    id: '49',
    title: 'How to Make the Most of Your Holidays',
    description:
      'Find practical travel tips and creative ideas to make your next holiday more enjoyable and memorable.',
    actionLabel: 'Plan Your Trip',
  },
  {
    id: '50',
    title: 'The Psychology of Everyday Decisions',
    description:
      'Explore how emotions, habits and cognitive processes influence the decisions we make every day.',
    actionLabel: 'Read Article',
  },
  {
    id: '51',
    title: 'Small Changes, Big Results',
    description:
      'Discover how consistent small actions can create meaningful improvements in your everyday life.',
    actionLabel: 'Get Inspired',
  },
];

const articleImages = [
  'photo-1485827404703-89b55fcc595e',
  'photo-1506126613408-eca07ce68773',
  'photo-1500530855697-b586d89ba3ee',
  'photo-1497366754035-f200968a6e72',
  'photo-1460925895917-afdab827c52f',
  'photo-1516321318423-f06f85e504b3',
  'photo-1544367567-0f2fcb009e0b',
  'photo-1516035069371-29a1b244cc32',
  'photo-1538805060514-97d9cc17730c',
  'photo-1470071459604-3b5ec3a7fe05',
  'photo-1521737711867-e3b97375f902',
  'photo-1500534623283-312aade485b7',
  'photo-1501785888041-af3ef285b470',
  'photo-1553877522-43269d4ea984',
  'photo-1519389950473-47ba0277781c',
  'photo-1490645935967-10de6ba17061',
  'photo-1434030216411-0b793f4b4173',
  'photo-1522071820081-009f0129c71c',
  'photo-1554224155-6726b3ff858f',
  'photo-1600210492486-724fe5c67fb0',
];

const externalArticleUrls = [
  'https://en.wikipedia.org/wiki/Artificial_intelligence',
  'https://www.who.int/health-topics/physical-activity',
  'https://www.visitgreece.gr/',
  'https://www.psychologytoday.com/',
  'https://www.investopedia.com/personal-finance-4427760',
  'https://www.bbc.com/news/technology',
  'https://www.sleepfoundation.org/sleep-hygiene',
  'https://www.nationalgeographic.com/photography',
  'https://www.who.int/news-room/fact-sheets/detail/physical-activity',
  'https://www.un.org/en/climatechange',
  'https://www.indeed.com/career-advice',
  'https://www.mindful.org/',
  'https://www.nationalgeographic.com/travel',
  'https://asana.com/resources/time-management',
  'https://developer.android.com/',
  'https://www.who.int/health-topics/healthy-diet',
  'https://www.coursera.org/',
  'https://www.atlassian.com/team-playbook',
  'https://www.investor.gov/introduction-investing',
  'https://www.architecturaldigest.com/',
  'https://www.who.int/health-topics/mental-health',
  'https://www.iea.org/energy-system/transport/electric-vehicles',
  'https://www.sba.gov/business-guide',
  'https://www.readingrockets.org/',
  'https://www.vogue.com/fashion',
  'https://www.cisa.gov/secure-our-world',
  'https://www.apa.org/topics/motivation',
  'https://oceanservice.noaa.gov/',
  'https://www.apa.org/topics/stress',
  'https://www.microsoft.com/en-us/microsoft-365/business-insights-ideas',
  'https://www.ncausa.org/About-Coffee',
  'https://www.gottman.com/blog/',
  'https://home.google.com/',
  'https://www.creativityatwork.com/',
  'https://www.nationalgeographic.com/adventure',
  'https://www.ibm.com/topics/data-analytics',
  'https://www.yogajournal.com/',
  'https://www.britannica.com/art/music',
  'https://www.consumerfinance.gov/',
  'https://www.thespruce.com/minimalist-living-4690061',
  'https://www.unesco.org/en/digital-education',
  'https://www.unicef.org/parenting',
  'https://www.skillsyouneed.com/ips/communication-skills.html',
  'https://science.nasa.gov/',
  'https://www.health.harvard.edu/topics/healthy-living',
  'https://www.pewresearch.org/internet/',
  'https://www.olivetomato.com/mediterranean-diet/',
  'https://climate.nasa.gov/',
  'https://www.lonelyplanet.com/',
  'https://www.psychologytoday.com/us/basics/decision-making',
  'https://jamesclear.com/atomic-habits',
];

const BASE_DATE = new Date('2026-11-15T12:00:00.000Z');

export const MOCK_ARTICLES: Article[] = articlesData
  .map((article, index) => {
    const publishedDate = new Date(BASE_DATE);

    // Generate dates between today and 49 days ago
    publishedDate.setUTCDate(publishedDate.getUTCDate() - index);

    return {
      ...article,
      image: `https://images.unsplash.com/${articleImages[index % articleImages.length]}?auto=format&fit=crop&w=800&h=450&q=80`,
      actionUrl: externalArticleUrls[index],
      publishedAt: publishedDate.toISOString().split('T')[0],
    };
  })
  .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
