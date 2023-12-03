import { WeatherBox, WeatherDiv, WeatherGradusBox, WeatherImg, WeatherGradusDesc, WeatherGradusNumber, WeatherGradusText, WeatherDescBox, WeatherDescBoxItems, WeatherDescBoxItemsImg, WeatherDescBoxItemsText, WeatherRoll, WeatherForm, WeatherFormInput, WeatherFormSubmit, WeatherTitle } from "./weather"
import { useState, useRef, useEffect } from "react"

import weather1 from "../../assets/svg/desc-img1.svg"
import weather2 from "../../assets/svg/desc-cloud.svg"
import weather3 from "../../assets/svg/desc-img3.svg"
import weather4 from "../../assets/svg/sunny.svg"
import { useFetcher } from "react-router-dom"
import { log } from "async"


const Weather = () => {

    const [data, setData] = useState([])
    const [value, setValue] = useState()
    const [give, setGive] = useState("andijon")
    const elRemove = useRef()

    const [loading, setLoading] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${give}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`)
            .then((res) =>res.json())
            .then((data) => setData(data))
            .then((res)=>{
                elRemove.current.value = ""
            })
    }, [give])

    console.log(data)
    
    const onReflesh = () => {
        const hours = new Date().getHours()
        const minuts = new Date().getMinutes()
        const seconds = new Date().getSeconds()

        setHours(hours)
        setMinutes(minuts)
        setSeconds(seconds)
    }


    return (
        <section>
            <WeatherBox>
                <WeatherTitle>{data?.name}</WeatherTitle>
                {/* <div>{hours}:{minutes}:{seconds}</div> */}
                <WeatherDiv>
                    <WeatherGradusBox>
                        <WeatherImg src={weather4} />
                        <WeatherGradusDesc>
                            <WeatherGradusNumber>{data?.main?.humidity}<WeatherRoll /></WeatherGradusNumber>
                            <WeatherGradusText>sunny</WeatherGradusText>
                        </WeatherGradusDesc>
                    </WeatherGradusBox>
                    <WeatherDescBox>
                        <WeatherDescBoxItems>
                            <WeatherDescBoxItemsImg src={weather1} />
                            <WeatherDescBoxItemsText>{data?.wind?.speed}km/h</WeatherDescBoxItemsText>
                        </WeatherDescBoxItems>
                        <WeatherDescBoxItems>
                            <WeatherDescBoxItemsImg src={weather2} />
                            <WeatherDescBoxItemsText>{data?.wind?.deg}%</WeatherDescBoxItemsText>
                        </WeatherDescBoxItems>
                        <WeatherDescBoxItems>
                            <WeatherDescBoxItemsImg src={weather3} />
                            <WeatherDescBoxItemsText>{data?.wind?.gust}</WeatherDescBoxItemsText>
                        </WeatherDescBoxItems>
                    </WeatherDescBox>
                </WeatherDiv>

                <WeatherForm>
                    <WeatherFormInput type="text" placeholder="type here" ref={elRemove} onChange={(e) => { setValue(e.target.value) }} />
                    <WeatherFormSubmit onClick={(evt) => {
                        evt.preventDefault()
                        setGive(value)
                    }}>Clikc</WeatherFormSubmit>
                </WeatherForm>
            </WeatherBox>
        </section>
    )
}

export default Weather