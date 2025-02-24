const Stats: React.FC = () => {
  return (
    <section className="mb-8 mt-8 sm:mt-2 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 py-8 text-black">
        <div className="flex justify-between items-center gap-4 text-center">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex gap-2 flex-col items-center">
              <div className="text-xl sm:text-3xl font-medium text-primary">36+</div>
              <div className="text-sm sm:text-lg font-medium">Industries</div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="flex gap-2 flex-col items-center">
              <div className="text-xl sm:text-3xl font-medium text-primary">23+</div>
              <div className="text-sm sm:text-lg font-medium">Countries</div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="flex gap-2 flex-col items-center">
              <div className="text-xl sm:text-3xl font-medium text-primary">1890+</div>
              <div className="text-sm sm:text-lg font-medium">
                Global Signups
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="flex gap-2 flex-col items-center">
              <div className="text-xl sm:text-3xl font-medium text-primary">87+</div>
              <div className="text-sm sm:text-lg font-medium">Better</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
