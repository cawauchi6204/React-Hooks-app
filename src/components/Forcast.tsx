import React, { FunctionComponent } from "react";
import styled from "styled-components";

export const Forcast: FunctionComponent<ForcastProps> = (props) => {
    return (
        <Wrapper>
            <DateLabel>{props.dateLabel}</DateLabel>
            <Telop>{props.telop}</Telop>
            <Date>{props.date}</Date>
            <Image src="{props.imageUrl}" alt={props.imageAlt} />
            <Temperature>
                <Min>{props.minTemperature}</Min>
                <Infix>{"/"}</Infix>
                <Max>{props.maxTemperature}</Max>
            </Temperature>
        </Wrapper>
    )
}

function App() {
    const forcasts = [
        {
            dateLabel: "今日",
            telop: "雨のち曇り",
            date: "2020-06-14",
            maxTemperature: "27",
            imageUrl: "http://weather.livedoor.com/img/icon/20.gif"
        },
        {
            dateLabel: "明日",
            telop: "雨のち曇",
            date: "2020-06-15",
            minTemperature: "24",
            maxTemperature: "31",
            imageUrl: "http://weather.livedoor.com/img/icon/20.gif"
        },
    ]
    return (
        <div>
            {forcasts.map((f) => {
                return <Forcast key={f.date}{...f} />
            })}
        </div>
    )
}

type ForcastProps = {
    dateLabel: string;
    telop: string;
    date: string;
    minTmperature?: string;
    maxTemperature: string;
    imageUrl: string;
    imageAlt?: string;
}

const Wrapper = styled.div`
    width: 150px;
    margin-top: 10px;
    margin-right: 10px;
    padding: 3px;
    font-size: 1em;
    border: solid 1px lightSteelblue;
    text-align: center;
    float: left;
`

const DateLabel = styled.div`
    font-size: 1.2em;
    line-height: 1.5em;
    margin-top: 2px;
    background-color: royalblue;
    color: "fff;
`
