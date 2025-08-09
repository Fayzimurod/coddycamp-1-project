import React from 'react'

const Form = () => {
  return (
    <div>
        <div className="max-w-[1750px] w-[95%] m-auto mt-0">
          <div className="">
            <div className="m-auto mt-25 max-w-[500px]">
              <div className="flex justify-center items-center h-full">
                <form className="w-[500px] h-[450px] p-5 border border-zinc-200 rounded-md flex flex-col items-center justify-around" action="">
                  <h1 className="mb-3 pl-6 text-2xl font-medium">Регистрация</h1>
                  <input className="w-full p-3 bg-white rounded-md hover:bg-zinc-100 mb-3 border-b-[3px] border-gray-400 hover:border-gray-600 outline-none focus:border-blue-500" type="text" placeholder="Имя" required />
                  <input className="w-full p-3 bg-white rounded-md hover:bg-zinc-100 mb-3 border-b-[3px] border-gray-400 hover:border-gray-600 outline-none focus:border-blue-500" type="email" placeholder="E-mail" required />
                  <input className="w-full p-3 bg-white rounded-md hover:bg-zinc-100 mb-3 border-b-[3px] border-gray-400 hover:border-gray-600 outline-none focus:border-blue-500" type="text" placeholder="Телефон" required />
                  <button className="w-[100%] py-3 px-10 bg-yellow-300 transition ease-linear rounded-md text-black hover:bg-blue-500 active:bg-[seagreen]" type="submit">Зарегистрироваться</button>
                  <p className="text-center">Регистрируясь, вы принимаете условия.</p>
                  <p className="cursor-pointer text-center hover:underline">Уже есть аккаунт?</p>
                  <button className="w-[100%] py-3 px-10 bg-zinc-400 transition ease-linear rounded-md text-white hover:bg-blue-500 active:bg-[seagreen]" type="submit">Войти</button>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Form
