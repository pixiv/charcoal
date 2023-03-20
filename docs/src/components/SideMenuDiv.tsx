import styled from 'styled-components';
import { theme } from '../utils/theme';


export const SideMenuDiv = styled.div`
  width: 232px;
  height: 100vh;
  overflow: auto;
  ${theme((o) => o.bg.background1)};
`;
