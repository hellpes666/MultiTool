const MainPage = () => {
  return (
    <div className='text flex w-full flex-col items-center gap-36 text-center'>
      <h1 className='flex flex-col items-center justify-center gap-4 leading-36'>
        {' '}
        <q className='text-9xl'>Talk is cheap. Show me the code.</q>
        <p>- Linus Torvalds</p>{' '}
        {/*TODO сделать маркерную обводку variant(1,2,3)  */}
      </h1>

      <section className='bg w-full rounded-xl px-18 py-6 text-center'>
        {/* //ABOUT SECITON */}
        <h2 className='title'>Developers</h2>
        <div className='my-6 flex justify-between'>
          <div className='text-alt flex flex-col gap-2'>
            <h3 className='text-4xl uppercase'>hellpes</h3>
            <span>OVERRATED AS FUCK</span>
            <p className='tracking-wider text-balance'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem veritatis quas natus. Nobis, quis porro. Inventore,
              ad voluptatem aliquam commodi, iure hic cum obcaecati harum, id
              unde voluptates impedit quisquam!
            </p>
            <div className='text-alt mx-auto flex items-center gap-4 text-2xl'>
              Role
            </div>
          </div>
          <div className='text-alt flex flex-col gap-2'>
            <h3 className='text-4xl uppercase'>marat</h3>
            <span>pretty damn boy</span>
            <p className='tracking-wider text-balance'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem veritatis quas natus. Nobis, quis porro. Inventore,
              ad voluptatem aliquam commodi, iure hic cum obcaecati harum, id
              unde voluptates impedit quisquam!
            </p>
            <div className='text-alt mx-auto flex items-center gap-4 text-2xl'>
              Role
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
