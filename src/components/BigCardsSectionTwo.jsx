import React from 'react'

const BigCardsSectionTwo = () => {
  return (
    <div>
        <div className="max-w-[1750px] w-[95%] m-auto mt-0">
            <div className="px-10 my-5">
                <h1 className="text-3xl font-bold">Популярные направления</h1>
                <p className="text-xl">Проводим индивидуальные и групповые экскурсии на русском языке</p>
            </div>
            <div className="w-[96%] m-auto mt-0 flex flex-wrap items-center justify-around">
                <div className="bg-[url(./assets/sectionTwoMedium1stCard.png)] bg-center bg-no-repeat bg-size-[100%] w-[420px] h-[460px] p-5 flex flex-col items-start justify-end">
                    <h1 className="text-2xl text-white font-semibold">Экскурсии<br />в Санкт-Петербурге</h1>
                    <button className="bg-yellow-300 p-2 px-8 rounded-2xl hover:scale-110 transition-all ease-linear active:scale-90">15 экскурсий</button>
                </div>
                <div className="bg-[url(./assets/sectionTwoMedium2ndCard.png)] bg-center bg-no-repeat bg-size-[100%] w-[420px] h-[460px] p-5 flex flex-col items-start justify-end">
                    <h1 className="text-2xl text-white font-semibold">Экскурсии<br />в Стамбуле</h1>
                    <button className="bg-yellow-300 p-2 px-8 rounded-2xl hover:scale-110 transition-all ease-linear active:scale-90">15 экскурсий</button>
                </div>
                <div className="bg-[url(./assets/sectionTwoMedium3thCard.png)] bg-center bg-no-repeat bg-size-[100%] w-[420px] h-[460px] p-5 flex flex-col items-start justify-end">
                    <h1 className="text-2xl text-white font-semibold">Экскурсии<br />в Дубае</h1>
                    <button className="bg-yellow-300 p-2 px-8 rounded-2xl hover:scale-110 transition-all ease-linear active:scale-90">15 экскурсий</button>
                </div>
            </div>
            <div className="w-[96%] m-auto mt-0 flex flex-wrap items-center justify-around">
                <div className="bg-[url(./assets/sectionTwoBig1stCard.png)] bg-center bg-no-repeat bg-size-[100%] w-[630px] h-[490px] px-5 py-12 flex flex-col items-start justify-end">
                    <h1 className="text-2xl text-white font-semibold">Экскурсии<br />в Калининграде</h1>
                    <button className="bg-yellow-300 p-2 px-8 rounded-2xl hover:scale-110 transition-all ease-linear active:scale-90">15 экскурсий</button>
                </div>
                <div className="bg-[url(./assets/sectionTwoBig2ndCard.png)] bg-center bg-no-repeat bg-size-[100%] w-[630px] h-[490px] px-5 py-12 flex flex-col items-start justify-end">
                    <h1 className="text-2xl text-white font-semibold">Экскурсии<br />в Мурманске</h1>
                    <button className="bg-yellow-300 p-2 px-8 rounded-2xl hover:scale-110 transition-all ease-linear active:scale-90">15 экскурсий</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BigCardsSectionTwo
