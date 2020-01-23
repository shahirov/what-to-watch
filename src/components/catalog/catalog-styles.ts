import styled from 'styled-components'

export const CatalogButton = styled.button`
  display: block;
  width: 100%;
  padding: 29px 40px;
  background: 0 0;
  border: 1px solid rgba(217, 202, 116, 0.2);
  border-radius: 8px;
  transition: border-color 0.2s;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  color: #d9ca74;
  cursor: pointer;

  &:hover {
    border-color: rgba(217, 202, 116, 0.5);
  }
`
