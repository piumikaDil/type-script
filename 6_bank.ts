//----------------------Bank assignment----------------------------------------------

const owner_name_input_element = document.getElementById(
  "ownerName"
) as HTMLInputElement;
const fixed_amount_input_element = document.getElementById(
  "fixedAmount"
) as HTMLInputElement;
const add_fix_btn_element = document.getElementById(
  "addFixBtn"
) as HTMLInputElement;
const tbl_body_element = document.getElementById(
  "fixedDepositTableBody"
) as HTMLInputElement;

add_fix_btn_element.addEventListener("click", () => {
  let owner_name = owner_name_input_element.value;
  let fixed_amount = fixed_amount_input_element.value;

  console.log(owner_name);
  console.log(fixed_amount);

  console.log("Hello bank");
});

class Account {
  owner_name: string;
  fixed_amount: number;
  interest_rate: number;
  annual_interest: number;

  constructor(
    owner_name: string,
    fixed_amount: number,
    rate: number,
    annual_interest: number
  ) {
    this.owner_name = owner_name;
    this.fixed_amount = fixed_amount;
    this.interest_rate = rate;
    this.annual_interest = annual_interest;
  }
}

let rate = 12.5;
let accounts: Account[] = [];

add_fix_btn_element.addEventListener("click", () => {
  let owner_name = owner_name_input_element.value;
  let fixed_amount = fixed_amount_input_element.value;
  let annual_interest = (+fixed_amount * rate) / 100;
  let account = new Account(owner_name, +fixed_amount, rate, annual_interest);
  accounts.push(account);
  //   console.log(accounts);

  console.log(`owner= ${owner_name}, fixed amount= ${fixed_amount}`);
  updateTbl();
});

function updateTbl() {
  tbl_body_element.innerHTML = "";
  accounts.map((r) => {
    let record_element = document.createElement("tr");
    let record_data = `<td>${r.owner_name}</td>
                        <td>${r.fixed_amount}</td>
                        <td>${r.interest_rate}</td>
                        <td>${r.annual_interest}</td>`;
    record_element.innerHTML = record_data;

    tbl_body_element.appendChild(record_element);
  });
}
