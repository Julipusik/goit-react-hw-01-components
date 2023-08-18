import styled from 'styled-components';

export const Section = styled.section`
    width: 280px;
    margin-top: 16px;
    padding: 20px 0;
    text-align: center;
    background-color: white;
    box-shadow: 0px 10px 10px 0px rgba(245, 245, 247, 0.10);
    border-radius: 16px;
    border: 2px solid rgba(79, 46, 232, 0.40);

    h2 {
        font-size: 18px;
        margin-bottom: 12px
    }

    .stat-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 14px;
    }

    .item {
        width: 72px;
        background-color: #f6f6f6;
        box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.15);
        padding: 8px 0;
        border-radius: 14px;

        span {
            display: block;
        }
    }
    .item:hover {
        background-color: #4F2EE8;
        color: white;
    }
`