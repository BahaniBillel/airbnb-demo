import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";

function search() {
  const router = useRouter();

  console.log(router.query);
  const { location, startDate, endDate, noOfGuests } = router.query;


  
//   const formattedStartDate= format(new Date(startDate),"yy-MM-dd")
//   const formattedEndtDate= format(new Date(endDate),"yy-MM-dd")
//   const range =`${formattedStartDate}-${formattedEndtDate}`
  return (
    <div>
      <Header />
      <main className="flex-grow pt-14 px-6">
        <section className="">
          <p className="text-xs">300+ Stays-- for {noOfGuests} n guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
          <div className="hidden lg:inline-flex space-x-3 mb-5 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default search;
