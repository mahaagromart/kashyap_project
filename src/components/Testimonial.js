'use client';
import { useState } from 'react';
import one from "../app/assets/img/one.webp"
import two from "../app/assets/img/two.webp"
import three from "../app/assets/img/three.webp"
import Image from 'next/image';

const Testimonial = ({ name, role, content, imgSrc }) => {
  const [showFullTestimonial, setShowFullTestimonial] = useState(false);

  const toggleTestimonial = () => {
    setShowFullTestimonial(!showFullTestimonial);
  };

  return (
    <div className="max-w-3xl mx-auto my-8 p-8 bg-white shadow-xl rounded-xl border-2 border-green-200 hover:shadow-2xl transition-all hover:border-green-400">
      <div className="flex items-center space-x-6 mb-6">
        <Image
          src={imgSrc}
          alt={name}
          className="w-16 h-16 rounded-full border-4 border-green-500 shadow-lg"
        />
        <div>
          <p className="text-xl font-semibold text-gray-800">{name}</p>
          <p className="text-md text-gray-500 italic">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 text-lg leading-relaxed">
        {showFullTestimonial
          ? content
          : content.substring(0, 150) + '...'}
      </p>
      <button
        onClick={toggleTestimonial}
        className="text-green-600 hover:text-green-800 mt-4 font-semibold"
      >
        {showFullTestimonial ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Prashik',
      role: 'DEO, Pune, Maharashtra',
      content: 'Mahaagromart, an initiative by the Maharashtra Agricultural Industries Development Corporation, has received the prestigious SKOCH award. This e-portal provides an online marketplace for farmers, womens self-help groups, and organizations like the Blind and Disabled Corporation and Prisons, enabling them to sell processed agricultural products directly. Mahaagromart was honored with the award during the 99th National SKOCH Awards ceremony held in Delhi, recognizing it as one of India’s highest national civic honors. As an innovative platform connecting farmers and agriculture-related businesses nationwide, Mahaagromart provides a seamless online space for buying and selling under one roof. This award was presented by Sameer Kochar, the founder of the SKOCH Group. On behalf of the Corporation, the award was accepted by Dr. Mangesh Gondavale, Managing Director; Sujit Patil, General Manager; and Manager Kishor Rathod. Farmers often face challenges in selling their produce and do not always receive fair compensation despite having high-quality products. Acknowledging these issues, the Maharashtra Agricultural Industries Development Corporation developed the Mahaagromart online platform. Through this app, farmers can not only sell their agricultural produce but also purchase related products and other agri-inputs, benefiting farmers, farmer-producer companies, womens self-help groups, and agri-business professionals alike.',
      imgSrc: one,
    },
    {
      name: 'Shubham',
      role: 'Asst Manager, Mumbai',
      content: 'महाराष्ट्र कृषी-उद्योग विकास महामंडळाच्या महाअॅग्रोमार्ट उपक्रमास स्कॉच पुरस्कार जाहीर मुंबई, दि. ९ (प्रतिनिधी) - शेतकऱ्यांनी प्रक्रिया केलेला शेतमाल ऑनलाइन पद्धतीने विक्री करता यावा, यासाठी महाराष्ट्र कृषी-उद्योग विकास महामंडळाकडून विकसित केलेल्या महाअॅग्रोमार्ट ई-पोर्टलचा शेतकरी, महिला बचत गट अंध व अपंग महामंडळ, प्रीझन इत्यादींना ऑनलाइन बाजारपेठ उपलब्ध करून देण्यात आली आहे. महाराष्ट्र कृषी-उद्योग महामंडळाच्या या उपक्रमास स्कॉच पुरस्कार देण्यात आला. दिल्ली येथे पार पडलेल्या ९९ व्या राष्ट्रीय स्कॉच पुरस्कार सोहळ्यात महामंडळाच्या महाअॅग्रोमार्ट ई-कॉमर्स पोर्टलला हिंदुस्थानातील सर्वोच्च राष्ट्रीय नागरी पुरस्कारांपैकी एक मानाचा स्कॉच पुरस्कार प्रदान करून गौरविण्यात आले. महाअॅग्रोमार्ट ई-पोर्टल हे संपूर्ण देशात शेतकरी व शेतीसंलग्न व्यवसायाचे एकाच छताखाली खरेदी व विक्री करण्यासाठीचा ऑनलाइन प्लॅटफॉर्म असल्याने हा नावीन्यपूर्ण उपक्रम असल्याने स्कॉच समूहाचे संस्थापक, समीर कोचर यांच्या हस्ते प्रदान करण्यात आले. याप्रसंगी महामंडळाचे व्यवस्थापकीय संचालक डॉ. मंगेश गोंदावले, महाव्यवस्थापक सुजित पाटील व व्यवस्थापक किशोर राठोड यांनी हा पुरस्कार महामंडळाच्या वतीने स्वीकारला. शेतकऱ्यांनी पिकविलेला शेतीमाल विक्री करताना अनेक अडचणींना सामोरे जावे लागते. दर्जेदार शेतीमाल असतानाही अपेक्षित मोबदला मिळत नाही. ही समस्या ओळखून महाराष्ट्र कृषी उद्योग विकास महामंडळाने महाअॅग्रोमार्ट हा ऑनलाइन प्लॅटफॉर्म विकसित केला आहे. या अॅपच्या माध्यमातून शेतकऱ्यांना शेतीशी संबंधित उत्पादने व इतर कृषिनिविष्ठासुद्धा खरेदी करता येतात. यामुळे शेतकरी, शेतकरी उत्पादक कंपन्या, महिला बचत गट, व्यावसायिक आणि उत्पादकांना याचा फायदा होत आहे.',
      imgSrc: two,
    },
    {
      name: 'Abhishek Porel',
      role: 'Farmer, Nagpur',
      content: 'MahaAgroMart has truly revolutionized the way I source agricultural products online. As a farmer, finding quality seeds, fertilizers, and equipment used to be a time-consuming task. However, with MahaAgroMarts user-friendly website and extensive range of products, I can now find everything I need in one convenient place, from quality seeds and fertilizers to advanced farming equipment. The platform has saved me valuable time and made sourcing reliable products easier than ever. I feel confident knowing that I’m getting the best options for my farm, all in one place.',
      imgSrc: three,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 ">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Customers Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            name={testimonial.name}
            role={testimonial.role}
            content={testimonial.content}
            imgSrc={testimonial.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
