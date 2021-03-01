import styled from "styled-components";

export const Title = styled.h3`
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: 24px;
`;

export const Post = styled.li`
  font-size: 22px;
  background-color: #423737;
  opacity: 0.75;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
  width: 80%;
  text-align: center;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    transform: scale(1.1);
  }
`;
