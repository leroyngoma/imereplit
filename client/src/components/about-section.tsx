export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ime-blue mb-6">About IME</h2>
          <p className="text-xl text-ime-gray max-w-3xl mx-auto">We are a nonprofit organization committed to mobilizing resources and executing programs to aid underserved communities in both the U.S. and African nations.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="African health workers in community outreach" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-ime-blue mb-6">Our Mission</h3>
            <p className="text-lg text-ime-gray mb-6">IME's mission is to bring together healthcare professionals, policymakers, educators, entrepreneurs, industry leaders, and ICT experts from Africa, the U.S., and the African Diaspora to design and implement innovative and effective programs to improve and extend healthcare delivery in Africa and underserved communities in the U.S.</p>
            <p className="text-lg text-ime-gray">Public/private/academic partnerships are a vital mechanism for African countries to address their multifaceted healthcare challenges successfully.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-ime-blue mb-6">Our Vision</h3>
            <p className="text-lg text-ime-gray mb-6">The convergence of medical and information technology, the evolution of international policies, and changes in the public/private funding environment represent historic opportunities.</p>
            <p className="text-lg text-ime-gray">IME is open to assisting and working with African governments in developing their capacity to achieve decent and adequate healthcare services, particularly in underserved communities.</p>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Healthcare technology implementation in Africa" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
