import styled from 'styled-components';

export const Table = styled.table`
    width: 50%;
    text-align: center;
    border-collapse: collapse;
    border: 2px solid rgba(79, 46, 232, 0.40);
    margin-left: 16px;    


    th, td {
        border: 1px solid #ccc;
        padding: 8px;
    }

    tr:nth-child(even) {
        background-color: #f6f6f6;
    }
`;