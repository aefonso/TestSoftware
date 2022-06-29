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
        const { getByText } = render(<App />);

        const textoInicial = getByText("Cálculo do Dobro");
        expect(textoInicial).toBeDefined();
        // Solucao 2//expect(textoInicial).toBeThruthy();
    })
})