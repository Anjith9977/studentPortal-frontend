import React from 'react'
import Header from '../components/Header'

function Course() {
  return (
    <div>
      <Header />

      {/* Outer container */}
      <div className="px-5 md:px-20 py-10 bg-gray-100 min-h-screen">

        {/* Grid layout */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* course 1 */}
          <div className="flex flex-col rounded-xl bg-white text-gray-700 shadow-md hover:scale-105 transition-transform">
            <div className="relative h-48 overflow-hidden rounded-t-xl">
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.9F5r6wrOfoGNnFs6xe9EmAHaEK?pid=Api&P=0&h=220"
                alt="MEARN Stack"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500">
                7 Modules <span className="float-right">6 Months</span>
              </p>
              <h5 className="text-xl font-semibold mt-2">
                MEA(R)N Stack Web Development Expert
              </h5>
              <p className="text-yellow-500 mt-2">⭐⭐⭐⭐⭐ (4.98)</p>
              <p className="text-blue-600 font-semibold mt-1">
                🏆 100% Placement Assistance 🏆
              </p>
            </div>
          </div>

          {/* course 2 */}
          <div className="flex flex-col rounded-xl bg-white text-gray-700 shadow-md hover:scale-105 transition-transform">
            <div className="relative h-48 overflow-hidden rounded-t-xl">
              <img
                src="https://tse4.mm.bing.net/th/id/OIP.O0LhiSUD9RRL9_Anb-hkkAHaEo?pid=Api&P=0&h=220"
                alt="Python Data Science"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500">
                10 Modules <span className="float-right">7 Months</span>
              </p>
              <h5 className="text-xl font-semibold mt-2">
                Python Data Science - ML - AI - & Power BI
              </h5>
              <p className="text-yellow-500 mt-2">⭐⭐⭐⭐⭐ (4.95)</p>
              <p className="text-blue-600 font-semibold mt-1">
                🏆 100% Placement Assistance 🏆
              </p>
            </div>
          </div>

          {/* course 3 */}
          <div className="flex flex-col rounded-xl bg-white text-gray-700 shadow-md hover:scale-105 transition-transform">
            <div className="relative h-48 overflow-hidden rounded-t-xl">
              <img
                src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Web_Forms_in_ASP_NET.jpg"
                alt="ASP.NET with Angular"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500">
                9 Modules <span className="float-right">5 Months</span>
              </p>
              <h5 className="text-xl font-semibold mt-2">
                ASP.NET MVC with Angular - Full Stack
              </h5>
              <p className="text-yellow-500 mt-2">⭐⭐⭐⭐⭐ (4.78)</p>
              <p className="text-blue-600 font-semibold mt-1">
                🏆 100% Placement Assistance 🏆
              </p>
            </div>
          </div>

          {/* course 4 */}
          <div className="flex flex-col rounded-xl bg-white text-gray-700 shadow-md hover:scale-105 transition-transform">
            <div className="relative h-48 overflow-hidden rounded-t-xl">
              <img
                src="https://uploads-ssl.webflow.com/6377bf360873283fad488724/638ca82a95fb434e6f42a283_Flutter.png"
                alt="Flutter Training"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500">
                5 Modules <span className="float-right">5 Months</span>
              </p>
              <h5 className="text-xl font-semibold mt-2">
                Best Flutter Training
              </h5>
              <p className="text-yellow-500 mt-2">⭐⭐⭐⭐⭐ (4.9)</p>
              <p className="text-blue-600 font-semibold mt-1">
                🏆 100% Placement Assistance 🏆
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
