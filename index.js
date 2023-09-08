const url = 'https://restcountries.com/v3.1/all';

const countriesList = document.getElementById('countriesList');

async function fetchCountries() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        // recorre los datos de los paises y muestra la información
        data.forEach(country => {

            const countryCode = country.cca2;
            // const urlFlag = `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`;
            const urlFlag = `https://flagcdn.com/256x192/${countryCode.toLowerCase()}.png`;

            const countryInfo = `
                <div class="col">
                    <div class="card text-bg-light mb-3" style="width: 18rem;">
                        <img src="${urlFlag}" alt= "${country.name.common}" >
                        <div class="card-body">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><h5>${country.name.common}</h5></li>
                                <li class="list-group-item"><p>Capital: ${country.capital}</p></li>
                                <li class="list-group-item"><p>Población: ${country.population}</p></li>
                                <li class="list-group-item"><p>Área: ${country.area} km²</p></li>
                                <li class="list-group-item"><p>Región: ${country.region}</p></li>
                            </ul>
                        </div>    
                    </div>
                </div>
            `;
            countriesList.innerHTML += countryInfo;
        });
        } catch (error) {
            console.error('Error al obtener datos de países:', error);
        }
    }

 // llama a la función para cargar la información de los países
fetchCountries();

