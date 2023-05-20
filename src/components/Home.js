
function Home() {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-4">Specialists in Environmental Forestry</h1>
      <h3 className="mb-4">
        Wood Brokers Co. Inc. is a family owned timber company dedicated to
        helping landowners manage their timber resources effectively and
        profitably. We harvest pine and hardwood timber on tracts throughout
        Central and Southside Virginia. Our services also include forestry
        consulting, preparation of customized forest management plans, and
        timber cruises. The Owner, Doug Brewster, has more than thirty five
        years of experience in the logging industry. Wood Brokers Co. Inc. is
        committed to doing quality work, in accordance with the standards
        established by the Virginia Department of Forestry. Since incorporating
        in 1994, we have successfully completed hundreds of timber harvests. We
        hope that you will give us an opportunity to assist in managing your
        timber as well.
      </h3>
      <h3 className="font-bold text-lg">Services/Products</h3>
       <ul >
     {/* <ul className="indent-6"> */}
        <li>Pine and Hardwood Harvesting</li>
        <li>Selective Cutting & Thinning</li>
        <li>Clear cutting</li>
        <li>Timber Sales & Appraisals</li>
      </ul>
      <h3 className="font-bold text-lg">Associations</h3>
      <ul className="mb-4">
      {/* <ul className="indent-6 mb-4"> */}
        <li>Virginia Forestry Association</li>
      </ul>
    </div>
  );
}

export default Home;
