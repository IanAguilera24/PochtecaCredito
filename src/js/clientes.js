function updateSelects() {
    const sociedadSelect = document.getElementById('sociedad');
    const divisionSelect = document.getElementById('divisionSucursal');
    const bancoSelect = document.getElementById('banconuestro');
    
    const sociedad = sociedadSelect.value;

    const divisionOptions = {
        "PochMP": [
            "Pochteca MP San Juan",
            "Pochteca MP Minatitlan",
            "Pochteca MP Cancun",
            "Pochteca MP Puebla",
            "Pochteca MP Leon"
        ],
        "PochPapel": [
            "Pochteca Papel Vallejo",
            "Pochteca Papel Morelia",
            "Pochteca Papel Guadalajara",
            "Pochteca Papel Cancun",
            "Pochteca Papel Tampico"
        ],
        "CLar": [
            "Conjunto Lar Bolivar",
            "Conjunto Lar Oriente",
            "Conjunto Lar San Juan",
            "Conjunto Lar Ecatepec",
            "Conjunto Lar Tlanepantla"
        ],
        "SolAmb": [
            "Soluciones Amb Cancun",
            "Soluciones Amb Merida",
            "Soluciones Amb Puebla",
            "Soluciones Amb Culiacan",
            "Soluciones Amb Leon"
        ],
        "Otra": ["(OTRAS)"]
    };

    const bancoOptions = {
        "PochMP": [
            "PMP BBVA 0149069321 PESOS",
            "PMP HSBC 4016408171 PESOS",
            "PMP BANAMEX 548695 PESOS",
            "PMP BBVA 0149069747 USD",
            "PMP CITIBANK 36888806 USD"
        ],
        "PochPapel": [
            "P PAPEL HSBC PUEBLA 4032069536 PESOS",
            "P PAPEL HSBC GUADALAJARA 4018367235 PESOS",
            "P PAPEL HSBC TORQUEMADA 4032069528 PESOS",
            "P PAPEL CITIBANK 36318977 USD",
            "P PAPEL HSBC 7003749371 USD"
        ],
        "CLar": [
            "CLAR HSBC 4064788979 PESOS",
            "CLAR BBVA 0109399321 PESOS",
            "CLAR HSBC 7003749165 USD"
        ],
        "SolAmb": [
            "SOL AMB SANTANDER 65509806484 PESOS",
            "SOL AMB SANTANDER 65510148337 PESOS"
        ],
        "Otra": ["(OTRO)"]
    };

    // Update division-sucursal options
    divisionSelect.innerHTML = '';
    divisionOptions[sociedad].forEach(function(division) {
        const option = document.createElement('option');
        option.value = division;
        option.text = division;
        divisionSelect.add(option);
    });

    // Update banconuestro options
    bancoSelect.innerHTML = '';
    bancoOptions[sociedad].forEach(function(banco) {
        const option = document.createElement('option');
        option.value = banco;
        option.text = banco;
        bancoSelect.add(option);
    });
}