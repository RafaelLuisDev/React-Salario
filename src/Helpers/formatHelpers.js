const formatter = Intl.NumberFormat('pt-BR', { style: 'percent', minimumFractionDigits: 2 });
const formatterCurrency = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

function formatNumber(value) {
    return formatter.format(value);
}

function formatValue(value) {
    return formatterCurrency.format(value);
}

export { formatNumber, formatValue };
