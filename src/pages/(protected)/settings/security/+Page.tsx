import Button from "../../../../components/Button";

const Page = () => {
  return (
    <section className="grid grid-cols-[1fr_.7fr] text-neutral-200 px-10 max-sm:px-4">
      <div>
        <article className="rounded-xl border border-solid border-neutral-500 p-6 bg-neutral-800">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-xl block">Two-factor Authentication</span>
              <p className="text-base text-neutral-400">
                Here u can activate o desactivate the 2fa
              </p>
            </div>
            <Button className="py-2 px-4 bg-green-500 text-neutral-900 font-inter-bold text-base">Enable</Button>
          </div>
        </article>
        <article></article>
      </div>
      <div></div>
    </section>
  );
};

export default Page;
