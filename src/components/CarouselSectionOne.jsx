import React from 'react'

const CarouselSectionOne = () => {
  return (
    <div>
        <div className="">
            <div className="bg-[url(./assets/sectionOneHeroCarouselImage.png)] m-auto mt-5 bg-center bg-no-repeat bg-size-[100%] h-[75vh] w-[90%] rounded-2xl">
              <h1 className="text-center font-bold text-4xl pt-25">Поиск и бронирование<br />экскурсий</h1>
              <p className="text-center pt-5">Экскурсии и частные гиды в России и за рубежом</p>
              <form action="" className="bg-white py-3 rounded-3xl w-[550px] mt-10 m-auto flex items-center justify-around">
                <input className="outline-none p-2 w-75 border-b-2 border-zinc-400 rounded-md focus:border-yellow-500" type="search" placeholder="Выберите направление" />
                <button className="bg-yellow-300 p-2 px-8 rounded-2xl">Найти</button>
              </form>
                <div className="flex gap-5 items-center justify-center mt-50">
                  <button className="bg-zinc-400 py-2 px-4 rounded-3xl text-white hover:scale-120 transition-all ease-linear active:scale-90">Дубай</button>
                  <button className="bg-zinc-400 py-2 px-4 rounded-3xl text-white hover:scale-120 transition-all ease-linear active:scale-90">Стамбул</button>
                  <button className="bg-zinc-400 py-2 px-4 rounded-3xl text-white hover:scale-120 transition-all ease-linear active:scale-90">Санкт-петербург</button>
                  <button className="bg-zinc-400 py-2 px-4 rounded-3xl text-white hover:scale-120 transition-all ease-linear active:scale-90">Казань</button>
                  <button className="bg-zinc-400 py-2 px-4 rounded-3xl text-white hover:scale-120 transition-all ease-linear active:scale-90">Мурманск</button>
                </div>
            </div>
          </div>
    </div>
  )
}

export default CarouselSectionOne
