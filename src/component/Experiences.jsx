import React from 'react'

const Experiences = () => {
    const experiences = [
        {
          position: "Senior Frontend Developer",
          company: "Tech Solutions ID",
          period: "2022 - Sekarang",
          description: "Mengembangkan aplikasi web dengan React dan TypeScript. Memimpin tim frontend dalam implementasi fitur baru dan peningkatan performa aplikasi."
        },
        {
          position: "Full Stack Developer",
          company: "Digital Kreasi",
          period: "2020 - 2022",
          description: "Mengembangkan aplikasi web dengan MERN stack. Berkolaborasi dengan tim desain untuk mengimplementasikan UI/UX yang responsif dan menarik."
        },
        {
          position: "Junior Web Developer",
          company: "Web Inovasi",
          period: "2018 - 2020",
          description: "Mengembangkan dan memelihara website klien menggunakan HTML, CSS, JavaScript, dan PHP."
        }
      ];
    
      return (
        <div id="experience" className="py-20 bg-base-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-4xl font-bold mb-4">Pengalaman Kerja</h2>
              <p className="text-lg max-w-2xl mx-auto">
                Berikut adalah perjalanan karir saya di industri pengembangan perangkat lunak.
              </p>
            </div>
    
            <div className="flex flex-col max-w-3xl mx-auto">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="relative pl-8 pb-8"
                >
                  {index !== experiences.length - 1 && (
                    <div className="absolute top-0 left-3.5 h-full w-0.5 bg-primary"></div>
                  )}
                  <div className="absolute top-0 left-0 rounded-full w-7 h-7 bg-primary flex items-center justify-center">
                    <div className="rounded-full w-4 h-4 bg-white"></div>
                  </div>
                  <div className="card bg-base-100 shadow-lg">
                    <div className="card-body">
                      <h3 className="card-title text-xl">{exp.position}</h3>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                        <p className="text-lg font-medium">{exp.company}</p>
                        <span className="badge badge-primary badge-outline mt-1 md:mt-0">{exp.period}</span>
                      </div>
                      <p className="mt-2">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Experiences
