import Image from 'next/image';

export default function Photos() {
  return (
    <div className="w-screen h-screen">
      <div className="w-screen h-[55vh] bg-[url('https://img.kalashnikovgroup.ru/1440x480,fit/https://cdn.kalashnikovgroup.ru/static/images/m/r/-/mr-155-taktika-03-22520-1080.jpg')] bg-center bg-cover flex justify-center items-center flex-col">
        <div className="gap-10 p-10">
          <div className="flex gap-6">
            <input
              className="w-[50vw] h-16 bg-[#111] border border-[#999] text-white pl-8"
              placeholder="🔎   Search by photo"
            ></input>
            <button
              className="w-[20vw] h-16 font-bold border border-[#ef212b] text-white hover: bg-red bg-opacity-100"
              style={{ background: 'rgba(239,33,43,.2)' }}
            >
              {' '}
              Find photo
            </button>
          </div>
          <br />
          <div className="text-white flex">
            Popular searches:{'  '}
            <p className="text-[#999] ml-1 hover:text-[#ef212b] cursor-pointer flex">
              AK-12, 
            </p>
            <p className="text-[#999] ml-1 hover:text-[#ef212b] cursor-pointer flex">
              AK-15,
            </p>
            <p className="text-[#999] ml-1 hover:text-[#ef212b] cursor-pointer flex">
             AK-19,
            </p>            <p className="text-[#999] ml-1 hover:text-[#ef212b] cursor-pointer flex">
            PLK, 
            </p>
            <p className="text-[#999] ml-1 hover:text-[#ef212b] cursor-pointer flex">
           PPK-20
            </p>
            <p className="text-[#999] ml-1 hover:text-[#ef212b] cursor-pointer flex">
              Army
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="max-w-[1060px] p-8 grid grid-cols-3 gap-8">
          {data.map((e, i) => e.span && (
            <div
              key={i}
              className={`col-span-${e.span} row-span-${e.span} border border-light-gray h-fit`}
            >
              <img className="w-full h-full object-cover" src={e.img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


const data = [
  {
    img: 'https://img.kalashnikovgroup.ru/1400x475,fit/https://cdn.kalashnikovgroup.ru/static/images/7/q/3/7q3a0450-26820-1080.jpg',
    span: '2',
  },
  {
    img: 'https://img.kalashnikovgroup.ru/1400x475,fit/https://cdn.kalashnikovgroup.ru/static/images/7/q/3/7q3a0491-26821-1080.jpg',
    span: '1',
  },
  {
    img: 'https://img.kalashnikovgroup.ru/1400x475,fit/https://cdn.kalashnikovgroup.ru/static/images/7/q/3/7q3a1336-26822-1080.jpg',
    span: '1',
  },
  {
    img: 'https://img.kalashnikovgroup.ru/1400x475,fit/https://cdn.kalashnikovgroup.ru/static/images/7/q/3/7q3a1342-26823-1080.jpg',
    span: '1',
  },
  {
    img: 'https://img.kalashnikovgroup.ru/1400x475,fit/https://cdn.kalashnikovgroup.ru/static/images/7/q/3/7q3a0346-26824-1080.jpg',
    span: '1',
  },
  {
    img: 'https://img.kalashnikovgroup.ru/1400x475,fit/https://cdn.kalashnikovgroup.ru/static/images/7/q/3/7q3a0366-26825-1080.jpg',
    span: '1',
  },
  {
    img: 'https://img.kalashnikovgroup.ru/1400x475,fit/https://cdn.kalashnikovgroup.ru/static/images/7/q/3/7q3a0420-26826-1080.jpg',
    span: '1',
  },
  {
    img: 'https://img.kalashnikovgroup.ru/1400x475,fit/https://cdn.kalashnikovgroup.ru/static/images/7/q/3/7q3a0426-26827-1080.jpg',
    span: '1',
  },
  {
    img: 'https://img.kalashnikovgroup.ru/1400x475,fit/https://cdn.kalashnikovgroup.ru/static/images/7/q/3/7q3a3094-26471-1080.jpg',
    span: '1',
  },
  {
    img: 'https://img.kalashnikovgroup.ru/1400x475,fit/https://cdn.kalashnikovgroup.ru/static/images/7/q/3/7q3a3118-26472-1080.jpg',
    span: '1',
  },
  {
    img: 'https://img.kalashnikovgroup.ru/1400x475,fit/https://cdn.kalashnikovgroup.ru/static/images/7/q/3/7q3a3075-26474-1080.jpg',
    span: '2',
  },
  {
    img: 'https://img.kalashnikovgroup.ru/1400x475,fit/https://cdn.kalashnikovgroup.ru/static/images/7/q/3/7q3a3072-26473-1080.jpg',
    span: '1',
  },
];