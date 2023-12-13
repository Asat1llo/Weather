import { WeatherBox, WeatherDiv, WeatherGradusBox, WeatherImg, WeatherGradusDesc, WeatherGradusNumber, WeatherGradusText, WeatherDescBox, WeatherDescBoxItems, WeatherDescBoxItemsImg, WeatherDescBoxItemsText, WeatherRoll, WeatherForm, WeatherFormInput, WeatherFormSubmit, WeatherTitle } from "./weather"
import { useState, useRef, useEffect } from "react"

import weather1 from "../../assets/svg/desc-img1.svg"
import weather2 from "../../assets/svg/desc-cloud.svg"
import weather3 from "../../assets/svg/desc-img3.svg"
import weather4 from "../../assets/svg/sunny.svg"
import moon from "../../assets/svg/moon.svg"
import { useFetcher } from "react-router-dom"

const Weather = () => {

    const [data, setData] = useState([])
    const [value, setValue] = useState()
    const [give, setGive] = useState("andijon")
    const elRemove = useRef()
    const [bg, setBg] = useState("#C9E5FF")
    const [img, setImg] = useState(weather4)
    const [transform, setTransform] = useState(false)

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${give}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`)
            .then((res) => res.json())
            .then((data) => setData(data))
            .then((res) => {
                elRemove.current.value = ""
            })
    }, [give,transform])


    const date = new Date().getHours()
    // const date =  6

    useEffect(() => {
        if (date >= 19) {
            setBg("#1F2E54")
            setImg(moon)
            setTransform(true)
        }
        else if(date >= 6){
            setTransform(true)
            setBg("#C9E5FF")
            console.log("19");
        }
    }, [])

    return (
        <section>
            <WeatherBox>
                <WeatherTitle>{data?.name}</WeatherTitle>
                <WeatherDiv bg={bg}>
                    <WeatherGradusBox>
                        <WeatherImg src={img} transform={transform} />
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