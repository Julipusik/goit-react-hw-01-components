import styled from 'styled-components';

export const Item = styled.li`
    display: flex;
    align-items: center;
    background-color: #f6f6f6;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
    padding: 6px 24px;
    margin-bottom: 8px;

    .avatar{
        margin-left: 12px;
        width: 40px;
        height: 40px;
    }

    .name {
        margin-left: 12px;
        font-size: 18px;
    }

    .offline, .online {
        display: block;
        border-radius: 50%;
        
        width: 8px;
        height: 8px;
    }

    .offline {
        background-color: red;
    }

    .online {
        background-color: green;
    }
`