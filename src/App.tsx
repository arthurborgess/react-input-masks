import { Container, GlobalStyle } from "./App.styles";
import { CepInput } from "./components/CepInput";
import { CnpjInput } from "./components/CnpjInput";
import { CpfInput } from "./components/CpfInput";
import { CurrencyInput } from "./components/CurrencyInput";
import { PhoneInput } from "./components/PhoneInput";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <label htmlFor="currency">Currency input</label>
        <CurrencyInput id="currency" />

        <label htmlFor="cpf">CPF input</label>
        <CpfInput id="cpf" />

        <label htmlFor="cnpj">CNPJ input</label>
        <CnpjInput id="cnpj" />

        <label htmlFor="phone">Phone input</label>
        <PhoneInput id="phone" />

        <label htmlFor="cep">Cep input</label>
        <CepInput id="cep" />
      </Container>
    </>
  );
};