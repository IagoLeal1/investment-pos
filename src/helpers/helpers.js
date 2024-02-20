const MONTHS = [
  '???',
  'jan',
  'fev',
  'mar',
  'abr',
  'mai',
  'jun',
  'jul',
  'ago',
  'set',
  'out',
  'nov',
  'dez',
];

export function getMonthDescription(monthNumber) {
  // if(monthNumber < 1 || monthNumber > 12) {
  //   return '???'
  // }

  // return MONTHS[monthNumber]

  return MONTHS[monthNumber] ?? '???'
}

export function formatMoney(moneyValue){
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency', 
    currency: 'BRL'
  }).format(moneyValue)
}

export function formatPercentage(percentageValue){
  const symbol = percentageValue <= 0 ? '' : '+'
  return symbol + percentageValue.toFixed(2).replace('.',',') + '%'
}
