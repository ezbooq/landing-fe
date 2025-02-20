const Stats: React.FC = () => {
  return (
    <div className="mb-8 mt-8 sm:mt-2 bg-primary">
      <div className="max-w-7xl mx-auto px-4 py-8 text-white">
        <div className="grid grid-cols-4 gap-4 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex gap-2 flex-col md:flex-row items-center">
              <div className="text-xl sm:text-2xl font-medium">36+</div>
              <div className="text-sm sm:text-2xl font-medium">Industries</div>
            </div>
            <div className="text-sm sm:text-base hidden sm:block">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="flex gap-2 flex-col md:flex-row items-center">
              <div className="text-xl sm:text-2xl font-medium">23+</div>
              <div className="text-sm sm:text-2xl font-medium">Countries</div>
            </div>
            <div className="text-sm sm:text-base hidden sm:block">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="flex gap-2 flex-col md:flex-row items-center">
              <div className="text-xl sm:text-2xl font-medium">1890+</div>
              <div className="text-sm sm:text-2xl font-medium">
                Global Signups
              </div>
            </div>
            <div className="text-sm sm:text-base hidden sm:block">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <div className="flex gap-2 flex-col md:flex-row items-center">
              <div className="text-xl sm:text-2xl font-medium">87+</div>
              <div className="text-sm sm:text-2xl font-medium">Better</div>
            </div>
            <div className="text-sm sm:text-base hidden sm:block">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
