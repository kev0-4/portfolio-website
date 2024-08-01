import { AppBar } from '../components/AppBar';
import { PageHeader } from '../components/PageHeader';
import { BottomBar } from '../components/BottomBar';
import { CertificateComponent } from '../components/CertificateComponent';

const certificates = [
    {
      text: "Mastering Data Structures and Algorithms using C and C++",
      subheading: "Udemy Course",
      instructor: "Abdul Bari",
      url: "https://www.udemy.com/course/datastructurescncpp/"
    },
    {
      text: "Blockchain and Deep Learning: Future of AI",
      subheading: "Udemy Course",
      instructor: "Melanie Swan",
      url: "https://www.udemy.com/share/101rN23@BQFdgWxSapquDTQJ8CwbcDHRmhoNLDDirWmtdjtToqA4YsKAV7orEte2rubBiOIH0g==/"
    },
    {
      text: "Deep Learning Bootcamp",
      subheading: "Udemy Course",
      url: "https://www.udemy.com/certificate/UC-922d1f70-076e-412e-8a24-bd6a07c44c8b/"
    },
    {
      text: "The Complete Guide to Blockchain Use Cases",
      subheading: "Udemy Course",
      instructor: "We2Blocks",
      url: "https://www.udemy.com/certificate/UC-68860caa-908b-492b-99ae-43fc4c80ad83/"
    },
    {
      text: "Introduction to Operating Systems 2",
      subheading: "Coursera Course",
      url: "https://www.coursera.org/account/accomplishments/verify/8FD8M3GDSR4Q"
    },
    {
      text: "Introduction to Large Language Models",
      subheading: "Google Course on Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/BZ9BJRHRH3SC"
    },
    {
      text: "Web Development Cohort",
      subheading: "Live Course",
      instructor: "Harkirat Singh",
      url: "https://harkirat.classx.co.in/new-courses/6-live-0-1"
    }
  ];
  
  export const CertificatesPage = () => {
    return (
      <div className="min-h-screen bg-[#0f0f0f] text-white">
        <AppBar />
        
        <div className="pt-16 px-4 sm:px-8">
          <div className="container mx-auto px-4 sm:px-8 py-8 sm:py-16">
            <PageHeader title="CERTIFICATES" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {certificates.map((cert, index) => (
                <CertificateComponent key={index} {...cert} />
              ))}
            </div>
          </div>
        </div>
        
        <BottomBar />
      </div>
    );
  };
  
