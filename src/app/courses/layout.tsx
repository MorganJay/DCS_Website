'use client';
import Pagination from '@/components/pagination';

const courseData = [
  {
    path: '/courses/',
    number: 1,
  },
  {
    path: '/courses/section2',
    number: 2,
  },
];
  

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    return (
      <>
      <div className="container">
        <div className="title py-3 text-center">
          <h4 className="sub-title text-capitalize">
            browse our <span>courses</span>
          </h4>
        </div>
      </div>
      <Pagination data={courseData} />
        {children}
      <Pagination data={courseData} />
    </>         
    );
}
