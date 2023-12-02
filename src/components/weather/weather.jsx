import { WeatherBox, WeatherDiv, WeatherGradusBox, WeatherImg, WeatherGradusDesc, WeatherGradusNumber, WeatherGradusText, WeatherDescBox, WeatherDescBoxItems, WeatherDescBoxItemsImg, WeatherDescBoxItemsText, WeatherRoll, WeatherForm, WeatherFormInput, WeatherFormSubmit } from "./weather"
import { useState, useRef, useEffect } from "react"

import weather1 from "../../assets/svg/desc-img1.svg"
import weather2 from "../../assets/svg/desc-cloud.svg"
import weather3 from "../../assets/svg/desc-img3.svg"
import weather4 from "../../assets/svg/sunny.svg"


const Weather = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [value, setValue] = useState()
    const [give, setGive] = useState('andijon')


    async function getData() {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${give}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`)
            const data = await res.json()
            setData(data)
        }

        catch {
            console.log("error")
        }       
    }

    useEffect(() => {
        getData()
    }, [loading])

    console.log(data?.weather[0]?.main)

    return (
        <section>
            <WeatherBox>
                <WeatherDiv>
                    <WeatherGradusBox>
                        <WeatherImg src={weather4} />
                        <WeatherGradusDesc>
                            <WeatherGradusNumber>{data?.main?.humidity}<WeatherRoll/></WeatherGradusNumber>
                            <WeatherGradusText>{data?.weather[0]?.main}</WeatherGradusText>
                        </WeatherGradusDesc>
                    </WeatherGradusBox>
                    <WeatherDescBox>
                        <WeatherDescBoxItems>
                            <WeatherDescBoxItemsImg src={weather1} />
                            <WeatherDescBoxItemsText>16 km/h</WeatherDescBoxItemsText>
                        </WeatherDescBoxItems>
                        <WeatherDescBoxItems>
                            <WeatherDescBoxItemsImg src={weather2} />
                            <WeatherDescBoxItemsText>83 %</WeatherDescBoxItemsText>
                        </WeatherDescBoxItems>
                        <WeatherDescBoxItems>
                            <WeatherDescBoxItemsImg src={weather3} />
                            <WeatherDescBoxItemsText>2 of 10</WeatherDescBoxItemsText>
                        </WeatherDescBoxItems>
                    </WeatherDescBox>
                </WeatherDiv>

                <WeatherForm>
                    <WeatherFormInput type="text" placeholder="type here" onChange={(e) => { setValue(e.target.value) }} />
                    <WeatherFormSubmit onClick={(e) => {
                        e.preventDefault()
                        setLoading(true)
                        setGive(value)
                    }
                    }>Clikc</WeatherFormSubmit>
                </WeatherForm>
            </WeatherBox>
        </section>
    )
}

export default Weather