import styled from 'styled-components';

export const ProfileContainer = styled.div`
    width: 280px;
    text-align: center;
    background-color: white;
    box-shadow: 0px 10px 10px 0px rgba(245, 245, 247, 0.10);
    border-radius: 16px;
    border: 2px solid rgba(79, 46, 232, 0.40);

   img {
        border-radius: 50%;
        width: 120px;
        margin: auto;
   }

   .name {
        font-weight: 700;
        font-size: 18px;
        margin-top: 18px;
   }

   .location, .tag {
        color: rgba(0, 0, 0, 0.50);
        margin-top: 10px;
    }
    
    .tag:hover {
        color: #EAC645;
    }
    .description {
        padding: 20px 0;
    }
`;

export const Stats = styled.ul`
    background-color: #f6f6f6;
    display: flex;
    border-radius: 16px;
    margin: 0 8px 8px 8px;


    li{
        padding: 12px;
        width: 33%;
        border-radius: 14px;
    }

    li:nth-child(2) {
        box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.15);
    }

    li span {
        display: block;
    }
    li:hover {
        background-color: #4F2EE8;
        color: white;
    }
`;