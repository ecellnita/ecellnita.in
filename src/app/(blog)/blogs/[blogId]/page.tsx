'use client';

import React, { useEffect } from 'react';

import Image from 'next/image';
import { useParams } from 'next/navigation';

function BlogPage() {
  const { blogId } = useParams();
  console.log('first: ', blogId);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const blogs = [
    {
      id: 1,
      image:
        '/blogs/Walmart.jpg',
      title: 'How Walmart Became the Largest Company by Revenue?',
      content: `
        We live in a world dominated by technology, and while tech titans such as Google, Amazon, Meta, and Microsoft have fully embraced technology, Walmart remains the world’s largest company by revenue. Walmart generated 648.13 billion US dollars in revenue in 2024, with offline stores accounting for approximately 88% of that total. 

        Despite the fact that the majority of Walmart's operations are conducted offline, the company has grown into a retail behemoth and has been the largest in terms of revenue since 2014. It has around 2.1 million employees worldwide, with 1.6 million based in the U.S. Walmart’s success is attributed to its ability to adapt and innovate in this rapidly changing market. Along with the steady expansion in the international markets, the Walmart stores are divided into four divisions: Walmart Supercenters, Discount Stores, Neighborhood Markets, and Sam’s Club, which continue to benefit from the growth of the company. Walmart was founded by Samuel Moore Walton in 1962. Walmart began as a small store in Rogers, Arkansas, and now operates 10,660 stores worldwide. Walmart has 4,606 stores in the United States alone, and it also operates in China, Canada, Africa, Chile, India, and 24 other countries.  
        
        In 2014, Doug McMillon became the company's fifth CEO. Under his leadership, Walmart's revenue increased by 75%. Doug's marketing strategies and business acumen have helped the company grow significantly. To compete with its e-commerce competitor Amazon, Doug acquired Jet.com, an online retailer known for its innovative pricing and delivery systems, in 2016 for $3 billion, and Flipkart, India's most valuable startup at the time, for $16 billion in 2018. This acquisition marked a turning point for Walmart’s e-commerce strategy, which gave the company a robust platform and strengthened their grasp in the digital space. 

        Walmart’s omni-channel strategy is a seamless integration between its brick-and-mortar stores and digital platforms, blending the convenience of e-commerce with the reliability and scale. Under Doug McMillon’s leadership, this approach has been instrumental in driving Walmart’s e-commerce growth. Integrating grocery pickup and delivery services, making Walmart a leader in omnichannel retailing. By 2023, Walmart's U.S. e-commerce revenue reached over $65 billion, up fourfold since 2019. The Buy Online, Pick Up In Store (BOPIS) feature was a key component of this omnichannel strategy. This service allows customers to purchase products online and pick them up at a nearby Walmart store, often on the same day! This year, Walmart International eCommerce sales increased by 97%, showing just how significant this strategy has become for the customers around the world. 
        
        Doug’s international expansion has been crucial, increasing the company’s international footprint from 14 to 26 countries. This global expansion has contributed a significant share of Walmart's overall revenue. International sales accounted for more than $100 billion in total revenue.

        Walmart has formed partnerships with major companies such as Microsoft to improve cloud capabilities and TikTok to expand social commerce opportunities. Walmart has gained access to younger, tech-savvy demographics through these collaborations. These decisions have allowed Walmart to maintain its position as the world's largest revenue-generating company. Adapting to the shifting market conditions and consumer behavior.

        Walmart’s recent acquisitions reflect their strategy of diversification in the various segments of the company for its growth. The recent acquisition of Vizio, a leading smart TV manufacturer, at $2.3 billion allows them to leverage Vizio's SmartCast operating system and its 19 million active user base to give a boost to the Walmart Connect advertising business. To augment their logistics and e-commerce, Walmart acquired Parcel and invested in robotics automation systems, aiming to improve the supply chain efficiency and last-mile delivery capabilities, enhancing the customer experience while reducing operational costs.

        Walmart's future is inextricably linked to its commitment to innovation, sustainability, and maintaining retail leadership through projects such as Gigaton, among others. The company has laid out ambitious plans to adapt to the changing retail landscape while also addressing pressing global challenges.
      `,
      author: 'Dishank Patil',
      date: 'Thu, 28th Nov, 2024',
    },
    {
      id: 2,
      image:
        '/blogs/Netflix.jpg',
      title: 'Netflix’s Winning Formula',
      content: `
        Netflix has revolutionized the entertainment industry and transformed the way we consume the content. Who would have known a simple DVD rental and sales company would emerge as a global streaming giant, captivating audiences worldwide with its innovative approach, data-driven insights, and relentless focus on customer experience. 

        In 1997, Netflix launched its DVD-rental-by-mail service to compete with the likes of Blockbuster. While Blockbuster was determined to charge late fees and clung to their physical stores, Netflix saw the potential of the internet. In 2007, Netflix changed their gears and introduced streaming, when the broadband penetration was limited. By the time their competitors caught on, Netflix already had the first mover’s advantage and amassed millions of users, delivering entertainment on demand, a concept which now feels indispensable. By 2010, Netflix’s streaming service surpassed DVD rentals, marking a pivotal moment in its transformation. 

        Netflix hook’s the viewer’s using the data-driven recommendations. With over 282.7 million subscribers globally (in Q3 2024). Netflix collects data from viewing habits, engagement metrics and through content preferences. Netflix's recommendation engine uses a complex system of algorithms to suggest content tailored to each individual user's preferences. Netflix’s recommendation engine accounts for 80% of viewing activity, giving better user recommendation to engage the user. 

        As a streaming platform, Netflix was facing challenges due to rising licensing costs and a lack of exclusive content. To differentiate itself and attract new subscribers, Netflix took a bold step by introducing the ‘originals strategy’. The Netflix release of ‘House of Cards’ as a studio in 2013 marked a turning point, showcasing Netflix's commitment to high-quality, binge-worthy content. This strategic move not only increased user engagement but also paved the way for a wave of successful original series, solidifying Netflix's position as a dominant force in the entertainment industry.

        Following the success of ‘House of Cards,’ Netflix continued to invest heavily in original content, resulting in a wave of critically acclaimed and commercially successful series. Stranger Things (2016) a sci-fi horror series became a global phenomenon, captivating audiences with its nostalgic 80s setting. When Netflix dropped Stranger Things 4 in May 2022, it racked up 1.15 billion viewing hours within 28 days, making it one of Netflix’s most-watched series ever. The Crown (2016) with its lavish production and deep storytelling, the series earned critical acclaim, proving Netflix could compete with premium channels like HBO. Squid Game (2021) The South Korean thriller became Netflix’s most-watched series, viewed by 142 million households in its first four weeks!

        Netflix understood early that to dominate globally, it needed to think regionally. From Bollywood-inspired dramas in India to gripping K-dramas in South Korea, Netflix produced content exclusive to regional tastes. Netflix invested heavily in Spanish originals. This led to the massive success of Money Heist (La Casa de Papel), which became a global sensation. By offering subtitles and dubbing in multiple languages, Netflix ensures its content transcends cultural barriers. Today, more than 60% of Netflix’s audience resides outside the U.S. In 2024, Netflix spent over $17 billion annually on content and almost half of it on non-english series, solidifying its position as both a platform and a studio globally. 

        Competition from Disney, Amazon Prime Video, and HBO Max intensified the streaming wars. Yet, Netflix continues to innovate Ad-Supported plans to attract price-sensitive users, Netflix launched a cheaper, ad-supported tier in 2023. Cracking down on password sharing with over 100 million households sharing accounts, Netflix introduced paid-sharing options, boosting revenue while addressing freeloading. Netflix added 5.9 million subscribers in Q2 2023 alone, proving its resilience in a crowded market. 

        Netflix’s expansion into gaming, interactive content, and localized storytelling signals bold future plans. AI could enhance content creation with personalization and efficiency, but balancing this with human creativity will be key. By blending innovation with emotional storytelling, Netflix can stay at the forefront of entertainment in the AI era.
      `,
      author: 'Dishank Patil',
      date: 'Fri, 6th Dec, 2024',
    },
    {
      id: 3,
      image:
        '/blogs/OlaGigaFactory.jpg',
      title: 'Inside Ola’s Gigafactory: Building the Future of EVs in India',
      content: `
        When we approach the Ola Future Factory in Krishnagiri, Tamil Nadu, what immediately catches the eye is another massive facility under construction. This is Ola Electric’s gigafactory, a groundbreaking project dedicated to manufacturing lithium-ion battery cells. Designed to be a game-changer for India’s EV ecosystem, the facility is set to drive innovation and self-reliance in the rapidly growing electric vehicle market.  

        In the first phase, Ola Electric is investing $100 million to establish 1.5 GWh of manufacturing capacity under Phase 1A. The investment reflects a bold ambition to reduce India’s dependency on imported lithium-ion cells—a major hurdle that currently inflates costs and slows the adoption of EVs in the country.  

        The gigafactory will feature state-of-the-art capabilities, including in-house electrode production, cell assembly, and cell formation. It will also be one of the first facilities globally to commercially produce the advanced 4680 cylindrical cells, known for their higher energy density and efficiency. Powered by cutting-edge R&D from Ola’s Bengaluru facility, this factory promises to be a hub of innovation.  

        India’s EV growth relies heavily on building a robust supply chain for battery production. Recognizing this, the Indian government launched the Production-Linked Incentive (PLI) scheme for Advanced Chemistry Cell Battery Storage, aiming for 50 GWh of domestic production. Ola Electric’s allocation of 20 GWh under this program underscores its pivotal role in this transformation.

        Once operational, this gigafactory will do more than just manufacture batteries—it will drive India closer to energy independence, lower EV costs, and accelerate the adoption of sustainable mobility. With this facility, Ola Electric is not just building a factory; it is shaping the future of transportation in India.
      `,
      author: 'Ashutosh Singh',
      date: 'Thu, 21st Nov, 2024',
    },
  ];

  const blog = blogs.find((blog) => blog.id === parseInt(blogId));

  if (!blog) {
    return <p className='mt-10 text-center'>Blog not found</p>;
  }

  return (
    <div className='mt-36'>
      <div className='mx-auto max-w-4xl p-6'>
        <h1 className='mb-4 flex justify-center text-6xl font-bold text-white'>
          {blog.title}
        </h1>
        <div className='mb-6 flex justify-center text-sm text-white'>
          By <span className='font-medium text-white mx-1'> {blog.author} </span> |
          Published on {blog.date}
        </div>{' '}
        {/* Author and Date */}
        <Image
          height={100}
          width={100}
          src={blog.image}
          alt={blog.title}
          className='mb-6 h-auto w-full rounded-lg shadow-md'
        />
        {
          blog.content.trim().split(/\n\s*\n/).map((text, i)=>{
            return  <>
                      <p key={i} className='font-serif text-lg font-normal leading-relaxed text-white'>
                        {/* {blog.content} */}
                        {text}
                      </p>
                      <br />
                    </>
          })
        }
      </div>
    </div>
  );
}

export default BlogPage;
