import FAQCard from "../FAQCard/FAQCard";

const FAQ: React.FC = () => {
  return (
    <section className="bg-secondary text-black p-4">
      <div className="flex flex-col justify-center max-w-7xl mx-auto text-center mt-10 px-4 sm:px-0 gap-8 py-10">
        <h1 className="text-2xl sm:text-4xl">Frequently asked questions</h1>
        <p className="max-w-3xl mx-auto">
          Frequently asked questions ordered by popularity. Remeber that if the
          visitor has not committed to the call to the call to action, they may
          still have questions (doubts) that can be answered.
        </p>
        <div className="flex flex-col gap-4">
          <FAQCard
            question="What is Ezbooq?"
            answer="We are simplified SaaS solution with with AI innovation to help small medium business to manage, grow and generate sales as all in one stop."
          />
          <FAQCard
            question="How can I start using?"
            answer="You can now sign-up for 14days free and request for a free demo and a help you setup your business operations with Ezbooq."
          />
          <FAQCard
            question="Who is Ezbooq? system for."
            answer="Ezbooq is a one stop solution for service based business across the global, you can manage your inventory, manage your bookings with AI simplified solution,  Also you can start managing and running your own business campaigns for all your customers, leads and others with E-mail and SMS."
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
