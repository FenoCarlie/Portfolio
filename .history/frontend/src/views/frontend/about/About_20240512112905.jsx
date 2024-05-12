function AboutPage() {
  return (
    <div id="about" className="w-full h-auto">
      <div className="flex flex-col p-4 sm:px-10 lg:px-20 xl:px-30">
        <h1 className="text-3xl text-white mb-2">About</h1>
        <div className="flex flex-row w-full">
          <section className="w-[40%]"></section>
          <section className="w-[60%]">section 1</section>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
