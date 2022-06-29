import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native'
import App from '../App';

describe('Teste de Snapshot', () => {
    it('Snapshot de App', () => {
        const tela = renderer.create(<App/>).toJSON();
        expect(tela).toMatchSnapshot();
    })
})

describe('Teste de Componentes', () => {
    it('Teste de Componentes de App', () => {
        const { getByText, getByTestId } = render(<App />);

       // const textoInicial = getByText("Cálculo do Dobro");
        //const textoInicial = getByTestId("Entrada");
        expect(getByTestId("Entrada")).toBeDefined();
        expect(getByTestId("calcular")).toBeDefined();
        expect(getByTestId("resultado")).toBeDefined();
        //expect(textoInicial).toBeDefined();
        // Solucao 2//expect(textoInicial).toBeThruthy();
    })
})