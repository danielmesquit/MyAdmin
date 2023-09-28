import { styled } from "styled-components";

export const Container = styled.div`
    position: fixed;
    background-color: #e8e9ea;
    width: 300px;
    height: 100%;
    padding: 10px;



    ul {
        display: flex;
        flex-direction: column;
        li{
            border-radius: 4px;
            padding: 8px 4px;
            background-color: #e8e9ea;            
            cursor: pointer;
            transition: all .3s ease;
            &:hover {
                background-color: #ccd0d3;
                color: #2196f3
            }
        }
    }

`