import FAQCard from "../FAQCard/FAQCard";

const FAQ: React.FC = () => {
  return (
    <div className="bg-secondary text-black p-4">
      <div className="flex flex-col justify-center max-w-7xl mx-auto text-center mt-10 px-4 sm:px-0 gap-8 py-10">
        <h1 className="text-2xl sm:text-4xl">Frequently asked questions</h1>
        <p className="max-w-3xl mx-auto">
          Frequently asked questions ordered by popularity. Remeber that if the
          visitor has not committed to the call to the call to action, they may
          still have questions (doubts) that can be answered.
        </p>
        <div className="flex flex-col gap-4">
            <FAQCard question="What is the return policy?" answer="We have a 30-day return policy. If you are not satisfied with your purchase, you can return it within 30 days." />
            <FAQCard question="What is the return policy?" answer="We have a 30-day return policy. If you are not satisfied with your purchase, you can return it within 30 days." />
            <FAQCard question="What is the return policy?" answer="We have a 30-day return policy. If you are not satisfied with your purchase, you can return it within 30 days." />
            <FAQCard question="What is the return policy?" answer="We have a 30-day return policy. If you are not satisfied with your purchase, you can return it within 30 days." />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
