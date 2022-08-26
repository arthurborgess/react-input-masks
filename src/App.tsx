import { Container, GlobalStyle } from "./App.styles";
import { CnpjInput } from "./components/CnpjInput";
import { CpfInput } from "./components/CpfInput";
import { InputCurrency } from "./components/MaskedInput";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <label htmlFor="currency">Currency input</label>
        <InputCurrency id="currency" />
        <label htmlFor="cpf">CPF input</label>
        <CpfInput id="cpf" />
        <label htmlFor="cnpj">CNPJ input</label>
        <CnpjInput id="cnpj" />
      </Container>
    </>
  );
};