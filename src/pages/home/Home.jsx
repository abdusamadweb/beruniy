import React from 'react'
import Hero from "./hero/Hero";
import Goal from "./goal/Goal";
import SliderS from "./slider/SliderS";
import Partners from "./partners/Partners";
import Confirm from "./confirm/Confirm";
import Work from "./work/Work";
import Cooperate from "./cooperate/Cooperate";
import Certification from "./certification/Certification";

const Home = ({ lang, setModal }) => {

    return (
        <div>
            <Hero lang={lang} setModal={setModal} />
            <Goal lang={lang} />
            <SliderS lang={lang} setModal={setModal} />
            <Partners lang={lang} />
            <Confirm lang={lang} />
            <Work lang={lang} />
            <Cooperate lang={lang} setModal={setModal} />
            <Certification lang={lang} />
            <iframe
                style={{width: '100%', height: '400px'}}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.4100272862183!2d60.73971711450085!3d41.69008338513977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfd4afe83d4e39%3A0x488112b8d5343d7a!2sBeruniy%20Tumani%20Khokimligi!5e0!3m2!1sen!2s!4v1657067626622!5m2!1sen!2s"
                frameBorder="0"
            />
        </div>
    )
}

export default Home