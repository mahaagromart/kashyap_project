import { useEffect, useState } from 'react';

const GoogleTranslate = () => {
  const [isClient, setIsClient] = useState(false);

  // Set the flag to true once the component is mounted on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only run on the client side
    if (isClient && typeof window !== 'undefined') {
      // Dynamically load the Google Translate script
      const script = document.createElement('script');
      script.src = 'https://translate.googleapis.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      script.onload = () => {
        // Initialize the Google Translate element when the script is loaded
        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement(
            { pageLanguage: 'en', includedLanguages: 'en,hi,mr' },
            'google_translate_element'
          );
        };
      };
      document.head.appendChild(script);
    }
  }, [isClient]);

  const handleLanguageChange = (e) => {
    const translateElement = document.querySelector('.goog-te-combo');
    if (translateElement) {
      translateElement.value = e.target.value;
      translateElement.dispatchEvent(new Event('change'));
    }
  };

  return (
    <div className="relative inline-block">
      {/* You can remove "hidden" if you want to display the translate element */}
      <div id="google_translate_element" className="hidden"></div>
      <select
        className="block w-full px-3 py-2 text-sm border rounded-lg shadow-sm bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-blue-700"
        onChange={handleLanguageChange}
      >
        <option value="">Select Language</option>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="mr">Marathi</option>
      </select>
    </div>
  );
};

export default GoogleTranslate;
