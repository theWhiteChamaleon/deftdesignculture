// Variables for content
var aboutUsContent = `Welcome to Deft Design Culture, where creativity meets functionality, and innovation intertwines with design excellence. At the heart of our services is a commitment to delivering a seamless blend of architecture, interior designing, and digital marketing solutions. Discover how we transform ideas into reality, bringing spaces to life and elevating brands in the digital realm. Explore the unique facets of our expertise below: \n

Architecture:
At DDC, we specialize in architectural design that goes beyond structures – it's about creating living spaces that harmonize with the environment and elevate the human experience. Our team of architects is committed to turning your concepts into tangible, innovative designs.

Interior Designing:
Elevate your surroundings with our expert interior designing services. At DDC, we believe that interiors should reflect your style and enhance functionality. Our talented designers work closely with clients to transform spaces into aesthetically pleasing and highly functional environments.

Digital Marketing:
In the digital age, a strong online presence is essential. Our digital marketing services are designed to propel your brand to new heights. From strategic planning to implementation, we offer a comprehensive approach that includes SEO, social media management, and engaging content creation. Let [Company Name] be your partner in navigating the digital landscape.

At DDC, we integrate architecture, interior designing, and digital marketing to provide holistic solutions. Our multidisciplinary team collaborates seamlessly to bring your visions to life. Whether it's designing physical spaces or crafting a compelling online presence, we are dedicated to creating experiences that leave a lasting impression.`;
var emailAddress = "deftdigital.india@gmail.com";
var phoneNumber = "+91 9588439955";
var companyAddress = "102, Narmada Heights, DP Road, Pune, 411038";
var slogan = "Your one stop solution for Architecure and Marketing needs"
var companName = "Deft Design Culture"

// Set content in HTML
document.getElementById("aboutUsContent").textContent = aboutUsContent;
document.getElementById("emailLink").href = "mailto:" + emailAddress;
document.getElementById("emailLink").textContent = emailAddress;
document.getElementById("phoneNumber").textContent = phoneNumber;
document.getElementById("companyAddress").textContent = companyAddress;
document.getElementById("slogan").textContent = slogan;
