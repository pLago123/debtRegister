const CurrencyFormatter = (number: number): string =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    number,
  );

export default CurrencyFormatter;
