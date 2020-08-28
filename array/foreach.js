const aprovados = ["Agatha", "Aldo", "Daniel", "Raquel"];

aprovados.forEach(function (name, indice) {
  console.log(`${indice + 1}) ${name}`);
});

aprovados.forEach((name) => console.log(name));

const exibirAprovados = aprovados.forEach((name) => console.log(name));
aprovados.forEach(exibirAprovados);

// const date = [{
//     city: "Feira de Santana",
//     city_ibge_code: "2910800",
//     confirmed: 9906,
//     confirmed_per_100k_inhabitants: 1611.06702,
//     date: "2020-08-17",
//     death_rate: 0.0166,
//     deaths: 164,
//     estimated_population_2019: 614872,
//     is_last: true,
//     order_for_place: 161,
//     place_type: "city",
//     state: "BA"
//     },
//     {
//     city: "Filadélfia",
//     city_ibge_code: "2910859",
//     confirmed: 335,
//     confirmed_per_100k_inhabitants: 2045.55169,
//     date: "2020-08-17",
//     death_rate: 0.009,
//     deaths: 3,
//     estimated_population_2019: 16377,
//     is_last: true,
//     order_for_place: 77,
//     place_type: "city",
//     state: "BA"
//     }]

//     // let resul = date.filter(function(p) {
//     //     return p.city == 'Feira de Santana'
//     // })
//     let resul= data.find ( element => element.city === "Feira de Santana" )

//     console.log(resul)
