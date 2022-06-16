const createTD = (data) => {
  const td = document.createElement("td");
  td.appendChild(document.createTextNode(data));
  return td;
};

const buildTable = (data) => {
  const table = document.querySelector("#rolls");

  //remove all elements except header
  let trs = document.querySelectorAll("tr");
  for (let i = 1; i < trs.length; i++) {
    table.removeChild(trs[i]);
  }

  //add new elements
  for (let i = 0; i < data.length; i++) {
    const tr = document.createElement("tr");
    tr.appendChild(createTD(data[i].id));
    tr.appendChild(createTD(data[i].roll));
    table.appendChild(tr);
  }
};

//TODO
const refresh = () => {
  axios.get("http://localhost:3000/roll")
  .then((response) => {
    data = response.data;
    buildTable(data);
  })
};

//TODO
rollId = 0;
const handleClick = () => {
  rollId++;
  rollValue = Math.ceil(Math.random()*6);
  axios.post('/roll', {
    id: rollId,
    roll: rollValue
  })
  .then(function (response) {
    refresh();
  })
};

document.addEventListener("DOMContentLoaded", (event) => {
  refresh();
});
