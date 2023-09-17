// global styles
import './assets/styles/normalize.css'
import './assets/styles/global.css'
import './App.scss'

import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom"
import React, {useLayoutEffect, useState} from "react"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import $api, {userLang} from "./api";
import toast from "react-hot-toast";
import Footer from "./components/footer/Footer";


const Wrapper = ({children}) => {
    const location = useLocation()
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0)
    }, [location.pathname])
    return children
}


const App = () => {


    const userLang = navigator.language || navigator.userLanguage || 'ru'
    const [lang, setLang] = useState(userLang === 'uz' ? 'uz' : 'ru')


    const [modal, setModal] = useState(false)
    const [form, setForm] = useState(false)

    const [name, setName] = useState('')
    const [birth, setBirth] = useState('')
    const [city, setCity] = useState('Xorazm')
    const [region, setRegion] = useState('')
    const [street, setStreet] = useState('')
    const [homeNumber, setHomeNumber] = useState('')
    const [debtAmount, setDebtAmount] = useState('')
    const [duration, setDuration] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [workCount, setWorkCount] = useState(0)
    const [desc, setDesc] = useState('')
    const [key, setKey] = useState('')

    const postForm = (e) => {
        e.preventDefault()

        const individual = {

        }
        const legal = {

        }

        $api
            .post('', !form ? individual : legal)
            .then(() => {
                toast.success('Success !')
                setTimeout(() => setModal(false), 1000)

                setName('')
                setBirth('')
                setRegion('')
                setStreet('')
                setHomeNumber('')
                setDebtAmount('')
                setDuration('')
                setPhoneNumber('')
                setWorkCount(0)
                setDesc('')
                setKey('')
            })
    }


    return (
        <div className="App">
            <BrowserRouter>
                <Wrapper>

                    <Header lang={lang} setLang={setLang}/>

                    <Routes>

                            <Route path='/' element={<Home lang={lang} setModal={setModal}/>}/>

                    </Routes>

                    <Footer lang={lang} />

                </Wrapper>
            </BrowserRouter>

            <div className={`modal animation ${modal ? 'active' : ''}`}>
                <form className={`form animation ${modal ? 'active' : ''}`} onSubmit={postForm}>
                    <div className="form__titles row between align-center">
                        <span className='title'>Arizangizni qoldiring</span>
                        <span className='close no-copy' onClick={() => setModal(false)}>
                            <i className="fa-solid fa-xmark icon"/>
                        </span>
                    </div>
                    <div className="form__content">
                        <div className='nav grid g1'>
                            <span
                                className={`nav__item no-copy ${!form ? 'active' : ''}`}
                                onClick={() => setForm(false)}
                            >
                                Jismoniy shaxslar
                            </span>
                            <span
                                className={`nav__item no-copy ${form ? 'active' : ''}`}
                                onClick={() => setForm(true)}
                            >
                                Yuridik shaxslar
                            </span>
                        </div>
                        {(
                            !form ?
                                <div className='wrapper'>
                                    <label>
                                        <span className='txt'>F.I.Sh: *</span>
                                        <input
                                            className='inp'
                                            type="text"
                                            required={true}
                                            placeholder='F.I.Sh'
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        <span className='txt'>Tug'ilgan kun: *</span>
                                        <input
                                            className='inp'
                                            type="date"
                                            required={true}
                                            onChange={(e) => setBirth(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        <span className='txt'>Viloyat: *</span>
                                        <select
                                            className='inp'
                                            onChange={(e) => setCity(e.target.value)}
                                        >
                                            <option value="Xorazm">Xorazm</option>
                                            <option value="Buxoro">Buxoro</option>
                                            <option value="Farg">Farg'ona</option>
                                            <option value="Jizzax">Jizzax</option>
                                            <option value="Andijon">Andijon</option>
                                            <option value="Namangan">Namangan</option>
                                            <option value="Navoiy">Navoiy</option>
                                            <option value="Qashqadaryo">Qashqadaryo</option>
                                            <option value="Qoraqalpog'iston Respublikasi">Qoraqalpog'iston
                                                Respublikasi
                                            </option>
                                            <option value="Samarqand">Samarqand</option>
                                            <option value="Sirdaryo">Sirdaryo</option>
                                            <option value="Surxondaryo">Surxondaryo</option>
                                            <option value="Toshkent viloyati">Toshkent viloyati</option>
                                            <option value="Toshkent">Toshkent</option>
                                        </select>
                                    </label>
                                    <label>
                                        <span className='txt'>Shahar yoki tuman: *</span>
                                        <input
                                            className='inp'
                                            type="text"
                                            required={true}
                                            placeholder='Shahar yoki tuman'
                                            onChange={(e) => setRegion(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        <span className='txt'>Ko'cha: *</span>
                                        <input
                                            className='inp'
                                            type="text"
                                            required={true}
                                            placeholder='Kocha'
                                            onChange={(e) => setStreet(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        <span className='txt'>Uy raqami: *</span>
                                        <input
                                            className='inp'
                                            type="text"
                                            required={true}
                                            placeholder='Uy raqami'
                                            onChange={(e) => setHomeNumber(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        <span className='txt'>Qarz miqdori: *</span>
                                        <input
                                            className='inp'
                                            type="text"
                                            required={true}
                                            placeholder='Qarz miqdori'
                                            onChange={(e) => setDebtAmount(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        <span className='txt'>Muddati: *</span>
                                        <input
                                            className='inp'
                                            type="text"
                                            required={true}
                                            placeholder='Muddati'
                                            onChange={(e) => setDuration(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        <span className='txt'>Telefon nomer: *</span>
                                        <input
                                            className='inp'
                                            type="tel"
                                            required={true}
                                            placeholder='+998'
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        <span className='txt'>Yaratiladigan ish o'rni:</span>
                                        <input
                                            className='inp'
                                            type="number"
                                            placeholder='Yaratiladigan ish orni'
                                            onChange={(e) => setWorkCount(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        <span className='txt'>Murojat matni: *</span>
                                        <textarea
                                            className='inp area'
                                            required={true}
                                            placeholder='Murojat matni'
                                            onChange={(e) => setDesc(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        <span className='txt'>Kalit raqami: *</span>
                                        <input
                                            className='inp'
                                            type="text"
                                            required={true}
                                            placeholder='Kalit raqami'
                                            onChange={(e) => setKey(e.target.value)}
                                        />
                                    </label>
                                    <button className='form__btn global-btn'>Ariza yuborish</button>
                                </div>
                                :
                                <div className='wrapper'>
                                    <label>
                                        <span className='txt'>Tashkilot nomi: *</span>
                                        <input
                                            className='inp'
                                            type="text"
                                            required={true}
                                            placeholder='Tashkilot nomi'
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        <span className='txt'>Yuridik manzil: *</span>
                                        <input
                                            className='inp'
                                            type="text"
                                            required={true}
                                            placeholder='Yuridik manzil'
                                            onChange={(e) => setRegion(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        <span className='txt'>MFO: *</span>
                                        <input
                                            className='inp'
                                            type="text"
                                            required={true}
                                            placeholder='MFO'
                                            onChange={(e) => setStreet(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        <span className='txt'>INN: *</span>
                                        <input
                                            className='inp'
                                            type="text"
                                            required={true}
                                            placeholder='INN'
                                            onChange={(e) => setHomeNumber(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        <span className='txt'>Telefon nomer: *</span>
                                        <input
                                            className='inp'
                                            type="tel"
                                            required={true}
                                            placeholder='+998'
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        <span className='txt'>Hisob raqami: *</span>
                                        <input
                                            className='inp'
                                            type="text"
                                            required={true}
                                            placeholder='Hisob raqami'
                                            onChange={(e) => setBirth(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        <span className='txt'>Qarz miqdori: *</span>
                                        <input
                                            className='inp'
                                            type="text"
                                            required={true}
                                            placeholder='Qarz miqdori'
                                            onChange={(e) => setDebtAmount(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        <span className='txt'>Muddati: *</span>
                                        <input
                                            className='inp'
                                            type="text"
                                            required={true}
                                            placeholder='Muddati'
                                            onChange={(e) => setDuration(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        <span className='txt'>Yaratiladigan ish o'rni:</span>
                                        <input
                                            className='inp'
                                            type="number"
                                            placeholder='Yaratiladigan ish orni'
                                            onChange={(e) => setWorkCount(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        <span className='txt'>Murojat matni: *</span>
                                        <textarea
                                            className='inp area'
                                            required={true}
                                            placeholder='Murojat matni'
                                            onChange={(e) => setDesc(e.target.value)}
                                        />
                                    </label>
                                    <label>
                                        <span className='txt'>Kalit raqami: *</span>
                                        <input
                                            className='inp'
                                            type="text"
                                            required={true}
                                            placeholder='Kalit raqami'
                                            onChange={(e) => setKey(e.target.value)}
                                        />
                                    </label>
                                    <button className='form__btn global-btn'>Ariza yuborish</button>
                                </div>
                        )}
                    </div>
                </form>
                <div className="bg" onClick={() => setModal(false)}/>
            </div>
        </div>
    )
}

export default App