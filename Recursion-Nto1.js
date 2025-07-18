// Print Numbers from N to 1 (Descending Order)

function nToOne(num) {
  if (num === 0) return;
  console.log(num);
  nToOne(num - 1);
}

nToOne(6);
